import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import axios from "axios";

const useUsers = ()=>{
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false); //adding.
    useEffect(() => {
      setLoading(true); //adding
  
      const { request, cancel } = userService.getAll<User>();
      request
        .then((res) => {
          setUsers(res.data);
          setLoading(false); //adding
        })
        .catch((err) => {
          if (axios.isCancel(err)) return;
          setError(err.message);
          setLoading(false); //adding
        });
  
      return () => cancel();
    }, []);

    return {users, error, isLoading, setUsers, setError}
}

export default useUsers;
