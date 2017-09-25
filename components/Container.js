import { btn } from "../styles/bootstrap/btn";
import { btnSecondary } from "../styles/bootstrap/btn/secondary";
import { colMd4 } from "../styles/bootstrap/col/md/4";
import { container } from "../styles/bootstrap/container";
import { row } from "../styles/bootstrap/row";

export const Container = () => (
    <div className={container}>
        <div className={row}>
            {[...Array(3)].map((_, key) => (
                <div key={key} className={colMd4}>
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
                            className={`${btn} ${btnSecondary}`}
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
