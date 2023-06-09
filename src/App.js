import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import client from "./graphql/client";
import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Main />
        </ApolloProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
