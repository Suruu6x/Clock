import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
  const [hourAngle, setHourAngle] = useState(0);
  const [minuteAngle, setMinuteAngle] = useState(0);
  const [secondAngle, setSecondAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const day = new Date();
      const hh = day.getHours() * 30;
      const mm = day.getMinutes() * 6;
      const ss = day.getSeconds() * 6;

      setHourAngle(hh + mm / 12);
      setMinuteAngle(mm);
      setSecondAngle(ss);

      // Digital Clock
      const hours = document.getElementById("hours");
      const minutes = document.getElementById("minutes");
      const seconds = document.getElementById("seconds");
      const ampm = document.getElementById("ampm");

      const hvalue = new Date().getHours();
      const mvalue = new Date().getMinutes();
      const svalue = new Date().getSeconds();

      // Add zero before single digit number
      let h = hvalue < 10 ? "0" + hvalue : hvalue;
      const m = mvalue < 10 ? "0" + mvalue : mvalue;
      const s = svalue < 10 ? "0" + svalue : svalue;

      const am = h >= 12 ? "PM" : "AM";

      // Convert 24hr clock to 12hr clock
      let displayHour = hvalue;
      if (hvalue > 12) {
        displayHour = hvalue - 12;
      }

      // Add zero before single digit number for displayHour
      displayHour = displayHour < 10 ? "0" + displayHour : displayHour;

      hours.innerHTML = displayHour;
      minutes.innerHTML = m;
      seconds.innerHTML = s;
      ampm.innerHTML = am;
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="main">
      <div className="container">
        <div className="clock">
          <div
            className="circle"
            id="sc"
            style={{
              "--clr": "#04fc43",
              transform: `rotateZ(${secondAngle}deg)`,
            }}
          >
            <i></i>
          </div>
          <div
            className="circle circle2"
            id="mn"
            style={{
              "--clr": "#fee800",
              transform: `rotateZ(${minuteAngle}deg)`,
            }}
          >
            <i></i>
          </div>
          <div
            className="circle circle3"
            id="hr"
            style={{
              "--clr": "#ff2972",
              transform: `rotateZ(${hourAngle}deg)`,
            }}
          >
            <i></i>
          </div>

          <span style={{ "--i": 1 }}>
            <b>1</b>
          </span>
          <span style={{ "--i": 2 }}>
            <b>2</b>
          </span>
          <span style={{ "--i": 3 }}>
            <b>3</b>
          </span>
          <span style={{ "--i": 4 }}>
            <b>4</b>
          </span>
          <span style={{ "--i": 5 }}>
            <b>5</b>
          </span>
          <span style={{ "--i": 6 }}>
            <b>6</b>
          </span>
          <span style={{ "--i": 7 }}>
            <b>7</b>
          </span>
          <span style={{ "--i": 8 }}>
            <b>8</b>
          </span>
          <span style={{ "--i": 9 }}>
            <b>9</b>
          </span>
          <span style={{ "--i": 10 }}>
            <b>10</b>
          </span>
          <span style={{ "--i": 11 }}>
            <b>11</b>
          </span>
          <span style={{ "--i": 12 }}>
            <b>12</b>
          </span>
        </div>

        <div id="time">
          <div
            id="hours"
            style={{
              "--clr": "#ff2972",
            }}
          >
            00
          </div>
          <div
            id="minutes"
            style={{
              "--clr": "#fee800",
            }}
          >
            00
          </div>
          <div
            id="seconds"
            style={{
              "--clr": "#04fc43",
            }}
          >
            00
          </div>
          <div id="ampm">AM</div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
