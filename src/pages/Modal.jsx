import React from "react";

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-6 rounded shadow-lg relative max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
