import React from "react";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message},<br/> mail: <a href={`mailto:${email}`}>{email}</a>
       <br/> phone: <span itemprop="telephone"><a href={"tel:+123456890"}>9140581709</a></span>
      </p>
      
    </>
  );
};

export default GetInTouch;
