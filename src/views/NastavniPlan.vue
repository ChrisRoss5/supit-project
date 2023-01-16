<template>
  <main>
    <h1 class="main-title">Nastavni plan</h1>
    <div
      v-if="!store.isSignedIn"
      class="animate-reset px-3 py-8 text-center opacity-0"
    >
      <div class="pb-8 text-red-500">
        Niste prijavljeni! Prijavite se kako biste pristupili nastavnom planu.
      </div>
      <RouterLink
        to="/prijava"
        class="rounded-md bg-blue-500 px-4 py-2 text-white"
        >Prijavi se</RouterLink
      >
    </div>
    <div
      v-else
      class="m-auto grid max-w-screen-xl gap-4 py-4 px-3 xl:grid-cols-2"
    >
      <div class="translate-x-full animate-reset opacity-0">
        <div class="pb-2 font-bold">Naziv kolegija:</div>
        <Autocomplete
          :courses="courses"
          :selectedCourses="selectedCourses"
          v-model="selectedCourses"
        />
      </div>
      <div v-show="selectedCourses.length" class="overflow-auto">
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
            <tr v-for="course in fetchedCourses" :key="course.id">
              <td>{{ course.kolegij }}</td>
              <td>{{ course.ects }}</td>
              <td>{{ course.sati }}</td>
              <td>{{ course.predavanja }}</td>
              <td>{{ course.vjezbe }}</td>
              <td>{{ course.tip }}</td>
              <td>
                <button
                  class="material-icons text-red-500"
                  @click="
                    selectedCourses = selectedCourses.filter(
                      (c) => c.id != course.id
                    )
                  "
                >
                  delete
                </button>
              </td>
            </tr>
            <tr class="border-t-4 border-t-neutral-800 font-bold">
              <td class="text-right">Ukupno:</td>
              <td v-for="(value, i) in totalValues" :key="i">{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Autocomplete from "@/components/headlessui/Autocomplete.vue";
import { useStore } from "@/store";
import type { APICall, Course } from "@/types";
import { computed, reactive, ref, watch } from "vue";

const store = useStore();
const coursesURL = "https://www.fulek.com/data/api/supit/curriculum-list/hr";
const courseURL = "https://www.fulek.com/data/api/supit/get-curriculum";

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
</script>

<style scoped>
th,
td {
  padding: 0.3rem 0.5rem;
  border-top: 1px solid #ddd;
}
tbody > tr:nth-child(odd):not(:last-child) {
  background: #eee;
}
</style>
