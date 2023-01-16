import Autocomplete from "@/components/headlessui/Autocomplete";
import { signOut, useAppDispatch, useAppSelector } from "@/store";
import type { APICall, Course } from "@/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const coursesURL = "https://www.fulek.com/data/api/supit/curriculum-list/hr";
const courseURL = "https://www.fulek.com/data/api/supit/get-curriculum";

const NastavniPlan = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.user.token);
  const isSignedIn = useAppSelector((state) => state.isSignedIn);
  useEffect(() => {
    if (isSignedIn) getCourses();
  }, []);

  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
  const [fetchedCourses, setFetchedCourses] = useState<Course[]>([]);
  const totalTitles: (keyof Course)[] = [
    "ects",
    "sati",
    "predavanja",
    "vjezbe",
  ];
  const totalValues = totalTitles.map((title) =>
    fetchedCourses.reduce((a, b) => a + (b[title] as number), 0)
  );

  // Nepotrebno jer getCourses() već sadrži putpune kolegije
  async function handleSelect(courses: Course[]) {
    const [newVal, oldVal] = [courses, selectedCourses];
    if (newVal.length > oldVal.length) {
      const newCourse = newVal.find((c) => !oldVal.includes(c))!;
      const fetchedCourse = await getFullCourse(newCourse.id);
      if (fetchedCourse) setFetchedCourses([...fetchedCourses, fetchedCourse]);
    } else {
      const oldCourse = oldVal.find((c) => !newVal.includes(c))!;
      setFetchedCourses(fetchedCourses.filter((c) => c.id != oldCourse.id));
    }
    setSelectedCourses(courses);
  }

  async function getCourses() {
    const coursesResponse: APICall<Course[]> = await fetch(coursesURL, {
      headers: { Authorization: "Bearer " + token },
    })
      .then((response) => response.json())
      .catch(error);
    if (!(coursesResponse.isSuccess && coursesResponse.data)) return error();
    setCourses(coursesResponse.data);
  }

  async function getFullCourse(id: number) {
    const courseResponse: APICall<Course> = await fetch(`${courseURL}/${id}`, {
      headers: { Authorization: "Bearer " + token },
    })
      .then((response) => response.json())
      .catch(error);
    if (!(courseResponse.isSuccess && courseResponse.data)) return error();
    return courseResponse.data;
  }

  function error() {
    alert("Greška prilikom dohvaćanja nastavnog plana! Bit ćete odjavljeni.");
    dispatch(signOut());
  }

  return (
    <main>
      <h1 className="main-title">Nastavni plan</h1>
      {!isSignedIn ? (
        <div className="animate-reset px-3 py-8 text-center opacity-0">
          <div className="pb-8 text-red-500">
            Niste prijavljeni! Prijavite se kako biste pristupili nastavnom
            planu.
          </div>
          <Link
            to="/prijava"
            className="rounded-md bg-blue-500 px-4 py-2 text-white"
          >
            Prijavi se
          </Link>
        </div>
      ) : (
        <div className="m-auto grid max-w-screen-xl gap-4 py-4 px-3 xl:grid-cols-2">
          <div className="translate-x-full animate-reset opacity-0">
            <div className="pb-2 font-bold">Naziv kolegija:</div>
            <Autocomplete
              courses={courses}
              selectedCourses={selectedCourses}
              handleSelect={handleSelect}
            />
          </div>
          {!!selectedCourses.length && (
            <div className="overflow-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Kolegij</th>
                    <th>ECTS</th>
                    <th>Sati</th>
                    <th>Predavanja</th>
                    <th>Vježbe</th>
                    <th colSpan={2}>Tip</th>
                  </tr>
                </thead>
                <tbody>
                  {fetchedCourses.map((course) => (
                    <tr key={course.id}>
                      <td>{course.kolegij}</td>
                      <td>{course.ects}</td>
                      <td>{course.sati}</td>
                      <td>{course.predavanja}</td>
                      <td>{course.vjezbe}</td>
                      <td>{course.tip}</td>
                      <td>
                        <button
                          className="material-icons text-red-500"
                          onClick={() =>
                            handleSelect(
                              selectedCourses.filter((c) => c.id != course.id)
                            )
                          }
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t-4 border-t-neutral-800 font-bold">
                    <td className="text-right">Ukupno:</td>
                    {totalValues.map((value, i) => (
                      <td key={i}>{value}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default NastavniPlan;
