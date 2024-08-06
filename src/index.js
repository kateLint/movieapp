import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/store';


// setup axious
const REACT_APP_ACCESS_TOKEN='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOThhZDllZWYwOWY1YmI0ODZlNzM3YzExZTMyOWJhZSIsIm5iZiI6MTcyMjI0NDU1Mi4xNDQxMzIsInN1YiI6IjY2YTc1YWY5Y2JjZmRmNGZkYTExZmQ4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._nrOv-Z-xU3ItJd_KEUZJKB5CHJX8VWJm9OeBHqeDbs'
axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.headers.common['Authorization'] = `Bearer ${REACT_APP_ACCESS_TOKEN}`

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
