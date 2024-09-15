"use client"
import React, { useEffect, useState } from "react";
import dayNames from "~/_utils/days"

// shamelessly taken from Alex Turpin's answer on https://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366
function getDay() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0, 0, 0, 0, 0);
  const diff = now.getTime() - start.getTime() + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day;
}

export default function DayDisplay () {
  const [ day, setDay ] = useState<number>(getDay());
  useEffect(() => {
    const timer = setInterval(() => {
      setDay(getDay());
    }, 1000);

    return () => clearInterval(timer);
  })

  const dayColor = dayNames[day % 7];
  const dayName = dayNames[day % dayNames.length];

  return (
    <p
      className={`font-bold text-8xl ${dayColor}`}
      style={{
        color: dayColor
      }}
    >
      { dayName }
    </p>
  )
}
