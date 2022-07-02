import React, { useState, useRef, useEffect } from "react";

function RenderLog(props) {
  console.log('Render log: ' + props.children);
  return (<>{props.children}</>);
}
function LifeCycle(props) {

  console.log('Body');
  const [count, setCount] = useState(0);
  const willMount = useRef(true);

  if (willMount.current) {
      console.log('First time load (it runs only once)');
      setCount(2);
      willMount.current = false;
  } else {
      console.log('Repeated load');
  }

  useEffect(() => {
      console.log('Component did mount (it runs only once)');
      return () => console.log('Component will unmount');
  }, []);

  useEffect(() => {
      console.log('Component did update');
  });

  useEffect(() => {
      console.log('Component will receive props');
  }, [count]);


  return (
      <>
      <h1>{count}</h1>
      <RenderLog>{count}</RenderLog>
      </>
  );
}

export default LifeCycle;