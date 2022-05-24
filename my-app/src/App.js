
// import { useEffect, useState } from 'react';
import './App.scss';

//MyMaterial react context
// import { useMyMaterial } from './context/material provider';

//MyMaterial react theme
// import ThemeMain from './resource/theme/theme';

//rtl plugins
//import rtlPlugin from 'stylist-plugin-rtl';
// import { CacheProvider } from '@emotion/react';
// import createCache from '@emotion/cache';
// import { CssBaseline, ThemeProvider } from '@mui/material';
// import Sidenav from './element/Sidenav';
import Example from './examples';

const App = () => {
  // const [controller, dispatch] = useMyMaterial();
  // const { direction, darkMode, layout } = controller;

  // //rtl setting
  // const [rtlCache, setRtlCache] = useState(null);
  
  // //setting the dir attribute for the body element
  // useEffect(()=>{
  //   console.log("direction",direction);
  //   document.body.setAttribute("dir", direction);
  // },[direction]);

  //cache for rtl
  // useMemo(()=>{
  //   const cacheRTL = createCache({
  //     key: "rtl",
  //     stylistPlugins: [rtlPlugin]
  //   });
  //   setRtlCache(cacheRTL);
  // },[])

  //router
  // const RouterTable = (allRoutes) => {
  //   // const table = [];
  //   // allRoutes.map((route)=>{
  //   //   if(route.coll)
  //   // })
  // }
  return(
    <Example />
  )
  // return ((direction==="rtl")
  //   ?<CacheProvider value={rtlCache}>
  //     <ThemeProvider theme={ThemeMain}>
        
  //       <CssBaseline />
  //       {layout==="dashboard" &&(
  //         <div>
  //           <Sidenav />
  //         </div>
  //       )}
  //       <div>
  //         <label>rtl</label>
  //       </div>
  //     </ThemeProvider>
  //   </CacheProvider>
  //   :<ThemeProvider theme={ThemeMain}>
  //     <div>
  //       <label>none rtl</label>
  //     </div>
  //   </ThemeProvider>
  // );
}

export default App;