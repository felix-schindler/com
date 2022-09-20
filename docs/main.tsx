import blog from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
	title: "Docs",
	description: "Well documented for an easier start.",
	avatar: "https://deno-avatar.deno.dev/avatar/yourcompany.svg",
	avatarClass: "rounded-full",
	author: "YourCompany Team",
	links: [
		{ title: "Website", url: "https://com.schindlerfelix.de" },
	],
	style: "ol { list-style: decimal; } ul { list-style: disc }",
});
