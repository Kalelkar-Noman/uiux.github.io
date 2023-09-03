import React, { useRef } from "react";
import a from "./resources/1.jpg";
// import b from "./resources/2.jpg";
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
            <p> Maharashtra</p>
          </div>
          <div
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1693040162619-c3bdfaf3386a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80")`,
            }}
            className="slides"
          >
            <p> Maharashtra</p>
          </div>
          <div style={{ backgroundImage: `url(${c})` }} className="slides">
            <p> Maharashtra</p>
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
