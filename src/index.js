import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';

//context
import {PostProvider} from './context/post.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostProvider>
      <App />
    </PostProvider>
  </React.StrictMode>
);

