import { hoverUser } from "./userTypes";
import { removeUser } from "./userTypes";


//action creator function
export const hoverOver = (id) => {
    return {
      type: hoverUser,
      payload: id,
    };
  };
  
export const deleteUser = (id) => {
    return {
      type: removeUser,
      payload: id,
    };
  };
