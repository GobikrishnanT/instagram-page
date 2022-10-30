import React from 'react';
import ImageLister from '../../ui-helpers/ImageLister';

const Content = () => {
  return (
    <div className="content-box">
      <ImageLister link={'http://jsonplaceholder.typicode.com/photos'} />
    </div>
  );
};

export default Content;
