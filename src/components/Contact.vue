<template>
  <Modal :show="store.isContactOpen" @close="store.isContactOpen = false">
    <DialogPanel
      class="w-full max-w-2xl overflow-hidden rounded-xl bg-white p-6 align-middle shadow-lg shadow-neutral-700"
    >
      <div class="mb-5 flex items-center border-b-2 pb-4">
        <span class="material-icons pr-2 text-4xl text-cyan-400"> email </span>
        <span class="text-3xl">Kontaktirajte nas</span>
      </div>
      <form
        action="https://www.fulek.com/mvc/supit/project-contact-form"
        method="post"
        spellcheck="false"
        autocomplete="true"
      >
        <div class="mb-3">
          <label
            for="FullName"
            class="mb-2 block text-sm font-bold text-gray-900"
            >Puno ime:</label
          >
          <input
            type="text"
            name="FullName"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500"
            title="Ovo polje je obavezno!"
            oninvalid="this.setCustomValidity('Ispunite ovo polje!')"
            oninput="this.setCustomValidity('')"
            required
          />
        </div>
        <div class="mb-3">
          <label for="Email" class="mb-2 block text-sm font-bold text-gray-900"
            >E-mail:</label
          >
          <input
            type="email"
            name="Email"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500"
            title="Ovo polje je obavezno!"
            oninvalid="this.setCustomValidity('Neispravan email!')"
            oninput="this.setCustomValidity('')"
            required
          />
        </div>
        <div class="mb-3">
          <label
            for="Importance"
            class="mb-2 block text-sm font-bold text-gray-900"
            >Važnost poruke:</label
          >
          <select
            name="Importance"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500"
          >
            <option value="Visoka" selected>Visoka</option>
            <option value="Niska">Niska</option>
          </select>
        </div>
        <div class="mb-3">
          <label
            for="Message"
            class="mb-2 block text-sm font-bold text-gray-900"
            >Vaša poruka:</label
          >
          <textarea
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500"
            id="message"
            name="Message"
            rows="4"
            title="Ovo polje je obavezno!"
            oninvalid="this.setCustomValidity('Ispunite ovo polje!')"
            oninput="this.setCustomValidity('')"
            required
          ></textarea>
        </div>
        <div class="mb-5 flex items-center">
          <label
            class="text-sm font-bold text-gray-900"
            for="ReceiveNewsletter"
          >
            Želim primati obavijesti:
          </label>
          <input
            type="checkbox"
            class="ml-2 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:border-blue-500"
            id="newsletter"
            name="ReceiveNewsletter"
            value="true"
          />
        </div>
        <button
          type="submit"
          class="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white"
        >
          Pošalji
        </button>
        <button
          class="rounded-md bg-red-500 px-4 py-2 text-white"
          @click="store.isContactOpen = false"
        >
          Odustani
        </button>
      </form>
    </DialogPanel>
  </Modal>
</template>

<script setup lang="ts">
import Modal from "@/components/headlessui/Modal.vue";
import { useStore } from "@/store";
import { DialogPanel } from "@headlessui/vue";

const store = useStore();
</script>
