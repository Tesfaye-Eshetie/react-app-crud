import React from "react";
import { Header } from "./components/styles/Header.styled";

export default function Layout({ children }) {
  return(
      <>
        <Header>
            <h2> Create, Read, Update, and Delete (CRUD) operations using useReducer hook </h2>
            <h4>props.children #demo</h4>
        </Header>
            <div>{children}</div> 
      </>
  )
}