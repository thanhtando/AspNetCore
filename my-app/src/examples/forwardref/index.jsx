
//forwardref
import React, { useRef, useEffect } from "react";

import Input from "./input";

export const ForWardRefBasic = (props) => {

  // Creating refs for username and password
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  // We are also creating a reference to the Login button
  const submitBtnRef = useRef(null);

  // useEffect to set the initial focus to the user name input
  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  // This function is used to handle the key press.
  // Whenever user hits enter it moves to the next element
  const handleKeyPress = (e, inputType) => {
    if (e.key === "Enter") {
      switch (inputType) {
        // Checks if Enter pressed from the username field?
        case "username":
          // Moves the focus to the password input field
          passwordRef.current.focus();
          break;
        // Checks if Enter pressed from the password field?
        case "password":
          // Moves the focus to the submit button
          submitBtnRef.current.focus();
          e.preventDefault();
          break;
        default:
          break;
      }
    }
  };

  // Function to handle the submit click from the button
  const handleSubmit = () => {
    alert("submitted");
  };

  // getting the style as prop from the parent.
  // Basic style to center the element and apply a bg color
  const { style } = props;
  return (
    <div style={style}>
      <h2>Example for using useRef Hook</h2>
      <h3>Login</h3>
      {/* New. Using the Component instead of input element */}
      <Input
        type="text"
        name="username"
        ref={userNameRef}
        onKeyDown={(e) => handleKeyPress(e, "username")}
      />
      {/* New. Using the Component instead of input element */}
      <Input
        type="password"
        name="password"
        ref={passwordRef}
        onKeyDown={(e) => handleKeyPress(e, "password")}
      />
      <button ref={submitBtnRef} onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export const ForWardRefNone = (props) => {
  // Creating refs for username and password
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  // We are also creating a reference to the Login button
  const submitBtnRef = useRef(null);

  // useEffect to set the initial focus to the user name input
  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  // This function is used to handle the key press.
  // Whenever user hits enter it moves to the next element
  const handleKeyPress = (e, inputType) => {
    if (e.key === "Enter") {
      switch (inputType) {
        // Checks if Enter pressed from the username field?
        case "username":
          // Moves the focus to the password input field
          passwordRef.current.focus();
          break;
        // Checks if Enter pressed from the password field?
        case "password":
          // Moves the focus to the submit button
          submitBtnRef.current.focus();
          e.preventDefault();
          break;
        default:
          break;
      }
    }
  };

  // Function to handle the submit click from the button
  const handleSubmit = () => {
    alert("submitted");
  };

  // getting the style as prop from the parent.
  // Basic style to center the element and apply a bg color
  const { style } = props;
  return (
    <div style={style}>
      <h2>Example for using useRef Hook</h2>
      <h3>Login</h3>
      <input
        type="text"
        name="username"
        ref={userNameRef}
        onKeyDown={(e) => handleKeyPress(e, "username")}
      />
      <input
        type="password"
        name="password"
        ref={passwordRef}
        onKeyDown={(e) => handleKeyPress(e, "password")}
      />
      <button ref={submitBtnRef} onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};


import React from "react";

/* In the functional component, a second argument 
is passed called ref, which will have access to 
the refs being forwarded from the parent */
const Input = (props, ref) => {
  /* assigning the ref attribute in input and spreading 
the other props which will contain type, name, onkeydown etc */
  return <input {...props} ref={ref} />;
};

// wrapping the Input component with forwardRef
const forwardedRef = React.forwardRef(Input);

// Exporting the wrapped component
export default forwardedRef;
