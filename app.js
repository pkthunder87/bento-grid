import Masonry from "masonry-layout";

// Setup and configuration for masonry layout
window.onload = () => {
  const grid = document.querySelector(".grid");

  const gutterSize = window.innerWidth > 1400 ? 31.5 : 25;
  console.log(gutterSize);

  const masonry = new Masonry(grid, {
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    percentPosition: true,
    horizontalOrder: true,
    gutter: gutterSize,
  });

  grid.imagesLoaded.progress(function () {
    grid.masonry("layout");
  });
};
