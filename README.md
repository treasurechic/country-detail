# @treasurechic/country-detail
This package works by receiving either the country name or ISO to return the detailed country details, including flag, currency and its symbol.

### Installation
The package can be installed via npm or yarn:
~~~sh
npm i @treasurechic/country-detail
~~~

~~~sh
yarn add @treasurechic/country-detail
~~~

~~~js
import getCountryDetail from '@treasurechic/country-detail';

// You can get the country detail as on object by following either of the examples below 👇️

getCountryDetail('NG'); 
//OR
getCountryDetail('NGA'); 
//OR
getCountryDetail('Nigeria'); 

~~~

## Data structure for the response is displayed below 👇️.
~~~js
{
  iso2: string;
  iso3: string;
  latitude: number;
  longitude: number;
  name: string;
  currency: {
      code: string;
      name: string;
      symbol: string;
  };
  language: {
      code: string;
      name: string;
  };
  dialCode: string;
  flag: string;
}
~~~
