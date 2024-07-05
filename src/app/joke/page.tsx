import React from 'react';
import { getJokeByEmail } from '../../utils/JokeAPI';
import { formatDistance } from 'date-fns';
import styles from './page.module.css';


export default async function Page() {
    const joke = await getJokeByEmail("a.bayramov@innopolis.university");

    return (
        <div className={styles.joke_container}>
            <h1 id="jokeTitle">{joke.safe_title}</h1>
            <p id="jokeDate">{
                formatDistance(
                    new Date(parseInt(joke.year), parseInt(joke.month) - 1, parseInt(joke.day)),
                    new Date(),
                    { addSuffix: true }
                )
            }</p>
            <img id="jokeImage" src={joke.img} alt={joke.transcript} />
            <a href="/" className={styles.back_button}>Back to the main page</a>
        </div>
    );
}
