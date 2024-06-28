import { formatDistance } from "date-fns";

const email = "a.bayramov@innopolis.university";

const fetchJokeIdUrl: string = "https://fwd.innopolis.university/api/hw2?";
const fetchJokeUrl: string = "https://fwd.innopolis.university/api/comic?";

const jokeTitle: HTMLElement = document.getElementById("jokeTitle") as HTMLElement;
const jokeDate: HTMLElement = document.getElementById("jokeDate") as HTMLElement;
const jokeImage: HTMLImageElement = document.getElementById("jokeImage") as HTMLImageElement;


interface JokeDTO {
    month: string;
    num: number;
    link: string;
    year: string;
    news: string;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
    day: string;
}


async function fetchJokeId(email: string): Promise<string> {
    const params = new URLSearchParams({"email": email}) as URLSearchParams;
    const response = await fetch(fetchJokeIdUrl + params.toString()) as Response;

    if (!response.ok) {
        throw new Error("Failed to fetch joke id: ${response.statusText}");
    }

    const jokeId: string = await response.json() as string;

    return jokeId as string;
}


async function fetchJoke(id: string): Promise<JokeDTO> {
    const params = new URLSearchParams({"id": id}) as URLSearchParams;
    const response = await fetch(fetchJokeUrl + params.toString()) as Response;

    if (!response.ok) {
        throw new Error("Failed to fetch joke: ${response.statusText}");
    }

    const joke: JokeDTO = await response.json() as JokeDTO;

    return joke as JokeDTO;
}


function showJoke(joke: JokeDTO): void {
    jokeTitle.innerText = joke.safe_title as string;

    const date: Date = new Date(parseInt(joke.year), parseInt(joke.month) - 1, parseInt(joke.day)) as Date;
    jokeDate.innerText = formatDistance(date, new Date(), { addSuffix: true }) as string;

    jokeImage.src = joke.img as string;
    jokeImage.alt = joke.transcript as string;
}


async function main(): Promise<void> {
    try {
        const jokeId: string = await fetchJokeId(email) as string;
        const joke: JokeDTO = await fetchJoke(jokeId) as JokeDTO;
        showJoke(joke);
    } catch (error) {
        console.error("Error:", error)
    }
}


main()
