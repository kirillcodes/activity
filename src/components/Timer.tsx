"use client";

import { useCallback, useEffect, useState } from "react";

export const Timer: React.FC = () => {
  const [date, setDate] = useState<string | null>(null);
  const [hours, setHours] = useState<string>("00");
  const [minutes, setMinutes] = useState<string>("00");

  const getDate = useCallback(() => {
    const currentDate = new Date();
    setDate(new Intl.DateTimeFormat(navigator.language).format(currentDate));
  }, []);

  const updateTimer = useCallback(() => {
    const currentDate = new Date();
    const currentHours = currentDate.getHours().toString().padStart(2, "0");
    const currentMinutes = currentDate.getMinutes().toString().padStart(2, "0");
    setHours(currentHours);
    setMinutes(currentMinutes);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      updateTimer();
    }, 10000);
    return () => clearInterval(interval);
  }, [updateTimer]);

  useEffect(() => {
    getDate();
    updateTimer();
  }, [getDate, updateTimer]);

  return (
    <div className="text-center">
      <div>{date}</div>
      <div className="text-7xl">
        {hours}:{minutes}
      </div>
    </div>
  );
};
