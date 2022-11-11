import React from 'react'

export default function Banner() {
  return (
    <div className="glass-bg">
      <h3 className="banner-text text-xs md:text-lg md:pb-2">
        Our Uhack 5.0 registrations are live.{" "}
        <a
          rel="noreferrer"
          href="https://uhack5.devfolio.co/"
          target="_blank"
          className="form-link"
        >
          Click Here to Register
        </a>
      </h3>
    </div>
  );
}
