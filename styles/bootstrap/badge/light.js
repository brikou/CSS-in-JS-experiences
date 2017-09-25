import { css } from "emotion";

export const badgeLight = css`
    color: #111;
    background-color: #f8f9fa;

    &[href]:focus,
    &[href]:hover {
        color: #111;
        text-decoration: none;
        background-color: #dae0e5;
    }
`;
