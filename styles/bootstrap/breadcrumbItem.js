import { css } from "emotion";

import { active } from "./active";

export const breadcrumbItem = css`
    float: left;

    & + &::before {
        display: inline-block;
        padding-right: 0.5rem;
        padding-left: 0.5rem;
        color: #868e96;
        content: "/";
    }

    & + &:hover::before {
        text-decoration: underline;
    }

    & + &:hover::before {
        text-decoration: none;
    }

    &.${active} {
        color: #868e96;
    }
`;
