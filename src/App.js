import { ApolloProvider } from "@apollo/client";
import Main from "./components/Main";
import client from "./graphql/client";
import './index.css';

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    </div>
  );
}

export default App;
