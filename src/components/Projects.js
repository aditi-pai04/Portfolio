import React from 'react';
import SwiperCore from 'swiper/core';
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import sdd from './sdd.png';
import gmart from './glidemart.png'
import './Projects.css'
import './index.css';

SwiperCore.use([Navigation, Pagination]);

const projects = [
  {
    title: 'Skin disease Detection',
    img: sdd,
    description: 'An ensemble machine learning based skin disease detection system from images and symptoms.',
  },
  {
    title: 'GlideMart',
    img: gmart,
    description: 'An e-commerce simple website for shopping across 5 categories.',
  },
  {
    title: 'Project 3',
    img: sdd,
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
