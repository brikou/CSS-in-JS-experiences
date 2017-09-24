import { css } from "emotion";

export const jumbotron = css`
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background-color: #e9ecef;
    border-radius: 0.3rem;

    @media (min-width: 576px) {
        & {
            padding: 4rem 2rem;
        }
    }
`;
