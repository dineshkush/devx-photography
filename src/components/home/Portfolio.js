import React, { useState, useEffect, useRef } from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgPager from "lightgallery/plugins/pager";
import lgShare from "lightgallery/plugins/share";
import FilterImage from "../../images/pre-wedding-shoot.jpg"; // Change this import to your actual image file

// Import LightGallery CSS
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of CSS
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [allImages, setAllImages] = useState([]);
  const lightGalleryRef = useRef(null);

  // Data for filter tabs
  const filterData = [
    { name: "All", filter: "all" },
    { name: "Filter 1", filter: "filter1" },
    { name: "Filter 2", filter: "filter2" },
    // Add more filter tabs as needed
  ];

  const imageData = {
    all: [
      { src: FilterImage, thumb: "thumb1.jpg", subHtml: "Description 1" },
      { src: FilterImage, thumb: "thumb2.jpg", subHtml: "Description 2" },
      // Add more images for 'all' filter if needed
    ],
    filter1: [
      { src: FilterImage, thumb: "thumb3.jpg", subHtml: "Description 3" },
      { src: FilterImage, thumb: "thumb4.jpg", subHtml: "Description 4" },
      // Add more images for 'filter1' filter if needed
    ],
    filter2: [
      { src: FilterImage, thumb: "thumb5.jpg", subHtml: "Description 5" },
      { src: FilterImage, thumb: "thumb6.jpg", subHtml: "Description 6" },
      // Add more images for 'filter2' filter if needed
    ],
  };

  useEffect(() => {
    // Set all images for LightGallery popup
    setAllImages(imageData[selectedFilter]);
  }, [selectedFilter, imageData]);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const openLightGalleryPopup = (index) => {
    if (lightGalleryRef.current && lightGalleryRef.current.openGallery) {
      lightGalleryRef.current.openGallery(index);
    } else {
      console.error("LightGallery is not properly initialized.");
    }
  };

  return (
    <section id="portfolio" className="portfolio_sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="heading_content text-center text-white">
              <h3 className="site_heading">Selected Shots</h3>
              <p>Here you will be able to find my selected shots</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="cube-grid-filter">
              <div className="filter-tabs">
                {filterData.map((filter, index) => (
                  <div
                    key={index}
                    className={`filter-tab ${
                      selectedFilter === filter.filter && "active"
                    }`}
                    onClick={() => handleFilterChange(filter.filter)}
                  >
                    {filter.name}
                  </div>
                ))}
              </div>
              {allImages.length > 0 && (
                <LightGallery
                  ref={lightGalleryRef}
                  id="lightgallery"
                  key={selectedFilter} // Add key prop for proper rendering
                  plugins={[
                    lgThumbnail,
                    lgFullscreen,
                    lgZoom,
                    lgVideo,
                    lgAutoplay,
                    lgPager,
                    lgShare,
                  ]}
                  dynamic={true}
                  dynamicEl={allImages}
                />
              )}
              {/* Render images dynamically based on the selected filter */}
              <div className="image-grid">
                {imageData[selectedFilter].map((image, index) => (
                  <div
                    key={index}
                    className="image-item"
                    onClick={() => openLightGalleryPopup(index)}
                  >
                    <img
                      src={image.src}
                      alt={`shoot ${index + 1}`}
                      className="img-fluid"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
