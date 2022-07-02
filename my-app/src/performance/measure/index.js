import React, {useState, useEffect} from "react";

export default class MeasureRender extends React.Component {
  constructor() {
    super();

    this.mounted = false;
    console.log("measure Start")
  }

  render() {
    const name = this.props.name;
    if (this.mounted) {
      window.performance.mark(`${name}UpdateStart`);
      console.log(window.performance.mark(`${name}UpdateStart`))
    } else {
      window.performance.mark(`${name}MountStart`);
      console.log(window.performance.mark(`${name}MountStart`));
    }
    return this.props.children;
  }

  componentDidMount() {
    this.mounted = true;
    
    const name = this.props.name;
    window.performance.mark(`${name}MountEnd`);
    console.log("mount_end:", window.performance.mark(`${name}MountEnd`))
    window.performance.measure(`${name}Mount`, `${name}MountStart`, `${name}MountEnd`);
    console.log("mount_end_measure",window.performance.measure(`${name}Mount`, `${name}MountStart`, `${name}MountEnd`))
  }

  componentDidUpdate() {
    const name = this.props.name;
    window.performance.mark(`${name}UpdateEnd`);
    console.log("update_end",window.performance.mark(`${name}UpdateEnd`))
    window.performance.measure(`${name}Update`, `${name}UpdateStart`, `${name}UpdateEnd`);
    console.log(window.performance.measure(`${name}Update`, `${name}UpdateStart`, `${name}UpdateEnd`))
  }
}
const MeasureRenderHook = (props) =>{

  //initialization
  // setup props and state
  const [value, setValue]=useState(0)            //initialize your state here
  // const [mount, setMount] = useState(false);
  // const [count, setCount] = useState(0);
  //Mounting
  //  componentWillMount
  console.log('componentWillMount')
  // 
  //  -> 
  //  render
  //  -> 
  //  componentDidMount
  useEffect(() => {
    // Your code here
  }, []);



  //Update
  //(props)  
  // componentWillReceiveProps -> 
  // shouldComponentUpdate -> 
  // componentWillUpdate -> render -> 
  //  componentDidUpdate
      useEffect(()=>{},[])
  //(states)                              
  // shouldComponentUpdate -> 
  // componentWillUpdate -> render -> 
  // componentDidUpdate
      useEffect(()=>{},[])
  //Unmounting
  // componentWillUnmount
    useEffect(() => {
      window.addEventListener('mousemove', () => {});
    
      // returned function will be called on component unmount 
      return () => {
        window.removeEventListener('mousemove', () => {})
      }
    }, [])

  return props.children;
}