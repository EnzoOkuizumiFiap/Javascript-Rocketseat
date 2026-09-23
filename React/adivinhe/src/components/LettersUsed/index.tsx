import styles from "./styles.module.css";
import Letter from "../Letter";

export default function LettersUsed() {
    return (
        <div className={styles.letterUsed}>
            <h5>Letras utilizadas:</h5>

            <div>
                <Letter value="R" size="small" color="correct" />
                <Letter value="X" size="small" color="wrong" />
            </div>
        </div>
    );
}