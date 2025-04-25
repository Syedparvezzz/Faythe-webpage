// components/Modal.js
import React from "react";
import ReactDOM from "react-dom";
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";
import "./Modal.css";

const Modal = ({ imgSrc, zoom, onClose, onZoomIn, onZoomOut, onNext, onPrev }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-full" onClick={(e) => e.stopPropagation()}>
        <div className="modal-toolbar">
        <button onClick={onZoomIn} title="Zoom In">
            <ZoomIn size={24} />
          </button>
          <button onClick={onZoomOut} title="Zoom Out">
            <ZoomOut size={24} />
          </button>
          <button onClick={onClose} title="Close">
            <X size={24} />
          </button>
        </div>

        <div className="modal-image-wrapper">
          <button className="modal-arrow left" onClick={onPrev}>
            <ChevronLeft size={30} />
          </button>

          <img
            src={imgSrc}
            alt="Modal Screenshot"
            className="modal-image"
            style={{ transform: `scale(${zoom})` }}
          />

          <button className="modal-arrow right" onClick={onNext}>
            <ChevronRight size={30} />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
