import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'frontend' ?
            <ToggleButton active value="frontend" onClick={() => setToggle('frontend')}>Frontend</ToggleButton>
            :
            <ToggleButton value="frontend" onClick={() => setToggle('frontend')}>Frontend</ToggleButton>
          }
          <Divider />
          {toggle === 'fullstack' ?
            <ToggleButton active value="fullstack" onClick={() => setToggle('fullstack')}>Full Stack</ToggleButton>
            :
            <ToggleButton value="fullstack" onClick={() => setToggle('fullstack')}>Full Stack</ToggleButton>
          }
          <Divider />
          {toggle === 'java' ?
            <ToggleButton active value="java" onClick={() => setToggle('java')}>Java</ToggleButton>
            :
            <ToggleButton value="java" onClick={() => setToggle('java')}>Java</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects