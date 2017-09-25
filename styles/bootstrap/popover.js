import { css } from "emotion";

import { popoverHeader } from "./popover/header";

export const popover = css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1060;
    display: block;
    max-width: 276px;
    padding: 1px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.875rem;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;

    & .arrow {
        position: absolute;
        display: block;
        width: 10px;
        height: 5px;
    }

    & .arrow::before,
    & .arrow::after {
        position: absolute;
        display: block;
        border-color: transparent;
        border-style: solid;
    }

    & .arrow::before {
        content: "";
        border-width: 11px;
    }

    & .arrow::after {
        content: "";
        border-width: 11px;
    }

    &.bs-popover-top,
    &.bs-popover-auto[x-placement^="top"] {
        margin-bottom: 10px;
    }

    &.bs-popover-top .arrow,
    &.bs-popover-auto[x-placement^="top"] .arrow {
        bottom: 0;
    }

    &.bs-popover-top .arrow::before,
    &.bs-popover-auto[x-placement^="top"] .arrow::before,
    &.bs-popover-top .arrow::after,
    &.bs-popover-auto[x-placement^="top"] .arrow::after {
        border-bottom-width: 0;
    }

    &.bs-popover-top .arrow::before,
    &.bs-popover-auto[x-placement^="top"] .arrow::before {
        bottom: -11px;
        margin-left: -6px;
        border-top-color: rgba(0, 0, 0, 0.25);
    }

    &.bs-popover-top .arrow::after,
    &.bs-popover-auto[x-placement^="top"] .arrow::after {
        bottom: -10px;
        margin-left: -6px;
        border-top-color: #fff;
    }

    &.bs-popover-right,
    &.bs-popover-auto[x-placement^="right"] {
        margin-left: 10px;
    }

    &.bs-popover-right .arrow,
    &.bs-popover-auto[x-placement^="right"] .arrow {
        left: 0;
    }

    &.bs-popover-right .arrow::before,
    &.bs-popover-auto[x-placement^="right"] .arrow::before,
    &.bs-popover-right .arrow::after,
    &.bs-popover-auto[x-placement^="right"] .arrow::after {
        margin-top: -8px;
        border-left-width: 0;
    }

    &.bs-popover-right .arrow::before,
    &.bs-popover-auto[x-placement^="right"] .arrow::before {
        left: -11px;
        border-right-color: rgba(0, 0, 0, 0.25);
    }

    &.bs-popover-right .arrow::after,
    &.bs-popover-auto[x-placement^="right"] .arrow::after {
        left: -10px;
        border-right-color: #fff;
    }

    &.bs-popover-bottom,
    &.bs-popover-auto[x-placement^="bottom"] {
        margin-top: 10px;
    }

    &.bs-popover-bottom .arrow,
    &.bs-popover-auto[x-placement^="bottom"] .arrow {
        top: 0;
    }

    &.bs-popover-bottom .arrow::before,
    &.bs-popover-auto[x-placement^="bottom"] .arrow::before,
    &.bs-popover-bottom .arrow::after,
    &.bs-popover-auto[x-placement^="bottom"] .arrow::after {
        margin-left: -7px;
        border-top-width: 0;
    }

    &.bs-popover-bottom .arrow::before,
    &.bs-popover-auto[x-placement^="bottom"] .arrow::before {
        top: -11px;
        border-bottom-color: rgba(0, 0, 0, 0.25);
    }

    &.bs-popover-bottom .arrow::after,
    &.bs-popover-auto[x-placement^="bottom"] .arrow::after {
        top: -10px;
        border-bottom-color: #fff;
    }

    &.bs-popover-bottom
        .${popoverHeader}::before,
        &.bs-popover-auto[x-placement^="bottom"]
        .${popoverHeader}::before {
        position: absolute;
        top: 0;
        left: 50%;
        display: block;
        width: 20px;
        margin-left: -10px;
        content: "";
        border-bottom: 1px solid #f7f7f7;
    }

    &.bs-popover-left,
    &.bs-popover-auto[x-placement^="left"] {
        margin-right: 10px;
    }

    &.bs-popover-left .arrow,
    &.bs-popover-auto[x-placement^="left"] .arrow {
        right: 0;
    }

    &.bs-popover-left .arrow::before,
    &.bs-popover-auto[x-placement^="left"] .arrow::before,
    &.bs-popover-left .arrow::after,
    &.bs-popover-auto[x-placement^="left"] .arrow::after {
        margin-top: -8px;
        border-right-width: 0;
    }

    &.bs-popover-left .arrow::before,
    &.bs-popover-auto[x-placement^="left"] .arrow::before {
        right: -11px;
        border-left-color: rgba(0, 0, 0, 0.25);
    }

    &.bs-popover-left .arrow::after,
    &.bs-popover-auto[x-placement^="left"] .arrow::after {
        right: -10px;
        border-left-color: #fff;
    }
`;
