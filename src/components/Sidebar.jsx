import { Link, useMatch, useResolvedPath} from "react-router-dom";
import { useEffect,useState } from "react";
import {
  Layout,
  UserPlus,
  Contact,
  PiggyBank,
  Banknote,
  Send,
  DollarSign,
  TabletSmartphone,
  Wallet,
  Goal,
  LogOut,
} from "lucide-react";

export function Sidebar({ handleLogout, userRole }) {
  const [sidebarDisplay, setSidebarDisplay]= useState(userRole)

  useEffect(()=>{
    setSidebarDisplay(userRole === "admin"? <AdminSidebar/>:<CustomerSidebar/>)
  },[userRole])
  return (
    <nav className="sidebar">
      <div className="sidebar__header">
        <img className="sidebar__logo" src="src/assets/image/full green logo-01.png" alt="IBA-logo" />
      </div>
      {sidebarDisplay}
      <div className="sidebar__footer">
        <div className="sidebar__footer-container">
          <a className="logout-button" onClick={handleLogout}>
          <LogOut /> Logout 
          </a>
        </div>
      </div>
    </nav>
  );
}

function AdminSidebar() {
  return (
    <ul className="sidebar__main">
      <CustomLink to="/">
        <Layout /> Overview
      </CustomLink>
      <CustomLink to="/create-new-user">
        <UserPlus /> Create User
      </CustomLink>
      <CustomLink to="/accounts">
        <Contact /> Accounts
      </CustomLink>
      <CustomLink to="/deposit">
        <PiggyBank /> Deposit
      </CustomLink>
      <CustomLink to="/withdraw">
        <Banknote /> Withdraw
      </CustomLink>
      <CustomLink to="/send-money">
        <Send /> Send Money
      </CustomLink>
      <CustomLink to="/currency">
        <DollarSign /> Currency
      </CustomLink>
    </ul>
  );
}

function CustomerSidebar() {
  return (
    <ul className="sidebar__main">
      <CustomLink to="/">
        <Layout /> Overview
      </CustomLink>
      <CustomLink to="/send-money">
        <Send /> Send Money
      </CustomLink>
      <CustomLink to="/buy-load">
        <TabletSmartphone /> Buy Load
      </CustomLink>
      <CustomLink to="/budget">
        <Wallet /> Budget
      </CustomLink>
      <CustomLink to="/goals">
        <Goal /> Goals
      </CustomLink>
      <CustomLink to="/currency">
        <DollarSign /> Currency
      </CustomLink>
    </ul>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : "custom-link"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
