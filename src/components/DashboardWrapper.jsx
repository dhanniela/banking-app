import React from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { Header } from "./Header";
import { Outlet } from "react-router";

export function DashboardWrapper() {
  return (
    <div className="body">
      <Header />
      <main>
        <Sidebar />
        <section className="content">
          <div className="content-container">
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
}
