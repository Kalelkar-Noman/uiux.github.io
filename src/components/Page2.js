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
           
                <img src="https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="location" />
                <section className="text-bottom">
                  <h3>Paris</h3>
                  <p className="prices-start-text">Starting From $1200</p>
                </section>
              </div>
            </div>
            <div className="cards mid">
              <div className="up-img">
                <div>
                  <button>3 Packages</button>
            
                  <img src="https://images.unsplash.com/photo-1542397284385-6010376c5337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="location" />
                  <section className="text-bottom-mid">
                    <h3>Paris</h3>
                    <p className="prices-start-text">Starting From $1200</p>
                  </section>
                </div>
              </div>
              <div className="down-img">
                <div>
                  <button>3 Packages</button>
               
                  <img src="https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="location" />
                  <section className="text-bottom-mid">
                    <h3>Paris</h3>
                    <p className="prices-start-text">Starting From $1200</p>
                  </section>
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="img">
                <button>3 Packages</button>
           
                <img src="https://images.unsplash.com/photo-1502514276381-1ea51dfe201c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80" alt="location" />
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
