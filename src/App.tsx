import { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "store/hook";
import { fetchUserList } from "store/userListSlice";
import Pagination from "components/pagination/Pagination";
import { useSearchParams } from "react-router-dom";
import UserInfo from "components/userInfo/UserInfo";
import useUserSearchParam from "hooks/useUserSearchParam";
import Spinner from "components/spinner/Spinner";

function App() {
  const dispatch = useAppDispatch();
  const { total, loading } = useAppSelector((state) => state.userList);
  const [_searchParams, setSearchParams] = useSearchParams();

  const currentUserSearchParam = useUserSearchParam();

  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  if (loading) return <Spinner />;

  return (
    <div className="app">
      <UserInfo />
      <Pagination
        currentPage={currentUserSearchParam}
        onPageChange={(page) => {
          setSearchParams({ user: `${page}` });
        }}
        totalCount={total}
        pageSize={1}
      />
    </div>
  );
}

export default App;
