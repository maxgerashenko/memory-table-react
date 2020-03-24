import React from 'react';

export const CountdownTemplate = props => {
  const { minutes, seconds } = props;

  return (
    <time
      className="CountdownDisplay"
      dateTime={`H${minutes}M${seconds}S`}
    >
      <span className="CountdownDisplay__minutes">
        {String(minutes).padStart(2, 0)} minutes
      </span>
      <span className="CountdownDisplay__seconds">
        {String(seconds).padStart(2, 0)} seconds
      </span>
    </time>
  );
};