import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { fetchUserInfos } from '../../ajax/getRequest';
import Ibutton from '../../ui-helpers/Ibutton';

const UserInfo = () => {
  return (
    <div className="display-flex">
      <ImageContainer />
      <InfoContainer />
    </div>
  );
};

const ImageContainer = () => {
  return (
    <div className="flex-basis-50 display-flex justify-content-center align-items-center">
      <div className="user-info-image display-flex justify-content-center align-items-center">
        user
      </div>
    </div>
  );
};

const InfoContainer = () => {
  const [userInfo, setUserInfo] = useState(null);

  const fetchUserInfo = async () => {
    const response = await fetchUserInfos(
      'http://jsonplaceholder.typicode.com/users/1'
    );
    setUserInfo(response);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <div className="p-5 flex-basis-50 ">
      {userInfo && (
        <div>
          <NameWithButton userInfo={userInfo} />
          <MiscInfos userInfo={userInfo} />
        </div>
      )}
    </div>
  );
};

const NameWithButton = ({ userInfo }) => {
  return (
    <div className="display-flex justify-content-space-between align-items-center">
      <>
        <div>{userInfo.name}✅</div>
        <div>
          <Ibutton
            butonContent="Message"
            onButtonClick={() => {}}
            type="outlined"
          />
          <Ibutton
            butonContent="Follow"
            onButtonClick={() => {}}
            type="outlined"
          />
          <Ibutton
            butonContent="..."
            onButtonClick={() => {}}
            type="outlined"
          />
        </div>
      </>
    </div>
  );
};

const MiscInfos = ({ userInfo }) => {
  const optionToIterate = [
    { icon: '🧑', key: 'username', displayName: 'NickName' },
    { icon: '📧', key: 'email', displayName: 'mail' },
    { icon: '📲', key: 'phone', displayName: 'Phone number' },
    { icon: '🌏', key: 'website', displayName: 'Wepsite' },
  ];
  return (
    <div>
      {optionToIterate.map((eachThings) => {
        return (
          <div className="user-misc-info">
            <span className="user-info-icon">{eachThings.icon}</span>
            <span>{eachThings.displayName} : </span>
            <span>{userInfo[eachThings.key]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default UserInfo;
