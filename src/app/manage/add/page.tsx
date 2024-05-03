"use client";

import { Button, Input } from "@/components";
import { ChangeEvent, useState } from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function Add() {
  const [name, setName] = useState<string>("");
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
  };

  const toggleDay = (day: string) => {
    setSelectedDays((prevSelectedDays) =>
      prevSelectedDays.includes(day)
        ? prevSelectedDays.filter((selectedDay) => selectedDay !== day)
        : [...prevSelectedDays, day],
    );
  };

  return (
    <div>
      <p className="text-xl mb-3">Task name:</p>
      <Input
        type="text"
        name="activity-name"
        placeholder="Call Mom"
        value={name}
        onChange={(e) => handleInput(e)}
      />
      <div className="flex justify-center sm:justify-between flex-wrap gap-5 my-5">
        {days.map((day, index) => (
          <Button
            name={day}
            key={index}
            checked={selectedDays.includes(day)}
            onClick={() => toggleDay(day)}
            style={{ width: 80 }}
          />
        ))}
      </div>
      <Button name="Add" />
    </div>
  );
}
