import ReactWordcloud from "react-wordcloud";
import words from "./words";

const Home = ({ userInfo }) =>{
    return(
        <div className='home-container'>
            <div><ReactWordcloud words={words}/></div>
            <div className='home-item'>
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