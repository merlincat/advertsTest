import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.jsx'
import '../node_modules/modern-normalize/modern-normalize.css';
import './index.css'

// fonts
import './fonts/Inter-Medium.woff2';
import './fonts/Inter-Regular.woff2';
import './fonts/Inter-SemiBold.woff2';
//

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
