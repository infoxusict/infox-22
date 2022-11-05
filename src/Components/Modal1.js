import { useState } from "react";
import { tempuserObject } from "./Profile";
export default function Modal1({
  closeModal,
  data,
  setAuthKey,
  userDetails,
  setprofileDATA,
}) {
  const [modalInput, setmodalInput] = useState({
    college: "",
    gradYear: null,
    contact: null,
  });
  const handleClick = async () => {
    console.log(tempuserObject);
    const res = await fetch(
      "https://infoxpression.herokuapp.com/user/auth/google",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(tempuserObject),
        referrerPolicy: "origin-when-cross-origin",
      }
    );
    var finalres = await res.json();
    console.log(finalres);
    window.localStorage.setItem("authkey", finalres.authKey);
    const getDetailsRes = await fetch(
      "https://infoxpression.herokuapp.com/user/getDetails",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authToken: localStorage.getItem("authkey"),
        },
        referrerPolicy: "origin-when-cross-origin",
      }
    );
    var finaldetailsres = await getDetailsRes.json();
    console.log(finaldetailsres);
    userDetails = finaldetailsres;
    setprofileDATA(finaldetailsres);
    setAuthKey(true);
  };

  const listItems = () => {
    const modalChange = (e) => {
      setmodalInput({ ...modalInput, [e.target.name]: e.target.value });
      tempuserObject.college = modalInput.college;
      tempuserObject.gradYear = modalInput.gradYear;
      tempuserObject.contact = modalInput.contact;
    };

    return (
      <div>
        {data.map((item, i) => (
          <div>
            <label htmlFor="Github">{item.question}</label>
            <input
              onChange={modalChange}
              type="text"
              name={item.question}
              placeholder={item.placeholder}
            ></input>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="modal">
        <button
          className="close-modal"
          onClick={() => {
            // console.log(data);
            closeModal(false);
          }}
        >
          &times;
        </button>
        <form method="POST">
          {listItems()}
          {/* {data.map((item, i) => {
            // <div>
            <div>
              <label htmlFor="Github">{item}</label>
              <input type="text" name="Github" placeholder="xyz123"></input>
            </div>;
            {
              /* <div>
                <label htmlFor="Github">Github</label>
                <input type="text" name="Github" placeholder="xyz123"></input>
              </div>
              <div>
                <label htmlFor="Github">Github</label>
                <input type="text" name="Github" placeholder="xyz123"></input>
              </div> 
            }
            // </div>;
          })} */}

          <div className="sb-modal">
            {/* <button className="submit-modal" >Submit</button> */}
            <input
              className="submit-modal"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                tempuserObject.college = modalInput.college;
                tempuserObject.gradYear = modalInput.gradYear;
                tempuserObject.contact = modalInput.contact;
                // console.log(tempuserObject);
                handleClick();
              }}
            />
          </div>
        </form>
      </div>
      <div
        className="overlay"
        onClick={() => {
          closeModal(false);
        }}
      ></div>
    </>
  );
}
