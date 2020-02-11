import React from 'react';

import './all-pages.styles.scss';

import MyPicture from '../../assets/aquila.jpg';


export const About = () => {
  return ( 
    <div className='about'>
      <div className='write-up'>
        <h1>About Me</h1>
        <p>I'm a passionate  Software Developer, a lover of Python with hands-on experience in efficiently coding web applications using modern Python and Golang</p>
        <p>My childhood curiosity led to my educational focus in engineering and technology, and over the years I have gained experience in building responsive web applications with Python(Django) and Golang. <br/>
        My programming experience has been both challenging and fun working on programming projects with the added thrill of being able to communicate directly with my computer.</p>
        <p>PS: When I'm not coding, I love to skate.</p>
        <code className='code'>ROTATE SCREEN TO SEE MY PICTURE :) </code>
      </div>
      <div className='me'>
        <img src={MyPicture} alt='Me' />
      </div>
    </div>
      
    );
}

export const Contact = () => {
  return ( 
      <div className='contact'>
        <h1>CONTACT</h1>
        <h3>Woah! Let's do business</h3>
        <p>Let's talk over the mail:</p><a href='mailto:josheriff@gmail.com'><button>mail me</button></a><br/>
        <a href='https://drive.google.com/open?id=1XgRxb6v3XmM1JNfNVaeN1cPnmO78FcSv'><button>my resume</button></a>
      </div>
    );
}

export const MyWork = () => { 
  return ( 
      <div className='my-work'>
        
        
      </div>
    );
}

export const MySkill = () => {
  return ( 
      <div className='contact'>
        <div className='skill-description'>
          <h1>MY SKILL</h1>
          <p>My area of my specialization is backend development.</p>
        
          <p>I have backend experience using Python and Golang</p>
          <p>View my <a style={{textDecoration: 'underline'}} href='https://drive.google.com/open?id=1XgRxb6v3XmM1JNfNVaeN1cPnmO78FcSv'>resume</a> for more details on my experience</p>
        </div>
      </div>
    );
}