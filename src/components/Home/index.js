import ReactWordcloud from "react-wordcloud";
import words from "./words";

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

const callbacks = {
    getWordColor: word => word.value > 5 ? "yellow" : "white"
  }

const Home = ({ userInfo }) =>{
    return(
        <div className='home-container'>
            <div className='home-item cloud' style={{ height: 450, width: "100%" }}>
                <ReactWordcloud words={words} callbacks={callbacks}/>
            </div>
            <div className='home-item opening'>
                <div>
                <h1>Welcome
                    {userInfo
                    ? ` ${userInfo.email}`
                    : ' to Speech Audit'
                    }
                </h1>
                <p>Understand how others perceive what you say.</p>
                </div>
            </div>
        </div>
    )
}

export default Home