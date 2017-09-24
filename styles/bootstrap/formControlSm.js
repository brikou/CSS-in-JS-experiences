import { css } from "emotion";

export const formControlSm = css`
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.2rem;

    select&:not([size]):not([multiple]) {
        height: calc(1.8125rem + 2px);
    }
`;
