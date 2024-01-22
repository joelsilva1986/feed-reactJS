import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment () {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/joelsilva1986.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Joel Silva</strong>
                            <time title=" 08 de Maio às 08:13h" dateTime="22-05-11 8:13:30"> Cerca de 1h atrás</time>
                        </div>

                        <button title="deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>

                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}