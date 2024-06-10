import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ReadMoreButton = ({ initialText, expandedText }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='text-center'>
      {showMore ? expandedText : initialText}
      <Button  onClick={toggleContent}>
        {showMore ? 'Read less' : 'Read more'}
      </Button>
    </div>
  );
};

export default ReadMoreButton;
