import React from "react";
// import { Card } from "./Card";
const Card = React.lazy(() => import("./Card"));

const Sponsers = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Sponsers;
