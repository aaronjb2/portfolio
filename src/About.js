import React, {Component} from 'react';

class About extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    componentDidMount(){
        this.props.getRidOfDropDownMenu();
        this.props.setPage('about');
        setTimeout(()=>{
            console.log('this.props.currentPage:',this.props.currentPage)
        })
    }

    render(){
        return (
            <div className='brav'>
                <div className='holder-of-page-title-div'>
                    <h1 className='page-title'>About Me</h1>
                </div>
                <div className='that-is-what-it-is-all-about'>
                    <div className='holder-of-my-photo'>
                        <img className='my-photo' src='https://media.licdn.com/dms/image/C5603AQFBeKst4cNITA/profile-displayphoto-shrink_200_200/0?e=1554336000&v=beta&t=UvI4OMx3ODp5hJPL2T8sRN-ZnHV9aW7Vcpj0R_HmlF0' alt/>
                    </div>
                    <div className='about-space'></div>
                    <div className='paragraph-area'>
                        <p className='my-story'>I was born and raised in Utah.  
                            I enjoy jokes and superhero movies.  
                            I went to Brigham Young University for Electrical Engineering, 
                            then I decided to become a web developer.  
                            I attended DevMountain’s immersive web development program.  
                            My earliest project ambition was to make games into web 
                            applications that users can play on their phones.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;