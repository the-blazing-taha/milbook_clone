import React from "react";
import Leftline from "../components/leftline";
import Features from "../components/features";
import "./productDescription.css";

export default function ProductDescription( {description} ) {
  return (
    <>
      <h2 style={{fontSize:"20px"}}>
        {description.title}
      </h2>
      <Leftline />
      <Features feature={[description]} />
    </>
  );
}