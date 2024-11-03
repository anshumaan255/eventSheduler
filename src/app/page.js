'use client';

import { useState } from 'react';
import { Scheduler } from '@/lib/scheduler';
import EventForm from '@/components/EventForms';
import EventList from '@/components/EventList';
import EventTimeline from '@/components/EventTimeline';
import MessageAlert from '@/components/MessageAlert';

export default function Home() {
  const [scheduler] = useState(new Scheduler());
  const [events, setEvents] = useState([]);
  const [message, setMessage] = useState('');

  const handleAddEvent = (eventData) => {
    setMessage('');
    
    const success = scheduler.addEvent(eventData);
    
    if (success) {
      setEvents(scheduler.getEvents());
      setMessage('Event added successfully!');
    } else {
      setMessage('Failed to add event. Check for overlaps or invalid times.');
    }
  };

  return (
    <main className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Daily Event Scheduler</h1>
      
      <EventForm onAddEvent={handleAddEvent} />
      <MessageAlert message={message} />
      
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Scheduled Events</h2>
        <EventList events={events} />
      </div>
      
      <EventTimeline events={events} />
    </main>
  );
}