import { useEffect, useState } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "store/hook";
import { fetchUserList } from "store/userListSlice";
import Pagination from "components/pagination/Pagination";

function App() {
  const dispatch = useAppDispatch();
  const { total } = useAppSelector((state) => state.userList);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalCount={total}
      pageSize={1}
    />
  );
}

export default App;
