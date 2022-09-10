export type Quiz = {
	index: number;
	max: number;
	question: string;
	answers: Answer[];
};

export type Answer = {
	index: number;
	answer: string;
	hint?: string;
};
