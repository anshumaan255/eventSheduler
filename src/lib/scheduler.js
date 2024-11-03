export class Scheduler {
    constructor() {
      this.events = [];
    }
  
    addEvent({ start_time, end_time }) {
      // Convert to numbers if they're strings
      start_time = Number(start_time);
      end_time = Number(end_time);
      
      // Validate time range
      if (start_time < 0 || end_time > 23 || start_time >= end_time) {
        return false;
      }
  
      // Check for overlaps
      for (const event of this.events) {
        if (
          (start_time >= event.start_time && start_time < event.end_time) ||
          (end_time > event.start_time && end_time <= event.end_time) ||
          (start_time <= event.start_time && end_time >= event.end_time)
        ) {
          return false;
        }
      }
  
      // Add event if no overlaps
      this.events.push({ start_time, end_time });
      // Sort events by start time
      this.events.sort((a, b) => a.start_time - b.start_time);
      return true;
    }
  
    getEvents() {
      return [...this.events];
    }
  }