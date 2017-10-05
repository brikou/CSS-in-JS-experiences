import {
    btn,
    btnLg,
    btnPrimary,
    container,
    display3,
    jumbotron,
} from "../styles/bootstrap.js";

export const Jumbotron = () => (
    <div className={jumbotron}>
        <div className={container}>
            <h1 className={display3}>Hello, world!</h1>
            <p>
                This is a template for a simple marketing or informational
                website. It includes a large callout called a jumbotron and
                three supporting pieces of content. Use it as a starting point
                to create something more unique.
            </p>
            <p>
                <a
                    className={`${btn} ${btnPrimary} ${btnLg}`}
                    href="#"
                    role="button"
                >
                    Learn more »
                </a>
            </p>
        </div>
    </div>
);
