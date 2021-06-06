import { Button, Card } from "antd";
import "./UserCrd.css";
import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ el }) => {
  return (
    <div className="card">
    <div className="site-card-border-less-wrapper">
        <span  className="profile">{el.name[0]}</span>
      <Card title={el.name} bordered={false} style={{ width: 300 }}>
        <p>{el.username} </p>
        <p>{el.phone} </p>
        <p>{el.email} </p>
      <Link to={`/profile/${el.id}`} >  <Button type="link">show more</Button> </Link>
      </Card>
    </div>
    </div>
  );
};

export default UserCard;
