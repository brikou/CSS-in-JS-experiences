import { css } from "emotion";

export const stickyTop = css`
    @supports ((position: -webkit-sticky) or (position: sticky)) {
        & {
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            z-index: 1020;
        }
    }
`;
