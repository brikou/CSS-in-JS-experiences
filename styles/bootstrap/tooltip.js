import { css } from "emotion";

import { show } from "./show";

export const tooltip = css`
    position: absolute;
    z-index: 1070;
    display: block;
    margin: 0;
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
    opacity: 0;

    &.${show} {
        opacity: 0.9;
    }

    & .arrow {
        position: absolute;
        display: block;
        width: 5px;
        height: 5px;
    }

    &.bs-tooltip-top,
    &.bs-tooltip-auto[x-placement^="top"] {
        padding: 5px 0;
    }

    &.bs-tooltip-top .arrow,
    &.bs-tooltip-auto[x-placement^="top"] .arrow {
        bottom: 0;
    }

    &.bs-tooltip-top .arrow::before,
    &.bs-tooltip-auto[x-placement^="top"] .arrow::before {
        margin-left: -3px;
        content: "";
        border-width: 5px 5px 0;
        border-top-color: #000;
    }

    &.bs-tooltip-right,
    &.bs-tooltip-auto[x-placement^="right"] {
        padding: 0 5px;
    }

    &.bs-tooltip-right .arrow,
    &.bs-tooltip-auto[x-placement^="right"] .arrow {
        left: 0;
    }

    &.bs-tooltip-right .arrow::before,
    &.bs-tooltip-auto[x-placement^="right"] .arrow::before {
        margin-top: -3px;
        content: "";
        border-width: 5px 5px 5px 0;
        border-right-color: #000;
    }

    &.bs-tooltip-bottom,
    &.bs-tooltip-auto[x-placement^="bottom"] {
        padding: 5px 0;
    }

    &.bs-tooltip-bottom .arrow,
    &.bs-tooltip-auto[x-placement^="bottom"] .arrow {
        top: 0;
    }

    &.bs-tooltip-bottom .arrow::before,
    &.bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
        margin-left: -3px;
        content: "";
        border-width: 0 5px 5px;
        border-bottom-color: #000;
    }

    &.bs-tooltip-left,
    &.bs-tooltip-auto[x-placement^="left"] {
        padding: 0 5px;
    }

    &.bs-tooltip-left .arrow,
    &.bs-tooltip-auto[x-placement^="left"] .arrow {
        right: 0;
    }

    &.bs-tooltip-left .arrow::before,
    &.bs-tooltip-auto[x-placement^="left"] .arrow::before {
        right: 0;
        margin-top: -3px;
        content: "";
        border-width: 5px 0 5px 5px;
        border-left-color: #000;
    }

    & .arrow::before {
        position: absolute;
        border-color: transparent;
        border-style: solid;
    }
`;
