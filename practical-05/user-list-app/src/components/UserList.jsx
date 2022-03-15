import React from "react";
import { useSelector } from "react-redux";
import UserTable from "./UserTable";
import HoverCard from "./HoverCard";
import TableHeader from "./TableHeader";
import styles from "./UserList.module.css";

const UsersList = () => {
  const users = useSelector((state) => state.users);
  const [user, setUser] = React.useState(null);

  const handleHover = (user) => {
    setUser(user);
  };

  return (
    <>
      <table className={styles.mainContainer}>
        <TableHeader />
        {users.map((user) => {
          return (
            <UserTable
              key={user.id}
              person={user}
              handleHover={handleHover}
            />
          );
        })}
      </table>
      <HoverCard user={user} />
    </>
  );
};

export default UsersList;
