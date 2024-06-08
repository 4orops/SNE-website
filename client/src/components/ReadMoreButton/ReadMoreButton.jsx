import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ReadMoreButton = ({ initialText, expandedText }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      {showMore ? expandedText : initialText}
      <Button variant="link" onClick={toggleContent}>
        {showMore ? 'Read less' : 'Read more'}
      </Button>
    </div>
  );
};

export default ReadMoreButton;
