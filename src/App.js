import React, {Component} from 'react'
import Header from './compomets/Header/Header'
import MainContent from './compomets/MainContent/MainContent'
import Footer from './compomets/Footer/Footer'
import logo from './logo_white.svg'
import './App.sass'

class App extends Component{
  render(){
    return (
      <div className="App">
        <Header logo={logo} />
        <MainContent />
        <Footer />
      </div>
    )
  }
}

export default App
