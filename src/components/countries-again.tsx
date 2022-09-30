import React from "react";
import { useApolloClient } from "@apollo/client";
import { ALL_COUNTRIES_AGAIN } from "../graphql/queries";

const CountriesAgain = () => {
  console.log("RenderAgain Countries");
  const client = useApolloClient();

  // const { loading, data, error } = useQuery(ALL_COUNTRIES_AGAIN, {
  //   fetchPolicy: "cache-only",
  // });

  const queryResponse = client.readQuery({
    query: ALL_COUNTRIES_AGAIN,
  });

  // useEffect(() => {
  //   if (data) {
  //     console.log("CountriesAgain, Data fetched");
  //     console.log(data);
  //   }
  // }, [data]);

  queryResponse && console.log(`>>> queryResponse`, queryResponse);

  return (
    <>
      {queryResponse ? (
        <h1>
          Read data about {queryResponse.countries.length} countries{" "}
          <span className="light-text">(from Cache with readQuery())</span>
        </h1>
      ) : (
        <h2>Loading... (reading from cache)</h2>
      )}
    </>
  );
};

export default CountriesAgain;
