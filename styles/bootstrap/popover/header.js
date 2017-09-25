import { css } from "emotion";

export const popoverHeader = css`
    padding: 8px 14px;
    margin-bottom: 0;
    font-size: 1rem;
    color: inherit;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ebebeb;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);

    &:empty {
        display: none;
    }
`;
