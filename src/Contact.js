import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class Contact extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    componentDidMount(){
        this.props.getRidOfDropDownMenu();
        this.props.setPage('contact');
        setTimeout(()=>{
            console.log('this.props.currentPage:',this.props.currentPage)
        })
    }

    render(){
        return (
            <div className='brav'>
                <div className='contact-info-div'>
                    <div className='holder-of-page-title-div'>
                        <h1 className='page-title'>Contact</h1>
                    </div>
                    <div className='contact-piece'>
                        <h4 className='emphasis'>Email:</h4>
                        <h4 className='important-contact-info'>aaronjbraithwaite@gmail.com</h4>
                    </div>
                    <div className='space-traveller'>

                    </div>
                    <div className='contact-piece'>
                        <h4 className='emphasis'>LinkedIn:</h4>
                        <h4 className='important-contact-info'><a id='contact-me' href='https://linkedin.com/in/aaronjbraithwaite'>linkedin.com/in/aaronjbraithwaite</a></h4>
                    </div>
                    <div className='space-traveller'>

                    </div>
                    <div className='contact-piece' id='time-to-stretch'>
                        <h4 className='emphasis'>Github:</h4>
                        <h4 className='important-contact-info'><a id='contact-me' href='https://github.com/aaronjb2'>github.com/aaronjb2</a></h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;