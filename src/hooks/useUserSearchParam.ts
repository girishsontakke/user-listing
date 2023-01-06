import { useSearchParams } from "react-router-dom";

function useUserSearchParam() {
  const [searchParams] = useSearchParams();

  let currentUserSearchParam: number;
  try {
    const userQuery = searchParams.get("user");
    if (userQuery != null) {
      currentUserSearchParam = parseInt(userQuery);
    } else currentUserSearchParam = 0;
  } catch (error) {
    currentUserSearchParam = 0;
  }
  return currentUserSearchParam;
}

export default useUserSearchParam;
