
import React, {useState, useEffect} from "react";


// https://reactforyou.com/componentdidupdate-with-react-hooks/
// https://reactjs.org/docs/hooks-effect.html
// https://viblo.asia/p/thay-the-cac-life-cycle-method-bang-react-hooks-Ljy5VXAyZra
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
    } else {
      window.performance.mark(`${name}MountStart`);
    }
    return this.props.children;
  }

  componentDidMount() {
    this.mounted = true;
    
    const name = this.props.name;
    window.performance.mark(`${name}MountEnd`);
    window.performance.measure(`${name}Mount`, `${name}MountStart`, `${name}MountEnd`);
  }

  componentDidUpdate() {
    const name = this.props.name;
    window.performance.mark(`${name}UpdateEnd`);
    window.performance.measure(`${name}Update`, `${name}UpdateStart`, `${name}UpdateEnd`);
  }
}


//life circle

const MeasureRenderHook = (props) =>{

  //initialization
  // setup props and state
  // const [mount, setMount] = useState(false);
  // const [count, setCount] = useState(0);
  //Mounting
  //  componentWillMount
  // useEffect(()=>{})
  //  -> 
  //  render
  //  -> 
  //  componentDidMount
  const {name} = props
  console.log(name);
  useEffect(() => {
    console.log('mounted');
    window.performance.mark(`${name}MountEnd`)
    console.log(window.performance.mark(`${name}MountEnd`).duration)
  });

  //Update
  //(props)  
  // componentWillReceiveProps -> 
  // shouldComponentUpdate -> 
  // componentWillUpdate -> render -> componentDidUpdate
  //(states)                              
  // shouldComponentUpdate -> 
  // componentWillUpdate -> render -> componentDidUpdate
  
  //Unmounting
  // componentWillUnmount


  return props.children;
}