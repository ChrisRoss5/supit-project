import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

type Props = React.PropsWithChildren<{
  show: boolean;
  darkBg?: boolean;
  handleClose: () => void;
}>;

const Modal = ({ show, darkBg, handleClose, children }: Props) => {
  return (
    <Transition show={show} as={Fragment}>
      <Dialog className="relative z-50" onClose={handleClose}>
        <Transition.Child
          className={`${
            darkBg ? `bg-opacity-90` : "bg-opacity-50"
          } fixed inset-0 bg-black`}
          enter="duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        ></Transition.Child>
        <Transition.Child
          className="fixed inset-0 overflow-y-auto overflow-x-hidden"
          enter="duration-300 delay-150"
          enterFrom="opacity-0 -translate-y-6"
          enterTo="opacity-100 transform-none"
          leave="duration-300"
          leaveFrom="opacity-100 transform-none"
          leaveTo="opacity-0 -translate-y-6"
        >
          <div className="flex min-h-full items-center justify-center">
            {children}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Modal;
