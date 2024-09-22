function GridItem({ children, gridItemNum }) {
  return (
    <div className={`grid-item grid-item--${gridItemNum}`}>{children}</div>
  );
}

export default GridItem;
