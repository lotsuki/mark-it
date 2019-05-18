const Document = require("./Document.js");
const db = require("./index.js");
const mockData = require("./mockData.js");

db.dropCollection("documents", () => {});


let createMockQuicklinks = function() {

};

let createMockBookmarks = function() {

};


function inputMockQuicklinks(mockData) {
  return Document.create(mockData.quicklinks)
    .then(() => db.close())
    .catch(err => console.log("err", err));
}

function inputMockBookmarks(mockData) {
  return Document.create(mockData.bookmarks)
    .then(() => db.close())
    .catch(err => console.log("err", err));
}

inputMockQuicklinks();
inputMockBookmarks();

