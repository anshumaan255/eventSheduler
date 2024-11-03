'use client';

import React, { useState } from 'react';

const EventForm = ({ onAddEvent }) => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent({
      start_time: startTime,
      end_time: endTime
    });
    setStartTime('');
    setEndTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-4">
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block mb-1">Start Time (0-23):</label>
          <input
            type="number"
            min="0"
            max="23"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div className="flex-1">
          <label className="block mb-1">End Time (0-23):</label>
          <input
            type="number"
            min="0"
            max="23"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>
      </div>
      <button 
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      >
        Add Event
      </button>
    </form>
  );
};

export default EventForm;