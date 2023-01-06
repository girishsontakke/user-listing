import useCurrentUser from "hooks/useCurrentUser";
import styles from "./UserInfo.module.scss";
import Spinner from "components/spinner/Spinner";

function UserInfo() {
  const { user, loading } = useCurrentUser();

  if (user === null)
    return (
      <div className={styles.container}>
        <h3 className={styles.placeholderText}>
          Please Select One button from below buttons to see user information.
        </h3>
      </div>
    );

  return (
    <div className={styles.container}>
      {loading ? (
        <Spinner />
      ) : (
        <div className={styles.fieldWrapper}>
          <img
            src={user.avatar}
            alt={`${user.first_name} avatar`}
            className={styles.avatar}
          />
          <div>
            <span>First Name: </span>
            <span>{user.first_name}</span>
          </div>
          <div>
            <span>Last Name: </span>
            <span>{user.last_name}</span>
          </div>
          <div>
            <span>Email: </span>
            <span>{user.email}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserInfo;
