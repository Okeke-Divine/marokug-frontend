import Config from "./data/config.json";
import ClientLayout from "./routes/client/layout";
// import GridLayout from "./routes/client/components/grid";

function App() {
  return (
    <>
      <ClientLayout Config={Config} />
      {/* <GridLayout Config={Config} /> */}
    </>
  );
}

export default App;
