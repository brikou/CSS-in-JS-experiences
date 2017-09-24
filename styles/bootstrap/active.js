import { css } from "emotion";

export const active = css`
    &.carousel-item-right {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
    }

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        &.carousel-item-right {
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
        }
    }

    &.carousel-item-left {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
    }

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        &.carousel-item-left {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
        }
    }
`;
