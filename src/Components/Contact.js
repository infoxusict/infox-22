import React from 'react'
import "./Assets/Images/CSS/Contact.css"
const Contact = () => {
  return (
    <>
      <div className="neoh_fn_main" data-footer-sticky="">
        {/* Content */}
        <div className="neoh_fn_content">
          {/* Page Title */}
          <div className="neoh_fn_pagetitle myHeadSection">
            <div className="bg_color" />
            <div className="pt_content">
              <div className="container" style={{width: "100vw", minWidth: "auto"}}>
                <h1
                  className="fn_title theme HeadH3Res"
                  data-wait={1000}
                  data-speed={8}
                  style={{width: "100vw"}}
                >
                  Contact Us
                </h1>
               
                <p className="fn_desc">
                  {/* <a href="index.html">Home</a>
            <span className="separator">/</span>
            <span className="current">Contact</span> */}
                </p>
              </div>
            </div>
          </div>
          {/* !Page Title */}
          {/* Contact Page */}
          <div className="neoh_fn_contact_page">
            <div className="container">
              <div className="mw_500">
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                >
                  <div className="input_list">
                    <ul>
                      <li>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" placeholder="Your Name" />
                      </li>
                      <li>
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          type="text"
                          placeholder="youremail@mail.com"
                        />
                      </li>
                      <li>
                        <label htmlFor="subject">Subject</label>
                        <input id="subject" type="text" placeholder="How can we help?" />
                      </li>
                      <li>
                        <label htmlFor="message">Message</label>
                        <input id="message" defaultValue={""} />
                      </li>
                      <li>
                        <a className="register" 
                          id="send_message"
                          href="/"
                        >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Send
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* !Contact Page */}
        </div>
        
      {/* <a href="/" className="neoh_fn_totop">
          <span className="arrow">
            <img src="svg/right-arr.svg" alt="" className="fn__svg" />
          </span>
          <span className="circle">
            <img src="svg/circle.svg" alt="" className="fn__svg" />
          </span>
        </a>
        {/* !Totop */}
      </div>  
        

    </>
  )
}

export default Contact