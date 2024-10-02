import Masonry from "masonry-layout";

window.onload = () => {
  const grid = document.querySelector(".grid");

  const masonry = new Masonry(grid, {
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    percentPosition: true,
    gutter: 25,
  });

  grid.imagesLoaded.progress(function () {
    grid.masonry("layout");
  });
};
