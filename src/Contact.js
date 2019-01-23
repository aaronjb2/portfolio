import React, {Component} from 'react';
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
            <div>
                <div className='contact-info-div'>
                <div className='contact-piece'>
                    <h1 className='page-title'>Contact Info</h1>
                </div>
                    <div className='contact-piece'>
                        <h4 className='emphasis'>Email:</h4>
                        <h4 className='important-contact-info'>aaronjbraithwaite@gmail.com</h4>
                    </div>
                    <div className='contact-piece'>
                        <h4 className='emphasis'>LinkedIn:</h4>
                        <h4 className='important-contact-info'>linkedin.com/in/aaronjbraithwaite</h4>
                    </div>
                    <div className='contact-piece'>
                        <h4 className='emphasis'>Github:</h4>
                        <h4 className='important-contact-info'>github.com/aaronjb2</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;