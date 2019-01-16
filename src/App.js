import React, { Component } from 'react';
import logo from './logo.svg';
import {HashRouter, Route, Switch, Redirect,Link} from 'react-router-dom';
import About from './About.js';
import Header from './Header.js';
import Home from './Home.js';
import Projects from './Projects.js';
import Skills from './Skills.js';
import Contact from './Contact.js';
import DropDownMenu from './DropDownMenu.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      dropDownMenu:true,
      currentPage:'home'
    }
    this.toggleDropDownMenu=this.toggleDropDownMenu.bind(this);
    this.getRidOfDropDownMenu=this.getRidOfDropDownMenu.bind(this);
    this.setPage = this.setPage.bind(this);
  }

  componentDidMount(){
    this.getRidOfDropDownMenu()
  }

  toggleDropDownMenu(){
    this.setState({dropDownMenu:!this.state.dropDownMenu})
  }

  getRidOfDropDownMenu(){
    this.setState({dropDownMenu:false})
  }

  setPage(page){
    this.setState({currentPage:page});
  }

  render() {
    return (
      <div className="App">
        <Header currentPage={this.state.currentPage} toggleDropDownMenu={this.toggleDropDownMenu}/>
        {this.state.dropDownMenu?<DropDownMenu currentPage={this.state.currentPage} getRidOfDropDownMenu = {this.getRidOfDropDownMenu} toggleDropDownMenu={this.toggleDropDownMenu}/>:null}
        <div className='space'></div>
        <HashRouter>
          <Switch>
            <Route exact path='/' render = {(props) =><Home {...props} currentPage={this.state.currentPage} getRidOfDropDownMenu = {this.getRidOfDropDownMenu} toggleDropDownMenu={this.toggleDropDownMenu} setPage={this.setPage}/>}/>}/>
            <Route exact path='/about' render = {(props) =><About {...props} currentPage={this.state.currentPage} getRidOfDropDownMenu = {this.getRidOfDropDownMenu} toggleDropDownMenu={this.toggleDropDownMenu} setPage={this.setPage}/>}/>
            <Route exact path='/contact' render = {(props) =><Contact {...props} currentPage={this.state.currentPage} getRidOfDropDownMenu = {this.getRidOfDropDownMenu} toggleDropDownMenu={this.toggleDropDownMenu} setPage={this.setPage}/>}/>
            <Route exact path='/skills' render = {(props) =><Skills {...props} currentPage={this.state.currentPage} getRidOfDropDownMenu = {this.getRidOfDropDownMenu} toggleDropDownMenu={this.toggleDropDownMenu} setPage={this.setPage}/>}/>
            <Route exact path='/projects' render = {(props) =><Projects {...props} currentPage={this.state.currentPage} getRidOfDropDownMenu = {this.getRidOfDropDownMenu} toggleDropDownMenu={this.toggleDropDownMenu} setPage={this.setPage}/>}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
