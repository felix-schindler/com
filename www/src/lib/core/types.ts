import type { Record } from "pocketbase";

export interface Question extends Record {
	question: string;
	answers: Answer[];
}

export interface Answer extends Record {
	answer: string;
	hint?: string;
};

export type GivenAnswer = {
	question: string;
	answer: string;
};
