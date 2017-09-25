import { css } from "emotion";

export const formControlLg = css`
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;

    select&:not([size]):not([multiple]) {
        height: calc(2.3125rem + 2px);
    }
`;
