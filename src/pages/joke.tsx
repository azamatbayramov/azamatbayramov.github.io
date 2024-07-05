import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { formatDistance } from "date-fns";
import { JokeDTO, getJokeByEmail } from '../api/JokeAPI';

const JokePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BackButton = styled.a`
  text-decoration: none;

  background-color: var(--color1);
  color: var(--color4);

  padding: 0.8em 1em;
  border-radius: 5px;

  margin-top: 2em;

  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color3);
  }
`

const JokePage: React.FC = () => {
    const [jokeTitle, setJokeTitle] = React.useState<string>("Joke is loading...");
    const [jokeDate, setJokeDate] = React.useState<string>("");
    const [jokeImageSrc, setJokeImageSrc] = React.useState<string>("#");
    const [jokeImageAlt, setJokeImageAlt] = React.useState<string>("");

    useEffect(() => {
        getJokeByEmail("a.bayramov@innopolis.university").then((joke: JokeDTO) => {
            setJokeTitle(joke.safe_title);

            const date = new Date(parseInt(joke.year), parseInt(joke.month) - 1, parseInt(joke.day))
            setJokeDate(formatDistance(date, new Date(), { addSuffix: true }));
            
            setJokeImageSrc(joke.img);
            setJokeImageAlt(joke.transcript);
        });
      }, []);

    return (
      <JokePageContainer>
        <h1 id="jokeTitle">{jokeTitle}</h1>
        <p id="jokeDate">{jokeDate}</p>
        <img id="jokeImage" src={jokeImageSrc} alt={jokeImageAlt} />
        <BackButton href="/">Back to the main page</BackButton>
      </JokePageContainer>
    );
};

export default JokePage;
