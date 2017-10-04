import * as styles from "../styles/bootstrap.js";

export const Container = () => (
    <div className={styles.container()}>
        <div className={styles.row()}>
            {[...Array(3)].map((_, key) => (
                <div key={key} className={styles.colMd4()}>
                    <h2>Heading</h2>
                    <p>
                        Donec id elit non mi porta gravida at eget metus. Fusce
                        dapibus, tellus ac cursus commodo, tortor mauris
                        condimentum nibh, ut fermentum massa justo sit amet
                        risus. Etiam porta sem malesuada magna mollis euismod.
                        Donec sed odio dui.{" "}
                    </p>
                    <p>
                        <a
                            className={`${styles.btn()} ${styles.btnSecondary()}`}
                            href="#"
                            role="button"
                        >
                            View details »
                        </a>
                    </p>
                </div>
            ))}
        </div>
        <hr />
        <footer>
            <p>© Company 2017</p>
        </footer>
    </div>
);
