import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          quisquam. Eaque alias, blanditiis quidem maiores illo unde ipsam!
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Featuring bootcamps can be a great way to attract new clients and offer exciting, structured fitness programs. Here are some ideas for featured bootcamps that could be highlighted on a gym’s
        </p>
        <div className="bootcamps">
          <div>
            <h4>High-Intensity Interval Training (HIIT) Bootcamp</h4>
            <p>
              
Description: A fast-paced program that combines short bursts of intense exercise with periods of rest or lower-intensity exercise.</p>
<p>Benefits: Increases cardiovascular fitness, burns calories, and builds muscle.</p>
<p>Ideal For: Individuals looking to improve overall fitness and burn fat efficiently.
            </p>
          </div>
          <div>
            <h4>Strength Training Bootcamp</h4>
<p>Description: Focuses on building strength and muscle through resistance training exercises such as weightlifting, bodyweight exercises, and resistance bands.</p>
<p>Benefits: Enhances muscle tone, improves strength, and supports joint health.</p>
<p>Ideal For: Those looking to gain muscle mass and increase strength.</p>
          </div>
          <div>
            <h4> Cardio Conditioning Bootcamp</h4>
            <p>
            Description: Emphasizes cardiovascular exercises like running, cycling, and rowing to improve heart health and endurance.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;