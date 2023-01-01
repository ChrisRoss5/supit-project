<template>
  <TransitionRoot :show="show" as="template">
    <Dialog class="relative z-50" @close="$emit('close')">
      <TransitionChild
        class="fixed inset-0 bg-black bg-opacity-50"
        enter="duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
      </TransitionChild>
      <TransitionChild
        class="fixed inset-0 overflow-y-auto"
        enter="duration-300 delay-150"
        enter-from="opacity-0 -translate-y-6"
        enter-to="opacity-100 transform-none"
        leave="duration-300"
        leave-from="opacity-100 transform-none"
        leave-to="opacity-0 -translate-y-6"
      >
        <div class="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            class="w-full max-w-2xl overflow-hidden rounded-xl bg-white p-6 align-middle shadow-lg shadow-neutral-700"
          >
            <slot></slot>
          </DialogPanel>
        </div>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";

defineProps<{ show?: boolean }>();
defineEmits<{ (event: "close"): void }>();
</script>
