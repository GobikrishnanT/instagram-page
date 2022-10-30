import React from 'react';
import Ibutton from '../../ui-helpers/Ibutton';
import IsearchBar from '../../ui-helpers/IsearchBar';

const Header = () => {
  function onLogInClicked() {
    console.log('*** LOG IN CLICKED ***');
  }

  function onSignUpClicked() {
    console.log('** SIGN UP CLICKED **');
  }

  return (
    <div className="header display-flex justify-content-center align-items-center">
      <div className="align-items-center p-10 width-70-per display-flex justify-content-space-between">
        <div className="header-font">Instagram</div>
        <IsearchBar barPlaceHolder="Search" startAdorenment="🔎" />
        <div>
          <Ibutton
            type="contained"
            buttonColor="blue"
            butonContent="Log In"
            onButtonClick={onLogInClicked}
          />
          <Ibutton
            type="text"
            butonContent="Sign Up"
            onButtonClick={onSignUpClicked}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
