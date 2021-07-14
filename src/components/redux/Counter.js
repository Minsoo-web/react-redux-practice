import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incremnt, decremnt } from "../../redux/ducks/counter";

const Counter = props => {
  const { name } = props;
  const count = useSelector(state => state.counter.count);
  const [votes, setVotes] = React.useState(0);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incremnt());
    setVotes(votes + 1);
  };
  const handleDecrement = () => {
    dispatch(decremnt());
    setVotes(votes - 1);
  };

  return (
    <div>
      <p>name is: {name}</p>
      <h4>votes {votes}</h4>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
