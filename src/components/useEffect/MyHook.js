import React, { useState, useEffect } from "react";

const MyHook = () => {
  const [count, setCount] = useState(0);

  /**
   * 1. function (mounted)
   * function is called components did mount
   * 2. Array (updated)
   * will tell when the useEffect should run
   * [] -> only component did mount
   * 3. return (will unmounted)
   * */

  //   useEffect(() => {
  //     console.log("component did mount");
  //   }, []);

  //   //   components did update
  //   useEffect(() => {
  //     console.log("count is changed");
  //   }, [count]);

  //   //   components will unmount
  //   useEffect(() => {
  //     return () => {
  //       console.log("this is called when component will unmount");
  //     };
  //   }, []);

  //   updated -> cleanup function
  useEffect(() => {
    console.log("count is changed");
    return () => {
      console.log(`we are in the cleanup - the count is ${count}`);
    };
  }, [count]);

  return (
    <div>
      <h6>Counter</h6>
      <p>current count : {count}</p>
      <button onClick={() => setCount(count + 1)}>increment the count</button>
    </div>
  );
};

export default MyHook;
