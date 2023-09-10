import React from "react";
import loc from "./resources/loc.jpeg";
import bag from "./resources/bag.jpeg";
import pay from "./resources/pay.jpeg";

export default function Page3() {
  return (
    <>
      <div className="page-3">
        <div className="page3-container">
          <section>
            <div className="left">
              <div className="img-travel">
                <img
                  src="https://img.freepik.com/free-vector/landscape-man-canoe-river_24877-76260.jpg?w=740&t=st=1693737239~exp=1693737839~hmac=20cddba6390ef041f69d382fb4937012cf1fac3402ae85cb26361d484e7a1888"
                  alt="travel"
                />
              </div>
            </div>
            <div className="right">
              <h1 className="vmin6">
                Explore All Corners Of The World With Us
              </h1>
              <h2>In 3 Easy Steps</h2>
              <div className="point-container">
                <div className="points">
                  <button className="points-image">
                    <img src={loc} alt="icon" />
                  </button>
                  <div>
                    <h3>Choose Destination</h3>
                  </div>
                </div>
                <div className="points">
                  <button className="points-image">
                    <img src={pay} alt="icon" />
                  </button>
                  <div>
                    <h3>Make Payment</h3>
                  </div>
                </div>
                <div className="points">
                  <button className="points-image">
                    <img src={bag} alt="icon" />
                  </button>
                  <div>
                    <h3>Reach Airports on Selected Date</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
