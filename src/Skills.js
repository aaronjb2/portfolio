import React, {Component} from 'react';

class Skills extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    componentDidMount(){
        this.props.getRidOfDropDownMenu();
        this.props.setPage('skills');
        setTimeout(()=>{
            console.log('this.props.currentPage:',this.props.currentPage)
        })
    }

    render(){
        return (
            <div className='skills'>
                <div className='my-contact-piece'>
                    <div className='holder-of-page-title-div'><h1 className='page-title'>Skills</h1></div>
                    <div className='holder-of-very-particular-set-of-skills'>
                        <div className='skill-div'>
                            <div><img src='https://quiksite.com/wp-content/uploads/2016/09/Javascript.png?x14593' className='skill'/></div>
                            <div className='title-of-skill-div'>Javascript</div>
                        </div>
                        <div className='skill-div'>
                        <div><img src='https://img.icons8.com/color/1600/nodejs.png' className='skill'/></div>
                            <div className='title-of-skill-div'>Nodejs</div>
                        </div>
                        <div className='skill-div'>
                        <div><img src='http://cdn.onlinewebfonts.com/svg/img_52059.png' className='skill'/></div>
                            <div className='title-of-skill-div'>CSS</div>
                        </div>
                        <div className='skill-div'>
                        <div><img src='https://cdn-images-1.medium.com/max/1600/1*WcRnU2ERqYHZBKBQ0zXCvg.png' className='skill'/></div>
                            <div className='title-of-skill-div'>Redux</div>
                        </div>
                        <div className='skill-div'>
                        <div><img src='http://www.stickpng.com/assets/images/58482deccef1014c0b5e4a64.png' className='skill'/></div>
                            <div className='title-of-skill-div'>Socket.io</div>
                        </div>
                        <div className='skill-div'>
                        <div><img src='http://www.stickpng.com/assets/images/584815fdcef1014c0b5e497a.png' className='skill'/></div>
                            <div className='title-of-skill-div'>PostgreSQL</div>
                        </div>
                        <div className='skill-div'>
                        <div><img src='https://png.pngtree.com/svg/20170719/react_1353128.png' className='skill'/></div>
                            <div className='title-of-skill-div'>React</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;