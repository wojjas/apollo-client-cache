import { useApolloClient } from "@apollo/client";
import { ALL_COUNTRIES_WITH_CURRENCY } from "../graphql/queries";

type Props = {
  currency: string;
};

const CurrencyCountriesAgain = ({ currency }: Props) => {
  console.log("Render AUDCountries");
  const client = useApolloClient();

  const queryResponse = client.readQuery({
    query: ALL_COUNTRIES_WITH_CURRENCY(),
    variables: { currency },
  });

  //   useEffect(() => {
  //     if (data) {
  //       console.log("Countries, Data fetched");
  //       console.log(data);
  //     }
  //   }, [data]);

  const countriesCount = queryResponse ? queryResponse.countries.length : -1;

  return (
    <>
      {queryResponse ? (
        <h1>
          Nof countries using {currency}: {countriesCount}{" "}
          <span className="light-text">(from Cache with readQuery())</span>
        </h1>
      ) : (
        <h2>Loading... (reading from cache) currency: {currency}</h2>
      )}
    </>
  );
};

export default CurrencyCountriesAgain;
