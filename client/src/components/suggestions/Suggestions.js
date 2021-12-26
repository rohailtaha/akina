import React from 'react';

function Suggestions({ suggestions }) {
  return (
    <div className='suggestions'>
      {suggestions.map(suggestion => (
        <suggestion suggestion={suggestion} />
      ))}
    </div>
  );
}

export default Suggestions;
