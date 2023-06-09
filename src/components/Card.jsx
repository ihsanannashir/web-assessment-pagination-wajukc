import React from 'react';

export const Card = (props) => {
  return (
    <div className="card">
      <div className="thumbnail">
        <h2 className="title">{props.title ? props.title : 'Card'}</h2>
        <img
          src={
            props.image
              ? props.image
              : 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=8'
          }
        />
      </div>
      <p className="description">{props.desc && props.desc}</p>
    </div>
  );
};

export default Card;
