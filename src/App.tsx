import { useEffect } from "react";
import "./App.css";
import { useAppDispatch } from "store/hook";
import { fetchUserList } from "store/userListSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);
  return <div>Hello World</div>;
}

export default App;
