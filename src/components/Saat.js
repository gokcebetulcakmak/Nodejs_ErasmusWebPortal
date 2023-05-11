import React, { useState, useEffect } from "react";

function Clock(weather) {
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    const clock = setInterval(() => {
      let date = new Date();
      let hour = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();
      let dayNum = date.getDate();
      let month = date.getMonth()+1;
      let dateNow = date.getFullYear();

      const weekday = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
      ];

      hour = hour < 10 ? "0" + hour : hour;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;

      setTime(hour + " : " + min + " : " + sec);
      setDay(
        dayNum + "." + month + "." + dateNow + " " + weekday[date.getDay()]
      );
    }, 1000);

    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <div className="clockBox ">
      <div className="shape1"></div>
      <div className="shape2"></div>
      <div className="shape3"></div>
      <div className="shape4"></div>
      <div className="clock">
        <div id="day">{day}</div>
        <div id="time">{time}</div>
      </div>
    </div>
  );
}

export default Clock;
