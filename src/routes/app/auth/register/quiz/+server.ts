import type { Question } from "$lib/core/types";
import { json } from "@sveltejs/kit";

const questions: Question[] = [
	{
		question: "Was möchten Sie?",
		answers: [
			{
				answer: "(Web) Anwendung",
				hint: "Es handelt sich um ein großes Programm, z. B. Ticketsystem, Versandsystem",
				subQuestions: [
					{
						question: "Auf welchem Gerät soll die Anwendung vorallem laufen?",
						answers: [
							{
								answer: "Stationär",
								hint: "PC, Laptop"
							},
							{
								answer: "Mobil",
								hint: "Smartphone, Tablet"
							},
							{
								answer: "Beides"
							}
						]
					},
					{
						question: "Muss die Anwendung auch ohne Internet funktionieren?",
						answers: [
							{
								answer: "Nein, ich habe immer eine Internet Verbindung beim benutzen",
								hint: "PC über Kabel Verbunden"
							},
							{
								answer: "Die Anwendung muss nur im lokalen Netzwerk funktioneren",
							},
							{
								answer: "Ein kleinerer Teil muss offline funktionieren",
								hint: "In einem Lager, Keller, (Serverraum)"
							},
							{
								answer: "Die ganze Anwendung muss auch ohne Internet funktionieren"
							},
						]
					},
					{
						question: "Wie viele Benutzer erwarten Sie?",
						answers: [
							{
								answer: "unter 15.000"
							},
							{
								answer: "über 15.000"
							}
						]
					},
				]
			},
			{
				answer: "Dynamische Webseite",
				hint: "Inhalt ändert sich oft, z. B. Blog, Online Shop",
				subQuestions: [
					{
						question: "Wie viele Unterseiten wird es geben?",
						answers: [
							{ answer: "weniger als 10" },
							{ answer: "10 bis 20" },
							{ answer: "mehr als 20" }
						]
					},
					{
						question: "Haben Sie bereits eine Domain?",
						answers: [
							{ answer: "Ja" },
							{ answer: "Nein" }
						]
					}
				]
			},
			{
				answer: "Statische Webseite",
				hint: "Inhalt ändert sich quasi nie, z. B. Firmen Webseite",
				subQuestions: [
					{
						question: "Wie viele Unterseiten wird es geben?",
						answers: [
							{ answer: "weniger als 10" },
							{ answer: "10 bis 20" },
							{ answer: "mehr als 20" }
						]
					},
					{
						question: "Haben Sie bereits eine Domain?",
						answers: [
							{ answer: "Ja" },
							{ answer: "Nein" }
						]
					}
				]
			}
		],
	},
];

export function GET(): Response {
	return json(questions);
}
