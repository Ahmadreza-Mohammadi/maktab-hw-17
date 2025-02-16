import React from "react";

interface UserCardProps {
  name: string;
  email: string;
  age: number;
}

const Task4: React.FC<UserCardProps> = ({ name, email, age }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default Task4;
