import { css } from "emotion";

export const badgeDanger = css`
    color: #fff;
    background-color: #dc3545;

    &[href]:focus,
    &[href]:hover {
        color: #fff;
        text-decoration: none;
        background-color: #bd2130;
    }
`;
