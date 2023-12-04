import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
//import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
{/* <PowerButton /> */}
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
        Hi, I'm Chiranshu, an aspiring iOS app developer passionate about crafting intuitive user experiences. 
        With a background in frontend projects, I'm dedicated to mastering iOS app development. 
        <br></br>
        Through my projects, I aim to blend functionality with aesthetics, crafting applications that not only work seamlessly but also resonate with users on a deeper level.
        <br></br>
        I'm excited about the possibilities that technology brings and am constantly seeking new opportunities to contribute, learn, and create. I'm open to collaborations, feedback, and potential work opportunities. Feel free to reach out—I'd love to connect!        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
