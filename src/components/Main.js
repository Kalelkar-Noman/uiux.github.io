import React, { useRef } from "react";
import a from "./resources/1.jpg";
import b from "./resources/2.jpg";
import c from "./resources/3.jpg";

export default function Main() {
  const containerRef = useRef(null);

  const handleclick = (param) => {
    const container = containerRef.current;
    const width = container.clientHeight;
    if (container) {
      if (param === 0) {
        container.scrollTop = 0;
      } else if (container.scrollTop > param * width) {
        container.scrollTop = container.scrollTop - width;
      } else {
        container.scrollTop = container.scrollTop + param * width;
      }
    }
  };

  return (
    <>
      <main>
        <div className="page-1">
          <div ref={containerRef} className="container">
            <div style={{ backgroundImage: `url(${a})` }} className="slides">
              hello
            </div>
            <div
              style={{ backgroundImage: `url(${b})` }}
              className="slides"
            ></div>
            <div
              style={{ backgroundImage: `url(${c})` }}
              className="slides"
            ></div>
            <aside>
              <button
                onClick={() => {
                  handleclick(0);
                }}
              ></button>
              <button
                onClick={() => {
                  handleclick(1);
                }}
              ></button>
              <button
                onClick={() => {
                  handleclick(2);
                }}
              ></button>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
