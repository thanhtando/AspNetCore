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
