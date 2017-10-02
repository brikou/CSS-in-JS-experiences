import { hydrate } from "emotion-server";
import Head from "next/head";

import injectGlobal from "../styles/bootstrap";
import { Navbar } from "../components/Navbar";
import { Jumbotron } from "../components/Jumbotron";
import { Container } from "../components/Container";

if (typeof window !== "undefined") {
    hydrate(window.__NEXT_DATA__.ids);
}

injectGlobal();

export default () => (
    <div style={{ paddingTop: "3.5rem" }}>
        <Head>
            <meta
                content={[
                    "initial-scale=1",
                    "shrink-to-fit=no",
                    "width=device-width",
                ].toString()}
                name="viewport"
            />
        </Head>
        <Navbar />
        <Jumbotron />
        <Container />
    </div>
);
