import type { Quiz } from "$lib/core/types";
import { json } from "@sveltejs/kit";

const quizes: Quiz[] = [
	{
		index: 1,
		max: 4,
		question: "Was möchten Sie?",
		answers: [
			{
				index: 1,
				answer: "(Web) Anwendung",
				hint: "Es handelt sich um ein großes Programm, z. B. Ticketsystem, Versandsystem"
			},
			{
				index: 2,
				answer: "Dynamische Webseite",
				hint: "Inhalt ändert sich oft, z. B. Blog, Online Shop"
			},
			{
				index: 3,
				answer: "Statische Webseite",
				hint: "Inhalt ändert sich quasi nie, z. B. Firmen Webseite"
			}
		]
	},
	{
		index: 2,
		max: 4,
		question: "Wie viele werden diese Seite benutzen?",
		answers: [
			{
				index: 1,
				answer: "unter 15000"
			},
			{
				index: 2,
				answer: "über 15000"
			}
		]
	},
	{
		index: 3,
		max: 4,
		question: "Muss die Anwendung auch ohne Internet funktionieren?",
		answers: [
			{
				index: 1,
				answer: "Ich habe immer eine Internet Verbindung",
				hint: "Z. B. PC über Kabel Verbunden"
			},
			{
				index: 2,
				answer: "Das Internet könnte schlecht sein, ist aber immer da",
				hint: "Z. B. in einem Lager, Keller, (Serverraum)"
			},
			{
				index: 3,
				answer: "Mein Smartphone ist im Flugmodus"
			}
		]
	},
	{
		index: 4,
		max: 4,
		question: "Auf welchem Gerät soll die Anwendung vorallem laufen?",
		answers: [
			{
				index: 1,
				answer: "Stationär",
				hint: "PC, Laptop"
			},
			{
				index: 2,
				answer: "Mobil",
				hint: "Smartphone, Tablet"
			},
			{
				index: 3,
				answer: "Beides"
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
