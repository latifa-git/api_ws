import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";
const Roooter = ({ match }) => {
  const [user, setUser] = useState({});
  const [err, setErr] = useState("");
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then((res) => setUser(res.data))
      .catch((err) => setErr(err.response.data));
  }, [match]);

  return (
    <div className="card">
    <div className="site-card-border-less-wrapper">
        
      <Card title={user.name} bordered={false} style={{ width: 300 }}>
        <p>{user.username}</p>
        <p>{user.phone}</p>
        <p>{user.email}</p>
        <Link to="/">
          {" "}
          <Button type="link">come back</Button>{" "}
        </Link>
      </Card>
    </div>
    </div> 
  );
};

export default Roooter;
