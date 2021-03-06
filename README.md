# Qlik Sense: Hub Notifications

<center>
  <img src="https://user-images.githubusercontent.com/16829097/97819642-296d9e80-1caa-11eb-8309-605e83954d1b.png" alt="screenshot">
</center>

Module to display notifications in Qlik Sense hub.

![Git Release][git-release] ![Git License][git-license] ![Git Language][git-lang] ![Docker Build Status][docker-build] ![Docker Version][docker-version]

## Prepare for setup

Make a full backup of the folder `%programfiles%/Qlik/Sense/Client/hub` containing all subfolders and files.

Copy the folder `./notification-module` and past into `%programfiles%/Qlik/Sense/Client/hub`

## Define module

Open the file `%programfiles%/Qlik/Sense/Client/hub/hub.js` in a text editor.

Find the following section of code:

```javascript
define("text!hub/core/directives/toolbar/base-toolbar.ng.html", [], function () {
  return '<div id="q-hub-toolbar">\n\t<hub-toolbar-content class="hub-toolbar">
  </hub-toolbar-content>\n\t<div class="\'hub-toolbar-footer\'"></div>\n</div>\n';
});
```

Replace with this code:

```javascript
define("text!hub/core/directives/toolbar/base-toolbar.ng.html",
  ["hub/notification-module/toolbar"], function (notes) {
  return `<div id="q-hub-toolbar">\n\t<hub-toolbar-content class="hub-toolbar">
  </hub-toolbar-content>\n\t<div class=\'hub-toolbar-footer\'>${notes}</div>\n</div>\n`;
});
```

## Notifications

- The notifications will be created using some kind of GUI...
- Data will be stored using MongoDB...

**While testing**, notifications can be created using JSON-format. Example is located here: `%programfiles%Qlik/Sense/Client/hub/notification-module/assets/notifications.json`

```json
{
  "notes": [
    {
      "interval": { "start": "2020-09-28", "days": "100" },
      "symbol": "WHEEL",
      "head": "LOVE",
      "body": "World is Open Source!"
    },
    {
      "interval": { "start": "YYYY-MM-DD", "days": "1" },
      "symbol": "",
      "head": "",
      "body": ""
    }
  ]
}
```

## Upcomming Tasks

- Task 1

## Contribute

[![Fork the repo][fork]][fork-url]

## Authors

Alexander Torngren

[![LinkedIn]][linkedin-url]

[company]: https://drakeanalytics.se
[docker-build]: https://img.shields.io/docker/automated/alexandertorngren/qs-hub-notifications?style=flat-square
[docker-version]: https://img.shields.io/docker/v/alexandertorngren/qs-hub-notifications?style=flat-square
[fork]: https://img.shields.io/badge/Fork-Contribute!-blue?logo=github&style=social
[fork-url]: https://github.com/alexandertorngren/qs-hub-notifications/fork
[git-lang]: https://img.shields.io/github/languages/top/alexandertorngren/qs-hub-notifications?style=flat-square
[git-license]: https://img.shields.io/github/license/alexandertorngren/qs-hub-notifications?style=flat-square
[git-release]: https://img.shields.io/github/v/release/alexandertorngren/qs-hub-notifications?include_prereleases&style=flat-square
[linkedin]: https://img.shields.io/badge/LinkedIn-say%20hi!-blue?style=social&logo=linkedin
[linkedin-url]: https://linkedin.com/alexandertorngren
[logo]: https://static.wixstatic.com/media/07048e_750a4eb1857d47499ea5747143fbf43b~mv2.png/v1/fill/w_336,h_94,al_c,q_85,usm_0.66_1.00_0.01/drakeAnalytics_logo_trans.webp
[web]: https://qlikowl.com
