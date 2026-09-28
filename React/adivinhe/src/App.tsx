import { useEffect, useState } from "react";
import Header from "./components/Header";
import styles from './app.module.css';
import Tip from "./components/Tip";
import Letter from "./components/Letter";
import Input from "./components/Input";
import Button from "./components/Button";
import LettersUsed, { type LettersUsedProps } from "./components/LettersUsed";
import { WORDS, type Challenge } from "./utils/words";

const ATTEMPTS_MARGIN = 5;

export default function App() {
    const [score, setScore] = useState(0);
    const [letter, setLetter] = useState("");
    const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([]);
    const [challenge, setChallenge] = useState<Challenge | null>(null);

    // Função para reiniciar o jogo, confirmando com o usuário antes de reiniciar
    function handleRestartGame() {
        const isConfirmed = window.confirm("Você tem certeza que deseja reiniciar?");

        if (isConfirmed) {
            startGame();
        }
    }

    // Função para iniciar o jogo, selecionando uma palavra aleatória e resetando os estados
    function startGame() {
        const index = Math.floor(Math.random() * WORDS.length);
        const randomWord = WORDS[index];
        setChallenge(randomWord);

        setScore(0);
        setLetter("");
        setLettersUsed([]);
    }

    // handleConfirm para verificar se a letra digitada é válida e atualizar o estado do jogo
    function handleConfirm() {
        if (!challenge) {
            return
        }

        if (!letter.trim()) {
            return alert("Digite uma letra");
        }

        const value = letter.toUpperCase();
        const exists = lettersUsed.find((used) => used.value.toUpperCase() === value);
        //alert(`Você digitou a letra: ${value}`);

        if (exists) {
            setLetter("");
            return alert("Você já digitou essa letra: " + value);
        }

        const hits = challenge.word
            .toUpperCase()
            .split("")
            .filter((char) => char === value).length;

        const correct = hits > 0;
        const currentScore = score + hits;

        //setLettersUsed([{ value, correct: false }]) // Substitui o estado anterior, não acumula as letras usadas!!
        setLettersUsed((prevState) => [...prevState, { value, correct }]) // O estado anterior se mantém e acumula as letras usadas
        setScore(currentScore);

        setLetter("");
    }

    function endGame(message: string) {
        alert(message);
        startGame();
    }

    // useEffect para iniciar game
    useEffect(() => {
        startGame();
    }, []);

    // useEffect para verificar se o jogo acabou
    useEffect(() => {
        if (!challenge) {
            return
        }

        setTimeout(() => {
            if (score === challenge.word.length) {
                return endGame("Parabéns! Você acertou a palavra!");
            }

            const attempsLimit = challenge.word.length + ATTEMPTS_MARGIN;
            if (lettersUsed.length === attempsLimit) {
                return endGame("Que pena, você usou todas as tentativas!");
            }
        }, 200);

    }, [score, lettersUsed.length]);

    if (!challenge) {
        return
    }

    return (
        <div className={styles.container}>
            <main>
                <Header current={lettersUsed.length} max={challenge.word.length + ATTEMPTS_MARGIN} onRestart={handleRestartGame} />

                <Tip tip={challenge.tip} />

                <div className={styles.word}>
                    {
                        challenge.word.split("").map((letter, index) => {
                            const letterUsed = lettersUsed.find((used) => used.value.toUpperCase() === letter.toUpperCase());
                            //console.log(letterUsed);

                            return <Letter key={index} value={letterUsed?.value} color={letterUsed?.correct ? "correct" : "default"} />
                        }
                        )
                    }
                </div>

                <h4>Palpite</h4>
                <div className={styles.guess}>
                    <Input autoFocus maxLength={1} placeholder="?" value={letter} onChange={(e) => setLetter(e.target.value)} />
                    <Button title="Confirmar" onClick={handleConfirm} />
                </div>

                <LettersUsed data={lettersUsed} />
            </main>
        </div>
    )
}