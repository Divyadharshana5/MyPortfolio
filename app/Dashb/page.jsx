import React from "react";
import Header from "../Components/Header";

export default function page() {
  return (
    <div>
      <Header />
      <p>Hello dashboard</p>
      <Dashboard />
    </div>
  );
}
export function Dashboard() {
  return (
    <>
      <div>Macha</div>
    </>
  );
}
