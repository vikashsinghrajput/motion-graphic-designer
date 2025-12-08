import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import projects from "./ProtectedProject/PortfolioData";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import PortfolioSection from "./Test";
import ReactTimeAgo from 'react-time-ago'
// kitne projects ek page par dikhane hain
const ITEMS_PER_PAGE = 4;

const ProjectsSection = () => {
  const time =Date.now();

  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1); // ✅ pagination state

  const navigate = useNavigate();
  const handleClick = () => {
    navigate();
  };

  const filters = ["All", "Motion Graphic", "Graphic Design", "image retouching"];

  // ✅ pehle filter karo
  const filteredProjects = projects.filter(
    (p) =>
      filter === "All" ||
      p.category.toLowerCase().includes(filter.toLowerCase())
  );

  // ✅ phir pagination calculate karo
  const totalPages =
    filteredProjects.length === 0
      ? 1
      : Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // ✅ page change
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <>
      <div className="bg-gray-50 py-14 px-3 w-full ">
        <section className="bg-gray-50 py-20 px-6 md:px-20 max-w-7xl mx-auto ">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between ">
            <div>
              <p className="text-green-600 uppercase text-sm font-semibold flex items-center gap-1">
                ✦ My Work
              </p>
              <h2 className="text-4xl font-bold mt-3 leading-tight">
                Creating next level <br /> digital products
              </h2>
            </div>

            {/* Filters */}
            <div className="flex md:gap-4 mt-6 md:mt-0">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => {
                    setFilter(f);
                    setCurrentPage(1); // ✅ filter change par page 1
                  }}
                  className={`px-4 py-1 text-sm rounded-full ${
                    filter === f
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Image Grid Start */}
          <div className="mt-12 grid md:grid-cols-2 gap-12">
            {paginatedProjects.map((project, index) => (
              <div key={index} className="group">
                <div
                  className={`${project.bg} p-6 rounded-2xl overflow-hidden flex items-center justify-center`}
                >
                  {project.type === "video" ? (
                    <video
                      className="shadow-[18px_17px_26px_-16px_#000000]"
                      src={project.image}
                      height={300}
                      width={300}
                      controls
                    />
                  ) : (
                    // ✅ same PhotoProvider / PhotoView structure jo pehle tha
                    <PhotoProvider>
                      <PhotoView src={project.image}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover shadow-[18px_17px_26px_-16px_#000000]"
                        />
                      </PhotoView>
                    </PhotoProvider>
                  )}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <h3 className="text-lg ">{project.title}</h3>
                    <p className="text-green-600 text-sm">
                      {project.category}
                    </p>
                  </div>
                  <span
                    onClick={handleClick}
                    className="text-gray-400 text-sm cursor-pointer"
                  >
                      Last seen: <ReactTimeAgo date={time} locale="en-US"/>
                  
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Pagination UI */}
          {filteredProjects.length > 0 && (
            <div className="flex items-center justify-center gap-2 mt-10">
              {/* Prev */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1.5 text-sm rounded-full border border-gray-200 bg-white
                           disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-sm"
              >
                Prev
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-8 h-8 text-sm rounded-full border transition
                      ${
                        currentPage === page
                          ? "bg-gray-900 text-white border-gray-900 shadow-sm"
                          : "bg-white text-gray-700 border-gray-200 hover:shadow-sm"
                      }`}
                  >
                    {page}
                  </button>
                );
              })}

              {/* Next */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 text-sm rounded-full border border-gray-200 bg-white
                           disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-sm"
              >
                Next
              </button>
            </div>
          )}
        </section>

        <nav></nav>
      </div>

   
    </>
  );
};

export default ProjectsSection;