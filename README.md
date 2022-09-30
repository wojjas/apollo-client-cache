# Demo of using Apollo Client 3.0 Cache

We will fetch data about countries, once from remote DB https://countries.trevorblades.com/
Then we will:

- re-fetch countries but from our cache, not from the server.
- re-fetch countries but reading from cache directly.

## Observations

This works perfectly, that is, only ONE call is made to BE, AS LONG AS: there are no variables or as long as the variable has the same value. See/compare CurrencyCountries, CurrencyCountriesAgain and CurrencyCountriesFromCache.
Those three are the most interesting ones!
