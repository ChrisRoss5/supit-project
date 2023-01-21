<script lang="ts">
  import type { Course } from "@/types";
  import { onDestroy, onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let courses: Course[];
  export let selectedCourses: Course[];
  export let onCourseSelected: (id: number) => void;

  const listener = (e: MouseEvent) =>
    (isOpen = !!(e.target as HTMLElement).closest(".autocomplete"));
  onMount(() => document.addEventListener("click", listener));
  onDestroy(() => document.removeEventListener("click", listener));

  let isOpen = false;
  let query = "";
  $: filteredCourses = (
    query == ""
      ? courses
      : courses.filter((course) =>
          course.kolegij
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        )
  ).map((course) => ({
    ...course,
    selected: !!selectedCourses.find((c) => c.id == course.id),
  }));
</script>

<div class="autocomplete relative mt-1">
  <div
    class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
  >
    <input
      class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 outline-none focus:ring-0"
      bind:value={query}
      placeholder="Započnite unos naziva kolegija..."
    />
  </div>

  {#if isOpen}
    <div
      class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      out:fade={{ duration: 100 }}
    >
      {#if !filteredCourses.length && query}
        <div
          class="relative cursor-default select-none py-2 px-4 text-gray-700"
        >
          Nema kolegija!
        </div>
      {/if}

      {#each filteredCourses as course}
        <div
          class="relative cursor-pointer select-none py-2 pl-10 pr-4 hover:bg-neutral-50"
          on:click={() => onCourseSelected(course.id)}
          aria-hidden="true"
        >
          <span
            class="block truncate {course.selected
              ? 'font-medium'
              : 'font-normal'}"
          >
            {course.kolegij}
          </span>
          {#if course.selected}
            <span
              class="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500"
            >
              <span class="material-icons h-5 w-5"> done </span>
            </span>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</div>
