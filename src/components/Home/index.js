import ReactWordcloud from "react-wordcloud";
import words from "./words";

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import { Button } from "react-bootstrap";

const callbacks = {
    getWordColor: word => word.value > 5 ? "yellow" : "black"
  }

const Home = ({ userInfo }) =>{
    return(
        <div className='home-container'>
            <div className='home-item cloud'>
                <ReactWordcloud words={words} callbacks={callbacks}/>
                <div className='statement'>
                    <p className='statement-item'>Understand your tone.</p>
                    <p className='statement-item'>Stop wondering how you sound.</p>
                    <Button href='/demo' variant="warning" style={{ marginBottom: '2rem'}}>
                    Learn More {">>"}
                    </Button>
                </div>
                
            </div>
            <div className='home-item opening'>
                <div>
                    <h1>Welcome
                        {userInfo
                        ? ` ${userInfo.email}`
                        : ' to Speech Audit'
                        }
                    </h1>
                    <div className='instruction-container'>
                        <p style={{marginBottom:'2rem', fontSize:'1.75rem'}}>How It Works</p>
                        <div className='instruction'>
                            <div className='instruction-item'>
                                <img src="https://cdn-icons-png.flaticon.com/512/1536/1536475.png" alt="click" style={{ height: "2rem"}}></img>
                                <p>
                                Click 'About' and read the importance of tone.
                                </p>
                            </div>
                            <div className='instruction-item'>
                                <img src="https://cdn-icons-png.flaticon.com/512/3596/3596080.png" alt="input" style={{ height: "2rem"}}></img>
                                <p>
                                    Input any phrase and wait for the result. 
                                </p>
                            </div>
                            <div className='instruction-item'>
                                <img src="https://cdn-icons.flaticon.com/png/512/310/premium/310869.png?token=exp=1635863706~hmac=22acc1f859ac57a01b986ce4843baad9" alt="login" style={{ height: "2rem"}}></img>
                                <p>
                                    Login to use the speech to tone analyzer.
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            
        </div>
    )
}

export default Home