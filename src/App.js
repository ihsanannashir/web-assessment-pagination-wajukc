import React, { useState } from 'react';
import './style.css';
import Card from './components/Card';
import data from './data/data';

const firstData = data.filter((item) => {
  return item.id === 1;
});

export const App = () => {
  const [current, setCurrent] = useState(firstData);
  const [currentId, setCurrentId] = useState(1);

  const getCurrent = (currentId) => {
    const newData = data.filter((item) => {
      return item.id === currentId;
    });
    setCurrent(newData);
  };

  const Pagination = () => {
    return (
      <div className="pagination">
        <button
          name="start"
          onClick={() => {
            if (currentId > 1) {
              setCurrentId(1);
              getCurrent(1);
            }
          }}
          disabled={currentId === 1 && true}
        >
          {'<<'}
        </button>
        <button
          name="prev"
          className="prevbtn"
          onClick={() => {
            if (currentId > 1) {
              setCurrentId(currentId - 1);
              getCurrent(currentId - 1);
            } else {
              setCurrentId(data.length);
              getCurrent(data.length);
            }
          }}
        >
          Prev
        </button>
        {data.map((x, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                getCurrent(x.id);
                setCurrentId(x.id);
              }}
            >
              {x.id}
            </button>
          );
        })}
        <button
          name="next"
          className="nextbtn"
          onClick={() => {
            if (currentId < data.length) {
              setCurrentId(currentId + 1);
              getCurrent(currentId + 1);
            } else {
              setCurrentId(1);
              getCurrent(1);
            }
          }}
        >
          Next
        </button>
        <button
          name="end"
          onClick={() => {
            if (currentId < data.length) {
              setCurrentId(data.length);
              getCurrent(data.length);
            }
          }}
          disabled={currentId === data.length && true}
        >
          {'>>'}
        </button>
      </div>
    );
  };

  return (
    <div className="container">
      {current.map((item, idx) => {
        return (
          <Card
            title={`Card ${item.id}`}
            image={item.image.url}
            desc={item.description}
          />
        );
      })}
      <Pagination />
    </div>
  );
};

export default App;

// {data.filter((item) => {
//   return item.id === x
// })}
