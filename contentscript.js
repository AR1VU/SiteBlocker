redirectUrlGlobal = "http://banned.rf.gd/";
var url = window.location.href;
var hn = window.location.hostname;

var blockedSitesHardcoded1 =
  "youtube.com,instagram.com,krunker.io,twitter.com,x.com,xbox.com";

let arrayOfArrays = [blockedSitesHardcoded1];

for (var j = 0; j < arrayOfArrays.length; j++) {
  var arrBlockedSites = arrayOfArrays[j].split(",");
  var arrayLength = arrBlockedSites.length;
  for (var i = 0; i < arrayLength; i++) {
    var regexPorn = new RegExp(arrBlockedSites[i].trim());
    var testPorn = regexPorn.exec(url);
    if (testPorn) {
      chrome.runtime.sendMessage({ redirect: redirectUrlGlobal });
    }
  }
}
