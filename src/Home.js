import React, {Component} from 'react';
import './App.css';

class Home extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    componentDidMount(){
        this.props.getRidOfDropDownMenu();
        this.props.setPage('home');
        setTimeout(()=>{
            console.log('this.props.currentPage:',this.props.currentPage)
        })
    }

    render(){
        return (
            <div className='brav' id='time-to-stretch'>
                <div className='home-stuff'>
                    <div id='time-to-stretch' className='under-profile-description-div'>Showing the talents and accomplishments of Aaron Braithwaite as a web developer</div>
                </div>
            </div>
        )
    }
}

export default Home;