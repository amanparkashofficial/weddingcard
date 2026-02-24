import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function PageSlider({ children }) {
  const [page, setPage] = useState(0);
  const totalPages = children.length;

  const nextPage = () => setPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setPage((prev) => (prev - 1 + totalPages) % totalPages);

  const handlers = useSwipeable({
    onSwipedLeft: nextPage,
    onSwipedRight: prevPage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // allows drag with mouse too
  });

  return (
    <div
      {...handlers}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          width: `${totalPages * 100}vw`,
          height: "100%",
          transform: `translateX(-${page * 100}vw)`,
          transition: "transform 0.6s ease-in-out",
        }}
      >
        {children.map((child, index) => (
          <div key={index} style={{ width: "100vw", height: "100%" }}>
            {child}
          </div>
        ))}
      </div>

      {/* Optional navigation arrows */}
      <button
        onClick={prevPage}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.3)",
          color: "#fff",
          border: "none",
          padding: "10px 15px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        ‹
      </button>
      <button
        onClick={nextPage}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.3)",
          color: "#fff",
          border: "none",
          padding: "10px 15px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        ›
      </button>
    </div>
  );
}