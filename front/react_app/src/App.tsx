import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Page } from "./pages/Page";

function App() {
  return (
    <div className="bg-gray-900">
      <Header></Header>
      <Page></Page>
      <Footer></Footer>
    </div>
  );
}

export default App;
