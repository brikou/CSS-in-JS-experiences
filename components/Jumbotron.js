import * as styles from "../styles/bootstrap.js";

export const Jumbotron = () => (
    <div className={styles.jumbotron()}>
        <div className={styles.container()}>
            <h1 className={styles.display3()}>Hello, world!</h1>
            <p>
                This is a template for a simple marketing or informational
                website. It includes a large callout called a jumbotron and
                three supporting pieces of content. Use it as a starting point
                to create something more unique.
            </p>
            <p>
                <a
                    className={`${styles.btn()} ${styles.btnPrimary()} ${styles.btnLg()}`}
                    href="#"
                    role="button"
                >
                    Learn more »
                </a>
            </p>
        </div>
    </div>
);
