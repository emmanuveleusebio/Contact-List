import React from "react";
import Header from "./Header";
import Contacts from "./contacts";
import './layout.css'
import AddCard from "./addContact";
import EditCard from "./edit";
import DeletePop from "./deleteContact";

const Layout = () => {

  return (
    <div>
      <Header/>
      <div className="contactContainer py-4">
        <Contacts />
        <AddCard/>
        <EditCard />
        <DeletePop />
      </div>
      
    </div>
  );
};

export default Layout;
