import React from "react";
import image5 from '../assests/img5.jpg'

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          quisquam. Eaque alias, blanditiis quidem maiores illo unde ipsam!
        </p>
        <img src={image5 } alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          impedit quasi sunt amet rerum accusamus odio eveniet unde?
        </p>
        <div className="bootcamps">
          <div>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe repellendus nemo sit facere ipsam!
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe repellendus nemo sit facere ipsam!
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe repellendus nemo sit facere ipsam!
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe repellendus nemo sit facere ipsam!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;