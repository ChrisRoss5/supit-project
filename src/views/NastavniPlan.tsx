import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch, signOut } from "@/store";
import type { APICall, Course } from "@/types";
import Dropdown from "@/components/headlessui/Dropdown";

const coursesURL = "https://www.fulek.com/data/api/supit/curriculum-list/hr";
const courseURL = "https://www.fulek.com/data/api/supit/get-curriculum";

const store = useStore();
if (store.isSignedIn) getCourses();
const courses = reactive<Course[]>([]);
const selectedCourses = ref<Course[]>([]);
const fetchedCourses = reactive<Course[]>([]);
const totalTitles: (keyof Course)[] = ["ects", "sati", "predavanja", "vjezbe"];
const totalValues = computed(() => {
  return totalTitles.map((title) => {
    return fetchedCourses.reduce((a, b) => a + (b[title] as number), 0);
  });
});

// Nepotrebno jer getCourses() već sadrži putpune kolegije
watch(selectedCourses, async (newVal, oldVal) => {
  if (newVal.length > oldVal.length) {
    const newCourse = newVal.find((c) => !oldVal.includes(c))!;
    const fetchedCourse = await getFullCourse(newCourse.id);
    if (fetchedCourse) fetchedCourses.push(fetchedCourse);
  } else {
    const oldCourse = oldVal.find((c) => !newVal.includes(c))!;
    const idx = fetchedCourses.findIndex((c) => c.id == oldCourse.id);
    fetchedCourses.splice(idx, 1);
  }
});

async function getCourses() {
  const coursesResponse: APICall<Course[]> = await fetch(coursesURL, {
    headers: { Authorization: "Bearer " + store.user.token },
  })
    .then((response) => response.json())
    .catch(error);
  if (!(coursesResponse.isSuccess && coursesResponse.data)) return error();
  courses.push(...coursesResponse.data);
}

async function getFullCourse(id: number) {
  const courseResponse: APICall<Course> = await fetch(`${courseURL}/${id}`, {
    headers: { Authorization: "Bearer " + store.user.token },
  })
    .then((response) => response.json())
    .catch(error);
  if (!(courseResponse.isSuccess && courseResponse.data)) return error();
  return courseResponse.data;
}

function error() {
  alert("Greška prilikom dohvaćanja nastavnog plana! Bit ćete odjavljeni.");
  store.signOut();
}

const NastavniPlan = () => {
  return (
    <main>
      <h1 className="main-title">Nastavni plan</h1>
      <div
        v-if="!store.isSignedIn"
        className="animate-reset px-3 py-8 text-center opacity-0"
      >
        <div className="pb-8 text-red-500">
          Niste prijavljeni! Prijavite se kako biste pristupili nastavnom planu.
        </div>
        <Link
          to="/prijava"
          className="rounded-md bg-blue-500 px-4 py-2 text-white"
        >
          Prijavi se
        </Link>
      </div>
      <div
        v-else
        className="m-auto grid max-w-screen-xl gap-4 py-4 px-3 xl:grid-cols-2"
      >
        <div className="translate-x-full animate-reset opacity-0">
          <div className="pb-2 font-bold">Naziv kolegija:</div>
          <Dropdown
            courses={courses}
            selectedCourses={selectedCourses}
            v-model="selectedCourses"
          />
        </div>
        <div v-show="selectedCourses.length" className="overflow-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th>Kolegij</th>
                <th>ECTS</th>
                <th>Sati</th>
                <th>Predavanja</th>
                <th>Vježbe</th>
                <th colSpan="2">Tip</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="course in fetchedCourses" key="course.id">
                <td>{course.kolegij}</td>
                <td>{course.ects}</td>
                <td>{course.sati}</td>
                <td>{course.predavanja}</td>
                <td>{course.vjezbe}</td>
                <td>{course.tip}</td>
                <td>
                  <button
                    className="material-icons text-red-500"
                    onClick={
                      (selectedCourses = selectedCourses.filter(
                        (c) => c.id != course.id
                      ))
                    }
                  >
                    delete
                  </button>
                </td>
              </tr>
              <tr className="border-t-4 border-t-neutral-800 font-bold">
                <td className="text-right">Ukupno:</td>
                {totalValues.map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default NastavniPlan;
