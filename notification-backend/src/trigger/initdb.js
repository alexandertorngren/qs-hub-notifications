const fqdn = require("node-fqdn");
const Config = require("../models/Config");
const Symbol = require("../models/Symbol");
const Quote = require("../models/Quote");
const init = require("../assets/init");

const initConfig = () => {
  const conf = new Config({
    host: fqdn,
    httpPort: process.env.QSHN_HTTPPORT || 3000,
    httpsPort: process.env.QSHN_HTTPSPORT | 3443,
  });
  conf.save((err) => {
    if (err) throw err;
    return true;
  });
};

const initQuotes = ({ quotes }) => {
  quotes.forEach((item) => {
    let doc = new Quote(({ quote, author } = item));
    doc.save((err) => {
      if (!err) {
        console.log("Success: ", obj);
      } else {
        console.log("Err: ", err);
        throw err;
      }
    });
  });
  return true;
};

const initSymbols = (src) => {
  let srcObj = ({ symbols } = src).symbols;
  srcObj.map((value, index) => {
    for (let id in value) {
      let doc = new Symbol({ type: id, items: value[id] });
      doc.save((err) => {
        if (!err) {
          console.log("Success: ", obj);
        } else {
          console.log("Err: ", err);
          throw err;
        }
      });
    }
  });
  return true;
};

const initdb = () => {
  initConfig();
  initQuotes(init.quotes);
  initSymbols(init.symbols);
};

module.exports = initdb;
