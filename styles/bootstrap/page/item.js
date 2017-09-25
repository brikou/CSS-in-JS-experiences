import { css } from "emotion";

import { active } from "./../active";
import { pageLink } from "./link";

export const pageItem = css`
    &:first-child .${pageLink} {
        margin-left: 0;
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
    }

    &:last-child .${pageLink} {
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
    }

    &.${active} .${pageLink} {
        z-index: 2;
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }

    &.disabled .${pageLink} {
        color: #868e96;
        pointer-events: none;
        background-color: #fff;
        border-color: #ddd;
    }
`;
