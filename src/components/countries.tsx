import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { ALL_COUNTRIES } from "../graphql/queries";

import "./styles.css";

type Props = {
  onDataFetched: () => void;
};

const Countries = ({ onDataFetched: handleDataFetched }: Props) => {
  console.log("Render Countries");

  const { loading, data, error } = useQuery(ALL_COUNTRIES);

  useEffect(() => {
    if (data) {
      console.log("Countries, Data fetched");
      console.log(data);
      handleDataFetched();
    }
  }, [data, handleDataFetched]);

  const isDataFetched = data && data.countries && !loading && !error;

  const countriesCount = isDataFetched && data.countries.length;

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && (
        <p>
          <strong>Error:</strong> Failed to get data about countries :-(
        </p>
      )}

      {isDataFetched && (
        <h1>
          Fetched data about {countriesCount} countries{" "}
          <span className="light-text">(from BE with useQuery())</span>
        </h1>
      )}
    </>
  );
};

export default Countries;
