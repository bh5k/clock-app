import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Function to update the current time
    const updateCurrentTime = () => {
      setCurrentTime(new Date());
    };

    // Set an interval to update the time every second
    const intervalId = setInterval(updateCurrentTime, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Format the time to display hours, minutes, and seconds
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <div>
      <h1>Current Time:</h1>
      <p>{formattedTime}</p>
    </div>
  );
};

export default Clock;
