import AppLayout from "./components/AppLayout";
import Attribution from "./components/Attribution";
import "./sass/main.scss";

function App() {
  return (
    <AppLayout>
      <div className="main_title">Bento Grid</div>
      <Attribution />
    </AppLayout>
  );
}

export default App;
