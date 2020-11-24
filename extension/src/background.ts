// eslint-disable-next-line import/no-unassigned-import
import optionsStorage from "./options-storage";

// import { browser } from "webextension-polyfill-ts";
import { ArticleMessage, Messages } from "./messages";

import lunr from "lunr";
import axios from "axios";

console.log("Starting background");

interface NormalizedArticle {
	url: string;
	title: string;
	content: string;
}

const normalize = (msg: ArticleMessage): NormalizedArticle => {
	return {
		url: msg.url,
		title: msg.article.title,
		content: msg.article.textContent
	};
};

const buildIndex = (article: NormalizedArticle) => {
	console.log(article);

	const idx = lunr(function() {
		this.ref("url");
		this.field("title");
		this.field("content");

		this.add(article);
	});
	return idx;
};

const doSubmit = async (msg: ArticleMessage) => {
	const { endpoint } = await optionsStorage.getAll();

	const out = buildIndex(normalize(msg));
	// console.log(out);
	const sd = JSON.stringify(out);
	console.log("to send", sd);

	// await axios.post(endpoint, sd);
};

browser.runtime.onMessage.addListener((msg: Messages) => {
	switch (msg.type) {
		case "article":
			console.log("Handling article for", msg.url);
			// TODO: indexing

			doSubmit(msg).catch(err => {
				console.error(msg.url, err);
			});

			break;

		default:
			break;
	}
});
