const EventTimeline = ({ events }) => {
    return (
      <div className="mt-8 relative h-20 bg-gray-100 rounded">
        {events.map((event, index) => (
          <div
            key={index}
            className="absolute h-8 bg-blue-500 rounded"
            style={{
              left: `${(event.start_time / 24) * 100}%`,
              width: `${((event.end_time - event.start_time) / 24) * 100}%`,
              top: '6px'
            }}
          />
        ))}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full border-l border-gray-300"
            style={{ left: `${(i / 24) * 100}%` }}
          >
            <span className="absolute -bottom-6 text-xs transform -translate-x-1/2">
              {i}:00
            </span>
          </div>
        ))}
      </div>
    );
  };
  
  export default EventTimeline;