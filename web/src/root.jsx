import React from "react";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { Outlet } from "react-router-dom";

const root = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default root;
