import React from 'react';
import CounterContext from '../contexts/counter';

const Counter = () => (
  <CounterContext.Consumer>
    {/* コンシューマーは値を受け取ることが前提であるため、中身は関数で表現する必要がある */}
    {({ count, increment, decrement }) => {
      return (
        <React.Fragment>
          <div>count: {count}</div>
          <button onClick={increment}>+1</button>
          <button onClick={decrement}>-1</button>
        </React.Fragment>
      );
    }}
  </CounterContext.Consumer>
);

export default Counter;
