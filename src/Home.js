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
            <div>
                <div className='home-stuff'>
                    <img className='profile-pic' src='https://media.licdn.com/dms/image/C5603AQFBeKst4cNITA/profile-displayphoto-shrink_200_200/0?e=1553731200&v=beta&t=b_lg3HEMXKr01txWeC77gYW-l5PLivtIVf3pgVuzFqY' alt/>
                    <div className='under-profile-description-div'>Showing the talents and accomplishments of Aaron Braithwaite as a web developer</div>
                </div>
            </div>
        )
    }
}

export default Home;