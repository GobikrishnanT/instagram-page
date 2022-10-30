import React from 'react';

const IsearchBar = ({ barPlaceHolder, startAdorenment, endAdornment }) => {
  return (
    <div className='i-searchBar'>
      <div>{startAdorenment}</div>
      <div>
        <input type="text" />
      </div>
    </div>
  );
};

export default IsearchBar;
