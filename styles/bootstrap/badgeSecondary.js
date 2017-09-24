import { css } from "emotion";

export const badgeSecondary = css`
    color: #fff;
    background-color: #868e96;

    &[href]:focus,
    &[href]:hover {
        color: #fff;
        text-decoration: none;
        background-color: #6c757d;
    }
`;
