import { css } from "emotion";

import { active } from "./../active";

export const carouselItem = css`
    position: relative;
    display: none;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    transition: -webkit-transform 0.6s ease;
    transition: transform 0.6s ease;
    transition: transform 0.6s ease, -webkit-transform 0.6s ease;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000px;
    perspective: 1000px;

    &.${active} {
        display: block;
    }
`;
