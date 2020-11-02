define([
  "text!hub/notification-module/assets/notifications.json",
  "text!hub/notification-module/assets/symbols.json",
  "text!hub/notification-module/toolbar.css",
], function (n, s, css) {
  let elem = document.createElement("style");
  elem.innerHTML = css;
  document.querySelector("head").appendChild(elem);

  let srcNotes = JSON.parse(n);
  let notes = srcNotes.notes;
  let quotes =
    srcNotes.quotes !== undefined
      ? srcNotes.quotes
      : (srcNotes.quotes = ["NaN"]);
  let symbols = JSON.parse(s).symbols;

  const createDate = (interval) => {
    let today = {};
    if (interval === undefined) {
      today.days = 0;
      today.start = new Date();
    } else {
      today.days = interval.days;
      today.start = new Date(Date.parse(interval.start));
    }

    if (today.days > 0) {
      today.start.setTime(
        today.start.getTime() + today.days * 24 * 60 * 60 * 1000
      );
    }

    return today.start;
  };

  let dateNow = createDate();
  let result = [];

  for (let i = 0; i < notes.length; i++) {
    if (
      createDate({ start: notes[i].interval.start, days: 0 }) <= dateNow &&
      dateNow <= createDate(notes[i].interval)
    ) {
      let r = Math.floor(Math.random() * Math.floor(quotes.length));
      result.push({
        head: notes[i].head,
        body: notes[i].body ? notes[i].body : quotes[r],
        symbols: {
          left: notes[i].symbol ? symbols[notes[i].symbol] : "",
          right: notes[i].symbol ? symbols[notes[i].symbol] : "-",
        },
      });
    }
  }

  if (result.length == 0) {
    return "";
  }

  return `<div class="hub-toolbar-notification">
            <div class="toolbar-head">
              <span class="toolbar-head-symbol">
                ${result[0].symbols.left}
              </span>
              <span class="toolbar-head-content">
                ${result[0].head}
              </span>
              <span class="toolbar-head-symbol">
                ${result[0].symbols.right}
              </span>
            </div>
            <div class="toolbar-body">
              <span>${result[0].body}</span>
            </div>
          </div>`;
});
