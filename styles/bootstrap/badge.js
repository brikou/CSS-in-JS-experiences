import { css } from "emotion";

export const badge = css`
    @media print {
        & {
            border: 1px solid #000;
        }
    }

    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: bold;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;

    &:empty {
        display: none;
    }
`;
