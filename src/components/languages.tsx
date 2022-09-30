import React from "react";
import { useQuery } from "@apollo/client";
import { ALL_LANGUAGES } from "../graphql/queries";

const Languages = () => {
  console.log("Render Languages");

  const { loading, data, error } = useQuery(ALL_LANGUAGES, {
    fetchPolicy: "cache-only",
  });

  //   useEffect(() => {
  //     if (data) {
  //       console.log("Languages, Data fetched");
  //       console.log(data);
  //     }
  //   }, [data]);

  //   const renderLanguageList = () => {
  //     return data.countries.map((country: any) => {
  //       if (country.languages) {
  //         return country.languages.map((language: any, index: number) => {
  //           return <p key={index}>{language.name}</p>;
  //         });
  //       } else {
  //         return <>*</>;
  //       }
  //     });
  //   };

  const getLanguageCount = () => {
    let count = 0;
    data.countries.forEach((country: any) =>
      country.languages.forEach((language: any) => count++)
    );
    return count;
  };

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && (
        <p>
          <strong>Error:</strong> Failed to get languages :-(
        </p>
      )}

      {!loading && data && data.countries && (
        <h1>
          Fetched {getLanguageCount()} languages{" "}
          <span className="light-text">
            (from Cache with useQuery() and cache-only)
          </span>
        </h1>
      )}
    </>
  );
};

export default Languages;
