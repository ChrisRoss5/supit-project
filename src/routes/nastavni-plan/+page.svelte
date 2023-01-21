<script lang="ts">
  import Autocomplete from "@/components/other/Autocomplete.svelte";
  import { user, isSignedIn } from "@/stores";
  import type { APICall, Course } from "@/types";

  const coursesURL = "https://www.fulek.com/data/api/supit/curriculum-list/hr";
  const courseURL = "https://www.fulek.com/data/api/supit/get-curriculum";

  if ($isSignedIn) getCourses();

  // {"id":1,"kolegij":"Autentikacijski sustavi i baze podataka","ects":4,"sati":45,"predavanja":1,"vjezbe":2,"tip":"Obavezni","semestar":3},{"id":2,"kolegij":"Engleski jezik","ects":4,"sati":45,"predavanja":0,"vjezbe":3,"tip":"Obavezni","semestar":1},{"id":3,"kolegij":"Građa računala","ects":5,"sati":60,"predavanja":2,"vjezbe":2,"tip":"Obavezni","semestar":2},{"id":4,"kolegij":"ICT alati u projektnom menadžmentu","ects":5,"sati":60,"predavanja":2,"vjezbe":2,"tip":"Izborni","semestar":6},{"id":5,"kolegij":"Interoperabilnost informacijskih sustava","ects":5,"sati":60,"predavanja":2,"vjezbe":2,"tip":"Obavezni","semestar":6},{"id":6,"kolegij":"Izrada aplikacija za mobilne uredžaje","ects":6,"sati":60,"predavanja":2,"vjezbe":2,"tip":"Izborni","semestar":5},{"id":7,"kolegij":"Izrada završnog projekta/Praksa","ects":10,"sati":0,"predavanja":0,"vjezbe":0,"tip":"Obavezni","semestar":6},{"id":8,"kolegij":"Java Web Programiranje","ects":5,"sati":60,"predavanja":2,"vjezbe":2,"tip":"Izborni","semestar":6},{"id":9,"kolegij":"Kineziološka kultura","ects":0,"sati":30,"predavanja":0,"vjezbe":2,"tip":"Obavezni","semestar":1},{"id":10,"kolegij":"Kineziološka kultura 2","ects":0,"sati":30,"predavanja":0,"vjezbe":2,"tip":"Obavezni","semestar":2},{"id":11,"kolegij":"Matematika 1","ects":6,"sati":60,"predavanja":2,"vjezbe":2,"tip":"Obavezni","semestar":1},{"id":12,"kolegij":"Matematika 2","ects":5,"sati":60,"predavanja":2,"vjezbe":2,"tip":"Obavezni","semestar":2},{"id":13,"kolegij":"Objektno orijentirano programiranje","ects":6,"sati":75,"predavanja":2,"vjezbe":3,"tip":"Obavezni","semestar":3},{"id":14,"kolegij":"Objektno orijentirano programiranje - praktikum u .NET okolini","ects":5,"sati":60,"predavanja":1,"vjezbe":3,"tip":"Obavezni","semestar":4},{"id":15,"kolegij":"Oblikovanje baza podataka","ects":5,"sati":60,"predavanja":2,"vjezbe":2,"tip":"Obavezni","semestar":3},{"id":16,"kolegij":"Oblikovanje i izrada cjelovitog aplikativnog rješenja","ects":6,"sati":60,"predavanja":1,"vjezbe":3,"tip":"Obavezni","semestar":6},{"id":17,"kolegij":"Operacijski sustavi","ects":5,"sati":60,"predavanja":2,"vjezbe":2,"tip":"Obavezni","semestar":2},{"id":18,"kolegij":"Organizacija i managemenet","ects":4,"sati":45,"predavanja":2,"vjezbe":1,"tip":"Obavezni","semestar":5},{"id":19,"kolegij":"Osnove digitalne elektronike","ects":5,"sati":60,"predavanja":2,"vjezbe":2,"tip":"Obavezni","semestar":1},{"id":20,"kolegij":"Osnove poslovne ekonomije","ects":4,"sati":45,"predavanja":2,"vjezbe":1,"tip":"Obavezni","semestar":2},{"id":21,"kolegij":"Osnove poslovnog komuniciranja","ects":5,"sati":60,"predavanja":2,"vjezbe":2,"tip":"Obavezni","semestar":3},{"id":22,"kolegij":"Poslovni informacijski sustavi","ects":4,"sati":45,"predavanja":2,"vjezbe":1,"tip":"Obavezni","semestar":6},{"id":23,"kolegij":"Pristup podacima iz programskog koda","ects":5,"sati":60,"predavanja":0,"vjezbe":4,"tip":"Obavezni","semestar":5},{"id":24,"kolegij":"Programiranje","ects":6,"sati":75,"predavanja":2,"vjezbe":3,"tip":"Obavezni","semestar":1},{"id":25,"kolegij":"Programiranje u Javi 1","ects":6,"sati":75,"predavanja":2,"vjezbe":3,"tip":"Obavezni","semestar":4},{"id":26,"kolegij":"Programiranje u Javi 2","ects":6,"sati":60,"predavanja":2,"vjezbe":2,"tip":"Izborni","semestar":5},{"id":27,"kolegij":"Programsko inženjerstvo","ects":5,"sati":60,"predavanja":2,"vjezbe":2,"tip":"Obavezni","semestar":5},{"id":28,"kolegij":"Projektni menadžment","ects":4,"sati":45,"predavanja":2,"vjezbe":1,"tip":"Obavezni","semestar":4},{"id":29,"kolegij":"Projektni razvoj aplikacija","ects":4,"sati":45,"predavanja":2,"vjezbe":1,"tip":"Obavezni","semestar":4},{"id":30,"kolegij":"Računalna podrška uredskom poslovanju","ects":4,"sati":45,"predavanja":1,"vjezbe":2,"tip":"Obavezni","semestar":1},{"id":31,"kolegij":"Razvoj web aplikacija","ects":6,"sati":60,"predavanja":2,"vjezbe":2,"tip":"Obavezni","semestar":4},{"id":32,"kolegij":"Sigurnost informacijskih sustava 1","ects":5,"sati":60,"predavanja":2,"vjezbe":2,"tip":"Obavezni","semestar":4},{"id":33,"kolegij":"Standardi u primjeni internetske tehnologije","ects":5,"sati":60,"predavanja":2,"vjezbe":2,"tip":"Obavezni","semestar":3},{"id":34,"kolegij":"Strukture podataka i algoritmi","ects":6,"sati":60,"predavanja":2,"vjezbe":2,"tip":"Obavezni","semestar":2},{"id":35,"kolegij":"Sustavi potpore odlučivanju","ects":6,"sati":60,"predavanja":2,"vjezbe":2,"tip":"Izborni","semestar":5},{"id":36,"kolegij":"Upravljanje informacijskim sustavima","ects":4,"sati":45,"predavanja":2,"vjezbe":1,"tip":"Obavezni","semestar":5},{"id":37,"kolegij":"Uvod u baze podataka","ects":5,"sati":60,"predavanja":2,"vjezbe":2,"tip":"Obavezni","semestar":2},{"id":38,"kolegij":"Uvod u računalne mreže","ects":5,"sati":60,"predavanja":2,"vjezbe":2,"tip":"Obavezni","semestar":1},{"id":39,"kolegij":"Vjerojatnost i statistika","ects":5,"sati":60,"predavanja":2,"vjezbe":2,"tip":"Obavezni","semestar":3}
  let courses: Course[] = [];
  let fetchedCourses: Course[] = [];
  const totalTitles: (keyof Course)[] = [
    "ects",
    "sati",
    "predavanja",
    "vjezbe",
  ];
  $: totalValues = totalTitles.map((title) => {
    return fetchedCourses.reduce((a, b) => a + (b[title] as number), 0);
  });

  async function onCourseSelected(id: number) {
    if (fetchedCourses.find((c) => c.id == id)) onCourseUnselected(id);
    else {
      const fetchedCourse = await getFullCourse(id);
      if (fetchedCourse) fetchedCourses = [...fetchedCourses, fetchedCourse];
      // fetchedCourses = [...fetchedCourses, courses.find((c) => c.id == id)!];
    }
  }

  function onCourseUnselected(id: number) {
    fetchedCourses = fetchedCourses.filter((c) => c.id != id);
  }

  async function getCourses() {
    const coursesResponse: APICall<Course[]> = await fetch(coursesURL, {
      headers: { Authorization: "Bearer " + $user.token },
    })
      .then((response) => response.json())
      .catch(error);
    if (!(coursesResponse.isSuccess && coursesResponse.data)) return error();
    courses = coursesResponse.data;
  }

  async function getFullCourse(id: number) {
    const courseResponse: APICall<Course> = await fetch(`${courseURL}/${id}`, {
      headers: { Authorization: "Bearer " + $user.token },
    })
      .then((response) => response.json())
      .catch(error);
    if (!(courseResponse.isSuccess && courseResponse.data)) return error();
    return courseResponse.data;
  }

  function error() {
    alert("Greška prilikom dohvaćanja nastavnog plana! Bit ćete odjavljeni.");
    user.signOut();
  }
