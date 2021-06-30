import React from 'react'
import {Provider } from 'react-redux'
import store from './store'
import Header from './components/Header';
import DataTable from './components/DataTable';
import DataGraph from './components/DataGraph';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
        <Header/>
        <DataTable/>
        <hr />
        <DataGraph/>
        <Footer/>
    </Provider>
  );
}

export default App;
