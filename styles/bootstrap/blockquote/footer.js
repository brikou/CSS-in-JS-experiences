import { css } from "emotion";

export const blockquoteFooter = css`
    display: block;
    font-size: 80%;
    color: #868e96;

    &::before {
        content: "\\2014 \\00A0";
    }
`;
