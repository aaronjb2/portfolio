import React, {Component} from 'react';
import './App.css'
import execution from './images/execution.PNG';
import identity from './images/identity.PNG';
import MerlinGuess from './images/MerlinGuess.PNG';
import ProposeQuest from './images/ProposeQuest.PNG';
import about from './images/about.PNG';
import board from './images/board.PNG';
import edit from './images/edit.PNG';
import Pieces from './images/Pieces.PNG';


class Projects extends Component{
    constructor(props){
        super(props);

        this.state = {
            first_project:'normal',
            first_project_stage:0,
            second_project:'normal',
            second_project_stage:0
        }
    }

    componentDidMount(){
        this.props.getRidOfDropDownMenu();
        this.props.setPage('projects');
    }

    render(){
        return (
            <div className='projects'>
                <div>
                    <h1 className='page-title'>Projects</h1>
                </div>
                <div className='container-of-projects'>
                    <div className='holder-of-header-and-subheader' id='time-to-stretch'>
                        <h2>Sabotage The Quest</h2>
                        <h3>Personal Project</h3>
                    </div>
                    <div className='bbbnnn'>

                    </div>
                    <div className='holder-of-domain-and-githubs' id='time-to-stretch'>
                        <div className='alpha' id='time-to-stretch'><h3>domain:</h3></div>
                        <div className='bravo' id='time-to-stretch'><h3>sabotagethequest.com</h3></div>
                        <div className='charlie' id='time-to-stretch'><h3>github:</h3></div>
                        <div className='delta' id='time-to-stretch'><h3>github.com/aaronjb2/personalproject</h3></div>
                    </div>
                    <div className='el-espacio'>

                    </div>
                    <div className='container-of-carousel' id='time-to-stretch'>
                        <div className='container-of-go-through-pictures-button'>
                            <button disabled={this.state.first_project!=='normal'} onClick={()=>{
                                this.setState({first_project:'left'});
                                setTimeout(()=>{
                                    this.setState({first_project_stage:this.state.first_project_stage===3?0:this.state.first_project_stage+1,first_project:'normal'})
                                    console.log('this.state.first_project_stage:',this.state.first_project_stage)
                                },510);
                            }}><div className='top-line-thingy-left-side'></div><div className='bottom-line-thingy-left-side'></div></button>
                        </div>
                        <div className='container-of-project-picture'>
                            <div className={this.state.first_project==='normal'?'pictures-for-display-div1':this.state.first_project==='left'?'pictures-for-display-div2':'pictures-for-display-div3'}>
                                <div className='proj-pic-div'>
                                    <div className={this.state.first_project_stage===0?'carrier-of-propose-quest':this.state.first_project_stage===1?'carrier-of-identity':this.state.first_project_stage===2?'carrier-of-execution':'carrier-of-merlin-guess'}>
                                        <img className='cool-picture' src={this.state.first_project_stage===0?ProposeQuest:this.state.first_project_stage===1?identity:this.state.first_project_stage===2?execution:MerlinGuess}/>
                                    </div>
                                </div>
                                <div className='i-have-a-blank-space'>
                                    
                                </div>
                                <div className='proj-pic-div'>
                                    <div className={this.state.first_project_stage===3?'carrier-of-propose-quest':this.state.first_project_stage===0?'carrier-of-identity':this.state.first_project_stage===1?'carrier-of-execution':'carrier-of-merlin-guess'}>
                                        <img className='cool-picture' src={this.state.first_project_stage===3?ProposeQuest:this.state.first_project_stage===0?identity:this.state.first_project_stage===1?execution:MerlinGuess}/>
                                    </div>
                                </div>
                                <div className='i-have-a-blank-space'>

                                </div>
                                <div className='proj-pic-div'>
                                    <div className={this.state.first_project_stage===2?'carrier-of-propose-quest':this.state.first_project_stage===3?'carrier-of-identity':this.state.first_project_stage===0?'carrier-of-execution':'carrier-of-merlin-guess'}>
                                        <img className='cool-picture' src={this.state.first_project_stage===2?ProposeQuest:this.state.first_project_stage===3?identity:this.state.first_project_stage===0?execution:MerlinGuess}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container-of-go-through-pictures-button'>
                            <button disabled={this.state.first_project!=='normal'} onClick={()=>{
                                this.setState({first_project:'right'});
                                setTimeout(()=>{
                                    this.setState({first_project_stage:this.state.first_project_stage===0?3:this.state.first_project_stage-1,first_project:'normal'})
                                },510);
                            }}><div className='top-line-thingy-right-side'></div><div className='bottom-line-thingy-right-side'></div></button>
                        </div>
                    </div>
                    <div className='el-space'>

                    </div>
                    <div className='container-for-paragraphs-describing-project' id='time-to-stretch'>
                        <p>Sabotage The Quest is a web application that allows users to play Resistance Avalon through their phones with a host computer screen to display all the results of the game as they play.</p>
                        <p>Important technologies used to make this app include PostgreSQL and Socket.io.</p>
                    </div>
                    <div className='holder-of-header-and-subheader' id='time-to-stretch'>
                        <h2>Phat Dragon</h2>
                        <h3>Group Project</h3>
                    </div>
                    <div className='tiny-bit-of-space-very-small'>

                    </div>
                    <div className='bbbnnn'>

                    </div>
                    <div className='holder-of-domain-and-githubs' id='time-to-stretch'>
                        <div className='alpha' id='time-to-stretch'><h3>domain:</h3></div>
                        <div className='bravo' id='time-to-stretch'><h3>phatdragon.net</h3></div>
                        <div className='charlie' id='time-to-stretch'><h3>github:</h3></div>
                        <div className='delta' id='time-to-stretch'><h3>github.com/SIMDND/simdnd</h3></div>
                    </div>
                    <div className='el-espacio'>

                    </div>
                    <div className='container-of-carousel' id='time-to-stretch'>
                        <div className='container-of-go-through-pictures-button'>
                            <button disabled={this.state.second_project!=='normal'} onClick={()=>{
                                this.setState({second_project:'left'});
                                setTimeout(()=>{
                                    this.setState({second_project_stage:this.state.second_project_stage===3?0:this.state.second_project_stage+1,second_project:'normal'})
                                },510);
                            }}><div className='top-line-thingy-left-side'></div><div className='bottom-line-thingy-left-side'></div></button>
                        </div>
                        <div className='container-of-project-picture'>
                            <div className={this.state.second_project==='normal'?'pictures-for-display-div1':this.state.second_project==='left'?'pictures-for-display-div2':'pictures-for-display-div3'}>
                                <div className='proj-pic-div'>
                                    <div className={this.state.second_project_stage===0?'carrier-of-about':this.state.second_project_stage===1?'carrier-of-edit':this.state.second_project_stage===2?'carrier-of-pieces':'carrier-of-board'}>
                                        <img className='cool-picture' src={this.state.second_project_stage===0?about:this.state.second_project_stage===1?edit:this.state.second_project_stage===2?Pieces:board}/>
                                    </div>
                                </div>
                                <div className='i-have-a-blank-space'>
                                    
                                </div>
                                <div className='proj-pic-div'>
                                    <div className={this.state.second_project_stage===3?'carrier-of-about':this.state.second_project_stage===0?'carrier-of-edit':this.state.second_project_stage===1?'carrier-of-pieces':'carrier-of-board'}>
                                        <img className='cool-picture' src={this.state.second_project_stage===3?about:this.state.second_project_stage===0?edit:this.state.second_project_stage===1?Pieces:board}/>
                                    </div>
                                </div>
                                <div className='i-have-a-blank-space'>

                                </div>
                                <div className='proj-pic-div'>
                                    <div className={this.state.second_project_stage===2?'carrier-of-about':this.state.second_project_stage===3?'carrier-of-edit':this.state.second_project_stage===0?'carrier-of-pieces':'carrier-of-board'}>
                                        <img className='cool-picture' src={this.state.second_project_stage===2?about:this.state.second_project_stage===3?edit:this.state.second_project_stage===0?Pieces:board}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container-of-go-through-pictures-button'>
                            <button disabled={this.state.second_project!=='normal'} onClick={()=>{
                                this.setState({second_project:'right'});
                                setTimeout(()=>{
                                    this.setState({second_project_stage:this.state.second_project_stage===0?3:this.state.second_project_stage-1,second_project:'normal'})
                                },510);
                            }}><div className='top-line-thingy-right-side'></div><div className='bottom-line-thingy-right-side'></div></button>
                        </div>
                    </div>
                    <div className='container-for-paragraphs-describing-project' id='time-to-stretch'>
                        <p>Phat Dragon patterns itself after Dungeons and Dragons. It allows users to interact with other users on a board. A dungeon master can swap out boards and toss monster and obstacle tokens on the board.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;