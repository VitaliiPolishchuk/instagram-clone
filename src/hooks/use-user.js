import { useState, useEffect } from "react";
import { getUesrByUserId, getUserByUserId } from "../services/firebase";

export default function useUser(userId) {
  const [activeUser, setActiveUser] = useState();

  useEffect(() => {
    async function getUserObjByUserId(userId) {
      const [user] = await getUserByUserId(userId);
      setActiveUser(user || {});
    }

    if (userId) {
      getUserObjByUserId(userId);
    }
  }, [userId]);

  return { user: activeUser, setActiveUser };
}
