import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';
import Dialogs from './component/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
        <div className='all_wrapper'>
            <Header/>
            <div className='app_wrapper'>
                <Navbar/>
                <Route path='/profile' component={Profile}/>
                <Route path='/dialogs' component={Dialogs}/>
                {/*<Profile />*/}
                {/*<Dialogs/>*/}
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
