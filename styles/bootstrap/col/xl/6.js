import { css } from "emotion";

export const colXl6 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
        }
    }
`;