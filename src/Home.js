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
                    <h2>Aaron J Braithwaite</h2>
                    <h2>Full Stack Web Developer</h2>
                </div>
            </div>
        )
    }
}

export default Home;