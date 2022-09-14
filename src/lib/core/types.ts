export type Question = {
	question: string;
	answers: Answer[];
};

export type Answer = {
	answer: string;
	hint?: string;
	subQuestions?: Question[];
};


export type SimpleQuestion = {
	question: string;
	answers: SimpleAnswer[];
};

export type SimpleAnswer = {
	answer: string;
	hint?: string;
};

export type GivenAnswer = {
	question: string;
	answer: string;
};

