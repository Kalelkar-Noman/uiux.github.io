import React from "react";

export default function Page4() {
  let box = document.getElementById("page4-container");
  const prev = () => {
    if (box == null) {
      box = document.getElementById("page4-container");
    }
    let boxwidth = box.clientWidth;
    box.scrollLeft = box.scrollLeft - boxwidth;
  };
  const next = () => {
    if (box == null) {
      box = document.getElementById("page4-container");
    }
    let boxwidth = box.clientWidth;
    box.scrollLeft = box.scrollLeft + boxwidth;
  };

  return (
    <>
      <div className="page-4">
        <div>
          <h3 className="text-align-center vmin3">Top Selling</h3>
          <h1 className="text-align-center vmin6">Top Destinations</h1>
        </div>
        <div id="page4-container" className="page4-container">
          <button className="left-arrow" onClick={prev}>
            &larr;
          </button>
          <button className="right-arrow" onClick={next}>
            &rarr;
          </button>
          <div className="center-destination">
            <div className="destinations">
              <div className="dest-img">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1693116379354-46cc79d728e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="places"
                />
              </div>
              <div className="dest-text">
                <div className="head-line">
                  <p>Rome,Italy</p> <p>$5,42K</p>
                </div>
                <div className="head-line">
                  <p>12 Days Trip</p>
                </div>
              </div>
            </div>
          </div>
          <div className="center-destination">
            <div className="destinations">
              <div className="dest-img">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1694190941111-90065ded19d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="places"
                />
              </div>
              <div className="dest-text">
                <div className="head-line">
                  <p>Rome,Italy</p> <p>$5,42K</p>
                </div>
                <div className="head-line">
                  <p>12 Days Trip</p>
                </div>
              </div>
            </div>
          </div>
          <div className="center-destination">
            <div className="destinations">
              <div className="dest-img">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1694259841577-caa97cde9518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1392&q=80"
                  alt="places"
                />
              </div>
              <div className="dest-text">
                <div className="head-line">
                  <p>Rome,Italy</p> <p>$5,42K</p>
                </div>
                <div className="head-line">
                  <p>12 Days Trip</p>
                </div>
              </div>
            </div>
          </div>
          <div className="center-destination">
            <div className="destinations">
              <div className="dest-img">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1693116379354-46cc79d728e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="places"
                />
              </div>
              <div className="dest-text">
                <div className="head-line">
                  <p>Rome,Italy</p> <p>$5,42K</p>
                </div>
                <div className="head-line">
                  <p>12 Days Trip</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
