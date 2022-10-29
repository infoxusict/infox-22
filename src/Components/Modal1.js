export default function Modal1({ closeModal, data }) {
  // const listItems = data.map(({ question }) => {
  //   <div>
  //     <label htmlFor={question}>{question}</label>
  //     <input type="text" name={question}></input>;
  //   </div>;
  // });

  const listItems = () => {
    return (
      <div>
        {data.map((item, i) => (
          <div>
            <label htmlFor="Github">{item.question}</label>
            <input
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
            console.log(data);
            closeModal(false);
          }}
        >
          &times;
        </button>
        <form action="" method="POST">
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
            <button className="submit-modal">Submit</button>
          </div>
        </form>
      </div>
      <div
        class="overlay"
        onClick={() => {
          closeModal(false);
        }}
      ></div>
    </>
  );
}
