import React, { useRef, useState } from "react";
import a from "./resources/1.jpg";
import c from "./resources/3.jpg";

export default function Page1() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (param) => {
    const container = containerRef.current;
    const width = container.clientHeight;
    setActiveIndex(param);
    container.scrollTop = param * width;
  };

  return (
    <>
      <div className="page-1">
        <div ref={containerRef} id="container" className="container">
          <div style={{ backgroundImage: `url(${a})` }} className="slides">
            <p> it's A Big World <br> Out There World <br> Explore</p>
          </div>
          <div
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1693040162619-c3bdfaf3386a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80")`,
            }}
            className="slides"
          >
           <p>it's A Big World <br> Out There,Go <br> Explore</p>
          </div>
          <div style={{ backgroundImage: `url(${c})` }} className="slides">
            <p> Maharashtra</p>
          </div>
          <aside>
            <div
              style={{ opacity: activeIndex === 0 ? 1 : 0.5 }}
              onClick={() => {
                handleClick(0);
              }}
            ></div>
            <div
              style={{ opacity: activeIndex === 1 ? 1 : 0.5 }}
              onClick={() => {
                handleClick(1);
              }}
            ></div>
            <div
              style={{ opacity: activeIndex === 2 ? 1 : 0.5 }}
              onClick={() => {
                handleClick(2);
              }}
            ></div>
          </aside>
        </div>
      </div>
    </>
  );
}
