import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './Redux/Reducer/reducer';

const clientid =
  '429656974916-th46reibifcema4hsae20ss637ap26oc.apps.googleusercontent.com';

const store = configureStore({
  reducer,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={clientid}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
