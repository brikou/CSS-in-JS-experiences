import Head from "next/head";

import "../styles/bootstrap/global";
import { Navbar } from "../components/Navbar";
import { Jumbotron } from "../components/Jumbotron";
import { Container } from "../components/Container";

export default () => (
    <div style={{ paddingTop: "3.5rem" }}>
        <Head>
            <meta
                content={[
                    "initial-scale=1",
                    "shrink-to-fit=no",
                    "width=device-width",
                ]}
                name="viewport"
            />
        </Head>
        <Navbar />
        <Jumbotron />
        <Container />
    </div>
);
