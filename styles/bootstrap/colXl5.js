import { css } from "emotion";

export const colXl5 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
            max-width: 41.666667%;
        }
    }
`;