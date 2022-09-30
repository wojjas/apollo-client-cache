import { useQuery } from "@apollo/client";
import { ALL_COUNTRIES_WITH_CURRENCY } from "../graphql/queries";

type Props = {
  currency: string;
};

const CurrencyCountries = ({ currency }: Props) => {
  console.log("Render AUDCountries");
  const { loading, data, error } = useQuery(ALL_COUNTRIES_WITH_CURRENCY(), {
    variables: { currency },
  });

  //   useEffect(() => {
  //     if (data) {
  //       console.log("Countries, Data fetched");
  //       console.log(data);
  //     }
  //   }, [data]);

  const countriesCount = data ? data.countries.length : -1;

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && (
        <p>
          <strong>Error:</strong> Failed to get countries using AUD :-(
        </p>
      )}

      {countriesCount > -1 && (
        <h1>
          Nof countries using {currency}: {countriesCount}{" "}
          <span className="light-text">(from BE with useQuery())</span>
        </h1>
      )}
    </>
  );
};

export default CurrencyCountries;
