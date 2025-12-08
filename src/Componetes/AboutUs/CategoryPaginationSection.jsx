import React, { useState } from "react";

const ITEMS_PER_PAGE = 2;

const allItems = [
  {
    id: 1,
    title: "Podctin",
    category: "Video Editing",
    year: 2023,
    description:
      "Motion-based podcast opener with clean grid animation and smooth transitions.",
    tagColor: "text-emerald-600",
    bgColor: "bg-sky-100",
    mediaType: "video",
  },
  {
    id: 2,
    title: "The Red Apple",
    category: "Graphic Design",
    year: 2025,
    description:
      "Playful typography with floral motifs and a bold hero product visual.",
    tagColor: "text-emerald-600",
    bgColor: "bg-rose-50",
    mediaType: "image",
  },
  {
    id: 3,
    title: "Minimal Product Reel",
    category: "Video Editing",
    year: 2024,
    description:
      "Clean product reel with modern typography and soft gradients.",
    tagColor: "text-emerald-600",
    bgColor: "bg-lime-50",
    mediaType: "video",
  },
  {
    id: 4,
    title: "Skin Retouch Campaign",
    category: "Image Retouching",
    year: 2024,
    description:
      "High-end beauty retouch focusing on texture, tone and subtle color grading.",
    tagColor: "text-emerald-600",
    bgColor: "bg-orange-50",
    mediaType: "image",
  },
];

const categories = ["All", "Video Editing", "Graphic Design", "Image Retouching"];

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems =
    selectedCategory === "All"
      ? allItems
      : allItems.filter((item) => item.category === selectedCategory);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="w-full bg-[#f5f7fb] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          {/* Left text */}
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-[0.18em] text-emerald-600 uppercase">
              + My Work
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Creating next level <br className="hidden md:block" />
              digital products
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-500">
              A selection of client projects across video editing, graphic
              design and image retouching – focused on clean, modern visuals
              and strong storytelling.
            </p>
          </div>

          {/* Right categories */}
          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`px-4 py-1.5 rounded-full border text-xs md:text-sm transition
                ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                    : "border-transparent hover:bg-white hover:shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        {currentItems.length === 0 ? (
          <div className="text-center text-slate-400 py-16">
            No projects in this category yet.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {currentItems.map((item) => (
              <article
                key={item.id}
                className={`${item.bgColor} rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-[0_18px_40px_rgba(15,23,42,0.08)]`}
              >
                {/* Media mockup */}
                <div className="rounded-2xl overflow-hidden bg-slate-900 relative aspect-[9/14] mb-6 md:mb-8">
                  {/* yaha tum apna <video> ya <img> laga sakte ho */}
                  {item.mediaType === "video" ? (
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-950 flex items-center justify-center">
                      <div className="w-[72%] h-[72%] border border-emerald-400/40 grid grid-cols-6 grid-rows-10 opacity-60" />
                      <button className="absolute w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                        <span className="ml-0.5 border-l-[10px] border-y-[6px] border-y-transparent border-l-slate-900" />
                      </button>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-rose-50 to-rose-200 flex items-center justify-center">
                      <div className="w-[78%] h-[78%] rounded-3xl bg-white shadow-xl flex items-center justify-center">
                        <span className="text-4xl md:text-5xl font-semibold text-rose-500">
                          the red apple
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Text info row */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs md:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                    <p className={`mt-3 text-xs font-medium ${item.tagColor}`}>
                      {item.category}
                    </p>
                  </div>
                  <span className="text-xs text-slate-400 mt-1">
                    {item.year}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1.5 text-xs md:text-sm rounded-full border border-slate-200 bg-white disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-sm"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-8 h-8 md:w-9 md:h-9 text-xs md:text-sm rounded-full border transition
                    ${
                      currentPage === page
                        ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                        : "bg-white text-slate-700 border-slate-200 hover:shadow-sm"
                    }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 text-xs md:text-sm rounded-full border border-slate-200 bg-white disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-sm"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;