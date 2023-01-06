import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hook";
import { fetchUser } from "store/userSlice";

function useCurrentUser() {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const userQuery = searchParams.get("user");
  const { total } = useAppSelector((state) => state.userList);
  const { user, loading } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (userQuery != null && parseInt(userQuery) <= total) {
      dispatch(fetchUser(userQuery));
    }
  }, [dispatch, total, userQuery]);

  return { user, loading };
}

export default useCurrentUser;
