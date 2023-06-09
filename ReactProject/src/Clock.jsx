import React, { useState, useEffect } from 'react';
export default function Clock()
    {
      const [time, setTime] = useState(new Date());

      useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);

        return () => {
          clearInterval(interval);
        };
      }, []);

      return (
        <div className="clock">
          <h1> {time.toLocaleTimeString() } {time.toLocaleDateString()} </h1>
        </div>
      )
    }

