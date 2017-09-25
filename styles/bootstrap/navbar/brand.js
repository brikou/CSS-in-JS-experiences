import { css } from "emotion";

export const navbarBrand = css`
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;

    &:focus,
    &:hover {
        text-decoration: none;
    }
`;
