import { css } from "emotion";

import { card } from "./card";
import { cardImgBottom } from "./cardImgBottom";
import { cardImgTop } from "./cardImgTop";

export const cardGroup = css`
    @media (min-width: 576px) {
        & {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-flow: row wrap;
            flex-flow: row wrap;
        }

        & .${card} {
            -ms-flex: 1 0 0%;
            flex: 1 0 0%;
        }

        & .${card} + .${card} {
            margin-left: 0;
            border-left: 0;
        }

        & .${card}:first-child {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }

        & .${card}:first-child .${cardImgTop} {
            border-top-right-radius: 0;
        }

        & .${card}:first-child .${cardImgBottom} {
            border-bottom-right-radius: 0;
        }

        & .${card}:last-child {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }

        & .${card}:last-child .${cardImgTop} {
            border-top-left-radius: 0;
        }

        & .${card}:last-child .${cardImgBottom} {
            border-bottom-left-radius: 0;
        }

        & .${card}:not(:first-child):not(:last-child) {
            border-radius: 0;
        }

        &
            .${card}:not(:first-child):not(:last-child)
            .${cardImgTop},
            &
            .${card}:not(:first-child):not(:last-child)
            .${cardImgBottom} {
            border-radius: 0;
        }
    }
`;
