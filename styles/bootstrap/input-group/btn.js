import { css } from "emotion";

import { btn } from "../btn";
import { btnGroup } from "../btn/group";
import { dropdownToggle } from "../dropdown/toggle";

export const inputGroupBtn = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;

    &:not(:first-child):not(:last-child) {
        border-radius: 0;
    }

    white-space: nowrap;
    vertical-align: middle;

    &:not(:last-child)
        > .${btn},
        &:not(:last-child)
        > .${btnGroup}
        > .${btn},
        &:not(:last-child)
        > .${dropdownToggle},
        &:not(:first-child)
        > .${btn}:not(:last-child):not(.${dropdownToggle}),
    &:not(:first-child) > .${btnGroup}:not(:last-child) > .${btn} {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    &:not(:first-child)
        > .${btn},
        &:not(:first-child)
        > .${btnGroup}
        > .${btn},
        &:not(:first-child)
        > .${dropdownToggle},
        &:not(:last-child)
        > .${btn}:not(:first-child),
    &:not(:last-child) > .${btnGroup}:not(:first-child) > .${btn} {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    position: relative;
    font-size: 0;
    white-space: nowrap;

    & > .${btn} {
        position: relative;
    }

    & > .${btn} + .${btn} {
        margin-left: -1px;
    }

    & > .${btn}:focus, & > .${btn}:active, & > .${btn}:hover {
        z-index: 3;
    }

    &:not(:last-child) > .${btn}, &:not(:last-child) > .${btnGroup} {
        margin-right: -1px;
    }

    &:not(:first-child) > .${btn}, &:not(:first-child) > .${btnGroup} {
        z-index: 2;
        margin-left: -1px;
    }

    &:not(:first-child)
        > .${btn}:focus,
        &:not(:first-child)
        > .${btn}:active,
        &:not(:first-child)
        > .${btn}:hover,
        &:not(:first-child)
        > .${btnGroup}:focus,
        &:not(:first-child)
        > .${btnGroup}:active,
        &:not(:first-child)
        > .${btnGroup}:hover {
        z-index: 3;
    }
`;
