import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/ducks/user";

const App = () => {
  const { user } = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return <>{user && <h2>{user.firstName}</h2>}</>;
};

export default App;
