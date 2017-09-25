import { css } from "emotion";

export const pageLink = css`
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #007bff;
    background-color: #fff;
    border: 1px solid #ddd;

    &:focus,
    &:hover {
        color: #0056b3;
        text-decoration: none;
        background-color: #e9ecef;
        border-color: #ddd;
    }
`;
