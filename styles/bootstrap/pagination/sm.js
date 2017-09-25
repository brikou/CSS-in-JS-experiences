import { css } from "emotion";

import { pageItem } from "./../page/item";
import { pageLink } from "./../page/link";

export const paginationSm = css`
    & .${pageLink} {
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        line-height: 1.5;
    }

    & .${pageItem}:first-child .${pageLink} {
        border-top-left-radius: 0.2rem;
        border-bottom-left-radius: 0.2rem;
    }

    & .${pageItem}:last-child .${pageLink} {
        border-top-right-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
    }
`;
