import { css } from "emotion";

export const embedResponsive = css`
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden;

    &::before {
        display: block;
        content: "";
    }

    & .embed-responsive-item,
    & iframe,
    & embed,
    & object,
    & video {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
`;
