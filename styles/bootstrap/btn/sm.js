import { css } from "emotion";

export const btnSm = css`
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.2rem;

    & + .dropdown-toggle-split {
        padding-right: 0.375rem;
        padding-left: 0.375rem;
    }
`;
