import { css } from "emotion";

export const listGroupItemAction = css`
    width: 100%;
    color: #495057;
    text-align: inherit;

    &:focus,
    &:hover {
        color: #495057;
        text-decoration: none;
        background-color: #f8f9fa;
    }

    &:active {
        color: #212529;
        background-color: #e9ecef;
    }
`;
