import React from 'react';
import data from '../data/data';

export const Pagination = () => {
  
  return (
    <div className="pagination">
      <button name="start">{'<<'}</button>
      <button name="prev" className="prevbtn">
        Prev
      </button>
      {data.map((x, i) => {
        return <button key={i}>{x.id}</button>;
      })}
      <button name="next" className="nextbtn">
        Next
      </button>
      <button name="end">{'>>'}</button>
    </div>
  );
};

export default Pagination;
