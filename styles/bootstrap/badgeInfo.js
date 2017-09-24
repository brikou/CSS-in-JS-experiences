import { css } from "emotion";

export const badgeInfo = css`
    color: #fff;
    background-color: #17a2b8;

    &[href]:focus,
    &[href]:hover {
        color: #fff;
        text-decoration: none;
        background-color: #117a8b;
    }
`;
