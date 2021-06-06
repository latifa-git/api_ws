import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [spinnner, setSpinnner] = useState(true)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((json) => setUsers(json));
      setSpinnner(false)
  }, []);
  if(spinnner){
   return(<Spin size="large" />) 
  }
  return (
    <div className=" d-flex justify-content-around flex-warp">
      {users.map((el) => (
        <UserCard el={el} key={el.id} />
      ))}
    </div>
  );
};

export default UserList;
