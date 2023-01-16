
import {Combobox,  Transition
} from "@headlessui/react";
import type { Course } from "@/types";

interface Props  {
  show: boolean;
  darkBg?: boolean;
  handleClose: () => void;
};

const props = defineProps<{ courses: Course[]; selectedCourses: Course[] }>();
const emits = defineEmits<{ (event: "update:modelValue"): Course[] }>();

const query = ref("");
const selected = ref<Course[]>([]);
const filteredCourses = computed(() =>
  query.value == ""
    ? props.courses
    : props.courses.filter((course) =>
        course.kolegij
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);

watchEffect(() => (selected.value = props.selectedCourses));


const Combobox = (props: Props) => {

  return (
  <div>
    <Combobox
      v-model="selected"
      @update:modelValue="$emit('update:modelValue', selected)"
      multiple
    >
      <div className="relative mt-1">
        <div
          className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
        >
          <ComboboxInput
            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 outline-none focus:ring-0"
            @change="query = $event.target.value"
            placeholder="Započnite unos naziva kolegija..."
            :ref="'input'"
          />
        </div>
        <TransitionRoot
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          @after-leave="query = ''"
        >
          <ComboboxOptions
            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <div
              v-if="filteredCourses.length === 0 && query !== ''"
              className="relative cursor-default select-none py-2 px-4 text-gray-700"
            >
              Nema kolegija!
            </div>

            <ComboboxOption
              v-for="person in filteredCourses"
              as="template"
              :key="person.id"
              :value="person"
              v-slot="{ selected, active }"
            >
              <ul>
                <li
                  className="relative cursor-pointer select-none py-2 pl-10 pr-4"
                  :className="{ 'bg-neutral-50': active }"
                >
                  <span
                    className="block truncate"
                    :className="{
                      'font-medium': selected,
                      'font-normal': !selected,
                    }"
                  >
                    {{ person.kolegij }}
                  </span>
                  <span
                    v-if="selected"
                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500"
                  >
                    <span className="material-icons h-5 w-5"> done </span>
                  </span>
                </li>
              </ul>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
  </div>

  )
}

export default Combobox