import React from 'react';

export const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="thumbnail">
        <h2 className="title">Card 1</h2>
        <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=8" />
      </div>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
        dolorum architecto illum vero ipsa non placeat praesentium deleniti
        voluptates necessitatibus, possimus minus perspiciatis expedita totam
        consequatur
      </p>
    </div>
  );
};

export default Card;
