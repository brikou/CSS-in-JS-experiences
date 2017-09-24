import { css } from "emotion";

import { pageItem } from "./pageItem";
import { pageLink } from "./pageLink";

export const paginationLg = css`
    & .${pageLink} {
        padding: 0.75rem 1.5rem;
        font-size: 1.25rem;
        line-height: 1.5;
    }

    & .${pageItem}:first-child .${pageLink} {
        border-top-left-radius: 0.3rem;
        border-bottom-left-radius: 0.3rem;
    }

    & .${pageItem}:last-child .${pageLink} {
        border-top-right-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
    }
`;
