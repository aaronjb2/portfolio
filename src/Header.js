import React, {Component} from 'react';
import './App.css';

class Header extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return (
            <div className = 'header'>
                <div className='title-section'>
                    <h1 className='my-name'>Aaron J Braithwaite</h1>
                </div>
                <div className='links-section'>
                    <button id ='menu-button' onClick={()=>this.props.toggleDropDownMenu()}>
                        <div className='my-square'>
                            <div className='white-line'></div>
                            <div className='white-line'></div>
                            <div className='white-line'></div>
                            <div className='white-line'></div>
                            <div className='white-line'></div>
                        </div>
                    </button>
                    <div className='option-div'>
                        <a className='head-option' id={this.props.currentPage==='home'?'selected':'not-selected'} href='/'>Home</a>
                    </div>
                    <div className='option-div'>
                        <a className='head-option' id={this.props.currentPage==='about'?'selected':'not-selected'} href='/#/about'>About</a>
                    </div>
                    <div className='option-div'>
                        <a className='head-option' id={this.props.currentPage==='projects'?'selected':'not-selected'} href='/#/projects'>Projects</a>
                    </div>
                    <div className='option-div'>
                        <a className='head-option' id={this.props.currentPage==='skills'?'selected':'not-selected'} href='/#/skills'>Skills</a>
                    </div>
                    <div className='option-div'>
                        <a className='head-option' id={this.props.currentPage==='contact'?'selected':'not-selected'} href='/#/Contact'>Contact</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;