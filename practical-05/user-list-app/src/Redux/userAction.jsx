import { removeUser } from "./userTypes";

//action creator function
export const deleteUser = (id) => {
    return {
      type: removeUser,
      payload: id,
    };
  };
