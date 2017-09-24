import { css } from "emotion";

export const carouselControlPrev = css`
    position: absolute;
    top: 0;
    bottom: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 15%;
    color: #fff;
    text-align: center;
    opacity: 0.5;

    &:focus,
    &:hover {
        color: #fff;
        text-decoration: none;
        outline: 0;
        opacity: 0.9;
    }

    left: 0;
`;
