import React from 'react';

const Ibutton = ({ buttonColor, butonContent, onButtonClick, type }) => {
  return (
    <button
      onClick={(e) => onButtonClick(e)}
      className={`i-button ${type === 'outlined' && 'outLinedTypeButton'} ${
        type === 'contained' && 'containedTypeButton'
      } ${type === 'text' && 'textTypeButton'}`}
    >
      {butonContent}
    </button>
  );
};

export default Ibutton;
