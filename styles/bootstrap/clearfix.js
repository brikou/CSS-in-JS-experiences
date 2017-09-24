import { css } from "emotion";

export const clearfix = css`
    &::after {
        display: block;
        clear: both;
        content: "";
    }
`;
