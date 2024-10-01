import Masonry from "masonry-layout";

window.onload = () => {
  const grid = document.querySelector(".grid");

  const masonry = new Masonry(grid, {
    itemSelector: ".grid-item",
    columnWidth: 200,
    gutter: 25,
  });
};
