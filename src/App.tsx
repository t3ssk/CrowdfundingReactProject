import React from 'react';
import {Layout} from './Components/Layout/Layout';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

var firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "portfolio-crowdfund-project.firebaseapp.com",
  projectId: "portfolio-crowdfund-project",
  storageBucket: "portfolio-crowdfund-project.appspot.com",
  messagingSenderId: "567272035196",
  appId: "1:567272035196:web:6efbd2f5d31749e8f60af9",
  databaseURL: 'https://portfolio-crowdfund-project-default-rtdb.firebaseio.com/'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function App() {
  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
