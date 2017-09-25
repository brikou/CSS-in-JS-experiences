import { css } from "emotion";

export const dropdownToggle = css`
    &::after {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 0.255em;
        vertical-align: 0.255em;
        content: "";
        border-top: 0.3em solid;
        border-right: 0.3em solid transparent;
        border-left: 0.3em solid transparent;
    }

    &:empty::after {
        margin-left: 0;
    }
`;
