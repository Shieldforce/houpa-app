import React from 'react';
import './App.css';
import BreadcrumbComponent from './components/Breadcrumb/BreadcrumbComponent';
import HeaderComponent from "./components/Header/HeaderComponent"
import ContentComponent from "./components/Content/ContentComponent"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <HeaderComponent/>
            <BreadcrumbComponent/>
            <ContentComponent/>
        </div>
    );
}

export default App;
