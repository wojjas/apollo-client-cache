import { gql } from "@apollo/client";

export const ALL_COUNTRIES = gql`
  query {
    countries {
      name
      currency
      languages {
        name
      }
    }
  }
`;
// Note how this is a sub-set of the query ALL_COUNTRIES above!
export const ALL_COUNTRIES_AGAIN = gql`
  query {
    countries {
      name
    }
  }
`;
// Note how this is a sub-set of the query ALL_COUNTRIES above!
export const ALL_LANGUAGES = gql`
  query {
    countries {
      name
      languages {
        name
      }
    }
  }
`;

export const ALL_COUNTRIES_WITH_CURRENCY = () => gql`
  query getCountriesForCurrency($currency: String) {
    countries(filter: { currency: { eq: $currency } }) {
      name
      currency
    }
  }
`;

/** All countries using AUD as currency */
export const AUD_COUNTRIES = gql`
  query {
    countries(filter: { currency: { eq: "AUD" } }) {
      name
    }
  }
`;
