export const fetcher = (key: string) => fetch(key).then((res) => res.json());

export const truncateTextToThreeWords = (text: string) => text.trim().split(" ").slice(0, 3).join(" ");

