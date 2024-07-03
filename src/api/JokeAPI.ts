const email = "a.bayramov@innopolis.university";

const fetchJokeIdUrl = "https://fwd.innopolis.university/api/hw2?";
const fetchJokeUrl = "https://fwd.innopolis.university/api/comic?";

export interface JokeDTO {
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
    const params = new URLSearchParams({ email });
    const response = await fetch(`${fetchJokeIdUrl}${params.toString()}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch joke id: ${response.statusText}`);
    }

    const jokeId = await response.json() as string;
    return jokeId;
}

async function fetchJoke(id: string): Promise<JokeDTO> {
    const params = new URLSearchParams({ id });
    const response = await fetch(`${fetchJokeUrl}${params.toString()}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch joke: ${response.statusText}`);
    }

    const joke = await response.json() as JokeDTO;
    return joke;
}

async function getJokeByEmail(email: string): Promise<JokeDTO> {
    const jokeId = await fetchJokeId(email);
    const joke = await fetchJoke(jokeId);
    return joke;
}

export { getJokeByEmail };
