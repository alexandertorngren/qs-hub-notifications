const dbSettings = {
  mongoURI:
    "mongodb://localhost:27017/qliknotifications?readPreference=primary&appname=QlikNotifications&ssl=false",
  dbParameters: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
};

const serverSettings = {
  port: process.env.PORT || 3033,
  ssl: require("./ssl"),
};

module.exports = Object.assign({}, { dbSettings, serverSettings });
