import Link from "next/link";

export default () => (
    <div style={{ padding: "2em" }}>
        <h1>
            <Link href="/bootstrap">
                <a>Integration of Bootstrap with Emotion</a>
            </Link>
        </h1>
        <p>
            Original example can be found{" "}
            <a target="_blank" href="http://getbootstrap.com/docs/4.0/examples/jumbotron/">
                here
            </a>.
        </p>
    </div>
);
