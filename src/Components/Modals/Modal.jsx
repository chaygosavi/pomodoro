import { AnimatePresence } from "framer-motion";
import React from "react";
import Backdrop from "./Backdrop";
import ModalContainer from "./ModalContainer";

function Modal({ onClose, open }) {
  return (
    <>
      <AnimatePresence>
      {open && (
        <>
          <Backdrop />
          <ModalContainer onClose={onClose} />
        </>
      )}
      </AnimatePresence>
    </>
  );
}

export default Modal;
