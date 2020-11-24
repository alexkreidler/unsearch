import { Article } from "@mozilla/readability";

export type Messages = ArticleMessage;

export interface ArticleMessage {
	type: "article";
	url: string;
	article: Article;
}
