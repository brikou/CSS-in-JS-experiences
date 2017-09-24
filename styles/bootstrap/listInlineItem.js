import { css } from "emotion";

export const listInlineItem = css`
    display: inline-block;

    &:not(:last-child) {
        margin-right: 5px;
    }
`;
