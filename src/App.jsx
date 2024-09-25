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
      <GridItem gridItemNum="2">
        <img
          className="grid-item--2__img"
          src={`${imgPrefix}multiple-platforms${imgSuffix}`}
          alt=""
        />
        <h2 className="grid-item--2__title">
          Manage multiple accounts and platforms.
        </h2>
      </GridItem>
      <GridItem gridItemNum="3">
        <h2 className="grid-item--3__title">
          Maintain a consistent posting schedule.
        </h2>
        <img
          className="grid-item--3__img"
          src={`${imgPrefix}consistent-schedule${imgSuffix}`}
          alt=""
        />
      </GridItem>
      <GridItem gridItemNum="4">
        <h2 className="grid-item--4__title"> Schedule to social media.</h2>
        <img
          className="grid-item--4__img"
          src={`${imgPrefix}schedule-posts${imgSuffix}`}
          alt=""
        />
        <p className="grid-item--4__text">
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
      </GridItem>
      <GridItem gridItemNum="5">
        <img
          className="grid-item--5__img"
          src={`${imgPrefix}grow-followers${imgSuffix}`}
          alt=""
        />
        <h2 className="grid-item--5__title">
          Grow followers with non&#8209;stop content.
        </h2>
      </GridItem>
      <GridItem gridItemNum="6">
        <h2 className="grid-item--6__title">
          <span>&gt;</span>56%
        </h2>
        <p className="grid-item--6__text">faster audience growth</p>
        <img
          className="grid-item--6__img"
          src={`${imgPrefix}audience-growth${imgSuffix}`}
          alt=""
        />
      </GridItem>
      <Attribution />
    </AppLayout>
  );
}

export default App;
