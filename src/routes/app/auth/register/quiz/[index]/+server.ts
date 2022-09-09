import type { Quiz } from "$lib/core/types";
import { error, json } from "@sveltejs/kit";

const quizes: Quiz[] = [
	{
		question: "Was möchten Sie?",
		answers: [
			{
				id: "d0606564-457d-4c24-9cc2-3077e9d62cc1",
				answer: "Web Anwendung",
				hint: "Es handelt sich um ein großes Programm, z. B. Ticketsystem, Versandsystem"
			},
			{
				id: "8c89b919-224e-4c31-b3d3-308092bab2a4",
				answer: "Dynamische Webseite",
				hint: "Inhalt ändert sich oft, z. B. Blog, Online Shop"
			},
			{
				id: "c1bbd7ac-6878-4d8a-aefa-26730d019937",
				answer: "Statische Webseite",
				hint: "Inhalt ändert sich quasi nie, z. B. Firmen Webseite"
			}
		]
	}
];

export function GET({ params }: any): Response {
	let index: number = params.index;
	if (!isNaN(index)) {
		const temp = quizes[index];
		if (temp) return json(temp);
	}


	return new Response("Invalid paramter", { status: 400 });
}
