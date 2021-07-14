import React from "react";
import Counter from "./Counter";
import { useSelector } from "react-redux";

const App = () => {
  const { count } = useSelector(state => state.counter);

  return (
    <>
      <h2>Total Votes: {count}</h2>
      <Counter name={"minsoo"} />
      <Counter name={"minsoo2"} />
      <Counter name={"minsu"} />
    </>
  );
};

export default App;
