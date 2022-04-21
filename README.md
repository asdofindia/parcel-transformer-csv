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