import React from 'react';
import styles from "./UserList.module.css";
import UserTable from "./UserTable";
import { useSelector } from "react-redux";
import HoverCard from "./HoverCard";


const UsersList = () => {
  const users = useSelector(state => state.users);
  const [user, setUser] = React.useState(null);


  const handleHover =(
    (user) => {
        setUser(user);
    }
    
)


  return (
    <>
    <table className={styles.mainContainer}>
      <div className={styles["container_inner"]}>
        <tr className={styles.titles}>
          <thead>Name</thead>
          <thead>Status</thead>
          <thead>Access</thead>
        </tr>
        {users.map((user) => {
          return (
            <>
              <UserTable
                key={user.id}
                id={user.id}
                person={user}
                email={user.email}
                isOwner={user.isOwner}
                isActive={user.isActive}
                handleHover={handleHover} />
            </>
          );
        })}
      </div>
    </table>
  
    </>
  );
};

export default UsersList;
