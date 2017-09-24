import { css } from "emotion";

export const invalidTooltip = css`
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    width: 250px;
    padding: 0.5rem;
    margin-top: 0.1rem;
    font-size: 0.875rem;
    line-height: 1;
    color: #fff;
    background-color: rgba(220, 53, 69, 0.8);
    border-radius: 0.2rem;
`;
