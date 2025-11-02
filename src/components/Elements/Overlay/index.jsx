import { createPortal } from "react-dom";

export default function Overlay() {
  return createPortal(
    <div
      className="app-overlay"
      // tanpa onClick, langsung muncul
    />,
    document.body
  );
}
