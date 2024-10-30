import React from 'react';
import SwiperCore from 'swiper/core';
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import profilePhoto from './image.jpg';
import './Projects.css'
import './index.css';

SwiperCore.use([Navigation, Pagination]);

const projects = [
  {
    title: 'Project 1',
    img: profilePhoto,
    description: 'This is a description for Project 1.',
  },
  {
    title: 'Project 2',
    img: profilePhoto,
    description: 'This is a description for Project 2.',
  },
  {
    title: 'Project 3',
    img: profilePhoto,
    description: 'This is a description for Project 3.',
  },
];

const Projects = () => {
    return (
        <div className="projects">
        <h2>Projects</h2>
        <Swiper
          navigation
          pagination={{ clickable: true }}
          className="swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div
                className="project-info">
                <h3>
                  {project.title}
                </h3>
                <img
                  src={project.img}
                  alt={project.title}
                />
                <p>
                  {project.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
export default Projects;
