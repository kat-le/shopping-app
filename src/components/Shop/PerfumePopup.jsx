import { useEffect, useId, useRef } from "react";
import "../../styles/PerfumePopup.css";

function PerfumePopup({ perfume, onClose }) {
  const dialogRef = useRef(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !perfume) return undefined;

    dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
    };
  }, [perfume]);

  if (!perfume) return null;

  const description = perfume.description
    ?.split("Read about this perfume in other languages:")[0]
    .trimEnd();

  return (
    <dialog
      ref={dialogRef}
      className="perfume-popup"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onClose={onClose}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          event.currentTarget.close();
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
    >
      <div className="perfume-popup__content">
        <button
          className="perfume-popup__close"
          type="button"
          aria-label="Close perfume details"
          onClick={() => dialogRef.current?.close()}
        >
          ×
        </button>
        <div className="perfume-popup__image-wrap">
          <img src={perfume.image_url} alt={perfume.name} />
        </div>
        <div className="perfume-popup__details">
          <p className="perfume-popup__brand">{perfume.brand}</p>
          <h2 id={titleId}>{perfume.name}</h2>
          <p id={descriptionId} className="perfume-popup__description">
            {description || "No description is available for this fragrance."}
          </p>
          <button className="perfume-popup__add" type="button">
            Add to cart
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default PerfumePopup;
