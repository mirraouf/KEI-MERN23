import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import posts from './apiservice';
import PostsContext, { Provider1 } from './context/post';
const root = ReactDOM.createRoot(document.getElementById('root'));

// posts().then((response) => response.json())
//  .then((json) => console.log(json));

root.render(
//     <PostsContext.Provider value={5}>
//     <App />
//   </PostsContext.Provider>
<Provider1>
    <App />
</Provider1>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
