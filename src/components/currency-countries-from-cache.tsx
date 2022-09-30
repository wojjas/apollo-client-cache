import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { ALL_COUNTRIES_WITH_CURRENCY } from "../graphql/queries";

type Props = {
  currency: string;
};

const CurrencyCountriesFromCache = ({ currency }: Props) => {
  console.log("Render AUDCountries");
  const { loading, data, error } = useQuery(ALL_COUNTRIES_WITH_CURRENCY(), {
    variables: { currency },
    fetchPolicy: "cache-only",
  });

  useEffect(() => {
    if (data) {
      console.log("*************");
      console.log(data);
    }
  }, [data]);

  const countriesCount = data ? data.countries.length : -1;

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && (
        <p>
          <strong>Error:</strong> Failed to get countries using AUD :-(
        </p>
      )}

      {countriesCount > -1 ? (
        <h1>
          Nof countries using {currency}: {countriesCount}{" "}
          <span className="light-text">
            (from Cache with useQuery() and cache-only)
          </span>
        </h1>
      ) : (
        <h2>Loading... (reading from cache) currency: {currency}</h2>
      )}
    </>
  );
};

export default CurrencyCountriesFromCache;
