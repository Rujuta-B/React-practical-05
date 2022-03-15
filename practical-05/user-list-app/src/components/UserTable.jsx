import React from "react";
import styles from "./UserTable.module.css";
import { useDispatch } from "react-redux";
import { BiLockAlt } from "react-icons/bi";
import { RiDeleteBinFill } from "react-icons/ri";
import { hoverOver, deleteUser } from '../Redux/userAction'

const Users = ({person, handleHover}) => {
    const dispatch = useDispatch();
  const handleMouseEnter = React.useCallback(() => {
    handleHover(person);
}, [person, handleHover]);

const handleMouseLeave = React.useCallback(() => {
    handleHover(null);
}, [handleHover]);

  // const handleRemoveUser = () => dispatch(deleteUser(person.id));

  return (
    <tr className={styles.userTable}>
      <td className={styles.col1} onMouseEnter={handleMouseEnter} >
        <img src={person.avatar} alt="user_image" />
        <div className={styles.nameEmail}>
          <p className={styles.name}>{`${person.first_name} ${person.last_name}`}</p>
          <p className={styles.email}>{person.email}</p>
        </div>
      </td>
      <td className={styles["status_dropdown"]}>
        {person.isActive && <p style={{ color: "#1cab1c" }}>Active</p>}
        {!person.isActive && (
          <div className="dropdown">
            <select className={styles.select}>
              {!person.isActive && (
                <>
                  <option> Inactive</option>
                  <option> Active</option>
                </>
              )}
            </select>
          </div>
        )}
      </td>
      <div className={styles["access_dropdown"]}>
        {person.isOwner && <p>Owner</p>}
        {!person.isOwner && (
          <div className="dropdown">
            <select className={styles.select}>
              <option> Manager</option>
              <option> Read</option>
            </select>
          </div>
        )}
      </div>
      {person.isOwner && (
        <div className={styles.icon}>
          <BiLockAlt />
        </div>
      )}
      {!person.isOwner && (
        <div className={styles.icon} >
          <RiDeleteBinFill />
        </div>
      )}
    </tr>
  );
};

export default Users;
