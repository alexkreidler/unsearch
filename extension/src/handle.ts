import { Readability } from "@mozilla/readability";
// @types/firefox-webext-browser
// import { browser } from "webextension-polyfill-ts";
import { Messages } from "./messages";

const tstart = new Date().getTime();

const documentClone = window.document.cloneNode(true);
const article = new Readability(documentClone as Document).parse();

console.log(article.textContent);
console.log(article.length);

const url = window.location.toString();

console.log("Submitting article for", url);

browser.runtime.sendMessage("", {
	type: "article",
	url,
	article: article
} as Messages);

const tend = new Date().getTime();

console.log(tstart - tend);
