import { css } from "emotion";

export const customFileControl = css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 5;
    height: 2.5rem;
    padding: 0.5rem 1rem;
    line-height: 1.5;
    color: #495057;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;

    &:lang(en):empty::after {
        content: "Choose file...";
    }

    &::before {
        position: absolute;
        top: -1px;
        right: -1px;
        bottom: -1px;
        z-index: 6;
        display: block;
        height: 2.5rem;
        padding: 0.5rem 1rem;
        line-height: 1.5;
        color: #495057;
        background-color: #e9ecef;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 0 0.25rem 0.25rem 0;
    }

    &:lang(en)::before {
        content: "Browse";
    }
`;
