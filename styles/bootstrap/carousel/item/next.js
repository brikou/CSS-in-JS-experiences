import { css } from "emotion";

export const carouselItemNext = css`
    display: block;

    position: absolute;
    top: 0;

    &.carousel-item-left {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        &.carousel-item-left {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    -webkit-transform: translateX(100%);
    transform: translateX(100%);

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        & {
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
        }
    }
`;
