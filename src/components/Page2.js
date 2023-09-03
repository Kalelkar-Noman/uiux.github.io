import React from "react";

export default function Page2() {
  return (
    <>
      <div className="page-2">
        <div className="container">
          <h3 className="text-align-center vmin3">Featured Tours</h3>
          <h1 className="text-align-center vmin6">
            Beautiful Places Around World
          </h1>
          <div className="card-container">
            <div className="cards">
              <div className="img">
                <button>3 Packages</button>
                <img
                  src="https://i.pinimg.com/236x/01/d4/d7/01d4d71022b4872125932fe69322f31b.jpg"
                  alt="paris"
                />
                <section className="text-bottom">
                  <h3>Paris</h3>
                  <p className="prices-start-text">Starting Frome $1200</p>
                </section>
              </div>
            </div>
            <div className="cards mid">
              <div className="up-img">
                <button>3 Packages</button>
                <img
                  src="https://i.pinimg.com/236x/a0/33/a6/a033a6d215cfdc41dbfd92c5ac5dc8cf.jpg"
                  alt="paris"
                />
                <section className="text-bottom-mid">
                  <h3>Paris</h3>
                  <p className="prices-start-text">Starting Frome $1200</p>
                </section>
              </div>
              <div className="down-img">
                <button>3 Packages</button>
                <img
                  src="https://i.pinimg.com/236x/9b/2a/87/9b2a87d0053961fe064b4dedcbf92d5a.jpg"
                  alt="paris"
                />
                <section className="text-bottom-mid">
                  <h3>Paris</h3>
                  <p className="prices-start-text">Starting Frome $1200</p>
                </section>
              </div>
            </div>
            <div className="cards">
              <div className="img">
                <button>3 Packages</button>
                <img
                  src="https://i.pinimg.com/236x/c8/98/b1/c898b1d70e5a3baee64b9974519b013a.jpg"
                  alt="paris"
                />
                <section className="text-bottom">
                  <h3>Paris</h3>
                  <p className="prices-start-text">Starting Frome $1200</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
