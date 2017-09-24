import { css } from "emotion";

export const breadcrumb = css`
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #e9ecef;
    border-radius: 0.25rem;

    &::after {
        display: block;
        clear: both;
        content: "";
    }
`;
