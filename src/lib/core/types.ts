import type { Record } from "pocketbase";

export type User = Record & {
	username: string;
	email: string;
	name: string;
	avatar: string;
};

export type Question = Record & {
	question: string;
	answers: Answer[];
};

export type Answer = Record & {
	answer: string;
	hint?: string;
};

export type GivenAnswer = {
	question: string;
	answer: string;
};
