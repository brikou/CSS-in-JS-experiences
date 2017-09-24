import { css } from "emotion";

export const btnBlock = css`
    display: block;
    width: 100%;

    & + & {
        margin-top: 0.5rem;
    }

    input[type="submit"]&,
    input[type="reset"]&,
    input[type="button"]& {
        width: 100%;
    }
`;