</script>

<main>
  <h1 class="main-title">Nastavni plan</h1>
  {#if !$isSignedIn}
    <div class="animate-reset px-3 py-8 text-center opacity-0">
      <div class="pb-8 text-red-500">
        Niste prijavljeni! Prijavite se kako biste pristupili nastavnom planu.
      </div>
      <a href="/prijava" class="rounded-md bg-blue-500 px-4 py-2 text-white"
        >Prijavi se</a
      >
    </div>
  {:else}
    <div class="m-auto grid max-w-screen-xl gap-4 py-4 px-3 xl:grid-cols-2">
      <div class="translate-x-full animate-reset opacity-0">
        <div class="pb-2 font-bold">Naziv kolegija:</div>
        <Autocomplete
          {courses}
          selectedCourses={fetchedCourses}
          {onCourseSelected}
        />
      </div>
      <div hidden={!fetchedCourses.length} class="overflow-auto">
        <table class="w-full">
          <thead>
            <tr>
              <th>Kolegij</th>
              <th>ECTS</th>
              <th>Sati</th>
              <th>Predavanja</th>
              <th>Vježbe</th>
              <th colspan="2">Tip</th>
            </tr>
          </thead>
          <tbody>
            {#each fetchedCourses as course (course.id)}
              <tr>
                <td>{course.kolegij}</td>
                <td>{course.ects}</td>
                <td>{course.sati}</td>
                <td>{course.predavanja}</td>
                <td>{course.vjezbe}</td>
                <td>{course.tip}</td>
                <td>
                  <button
                    class="material-icons text-red-500"
                    on:click={() => onCourseUnselected(course.id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            {/each}
            <tr class="border-t-4 border-t-neutral-800 font-bold">
              <td class="text-right">Ukupno:</td>
              {#each totalValues as value, i (i)}
                <td>{value}</td>
              {/each}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  {/if}
</main>
