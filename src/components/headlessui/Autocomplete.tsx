import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import type { Course } from "@/types";

interface Props {
  courses: Course[];
  selectedCourses: Course[];
  handleSelect: (courses: Course[]) => void;
}

const Autocomplete = ({ courses, selectedCourses, handleSelect }: Props) => {
  const [query, setQuery] = useState("");
  const filteredCourses =
    query === ""
      ? courses
      : courses.filter((course) =>
          course.kolegij
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox value={selectedCourses} onChange={handleSelect} multiple>
      <div className="relative mt-1">
        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <Combobox.Input
            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 outline-none focus:ring-0"
            placeholder="Započnite unos naziva kolegija..."
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredCourses.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nema kolegija!
              </div>
            ) : (
              filteredCourses.map((course) => (
                <Combobox.Option
                  key={course.id}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-neutral-50" : ""
                    }`
                  }
                  value={course}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {course.kolegij}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500`}
                        >
                          <span className="material-icons h-5 w-5">done</span>
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default Autocomplete;
