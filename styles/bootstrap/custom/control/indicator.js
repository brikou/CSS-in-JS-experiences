import { css } from "emotion";

export const customControlIndicator = css`
    position: absolute;
    top: 0.25rem;
    left: 0;
    display: block;
    width: 1rem;
    height: 1rem;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #ddd;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
`;
