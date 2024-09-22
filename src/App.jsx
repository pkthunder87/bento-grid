import AppLayout from "./components/AppLayout";
import Attribution from "./components/Attribution";
import GridItem from "./components/GridItem";
import "./sass/main.scss";

const imgPrefix = "../src/assets/images/illustration-";
const imgSuffix = ".webp";

function App() {
  return (
    <AppLayout>
      <GridItem gridItemNum="1">
        <h1 className="grid-item--1__title">
          Social Media <span className="ten-x">10x</span>{" "}
          <span className="faster">Faster</span> with AI
        </h1>
        <img
          className="grid-item--1__img"
          src={`${imgPrefix}five-stars${imgSuffix}`}
          alt=""
        />
        <p className="grid-item--1__text">Over 4,000 5-star reviews</p>
      </GridItem>
      <Attribution />
    </AppLayout>
  );
}

export default App;
