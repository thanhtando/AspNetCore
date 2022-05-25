import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import UiProvider from '../context/uiContext';
import StoreRedux from '../redux/store';

const RootProvider = ({children}) => {

  return(
    <BrowserRouter>
      <UiProvider>
        <Provider store={StoreRedux}>
          {children}
        </Provider>
      </UiProvider>

    </BrowserRouter>
  )
}
export default RootProvider;