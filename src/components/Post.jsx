import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post (props) {
    console.log(props)

    return (
        <article className={styles.Post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/joelsilva1986.png" />
                    <div className={styles.authorInfo}>
                        <strong>Joel Silva</strong>
                        <span>Electrical Engineering</span>
                    </div>
                </div>

                <time title=" 08 de Maio às 08:13h" dateTime="22-05-11 8:13:30"> Publicado há 1h </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="">jane.design/doctorcare </a> </p>
                <p> 
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong> Deixe seu feedback </strong>

                <textarea
                    placeholder="Deixe seu comentário"
                />

                <footer>
                    <button type="submit"> Publicar </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}

