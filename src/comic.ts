import { formatDistance } from "date-fns";

import { JokeIdDTO, JokeDTO } from "./types";

const email = "a.bayramov@innopolis.university";

const fetchJokeIdUrl = "https://fwd.innopolis.university/api/hw2?";
const fetchJokeUrl = "https://fwd.innopolis.university/api/comic?";

const jokeTitle = document.getElementById("jokeTitle") as HTMLElement;
const jokeDate = document.getElementById("jokeDate") as HTMLElement;
const jokeImage = document.getElementById("jokeImage") as HTMLImageElement;


async function fetchJokeId(email: string): Promise<JokeIdDTO> {
    const params = new URLSearchParams({"email": email});
    const response = await fetch(fetchJokeIdUrl + params.toString());

    if (!response.ok) {
        throw new Error("Failed to fetch joke id: ${response.statusText}");
    }

    return response.json();
}


async function fetchJoke(id: string): Promise<JokeDTO> {
    const params = new URLSearchParams({"id": id});
    const response = await fetch(fetchJokeUrl + params.toString());

    if (!response.ok) {
        throw new Error("Failed to fetch joke: ${response.statusText}");
    }

    return fetch(fetchJokeUrl + params.toString()).then(r => r.json());
}


function showJoke(joke: JokeDTO): void {
    jokeTitle.innerText = joke.safe_title;

    const date = new Date(parseInt(joke.year), parseInt(joke.month) - 1, parseInt(joke.day));
    jokeDate.innerText = formatDistance(date, new Date(), { addSuffix: true })

    jokeImage.src = joke.img;
    jokeImage.alt = joke.transcript;
}


async function main() {
    try {
        const jokeId = await fetchJokeId(email);
        const joke = await fetchJoke(jokeId.id);
        console.log(joke);
        showJoke(joke);
    } catch (error) {
        console.error("Error:", error)
    }
}


main()
