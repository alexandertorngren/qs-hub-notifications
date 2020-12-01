define([
  "text!hub/notification-module/assets/notifications.json",
  "text!hub/notification-module/toolbar.css",
], function (n, css) {
  let result = "";
  let path = this.location.pathname.split("/");
  if (path[1] == "test" || path[1] == "dev") {
    let elem = document.createElement("style");
    elem.innerHTML = css;
    document.querySelector("head").appendChild(elem);
    let srcNotes = JSON.parse(n);

    result = `<div class="hub-toolbar-notification">
            <div class="toolbar-body">
              <span>${srcNotes.note}</span>
            </div>
          </div>`;
  }

  return result;
});
