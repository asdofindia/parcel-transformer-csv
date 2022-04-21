const { Transformer } = require("@parcel/plugin");
const Papa = require("papaparse");

module.exports = new Transformer({
  async transform({ asset }) {
    asset.type = "js";
    asset.setCode(
      `module.exports = JSON.parse(${JSON.stringify(
        JSON.stringify(Papa.parse(await asset.getCode()))
      )})`
    );
    return [asset];
  },
});
