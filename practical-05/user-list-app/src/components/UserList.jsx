import React from "react";
import { useSelector } from "react-redux";
import UserTable from "./UserTable";
import UserCard from "./UserCard";
import TableHeader from "./TableHeader";
import styles from "./UserList.module.css";

const UsersList = () => {
  //to grab user data in a central location with useSelector Hook
  const users = useSelector((state) => state.users);

  //to display user details when hovered over a user
  const [user, setUser] = React.useState(null);

  const handleHover = (user) => {
    setUser(user);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <TableHeader />  {/* contains heading  */}
        {users.map((user) => {
          return (
            <UserTable    //contains format to display user in the table and hover & delete functionality
              key={user.id}
              person={user}
              handleHover={handleHover}
            />
          );
        })}
      </div>
      <UserCard user={user} /> {/* contains hover card details   */}
    </>
  );
};

export default UsersList;
