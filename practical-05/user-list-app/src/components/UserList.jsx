import React from "react";
import { useSelector } from "react-redux";
import UserTable from "./UserTable";
import HoverCard from "./HoverCard";
import TableHeader from "./TableHeader";
import styles from "./UserList.module.css";

const UsersList = () => {
  //to grab user data in a central location with useSelector Hook
  const users = useSelector((state) => state.users);
  const [user, setUser] = React.useState(null);

  const handleHover = (user) => {
    setUser(user);
  };

  return (
    <>
      <div className={styles.mainContainer}>
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
      </div>
      <HoverCard user={user} />
    </>
  );
};

export default UsersList;
