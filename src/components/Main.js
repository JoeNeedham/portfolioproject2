import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import PowerButton from '../subComponents/PowerButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;

position: relative;

h2,h3,h4,h5,h6{
    font-family: 'Karla', sans-serf;
    font-weight: 500;
}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`

const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`

const WORK = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 45%;
left: calc(1rem + 2vw);
transform: rotate(-90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`
const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`
const ABOUT = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
`

const Center = styled.button`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&>:last-child{
    padding-top: 1rem;
}
`


const Main = () => {
    return (
        <MainContainer>
            <Container>
                <PowerButton />
                <LogoComponent />
                <SocialIcons />
                <Center>
                    <YinYang width={150} height={150} fill='currentColor' />
                    <span>click here</span>
                </Center>
                <Contact target="_blank" to={{pathname:"/"}}>
                    <h2>
                        Say hi..
                    </h2>
                </Contact>
                <BLOG target="_blank" to={{pathname:"/"}}>
                    <h2>
                        Blog
                    </h2>
                </BLOG>
                <WORK to={{pathname:"/work"}}>
                    <h2>
                        Work
                    </h2>
                </WORK>
                <BottomBar>
                    <ABOUT to={{pathname:"/about"}}>
                        <h2>
                            About
                        </h2>
                    </ABOUT>
                    <SKILLS to={{pathname:"/skills"}}>
                        <h2>
                            My Skills
                        </h2>
                    </SKILLS>
                </BottomBar>
            </Container>
        </MainContainer>
    )
}

export default Main