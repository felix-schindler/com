import { json } from "@sveltejs/kit";

export function GET() {
	return json({ GET: true });
}

export function POST() {
	return json({ POST: true });
}
