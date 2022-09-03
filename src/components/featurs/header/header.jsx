import "./header.css";
import React from "react";
import {Link} from "react-router-dom"

 const navBar =["about","Teacher","ParentsCommittee","Contact","Layers"]
function Header() {
  return (
    <div className="header">
      <Link to ={"/"}><button>home</button></Link>

     {navBar.map((page) => (
      <Link to={page}>
        <button>{page}</button>
      </Link>
     ))}
    </div>
  );
};

export default Header;
