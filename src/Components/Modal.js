import React, {useState } from "react";
import Modal1 from "./Modal1";
import "./Assets/Images/CSS/modal.css";

// How to use:
// Sample <Modal data={data} buttonName={"Register Now!"} />
// data format =[{question: "", placeholder: ""}]
//can add more data on req
// use modal.js dont use modal1.js (it is a comp linked to modal.js)

export default function Modal({ data, buttonName, tempuserObject, setAuthKey, userDetails, setprofileDATA,profileDATA}) {
  const [openModal, setOpenModal] = useState(false);
  console.log(tempuserObject)
  return (
    <div>
      <button
        className="show-modal"
        onClick={() => {
          setOpenModal(true);
          console.log("Changed to", openModal);
        }}
      >
        {buttonName}
      </button>
      {openModal && <Modal1 closeModal={setOpenModal} data={data} setprofileDATA={setprofileDATA} tempuserObject={tempuserObject} userDetails={userDetails} setAuthKey={setAuthKey}/>}
    </div>
    
  );
}
