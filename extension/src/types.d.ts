declare module "@mozilla/readability" {
	interface Article {
		/** article title */
		title: string;
		/** HTML string of processed article content */
		content: string;
		/** text content of the article (all HTML removed) */
		textContent: string;
		/** length of an article, in characters */
		length: number;
		/** article description, or short excerpt from the content */
		excerpt: string;
		/** author metadata */
		byline: string;
		/** content direction */
		dir?: string;
	}
	class Readability {
		/** Create a  Readability from the provided document*/
		constructor(doc: Document);
		/** Modify the DOM to view the document in a more readable format. Also returns result data */
		parse(): Article;
	}
}
