# parcel-transformer-csv

This is a parcel v2 transformer plugin that loads CSV as JS objects.

## When do you need it?

When you have some data in csv format and want to import it like

```
import csvData from "./mydata.csv"
```

and parcel says

```
🚨 Build failed.

@parcel/core: No transformers found for
.../mydata.csv.
```

because parcel does not know how to transform csv.

## Installation

```
npm install --save-dev parcel-transformer-csv
```

## Sample `.parcelrc`

```
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.csv": ["parcel-transformer-csv"]
  }
}
```

## Sample `.parcel-transformer-csv.json` config

```
{
  "header": true
}
```

The transformer takes an object as configuration. This object is the same as [PapaParse's config object](https://www.papaparse.com/docs#config). It is passed to `Papa.parse()` call as well.

The above configuration, for example, tells Papa to treat the first row as headers and return an array of objects (with keys from header row) instead of array of arrays.