import { css } from "emotion";

export const badgePrimary = css`
    color: #fff;
    background-color: #007bff;

    &[href]:focus,
    &[href]:hover {
        color: #fff;
        text-decoration: none;
        background-color: #0062cc;
    }
`;
