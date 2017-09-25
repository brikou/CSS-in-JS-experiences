import { css } from "emotion";

export const modalDialog = css`
    position: relative;
    width: auto;
    margin: 10px;

    @media (min-width: 576px) {
        & {
            max-width: 500px;
            margin: 30px auto;
        }
    }
`;
