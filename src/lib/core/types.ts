export type Quiz = {
	question: string;
	answers: {
		id: string;
		answer: string;
		hint?: string;
	}[];
};
