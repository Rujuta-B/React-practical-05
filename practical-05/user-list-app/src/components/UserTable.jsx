import React from "react";
import styles from "./UserTable.module.css";
import { useDispatch } from "react-redux";
import { BiLockAlt } from "react-icons/bi";
import { RiDeleteBinFill } from "react-icons/ri";
import { deleteUser } from "../Redux/userAction";

const UserTable = ({ person, handleHover }) => {
  const dispatch = useDispatch();
  const handleMouseEnter = React.useCallback(() => {
    handleHover(person);
  }, [person, handleHover]);

  const handleMouseLeave = React.useCallback(() => {
    handleHover(null);
  }, [handleHover]);

  const handleRemoveUser = () => dispatch(deleteUser(person.id));

  return (
    <div className={styles.userTable}>
      <div className={styles.userDetails}>
        <img
          src={person.avatar}
          alt="user-avatar"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <ul>
          <li
            className={styles.name}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >{`${person.first_name} ${person.last_name}`}</li>
          <li className={styles.email}>{person.email}</li>
        </ul>
      </div>
      <div className={styles.dropdown}>
        {person.isActive && <p className={styles.is_active}>Active</p>}
        {!person.isActive && (
          <p>
            <select className={styles.select}>
              {!person.isActive && (
                <>
                  <option> Inactive</option>
                  <option> Active</option>
                </>
              )}
            </select>
          </p>
        )}
      </div>
      <div className={styles.dropdown}>
        {person.isOwner && <p className={styles.is_owner}>Owner</p>}
        {!person.isOwner && (
          <div>
            <select className={styles.select}>
              <option> Manager</option>
              <option> Read</option>
            </select>
          </div>
        )}
      </div>
      {person.isOwner && (
        <div className={styles.lock}>
          <BiLockAlt />
        </div>
      )}
      {!person.isOwner && (
        <div className={styles.trash} onClick={handleRemoveUser}>
          <RiDeleteBinFill />
        </div>
      )}
    </div>
  );
};

export default UserTable;
