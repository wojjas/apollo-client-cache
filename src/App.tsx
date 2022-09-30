import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";
import Countries from "./components/countries";
import AUDCountries from "./components/aud-countries";
import CountriesAgain from "./components/countries-again";
import Languages from "./components/languages";
import AUDCountriesFromCache from "./components/aud-countries-from-cache";
import CurrencyCountries from "./components/currency-countries";
import CurrencyCountriesFromCache from "./components/currency-countries-from-cache";
import CurrencyCountriesAgain from "./components/currency-countries-again";

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map((errorData) =>
      alert(`Graphql error ${errorData.message}`)
    );
  }
});
const link = from([
  errorLink,
  new HttpLink({ uri: "https://countries.trevorblades.com" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

function App() {
  const [isDataFetched, setIsDataFetched] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Apollo Client 3.0 demo of using cached data. We will be using free API
          server providing data about countries:
        </p>
        <a
          className="App-link"
          href="https://countries.trevorblades.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://countries.trevorblades.com/
        </a>
      </header>
      <ApolloProvider client={client}>
        <>
          <Countries onDataFetched={() => setIsDataFetched(true)} />
          <CountriesAgain />
          <Languages />
          <hr />
          {isDataFetched && <AUDCountries />}
          {isDataFetched && <AUDCountriesFromCache />}
          <hr />
          {isDataFetched && <CurrencyCountries currency="USD" />}
          {isDataFetched && <CurrencyCountriesAgain currency="SEK" />}
          {isDataFetched && <CurrencyCountriesFromCache currency="SEK" />}
        </>
      </ApolloProvider>
    </div>
  );
}

export default App;
