const EventList = ({ events }) => {
    if (events.length === 0) {
      return <p className="text-gray-500">No events scheduled</p>;
    }
  
    return (
      <div className="space-y-2">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-blue-100 p-3 rounded"
          >
            {event.start_time}:00 - {event.end_time}:00
          </div>
        ))}
      </div>
    );
  };
  
  export default EventList;