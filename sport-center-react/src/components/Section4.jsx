import React from 'react';

const Trainers = () => {
  return (
    <section id="trainers">
      <div className="container">
        <div className="section-title">
          <h2>OUR BEST TRAINERS</h2>
          <hr className="line" />
          <p>
            Lorem ipsum is not simply random text. It has roots in a piece of
            classical at <br />
            Hampden-Sydney College.
          </p>
        </div>
        <div className="images">
          <div className="img-container">
            <img src="images/trainer1.jpg" alt="Trainer 1" />
            <div className="outer-frame">
              <div className="side left" />
              <div className="side right" />
            </div>
            <div className="img-content">
              <h4>Olivia Bennett</h4>
              <p>Yoga Trainer</p>
            </div>
          </div>
          <div className="img-container">
            <img src="images/trainer2.jpg" alt="Trainer 2" />
            <div className="outer-frame">
              <div className="side left" />
              <div className="side right" />
            </div>
            <div className="img-content">
              <h4>Ethan Carter</h4>
              <p>Strength Trainer</p>
            </div>
          </div>
          <div className="img-container">
            <img src="images/trainer3.jpg" alt="Trainer 3" />
            <div className="outer-frame">
              <div className="side left" />
              <div className="side right" />
            </div>
            <div className="img-content">
              <h4>Jane Doe</h4>
              <p>Cardio Trainer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;