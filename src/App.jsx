import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

class App extends Component {
    state = {  } 
    render() { 
        return  <>
                    <Header />
                    <Main />
                    <Footer />
                </>;
    }
}
 
export default App;