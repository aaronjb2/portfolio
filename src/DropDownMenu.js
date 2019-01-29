import React, {Component} from 'react';
import './App.css';

class DropDownMenu extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return (
            <div className='drop-down-menu'>
                <div className='giving-space'></div>
                <a href = '/'><div id={this.props.currentPage==='home'?'selected1':'not-selected1'} className='drop-down-option'><div className='centerpiece'><h3 className='label'>Home</h3></div></div></a>
                <a href = '/#/about'><div id={this.props.currentPage==='about'?'selected':'not-selected'} className='drop-down-option'><div className='centerpiece'><h3 className='label'>About</h3></div></div></a>
                <a href = '/#/projects'><div id={this.props.currentPage==='projects'?'selected':'not-selected'} className='drop-down-option'><div className='centerpiece'><h3 className='label'>Projects</h3></div></div></a>
                <a href = '/#/skills'><div id={this.props.currentPage==='skills'?'selected':'not-selected'} className='drop-down-option'><div className='centerpiece'><h3 className='label'>Skills</h3></div></div></a>
                <a href = '/#/contact'><div id={this.props.currentPage==='contact'?'selected':'not-selected'} className='drop-down-option'><div className='centerpiece'><h3 className='label'>Contact</h3></div></div></a>
            </div>
        )
    }
}

export default DropDownMenu;