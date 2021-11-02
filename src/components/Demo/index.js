import React from 'react';

import Tone from '../Tone';

const Demo = () => {
    return(
        <div className='demo'>
          <div className='demo-img'>
            <div className='demo-text'>
            <h1>About Speech Audit</h1>
            <p>Helping others to understand tone.</p>
            </div>
          </div>
          <div className='mission-container'>
            <div className='about-text mission'>
              <p>Mission</p>
            </div>
            <div className='about-text text'>
              <p>
                Tone is the general character or attitude of a place, piece of writting, situation, etc and can helps clarifies and conveys meaning. Similar to putting ones best foot foward, understanding your tone or someone else can affect how people perceive you. Speech Audit's mission is to help others understand tone with a click of a button. 
              </p>
            </div>
          </div>
          <div className='quote'>
            <div>
              <img src='https://www.hrcloud.com/hubfs/Group%2040-1.png' alt='conflict resolution'></img>
            </div>
            <div className='info-text'>
              <h3>What is <span>Speech Audit</span>?</h3>
              <p>Communication is the center of innovation. It brings people together and allows individual to express their feelings or thoughts. With the impact of COVID, speech audit is here to help with the written communication.</p>
              <p>
                How many time have you asked the question "How do I sound in this email?" or "Does my email/written word convey my feeling?" 
              </p>
              <blockquote>
                10% of conflict is due to difference of opinion and 90% is due to delivery and tone of voice.
                <footer>-Unknown</footer>
              </blockquote>
              <p>
                With the help of speech audit, everyone can feel confident before clicking "SEND". 
              </p>
              <p>Test out the tone analyzer by inputting a phrase / sentence / paragraph and click "SUBMIT"</p>
            </div>
            
          </div>
      <div>
        <Tone/>
      </div>
    </div>
    )
}

export default Demo;
