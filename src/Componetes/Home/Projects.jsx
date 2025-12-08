import React from "react";
import { Link } from "react-router-dom";
import Tech from "../../assets/WebsiteMookup/Video.png";
import organiz from "../../assets/WebsiteMookup/Graphic.png";
import AutomotiveRetouching from "../../assets/WebsiteMookup/Automotive Retouching.jpg";
import ProductRetouching from "../../assets/WebsiteMookup/Product Retouching.jpg";
import ImageTrail from "../ReactBits/ImageTrail";
import InfiniteMenu from "../ReactBits/InfiniteMenu";

const projects = [
  {
    title: "Video Editng",
    category: "Development",
    year: "2025",
    images: Tech,
    bg: "bg-yellow-100",
  },
  {
    title: "Graphic Design",
    category: "Development ",
    year: "2025",
    images: organiz,
    bg: "bg-pink-100",
  },
  {
    title: "Automotive Retouching",
    category: "Design",
    year: "2019",
    images: AutomotiveRetouching,

    bg: "bg-gray-100",
  },
  {
    title: "Product Retouching",
    category: "Design",
    year: "2019",
    images: ProductRetouching,

    bg: "bg-green-100",
  },


];
const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://google.com/',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }
];

const Projects = () => (
  <section className="bg-gray-50 py-14 px-3 w-full ">
    <div className="max-w-7xl mx-auto">
      {/* Heading */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-green-500 text-sm font-medium tracking-widest mb-2">
          <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
            <path
              d="M10 2L12 7H17L13 11L15 16L10 13L5 16L7 11L3 7H8L10 2Z"
              fill="currentColor"
            />
          </svg>
          MY WORK
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Selected Projects
        </h2>
        <p className="text-gray-600 text-base">
          Here’s a curated selection showcasing my expertise and the achieved
          results.
        </p>
      </div>






{/* <div style={{ height: '600px', position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div> */}
      {/* Projects Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`${project.bg} rounded-2xl p-8 flex flex-col items-center`}
          >
            <Link to="/projects">
            <img
              src={project.images}
              alt={project.title}
              className="h-60 mx-auto drop-shadow-xl rounded-xl"
            />
            </Link>
            <div className="mt-5 w-full">
              <h3 className="text-xl font-semibold text-gray-900">
                {project.title}
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-600 mt-1">
                <span>{project.subtitle}</span>
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="flex justify-center mt-10">
        <Link to="/projects">
          <button className="px-7 py-2 border border-gray-900 rounded-full text-base bg-white hover:bg-gray-100 transition">
            View All Projects
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default Projects;
