import React from "react";
import save from "./resources/save.png";
import book from "./resources/book.png";
import guide from "./resources/guide.png";
import world from "./resources/world.jpg";

export default function Page5() {
  return (
    <>
      <div className="page-5">
        <div className="page5-container">
          <div className="page5-headings">
            <h3 className="text-align-center">Brilliant Reasons</h3>
            <h2 className="text-align-center vmin6">Why Choose Us</h2>
          </div>
          <div className="choices-container">
            <section>
              <div className="icon">
                <img src={save} alt="savings" />
              </div>
              <div className="p5-text-area">
                <h3>Competitive Pricing</h3>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </section>
            <section>
              <div className="icon">
                <img src={world} alt="world coverage" />
              </div>
              <div className="p5-text-area">
                <h3>Worldwide Coverage</h3>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </section>
            <section>
              <div className="icon">
                <img src={book} alt="fast booking" />
              </div>
              <div className="p5-text-area">
                <h3>Fast Booking</h3>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </section>
            <section>
              <div className="icon">
                <img src={guide} alt="guided" />
              </div>
              <div className="p5-text-area">
                <h3>Guided Tours</h3>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
