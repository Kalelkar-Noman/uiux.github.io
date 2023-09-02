import React, { useRef } from "react";
import a from "./resources/1.jpg";
import b from "./resources/2.jpg";
import c from "./resources/3.jpg";
export default function Page1() {
  const containerRef = useRef(null);
  const handleClick = (param) => {
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
      <div className="page-1">
        <div ref={containerRef} className="container">
          <div style={{ backgroundImage: `url(${a})` }} className="slides">
            <p> maharashtra</p>
          </div>
          <div style={{ backgroundImage: `url(${b})` }} className="slides">
            <p> maharashtra</p>
          </div>
          <div style={{ backgroundImage: `url(${c})` }} className="slides">
            <p> maharashtra</p>
          </div>
          <aside>
            <button
              className="image-btn"
              onClick={() => {
                handleClick(0);
              }}
            ></button>
            <button
              className="image-btn"
              onClick={() => {
                handleClick(1);
              }}
            ></button>
            <button
              className="image-btn"
              onClick={() => {
                handleClick(2);
              }}
            ></button>
          </aside>
        </div>
      </div>
    </>
  );
}
