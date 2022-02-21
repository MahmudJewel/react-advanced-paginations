import { Container } from "react-bootstrap";
import "./assets/App.css";
import Header from "./components/Header";
import Body_details from "./components/Body_details";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App all-bg pt-4">
      <Container className="card col-md-6 shadow card-style">
        <div>
          <Header />
        </div>
        <div>
          <Body_details />
        </div>
      </Container>
    </div>
  );
}

export default App;
