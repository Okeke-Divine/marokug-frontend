import Config from "./data/config.json";
import ClientLayout from "./routes/client/layout";

function App() {
  return (
    <>
      <ClientLayout Config={Config} />
    </>
  );
}

export default App;
