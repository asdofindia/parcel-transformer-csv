const { Transformer } = require("@parcel/plugin");
const Papa = require("papaparse");

module.exports = new Transformer({
  async loadConfig({ config }) {
    let { contents, filePath } = await config.getConfig([
      ".parcel-transformer-csv.json",
    ]);
    return JSON.parse(contents);
  },
  async transform({ asset, config }) {
    asset.type = "js";
    asset.setCode(
      `module.exports = JSON.parse(${JSON.stringify(
        JSON.stringify(Papa.parse(await asset.getCode(), config).data)
      )})`
    );
    return [asset];
  },
});
