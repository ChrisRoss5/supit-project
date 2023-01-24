import Modal from "@/components/headlessui/Modal";
import { toggleContact, useAppDispatch, useAppSelector } from "@/store";
import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";

const Contact = () => {
  const isContactOpen = useAppSelector((state) => state.isContactOpen);
  const dispatch = useAppDispatch();
  const [isContactLoaded, setIsContactLoaded] = useState(false);
  useEffect(() => setIsContactLoaded(true), []); // only to trigger the initial transition

  return (
    <Modal
      show={isContactLoaded && isContactOpen}
      handleClose={() => dispatch(toggleContact(false))}
    >
      <Dialog.Panel className="w-full max-w-2xl overflow-hidden rounded-xl bg-white p-6 align-middle shadow-lg shadow-neutral-700">
        <div className="mb-5 flex items-center border-b-2 pb-4">
          <span className="material-icons pr-2 text-4xl text-cyan-400">
            email
          </span>
          <span className="text-3xl">Kontaktirajte nas</span>
        </div>
        <form
          action="https://www.fulek.com/mvc/supit/project-contact-form"
          method="post"
          spellCheck="false"
          autoComplete="true"
        >
          <div className="mb-3">
            <label
              htmlFor="FullName"
              className="mb-2 block text-sm font-bold text-gray-900"
            >
              Puno ime:
            </label>
            <input
              type="text"
              name="FullName"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500"
              title="Ovo polje je obavezno!"
              onInvalid={(e) =>
                (e.target as HTMLInputElement).setCustomValidity(
                  "Ispunite ovo polje!"
                )
              }
              onInput={(e) =>
                (e.target as HTMLInputElement).setCustomValidity("")
              }
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="Email"
              className="mb-2 block text-sm font-bold text-gray-900"
            >
              E-mail:
            </label>
            <input
              type="email"
              name="Email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500"
              title="Ovo polje je obavezno!"
              onInvalid={(e) =>
                (e.target as HTMLInputElement).setCustomValidity(
                  "Ispunite ovo polje!"
                )
              }
              onInput={(e) =>
                (e.target as HTMLInputElement).setCustomValidity("")
              }
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="Importance"
              className="mb-2 block text-sm font-bold text-gray-900"
            >
              Važnost poruke:
            </label>
            <select
              defaultValue={"Visoka"}
              name="Importance"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500"
            >
              <option value="Visoka">Visoka</option>
              <option value="Niska">Niska</option>
            </select>
          </div>
          <div className="mb-3">
            <label
              htmlFor="Message"
              className="mb-2 block text-sm font-bold text-gray-900"
            >
              Vaša poruka:
            </label>
            <textarea
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500"
              id="message"
              name="Message"
              rows={4}
              title="Ovo polje je obavezno!"
              onInvalid={(e) =>
                (e.target as HTMLInputElement).setCustomValidity(
                  "Ispunite ovo polje!"
                )
              }
              onInput={(e) =>
                (e.target as HTMLInputElement).setCustomValidity("")
              }
              required
            ></textarea>
          </div>
          <div className="mb-5 flex items-center">
            <label
              className="text-sm font-bold text-gray-900"
              htmlFor="ReceiveNewsletter"
            >
              Želim primati obavijesti:
            </label>
            <input
              type="checkbox"
              className="ml-2 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:border-blue-500"
              id="newsletter"
              name="ReceiveNewsletter"
              value="true"
            />
          </div>
          <button
            type="submit"
            className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white"
          >
            Pošalji
          </button>
          <button
            className="rounded-md bg-red-500 px-4 py-2 text-white"
            onClick={() => dispatch(toggleContact(false))}
          >
            Odustani
          </button>
        </form>
      </Dialog.Panel>
    </Modal>
  );
};

export default Contact;
