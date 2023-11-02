import React from "react";
import { useParams } from "react-router-dom";

export default function Users() {
  const { id } = useParams();
  return (
    <div>
      <h1>Welcome here</h1>
      <h4>User id: {id}</h4>
    </div>
  );
}
