import { css, injectGlobal } from "emotion";

injectGlobal`
    /*!
 * Bootstrap v4.0.0-beta (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors
 * Copyright 2011-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
    @media print {
        *,
        *::before,
        *::after {
            text-shadow: none !important;
            box-shadow: none !important;
        }

        a,
        a:visited {
            text-decoration: underline;
        }

        abbr[title]::after {
            content: " (" attr(title) ")";
        }

        pre {
            white-space: pre-wrap !important;
        }

        pre,
        blockquote {
            border: 1px solid #999;
            page-break-inside: avoid;
        }

        thead {
            display: table-header-group;
        }

        tr,
        img {
            page-break-inside: avoid;
        }

        p,
        h2,
        h3 {
            orphans: 3;
            widows: 3;
        }

        h2,
        h3 {
            page-break-after: avoid;
        }
    }

    html {
        box-sizing: border-box;
        font-family: sans-serif;
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -ms-overflow-style: scrollbar;
        -webkit-tap-highlight-color: transparent;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    @-ms-viewport {
        width: device-width;
    }

    article,
    aside,
    dialog,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    nav,
    section {
        display: block;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, sans-serif;
        font-size: 1rem;
        font-weight: normal;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
    }

    [tabindex="-1"]:focus {
        outline: none !important;
    }

    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0;
        margin-bottom: 0.5rem;
    }

    p {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    abbr[title],
    abbr[data-original-title] {
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
        cursor: help;
        border-bottom: 0;
    }

    address {
        margin-bottom: 1rem;
        font-style: normal;
        line-height: inherit;
    }

    ol,
    ul,
    dl {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    ol ol,
    ul ul,
    ol ul,
    ul ol {
        margin-bottom: 0;
    }

    dt {
        font-weight: bold;
    }

    dd {
        margin-bottom: 0.5rem;
        margin-left: 0;
    }

    blockquote {
        margin: 0 0 1rem;
    }

    dfn {
        font-style: italic;
    }

    b,
    strong {
        font-weight: bolder;
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        position: relative;
        font-size: 75%;
        line-height: 0;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    a {
        color: #007bff;
        text-decoration: none;
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
    }

    a:hover {
        color: #0056b3;
        text-decoration: underline;
    }

    a:not([href]):not([tabindex]) {
        color: inherit;
        text-decoration: none;
    }

    a:not([href]):not([tabindex]):focus,
    a:not([href]):not([tabindex]):hover {
        color: inherit;
        text-decoration: none;
    }

    a:not([href]):not([tabindex]):focus {
        outline: 0;
    }

    pre,
    code,
    kbd,
    samp {
        font-family: monospace, monospace;
        font-size: 1em;
    }

    pre {
        margin-top: 0;
        margin-bottom: 1rem;
        overflow: auto;
    }

    figure {
        margin: 0 0 1rem;
    }

    img {
        vertical-align: middle;
        border-style: none;
    }

    svg:not(:root) {
        overflow: hidden;
    }

    a,
    area,
    button,
    [role="button"],
    input,
    label,
    select,
    summary,
    textarea {
        -ms-touch-action: manipulation;
        touch-action: manipulation;
    }

    table {
        border-collapse: collapse;
    }

    caption {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        color: #868e96;
        text-align: left;
        caption-side: bottom;
    }

    th {
        text-align: left;
    }

    label {
        display: inline-block;
        margin-bottom: 0.5rem;
    }

    button:focus {
        outline: 1px dotted;
        outline: 5px auto -webkit-focus-ring-color;
    }

    input,
    button,
    select,
    optgroup,
    textarea {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    button,
    input {
        overflow: visible;
    }

    button,
    select {
        text-transform: none;
    }

    button,
    html [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        padding: 0;
        border-style: none;
    }

    input[type="radio"],
    input[type="checkbox"] {
        box-sizing: border-box;
        padding: 0;
    }

    input[type="date"],
    input[type="time"],
    input[type="datetime-local"],
    input[type="month"] {
        -webkit-appearance: listbox;
    }

    textarea {
        overflow: auto;
        resize: vertical;
    }

    fieldset {
        min-width: 0;
        padding: 0;
        margin: 0;
        border: 0;
    }

    legend {
        display: block;
        width: 100%;
        max-width: 100%;
        padding: 0;
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
        line-height: inherit;
        color: inherit;
        white-space: normal;
    }

    progress {
        vertical-align: baseline;
    }

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    [type="search"] {
        outline-offset: -2px;
        -webkit-appearance: none;
    }

    [type="search"]::-webkit-search-cancel-button,
    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
        font: inherit;
        -webkit-appearance: button;
    }

    output {
        display: inline-block;
    }

    summary {
        display: list-item;
    }

    template {
        display: none;
    }

    [hidden] {
        display: none !important;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-bottom: 0.5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        color: inherit;
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.75rem;
    }

    h4 {
        font-size: 1.5rem;
    }

    h5 {
        font-size: 1.25rem;
    }

    h6 {
        font-size: 1rem;
    }

    hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    small {
        font-size: 80%;
        font-weight: normal;
    }

    mark {
        padding: 0.2em;
        background-color: #fcf8e3;
    }

    code,
    kbd,
    pre,
    samp {
        font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New",
            monospace;
    }

    code {
        padding: 0.2rem 0.4rem;
        font-size: 90%;
        color: #bd4147;
        background-color: #f8f9fa;
        border-radius: 0.25rem;
    }

    a > code {
        padding: 0;
        color: inherit;
        background-color: inherit;
    }

    kbd {
        padding: 0.2rem 0.4rem;
        font-size: 90%;
        color: #fff;
        background-color: #212529;
        border-radius: 0.2rem;
    }

    kbd kbd {
        padding: 0;
        font-size: 100%;
        font-weight: bold;
    }

    pre {
        display: block;
        margin-top: 0;
        margin-bottom: 1rem;
        font-size: 90%;
        color: #212529;
    }

    pre code {
        padding: 0;
        font-size: inherit;
        color: inherit;
        background-color: transparent;
        border-radius: 0;
    }

    @-webkit-keyframes progress-bar-stripes {
        from {
            background-position: 1rem 0;
        }

        to {
            background-position: 0 0;
        }
    }

    @keyframes progress-bar-stripes {
        from {
            background-position: 1rem 0;
        }

        to {
            background-position: 0 0;
        }
    }

    /*# sourceMappingURL=bootstrap.css.map */
`;

export const navbar = css`
    @media print {
        & {
            display: none;
        }
    }

    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0.5rem 1rem;

    & > .${container}, & > .${containerFluid} {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }
`;

export const badge = css`
    @media print {
        & {
            border: 1px solid #000;
        }
    }

    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: bold;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;

    &:empty {
        display: none;
    }
`;

export const table = css`
    @media print {
        & {
            border-collapse: collapse !important;
        }

        & td,
        & th {
            background-color: #fff !important;
        }
    }

    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;

    & th,
    & td {
        padding: 0.75rem;
        vertical-align: top;
        border-top: 1px solid #e9ecef;
    }

    & thead th {
        vertical-align: bottom;
        border-bottom: 2px solid #e9ecef;
    }

    & tbody + tbody {
        border-top: 2px solid #e9ecef;
    }

    & & {
        background-color: #fff;
    }
`;

export const tableBordered = css`
    @media print {
        & th,
        & td {
            border: 1px solid #ddd !important;
        }
    }

    border: 1px solid #e9ecef;

    & th,
    & td {
        border: 1px solid #e9ecef;
    }

    & thead th,
    & thead td {
        border-bottom-width: 2px;
    }
`;

export const h1 = css`
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;

    font-size: 2.5rem;
`;

export const h2 = css`
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;

    font-size: 2rem;
`;

export const h3 = css`
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;

    font-size: 1.75rem;
`;

export const h4 = css`
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;

    font-size: 1.5rem;
`;

export const h5 = css`
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;

    font-size: 1.25rem;
`;

export const h6 = css`
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;

    font-size: 1rem;
`;

export const lead = css`
    font-size: 1.25rem;
    font-weight: 300;
`;

export const display1 = css`
    font-size: 6rem;
    font-weight: 300;
    line-height: 1.1;
`;

export const display2 = css`
    font-size: 5.5rem;
    font-weight: 300;
    line-height: 1.1;
`;

export const display3 = css`
    font-size: 4.5rem;
    font-weight: 300;
    line-height: 1.1;
`;

export const display4 = css`
    font-size: 3.5rem;
    font-weight: 300;
    line-height: 1.1;
`;

export const small = css`
    font-size: 80%;
    font-weight: normal;
`;

export const mark = css`
    padding: 0.2em;
    background-color: #fcf8e3;
`;

export const listUnstyled = css`
    padding-left: 0;
    list-style: none;
`;

export const listInline = css`
    padding-left: 0;
    list-style: none;
`;

export const listInlineItem = css`
    display: inline-block;

    &:not(:last-child) {
        margin-right: 5px;
    }
`;

export const initialism = css`
    font-size: 90%;
    text-transform: uppercase;
`;

export const blockquote = css`
    margin-bottom: 1rem;
    font-size: 1.25rem;
`;

export const blockquoteFooter = css`
    display: block;
    font-size: 80%;
    color: #868e96;

    &::before {
        content: "\\2014 \\00A0";
    }
`;

export const imgFluid = css`
    max-width: 100%;
    height: auto;
`;

export const imgThumbnail = css`
    padding: 0.25rem;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 0.25rem;
    transition: all 0.2s ease-in-out;
    max-width: 100%;
    height: auto;
`;

export const figure = css`
    display: inline-block;
`;

export const figureImg = css`
    margin-bottom: 0.5rem;
    line-height: 1;
`;

export const figureCaption = css`
    font-size: 90%;
    color: #868e96;
`;

export const preScrollable = css`
    max-height: 340px;
    overflow-y: scroll;
`;

export const container = css`
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
    width: 100%;

    @media (min-width: 576px) {
        & {
            max-width: 540px;
        }
    }

    @media (min-width: 768px) {
        & {
            max-width: 720px;
        }
    }

    @media (min-width: 992px) {
        & {
            max-width: 960px;
        }
    }

    @media (min-width: 1200px) {
        & {
            max-width: 1140px;
        }
    }
`;

export const containerFluid = css`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
    width: 100%;
`;

export const row = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;

export const noGutters = css`
    margin-right: 0;
    margin-left: 0;

    & > .${col}, & > [class*="col-"] {
        padding-right: 0;
        padding-left: 0;
    }
`;

export const col1 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
`;

export const col2 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
`;

export const col3 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
`;

export const col4 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
`;

export const col5 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
`;

export const col6 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
`;

export const col7 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
`;

export const col8 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
`;

export const col9 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
`;

export const col10 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
`;

export const col11 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
`;

export const col12 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
`;

export const col = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
`;

export const colAuto = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: none;
`;

export const colSm1 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
            max-width: 8.333333%;
        }
    }
`;

export const colSm2 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
            max-width: 16.666667%;
        }
    }
`;

export const colSm3 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
        }
    }
`;

export const colSm4 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }
    }
`;

export const colSm5 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
            max-width: 41.666667%;
        }
    }
`;

export const colSm6 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
        }
    }
`;

export const colSm7 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
            max-width: 58.333333%;
        }
    }
`;

export const colSm8 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
            max-width: 66.666667%;
        }
    }
`;

export const colSm9 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%;
        }
    }
`;

export const colSm10 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
            max-width: 83.333333%;
        }
    }
`;

export const colSm11 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
            max-width: 91.666667%;
        }
    }
`;

export const colSm12 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
        }
    }
`;

export const colSm = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            -ms-flex-positive: 1;
            flex-grow: 1;
            max-width: 100%;
        }
    }
`;

export const colSmAuto = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: auto;
            max-width: none;
        }
    }
`;

export const colMd1 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
            max-width: 8.333333%;
        }
    }
`;

export const colMd2 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
            max-width: 16.666667%;
        }
    }
`;

export const colMd3 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
        }
    }
`;

export const colMd4 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }
    }
`;

export const colMd5 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
            max-width: 41.666667%;
        }
    }
`;

export const colMd6 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
        }
    }
`;

export const colMd7 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
            max-width: 58.333333%;
        }
    }
`;

export const colMd8 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
            max-width: 66.666667%;
        }
    }
`;

export const colMd9 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%;
        }
    }
`;

export const colMd10 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
            max-width: 83.333333%;
        }
    }
`;

export const colMd11 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
            max-width: 91.666667%;
        }
    }
`;

export const colMd12 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
        }
    }
`;

export const colMd = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            -ms-flex-positive: 1;
            flex-grow: 1;
            max-width: 100%;
        }
    }
`;

export const colMdAuto = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: auto;
            max-width: none;
        }
    }
`;

export const colLg1 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
            max-width: 8.333333%;
        }
    }
`;

export const colLg2 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
            max-width: 16.666667%;
        }
    }
`;

export const colLg3 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
        }
    }
`;

export const colLg4 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }
    }
`;

export const colLg5 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
            max-width: 41.666667%;
        }
    }
`;

export const colLg6 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
        }
    }
`;

export const colLg7 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
            max-width: 58.333333%;
        }
    }
`;

export const colLg8 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
            max-width: 66.666667%;
        }
    }
`;

export const colLg9 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%;
        }
    }
`;

export const colLg10 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
            max-width: 83.333333%;
        }
    }
`;

export const colLg11 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
            max-width: 91.666667%;
        }
    }
`;

export const colLg12 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
        }
    }
`;

export const colLg = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            -ms-flex-positive: 1;
            flex-grow: 1;
            max-width: 100%;
        }
    }
`;

export const colLgAuto = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: auto;
            max-width: none;
        }
    }
`;

export const colXl1 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
            max-width: 8.333333%;
        }
    }
`;

export const colXl2 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
            max-width: 16.666667%;
        }
    }
`;

export const colXl3 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
        }
    }
`;

export const colXl4 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }
    }
`;

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

export const colXl7 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
            max-width: 58.333333%;
        }
    }
`;

export const colXl8 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
            max-width: 66.666667%;
        }
    }
`;

export const colXl9 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%;
        }
    }
`;

export const colXl10 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
            max-width: 83.333333%;
        }
    }
`;

export const colXl11 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
            max-width: 91.666667%;
        }
    }
`;

export const colXl12 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
        }
    }
`;

export const colXl = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            -ms-flex-positive: 1;
            flex-grow: 1;
            max-width: 100%;
        }
    }
`;

export const colXlAuto = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: auto;
            max-width: none;
        }
    }
`;

export const order1 = css`
    -ms-flex-order: 1;
    order: 1;
`;

export const order2 = css`
    -ms-flex-order: 2;
    order: 2;
`;

export const order3 = css`
    -ms-flex-order: 3;
    order: 3;
`;

export const order4 = css`
    -ms-flex-order: 4;
    order: 4;
`;

export const order5 = css`
    -ms-flex-order: 5;
    order: 5;
`;

export const order6 = css`
    -ms-flex-order: 6;
    order: 6;
`;

export const order7 = css`
    -ms-flex-order: 7;
    order: 7;
`;

export const order8 = css`
    -ms-flex-order: 8;
    order: 8;
`;

export const order9 = css`
    -ms-flex-order: 9;
    order: 9;
`;

export const order10 = css`
    -ms-flex-order: 10;
    order: 10;
`;

export const order11 = css`
    -ms-flex-order: 11;
    order: 11;
`;

export const order12 = css`
    -ms-flex-order: 12;
    order: 12;
`;

export const orderSm1 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 1;
            order: 1;
        }
    }
`;

export const orderSm2 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 2;
            order: 2;
        }
    }
`;

export const orderSm3 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 3;
            order: 3;
        }
    }
`;

export const orderSm4 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 4;
            order: 4;
        }
    }
`;

export const orderSm5 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 5;
            order: 5;
        }
    }
`;

export const orderSm6 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 6;
            order: 6;
        }
    }
`;

export const orderSm7 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 7;
            order: 7;
        }
    }
`;

export const orderSm8 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 8;
            order: 8;
        }
    }
`;

export const orderSm9 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 9;
            order: 9;
        }
    }
`;

export const orderSm10 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 10;
            order: 10;
        }
    }
`;

export const orderSm11 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 11;
            order: 11;
        }
    }
`;

export const orderSm12 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 12;
            order: 12;
        }
    }
`;

export const orderMd1 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 1;
            order: 1;
        }
    }
`;

export const orderMd2 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 2;
            order: 2;
        }
    }
`;

export const orderMd3 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 3;
            order: 3;
        }
    }
`;

export const orderMd4 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 4;
            order: 4;
        }
    }
`;

export const orderMd5 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 5;
            order: 5;
        }
    }
`;

export const orderMd6 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 6;
            order: 6;
        }
    }
`;

export const orderMd7 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 7;
            order: 7;
        }
    }
`;

export const orderMd8 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 8;
            order: 8;
        }
    }
`;

export const orderMd9 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 9;
            order: 9;
        }
    }
`;

export const orderMd10 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 10;
            order: 10;
        }
    }
`;

export const orderMd11 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 11;
            order: 11;
        }
    }
`;

export const orderMd12 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 12;
            order: 12;
        }
    }
`;

export const orderLg1 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 1;
            order: 1;
        }
    }
`;

export const orderLg2 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 2;
            order: 2;
        }
    }
`;

export const orderLg3 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 3;
            order: 3;
        }
    }
`;

export const orderLg4 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 4;
            order: 4;
        }
    }
`;

export const orderLg5 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 5;
            order: 5;
        }
    }
`;

export const orderLg6 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 6;
            order: 6;
        }
    }
`;

export const orderLg7 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 7;
            order: 7;
        }
    }
`;

export const orderLg8 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 8;
            order: 8;
        }
    }
`;

export const orderLg9 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 9;
            order: 9;
        }
    }
`;

export const orderLg10 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 10;
            order: 10;
        }
    }
`;

export const orderLg11 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 11;
            order: 11;
        }
    }
`;

export const orderLg12 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 12;
            order: 12;
        }
    }
`;

export const orderXl1 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 1;
            order: 1;
        }
    }
`;

export const orderXl2 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 2;
            order: 2;
        }
    }
`;

export const orderXl3 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 3;
            order: 3;
        }
    }
`;

export const orderXl4 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 4;
            order: 4;
        }
    }
`;

export const orderXl5 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 5;
            order: 5;
        }
    }
`;

export const orderXl6 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 6;
            order: 6;
        }
    }
`;

export const orderXl7 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 7;
            order: 7;
        }
    }
`;

export const orderXl8 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 8;
            order: 8;
        }
    }
`;

export const orderXl9 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 9;
            order: 9;
        }
    }
`;

export const orderXl10 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 10;
            order: 10;
        }
    }
`;

export const orderXl11 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 11;
            order: 11;
        }
    }
`;

export const orderXl12 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 12;
            order: 12;
        }
    }
`;

export const tableSm = css`
    & th,
    & td {
        padding: 0.3rem;
    }
`;

export const tableStriped = css`
    & tbody tr:nth-of-type(odd) {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

export const tableHover = css`
    & tbody tr:hover {
        background-color: rgba(0, 0, 0, 0.075);
    }

    & .${tablePrimary}:hover {
        background-color: #9fcdff;
    }

    & .${tablePrimary}:hover > td,
    & .${tablePrimary}:hover > th {
        background-color: #9fcdff;
    }

    & .${tableSecondary}:hover {
        background-color: #cfd2d6;
    }

    & .${tableSecondary}:hover > td,
    & .${tableSecondary}:hover > th {
        background-color: #cfd2d6;
    }

    & .${tableSuccess}:hover {
        background-color: #b1dfbb;
    }

    & .${tableSuccess}:hover > td,
    & .${tableSuccess}:hover > th {
        background-color: #b1dfbb;
    }

    & .${tableInfo}:hover {
        background-color: #abdde5;
    }

    & .${tableInfo}:hover > td,
    & .${tableInfo}:hover > th {
        background-color: #abdde5;
    }

    & .${tableWarning}:hover {
        background-color: #ffe8a1;
    }

    & .${tableWarning}:hover > td,
    & .${tableWarning}:hover > th {
        background-color: #ffe8a1;
    }

    & .${tableDanger}:hover {
        background-color: #f1b0b7;
    }

    & .${tableDanger}:hover > td,
    & .${tableDanger}:hover > th {
        background-color: #f1b0b7;
    }

    & .${tableLight}:hover {
        background-color: #ececf6;
    }

    & .${tableLight}:hover > td,
    & .${tableLight}:hover > th {
        background-color: #ececf6;
    }

    & .${tableDark}:hover {
        background-color: #b9bbbe;
    }

    & .${tableDark}:hover > td,
    & .${tableDark}:hover > th {
        background-color: #b9bbbe;
    }

    & .${tableActive}:hover {
        background-color: rgba(0, 0, 0, 0.075);
    }

    & .${tableActive}:hover > td,
    & .${tableActive}:hover > th {
        background-color: rgba(0, 0, 0, 0.075);
    }
`;

export const tablePrimary = css`
    &,
    & > th,
    & > td {
        background-color: #b8daff;
    }
`;

export const tableSecondary = css`
    &,
    & > th,
    & > td {
        background-color: #dddfe2;
    }
`;

export const tableSuccess = css`
    &,
    & > th,
    & > td {
        background-color: #c3e6cb;
    }
`;

export const tableInfo = css`
    &,
    & > th,
    & > td {
        background-color: #bee5eb;
    }
`;

export const tableWarning = css`
    &,
    & > th,
    & > td {
        background-color: #ffeeba;
    }
`;

export const tableDanger = css`
    &,
    & > th,
    & > td {
        background-color: #f5c6cb;
    }
`;

export const tableLight = css`
    &,
    & > th,
    & > td {
        background-color: #fdfdfe;
    }
`;

export const tableDark = css`
    &,
    & > th,
    & > td {
        background-color: #c6c8ca;
    }
`;

export const tableActive = css`
    &,
    & > th,
    & > td {
        background-color: rgba(0, 0, 0, 0.075);
    }
`;

export const theadInverse = css`
    & th {
        color: #fff;
        background-color: #212529;
    }
`;

export const theadDefault = css`
    & th {
        color: #495057;
        background-color: #e9ecef;
    }
`;

export const tableInverse = css`
    color: #fff;
    background-color: #212529;

    & th,
    & td,
    & thead th {
        border-color: #32383e;
    }

    &.${tableBordered} {
        border: 0;
    }

    &.${tableStriped} tbody tr:nth-of-type(odd) {
        background-color: rgba(255, 255, 255, 0.05);
    }

    &.${tableHover} tbody tr:hover {
        background-color: rgba(255, 255, 255, 0.075);
    }
`;

export const tableResponsive = css`
    @media (max-width: 991px) {
        & {
            display: block;
            width: 100%;
            overflow-x: auto;
            -ms-overflow-style: -ms-autohiding-scrollbar;
        }

        &.${tableBordered} {
            border: 0;
        }
    }
`;

export const formControl = css`
    display: block;
    width: 100%;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    line-height: 1.25;
    color: #495057;
    background-color: #fff;
    background-image: none;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

    &::-ms-expand {
        background-color: transparent;
        border: 0;
    }

    &:focus {
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: none;
    }

    &::-webkit-input-placeholder {
        color: #868e96;
        opacity: 1;
    }

    &:-ms-input-placeholder {
        color: #868e96;
        opacity: 1;
    }

    &::placeholder {
        color: #868e96;
        opacity: 1;
    }

    &:disabled,
    &[readonly] {
        background-color: #e9ecef;
        opacity: 1;
    }

    select&:not([size]):not([multiple]) {
        height: calc(2.25rem + 2px);
    }

    select&:focus::-ms-value {
        color: #495057;
        background-color: #fff;
    }

    &.is-valid {
        border-color: #28a745;
    }

    &.is-valid:focus {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }

    &.is-valid ~ .${invalidFeedback}, &.is-valid ~ .${invalidTooltip} {
        display: block;
    }

    &.is-invalid {
        border-color: #dc3545;
    }

    &.is-invalid:focus {
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }

    &.is-invalid ~ .${invalidFeedback}, &.is-invalid ~ .${invalidTooltip} {
        display: block;
    }

    & + .${inputGroupAddon}:not(:first-child) {
        border-left: 0;
    }
`;

export const formControlFile = css`
    display: block;
`;

export const formControlRange = css`
    display: block;
`;

export const colFormLabel = css`
    padding-top: calc(0.5rem - 1px * 2);
    padding-bottom: calc(0.5rem - 1px * 2);
    margin-bottom: 0;
`;

export const colFormLabelLg = css`
    padding-top: calc(0.5rem - 1px * 2);
    padding-bottom: calc(0.5rem - 1px * 2);
    font-size: 1.25rem;
`;

export const colFormLabelSm = css`
    padding-top: calc(0.25rem - 1px * 2);
    padding-bottom: calc(0.25rem - 1px * 2);
    font-size: 0.875rem;
`;

export const colFormLegend = css`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-bottom: 0;
    font-size: 1rem;
`;

export const formControlPlaintext = css`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-bottom: 0;
    line-height: 1.25;
    border: solid transparent;
    border-width: 1px 0;

    &.${formControlSm}, &.${formControlLg} {
        padding-right: 0;
        padding-left: 0;
    }
`;

export const inputGroupSm = css`& > .${formControlPlaintext}.${formControl}, & > .${formControlPlaintext}.${inputGroupAddon}, & > .${inputGroupBtn} > .${formControlPlaintext}.${btn} {
  padding-right: 0;
  padding-left: 0;
}

& > .${formControl}, & > .${inputGroupAddon}, & > .${inputGroupBtn} > .${btn} {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

& > select.${formControl}:not([size]):not([multiple]), & > select.${inputGroupAddon}:not([size]):not([multiple]), & > .${inputGroupBtn} > select.${btn}:not([size]):not([multiple]) {
  height: calc(1.8125rem + 2px);
}

& > .${inputGroupAddon}, & > .${inputGroupBtn} > .${inputGroupAddon}.${btn} {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

`;

export const inputGroupLg = css`& > .${formControlPlaintext}.${formControl}, & > .${formControlPlaintext}.${inputGroupAddon}, & > .${inputGroupBtn} > .${formControlPlaintext}.${btn} {
  padding-right: 0;
  padding-left: 0;
}

& > .${formControl}, & > .${inputGroupAddon}, & > .${inputGroupBtn} > .${btn} {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

& > select.${formControl}:not([size]):not([multiple]), & > select.${inputGroupAddon}:not([size]):not([multiple]), & > .${inputGroupBtn} > select.${btn}:not([size]):not([multiple]) {
  height: calc(2.3125rem + 2px);
}

& > .${inputGroupAddon}, & > .${inputGroupBtn} > .${inputGroupAddon}.${btn} {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

`;

export const formControlSm = css`
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.2rem;

    select&:not([size]):not([multiple]) {
        height: calc(1.8125rem + 2px);
    }
`;

export const formControlLg = css`
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;

    select&:not([size]):not([multiple]) {
        height: calc(2.3125rem + 2px);
    }
`;

export const formGroup = css`
    margin-bottom: 1rem;
`;

export const formText = css`
    display: block;
    margin-top: 0.25rem;
`;

export const formRow = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;

    & > .${col}, & > [class*="col-"] {
        padding-right: 5px;
        padding-left: 5px;
    }
`;

export const formCheck = css`
    position: relative;
    display: block;
    margin-bottom: 0.5rem;

    &.disabled .${formCheckLabel} {
        color: #868e96;
    }
`;

export const formCheckLabel = css`
    padding-left: 1.25rem;
    margin-bottom: 0;
`;

export const formCheckInput = css`
    position: absolute;
    margin-top: 0.25rem;
    margin-left: -1.25rem;

    &:only-child {
        position: static;
    }

    &.is-valid + .${formCheckLabel} {
        color: #28a745;
    }

    &.is-invalid + .${formCheckLabel} {
        color: #dc3545;
    }
`;

export const formCheckInline = css`
    display: inline-block;

    & .${formCheckLabel} {
        vertical-align: middle;
    }

    & + & {
        margin-left: 0.75rem;
    }
`;

export const invalidFeedback = css`
    display: none;
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: #dc3545;
`;

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

export const wasValidated = css`
    & .${formControl}:valid, & .${customSelect}:valid {
        border-color: #28a745;
    }

    & .${formControl}:valid:focus, & .${customSelect}:valid:focus {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }

    &
        .${formControl}:valid
        ~ .${invalidFeedback},
        &
        .${formControl}:valid
        ~ .${invalidTooltip},
        &
        .${customSelect}:valid
        ~ .${invalidFeedback},
        &
        .${customSelect}:valid
        ~ .${invalidTooltip} {
        display: block;
    }

    & .${formCheckInput}:valid + .${formCheckLabel} {
        color: #28a745;
    }

    & .${customControlInput}:valid ~ .${customControlIndicator} {
        background-color: rgba(40, 167, 69, 0.25);
    }

    & .${customControlInput}:valid ~ .custom-control-description {
        color: #28a745;
    }

    & .${customFileInput}:valid ~ .${customFileControl} {
        border-color: #28a745;
    }

    & .${customFileInput}:valid ~ .${customFileControl}::before {
        border-color: inherit;
    }

    & .${customFileInput}:valid:focus {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }

    & .${formControl}:invalid, & .${customSelect}:invalid {
        border-color: #dc3545;
    }

    & .${formControl}:invalid:focus, & .${customSelect}:invalid:focus {
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }

    &
        .${formControl}:invalid
        ~ .${invalidFeedback},
        &
        .${formControl}:invalid
        ~ .${invalidTooltip},
        &
        .${customSelect}:invalid
        ~ .${invalidFeedback},
        &
        .${customSelect}:invalid
        ~ .${invalidTooltip} {
        display: block;
    }

    & .${formCheckInput}:invalid + .${formCheckLabel} {
        color: #dc3545;
    }

    & .${customControlInput}:invalid ~ .${customControlIndicator} {
        background-color: rgba(220, 53, 69, 0.25);
    }

    & .${customControlInput}:invalid ~ .custom-control-description {
        color: #dc3545;
    }

    & .${customFileInput}:invalid ~ .${customFileControl} {
        border-color: #dc3545;
    }

    & .${customFileInput}:invalid ~ .${customFileControl}::before {
        border-color: inherit;
    }

    & .${customFileInput}:invalid:focus {
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }
`;

export const customSelect = css`
    &.is-valid {
        border-color: #28a745;
    }

    &.is-valid:focus {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }

    &.is-valid ~ .${invalidFeedback}, &.is-valid ~ .${invalidTooltip} {
        display: block;
    }

    &.is-invalid {
        border-color: #dc3545;
    }

    &.is-invalid:focus {
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }

    &.is-invalid ~ .${invalidFeedback}, &.is-invalid ~ .${invalidTooltip} {
        display: block;
    }

    display: inline-block;
    max-width: 100%;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 1.75rem 0.375rem 0.75rem;
    line-height: 1.25;
    color: #495057;
    vertical-align: middle;
    background: #fff
        url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
        no-repeat right 0.75rem center;
    background-size: 8px 10px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:focus {
        border-color: #80bdff;
        outline: none;
    }

    &:focus::-ms-value {
        color: #495057;
        background-color: #fff;
    }

    &:disabled {
        color: #868e96;
        background-color: #e9ecef;
    }

    &::-ms-expand {
        opacity: 0;
    }
`;

export const customControlInput = css`
    &.is-valid ~ .${customControlIndicator} {
        background-color: rgba(40, 167, 69, 0.25);
    }

    &.is-valid ~ .custom-control-description {
        color: #28a745;
    }

    &.is-invalid ~ .${customControlIndicator} {
        background-color: rgba(220, 53, 69, 0.25);
    }

    &.is-invalid ~ .custom-control-description {
        color: #dc3545;
    }

    position: absolute;
    z-index: -1;
    opacity: 0;

    &:checked ~ .${customControlIndicator} {
        color: #fff;
        background-color: #007bff;
    }

    &:focus ~ .${customControlIndicator} {
        box-shadow: 0 0 0 1px #fff, 0 0 0 3px #007bff;
    }

    &:active ~ .${customControlIndicator} {
        color: #fff;
        background-color: #b3d7ff;
    }

    &:disabled ~ .${customControlIndicator} {
        background-color: #e9ecef;
    }

    &:disabled ~ .custom-control-description {
        color: #868e96;
    }
`;

export const customFileInput = css`
    &.is-valid ~ .${customFileControl} {
        border-color: #28a745;
    }

    &.is-valid ~ .${customFileControl}::before {
        border-color: inherit;
    }

    &.is-valid:focus {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }

    &.is-invalid ~ .${customFileControl} {
        border-color: #dc3545;
    }

    &.is-invalid ~ .${customFileControl}::before {
        border-color: inherit;
    }

    &.is-invalid:focus {
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }

    min-width: 14rem;
    max-width: 100%;
    height: 2.5rem;
    margin: 0;
    opacity: 0;
`;

export const formInline = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-align: center;
    align-items: center;

    & .${formCheck} {
        width: 100%;
    }

    @media (min-width: 576px) {
        & label {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: center;
            justify-content: center;
            margin-bottom: 0;
        }

        & .${formGroup} {
            display: -ms-flexbox;
            display: flex;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            -ms-flex-flow: row wrap;
            flex-flow: row wrap;
            -ms-flex-align: center;
            align-items: center;
            margin-bottom: 0;
        }

        & .${formControl} {
            display: inline-block;
            width: auto;
            vertical-align: middle;
        }

        & .${formControlPlaintext} {
            display: inline-block;
        }

        & .${inputGroup} {
            width: auto;
        }

        & .form-control-label {
            margin-bottom: 0;
            vertical-align: middle;
        }

        & .${formCheck} {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: center;
            justify-content: center;
            width: auto;
            margin-top: 0;
            margin-bottom: 0;
        }

        & .${formCheckLabel} {
            padding-left: 0;
        }

        & .${formCheckInput} {
            position: relative;
            margin-top: 0;
            margin-right: 0.25rem;
            margin-left: 0;
        }

        & .${customControl} {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: center;
            justify-content: center;
            padding-left: 0;
        }

        & .${customControlIndicator} {
            position: static;
            display: inline-block;
            margin-right: 0.25rem;
            vertical-align: text-bottom;
        }

        & .has-feedback .form-control-feedback {
            top: 0;
        }
    }
`;

export const btn = css`
    display: inline-block;
    font-weight: normal;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    line-height: 1.25;
    border-radius: 0.25rem;
    transition: all 0.15s ease-in-out;

    &:focus,
    &:hover {
        text-decoration: none;
    }

    &:focus,
    &.focus {
        outline: 0;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
    }

    &.disabled,
    &:disabled {
        opacity: 0.65;
    }

    &:active,
    &.${active} {
        background-image: none;
    }

    a&.disabled,
    fieldset[disabled] a& {
        pointer-events: none;
    }

    & + .dropdown-toggle-split {
        padding-right: 0.5625rem;
        padding-left: 0.5625rem;
    }

    & + .dropdown-toggle-split::after {
        margin-left: 0;
    }

    [data-toggle="buttons"] > & input[type="radio"],
    [data-toggle="buttons"] > & input[type="checkbox"] {
        position: absolute;
        clip: rect(0, 0, 0, 0);
        pointer-events: none;
    }

    & .${badge} {
        position: relative;
        top: -1px;
    }
`;

export const btnPrimary = css`
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;

    &:hover {
        color: #fff;
        background-color: #0069d9;
        border-color: #0062cc;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
    }

    &.disabled,
    &:disabled {
        background-color: #007bff;
        border-color: #007bff;
    }

    &:active,
    &.${active} {
        background-color: #0069d9;
        background-image: none;
        border-color: #0062cc;
    }
`;

export const show = css`& > .${btnPrimary}.${dropdownToggle} {
  background-color: #0069d9;
  background-image: none;
  border-color: #0062cc;
}

& > .${btnSecondary}.${dropdownToggle} {
  background-color: #727b84;
  background-image: none;
  border-color: #6c757d;
}

& > .${btnSuccess}.${dropdownToggle} {
  background-color: #218838;
  background-image: none;
  border-color: #1e7e34;
}

& > .${btnInfo}.${dropdownToggle} {
  background-color: #138496;
  background-image: none;
  border-color: #117a8b;
}

& > .${btnWarning}.${dropdownToggle} {
  background-color: #e0a800;
  background-image: none;
  border-color: #d39e00;
}

& > .${btnDanger}.${dropdownToggle} {
  background-color: #c82333;
  background-image: none;
  border-color: #bd2130;
}

& > .${btnLight}.${dropdownToggle} {
  background-color: #e2e6ea;
  background-image: none;
  border-color: #dae0e5;
}

& > .${btnDark}.${dropdownToggle} {
  background-color: #23272b;
  background-image: none;
  border-color: #1d2124;
}

& > .${btnOutlinePrimary}.${dropdownToggle} {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

& > .${btnOutlineSecondary}.${dropdownToggle} {
  color: #fff;
  background-color: #868e96;
  border-color: #868e96;
}

& > .${btnOutlineSuccess}.${dropdownToggle} {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

& > .${btnOutlineInfo}.${dropdownToggle} {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

& > .${btnOutlineWarning}.${dropdownToggle} {
  color: #fff;
  background-color: #ffc107;
  border-color: #ffc107;
}

& > .${btnOutlineDanger}.${dropdownToggle} {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

& > .${btnOutlineLight}.${dropdownToggle} {
  color: #fff;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

& > .${btnOutlineDark}.${dropdownToggle} {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

& > a {
  outline: 0;
}

& > .${navPills} .${navLink} {
  color: #fff;
  background-color: #007bff;
}

`;

export const btnSecondary = css`
    color: #fff;
    background-color: #868e96;
    border-color: #868e96;

    &:hover {
        color: #fff;
        background-color: #727b84;
        border-color: #6c757d;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(134, 142, 150, 0.5);
    }

    &.disabled,
    &:disabled {
        background-color: #868e96;
        border-color: #868e96;
    }

    &:active,
    &.${active} {
        background-color: #727b84;
        background-image: none;
        border-color: #6c757d;
    }
`;

export const btnSuccess = css`
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;

    &:hover {
        color: #fff;
        background-color: #218838;
        border-color: #1e7e34;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5);
    }

    &.disabled,
    &:disabled {
        background-color: #28a745;
        border-color: #28a745;
    }

    &:active,
    &.${active} {
        background-color: #218838;
        background-image: none;
        border-color: #1e7e34;
    }
`;

export const btnInfo = css`
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;

    &:hover {
        color: #fff;
        background-color: #138496;
        border-color: #117a8b;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.5);
    }

    &.disabled,
    &:disabled {
        background-color: #17a2b8;
        border-color: #17a2b8;
    }

    &:active,
    &.${active} {
        background-color: #138496;
        background-image: none;
        border-color: #117a8b;
    }
`;

export const btnWarning = css`
    color: #111;
    background-color: #ffc107;
    border-color: #ffc107;

    &:hover {
        color: #111;
        background-color: #e0a800;
        border-color: #d39e00;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.5);
    }

    &.disabled,
    &:disabled {
        background-color: #ffc107;
        border-color: #ffc107;
    }

    &:active,
    &.${active} {
        background-color: #e0a800;
        background-image: none;
        border-color: #d39e00;
    }
`;

export const btnDanger = css`
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;

    &:hover {
        color: #fff;
        background-color: #c82333;
        border-color: #bd2130;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.5);
    }

    &.disabled,
    &:disabled {
        background-color: #dc3545;
        border-color: #dc3545;
    }

    &:active,
    &.${active} {
        background-color: #c82333;
        background-image: none;
        border-color: #bd2130;
    }
`;

export const btnLight = css`
    color: #111;
    background-color: #f8f9fa;
    border-color: #f8f9fa;

    &:hover {
        color: #111;
        background-color: #e2e6ea;
        border-color: #dae0e5;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(248, 249, 250, 0.5);
    }

    &.disabled,
    &:disabled {
        background-color: #f8f9fa;
        border-color: #f8f9fa;
    }

    &:active,
    &.${active} {
        background-color: #e2e6ea;
        background-image: none;
        border-color: #dae0e5;
    }
`;

export const btnDark = css`
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;

    &:hover {
        color: #fff;
        background-color: #23272b;
        border-color: #1d2124;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(52, 58, 64, 0.5);
    }

    &.disabled,
    &:disabled {
        background-color: #343a40;
        border-color: #343a40;
    }

    &:active,
    &.${active} {
        background-color: #23272b;
        background-image: none;
        border-color: #1d2124;
    }
`;

export const btnOutlinePrimary = css`
    color: #007bff;
    background-color: transparent;
    background-image: none;
    border-color: #007bff;

    &:hover {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #007bff;
        background-color: transparent;
    }

    &:active,
    &.${active} {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }
`;

export const btnOutlineSecondary = css`
    color: #868e96;
    background-color: transparent;
    background-image: none;
    border-color: #868e96;

    &:hover {
        color: #fff;
        background-color: #868e96;
        border-color: #868e96;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(134, 142, 150, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #868e96;
        background-color: transparent;
    }

    &:active,
    &.${active} {
        color: #fff;
        background-color: #868e96;
        border-color: #868e96;
    }
`;

export const btnOutlineSuccess = css`
    color: #28a745;
    background-color: transparent;
    background-image: none;
    border-color: #28a745;

    &:hover {
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #28a745;
        background-color: transparent;
    }

    &:active,
    &.${active} {
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
    }
`;

export const btnOutlineInfo = css`
    color: #17a2b8;
    background-color: transparent;
    background-image: none;
    border-color: #17a2b8;

    &:hover {
        color: #fff;
        background-color: #17a2b8;
        border-color: #17a2b8;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #17a2b8;
        background-color: transparent;
    }

    &:active,
    &.${active} {
        color: #fff;
        background-color: #17a2b8;
        border-color: #17a2b8;
    }
`;

export const btnOutlineWarning = css`
    color: #ffc107;
    background-color: transparent;
    background-image: none;
    border-color: #ffc107;

    &:hover {
        color: #fff;
        background-color: #ffc107;
        border-color: #ffc107;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #ffc107;
        background-color: transparent;
    }

    &:active,
    &.${active} {
        color: #fff;
        background-color: #ffc107;
        border-color: #ffc107;
    }
`;

export const btnOutlineDanger = css`
    color: #dc3545;
    background-color: transparent;
    background-image: none;
    border-color: #dc3545;

    &:hover {
        color: #fff;
        background-color: #dc3545;
        border-color: #dc3545;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #dc3545;
        background-color: transparent;
    }

    &:active,
    &.${active} {
        color: #fff;
        background-color: #dc3545;
        border-color: #dc3545;
    }
`;

export const btnOutlineLight = css`
    color: #f8f9fa;
    background-color: transparent;
    background-image: none;
    border-color: #f8f9fa;

    &:hover {
        color: #fff;
        background-color: #f8f9fa;
        border-color: #f8f9fa;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(248, 249, 250, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #f8f9fa;
        background-color: transparent;
    }

    &:active,
    &.${active} {
        color: #fff;
        background-color: #f8f9fa;
        border-color: #f8f9fa;
    }
`;

export const btnOutlineDark = css`
    color: #343a40;
    background-color: transparent;
    background-image: none;
    border-color: #343a40;

    &:hover {
        color: #fff;
        background-color: #343a40;
        border-color: #343a40;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 3px rgba(52, 58, 64, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #343a40;
        background-color: transparent;
    }

    &:active,
    &.${active} {
        color: #fff;
        background-color: #343a40;
        border-color: #343a40;
    }
`;

export const btnLink = css`
    font-weight: normal;
    color: #007bff;
    border-radius: 0;

    &,
    &:active,
    &.${active}, &:disabled {
        background-color: transparent;
    }

    &,
    &:focus,
    &:active {
        border-color: transparent;
        box-shadow: none;
    }

    &:hover {
        border-color: transparent;
    }

    &:focus,
    &:hover {
        color: #0056b3;
        text-decoration: underline;
        background-color: transparent;
    }

    &:disabled {
        color: #868e96;
    }

    &:disabled:focus,
    &:disabled:hover {
        text-decoration: none;
    }
`;

export const btnLg = css`
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;

    & + .dropdown-toggle-split {
        padding-right: 0.75rem;
        padding-left: 0.75rem;
    }
`;

export const btnGroupLg = css`
    & > .${btn} {
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: 0.3rem;
    }

    & > .${btn} + .dropdown-toggle-split {
        padding-right: 0.75rem;
        padding-left: 0.75rem;
    }
`;

export const btnSm = css`
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.2rem;

    & + .dropdown-toggle-split {
        padding-right: 0.375rem;
        padding-left: 0.375rem;
    }
`;

export const btnGroupSm = css`
    & > .${btn} {
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        line-height: 1.5;
        border-radius: 0.2rem;
    }

    & > .${btn} + .dropdown-toggle-split {
        padding-right: 0.375rem;
        padding-left: 0.375rem;
    }
`;

export const btnBlock = css`
    display: block;
    width: 100%;

    & + & {
        margin-top: 0.5rem;
    }

    input[type="submit"]&,
    input[type="reset"]&,
    input[type="button"]& {
        width: 100%;
    }
`;

export const fade = css`
    opacity: 0;
    transition: opacity 0.15s linear;

    &.${show} {
        opacity: 1;
    }
`;

export const collapse = css`
    display: none;

    &.${show} {
        display: block;
    }

    tr&.${show} {
        display: table-row;
    }

    tbody&.${show} {
        display: table-row-group;
    }
`;

export const collapsing = css`
    position: relative;
    height: 0;
    overflow: hidden;
    transition: height 0.35s ease;
`;

export const dropup = css`
    position: relative;

    & .${dropdownMenu} {
        margin-top: 0;
        margin-bottom: 0.125rem;
    }

    & .${dropdownToggle}::after {
        border-top: 0;
        border-bottom: 0.3em solid;
    }
`;

export const dropdown = css`
    position: relative;
`;

export const dropdownToggle = css`
    &::after {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 0.255em;
        vertical-align: 0.255em;
        content: "";
        border-top: 0.3em solid;
        border-right: 0.3em solid transparent;
        border-left: 0.3em solid transparent;
    }

    &:empty::after {
        margin-left: 0;
    }
`;

export const dropdownMenu = css`
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;

    &.${show} {
        display: block;
    }
`;

export const dropdownDivider = css`
    height: 0;
    margin: 0.5rem 0;
    overflow: hidden;
    border-top: 1px solid #e9ecef;
`;

export const dropdownItem = css`
    display: block;
    width: 100%;
    padding: 0.25rem 1.5rem;
    clear: both;
    font-weight: normal;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background: none;
    border: 0;

    &:focus,
    &:hover {
        color: #16181b;
        text-decoration: none;
        background-color: #f8f9fa;
    }

    &.${active}, &:active {
        color: #fff;
        text-decoration: none;
        background-color: #007bff;
    }

    &.disabled,
    &:disabled {
        color: #868e96;
        background-color: transparent;
    }
`;

export const dropdownHeader = css`
    display: block;
    padding: 0.5rem 1.5rem;
    margin-bottom: 0;
    font-size: 0.875rem;
    color: #868e96;
    white-space: nowrap;
`;

export const btnGroup = css`
  position: relative;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;


& > .${btn} {
  position: relative;
  -ms-flex: 0 1 auto;
      flex: 0 1 auto;
  margin-bottom: 0;
}

& > .${btn}:hover {
  z-index: 2;
}

& > .${btn}:focus, & > .${btn}:active, & > .${btn}.${active} {
  z-index: 2;
}

& .${btn} + .${btn}, & .${btn} + &, & & + .${btn}, & & + & {
  margin-left: -1px;
}

& > .${btn}:not(:first-child):not(:last-child):not(.${dropdownToggle}) {
  border-radius: 0;
}

& > .${btn}:first-child {
  margin-left: 0;
}

& > .${btn}:first-child:not(:last-child):not(.${dropdownToggle}) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

& > .${btn}:last-child:not(:first-child), & > .${dropdownToggle}:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

& > & {
  float: left;
}

& > &:not(:first-child):not(:last-child) > .${btn} {
  border-radius: 0;
}

& > &:first-child:not(:last-child) > .${btn}:last-child, & > &:first-child:not(:last-child) > .${dropdownToggle} {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

& > &:last-child:not(:first-child) > .${btn}:first-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

[data-toggle="buttons"] > & > .${btn} input[type="radio"], [data-toggle="buttons"] > & > .${btn} input[type="checkbox"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}

`;

export const btnGroupVertical = css`
  position: relative;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;


& > .${btn} {
  position: relative;
  -ms-flex: 0 1 auto;
      flex: 0 1 auto;
  margin-bottom: 0;
}

& > .${btn}:hover {
  z-index: 2;
}

& > .${btn}:focus, & > .${btn}:active, & > .${btn}.${active} {
  z-index: 2;
}

& .${btn} + .${btn}, & .${btn} + .${btnGroup}, & .${btnGroup} + .${btn}, & .${btnGroup} + .${btnGroup} {
  margin-left: -1px;
}


  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-direction: column;
      flex-direction: column;
  -ms-flex-align: start;
      align-items: flex-start;
  -ms-flex-pack: center;
      justify-content: center;


& .${btn}, & .${btnGroup} {
  width: 100%;
}

& > .${btn} + .${btn}, & > .${btn} + .${btnGroup}, & > .${btnGroup} + .${btn}, & > .${btnGroup} + .${btnGroup} {
  margin-top: -1px;
  margin-left: 0;
}

& > .${btn}:not(:first-child):not(:last-child) {
  border-radius: 0;
}

& > .${btn}:first-child:not(:last-child) {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

& > .${btn}:last-child:not(:first-child) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

& > .${btnGroup}:not(:first-child):not(:last-child) > .${btn} {
  border-radius: 0;
}

& > .${btnGroup}:first-child:not(:last-child) > .${btn}:last-child, & > .${btnGroup}:first-child:not(:last-child) > .${dropdownToggle} {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

& > .${btnGroup}:last-child:not(:first-child) > .${btn}:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

`;

export const btnToolbar = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: start;
    justify-content: flex-start;

    & .${inputGroup} {
        width: auto;
    }
`;

export const inputGroup = css`
    position: relative;
    display: -ms-flexbox;
    display: flex;
    width: 100%;

    & .${formControl} {
        position: relative;
        z-index: 2;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        width: 1%;
        margin-bottom: 0;
    }

    & .${formControl}:focus, & .${formControl}:active, & .${formControl}:hover {
        z-index: 3;
    }

    & .${formControl} {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
    }

    & .${formControl}:not(:first-child):not(:last-child) {
        border-radius: 0;
    }

    & .${formControl}:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    & .${formControl}:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`;

export const inputGroupAddon = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;

    &:not(:first-child):not(:last-child) {
        border-radius: 0;
    }

    white-space: nowrap;
    vertical-align: middle;

    padding: 0.5rem 0.75rem;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.25;
    color: #495057;
    text-align: center;
    background-color: #e9ecef;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;

    &.${formControlSm} {
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        border-radius: 0.2rem;
    }

    &.${formControlLg} {
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        border-radius: 0.3rem;
    }

    & input[type="radio"],
    & input[type="checkbox"] {
        margin-top: 0;
    }

    &:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    &:not(:last-child) {
        border-right: 0;
    }

    &:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`;

export const inputGroupBtn = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;

    &:not(:first-child):not(:last-child) {
        border-radius: 0;
    }

    white-space: nowrap;
    vertical-align: middle;

    &:not(:last-child)
        > .${btn},
        &:not(:last-child)
        > .${btnGroup}
        > .${btn},
        &:not(:last-child)
        > .${dropdownToggle},
        &:not(:first-child)
        > .${btn}:not(:last-child):not(.${dropdownToggle}),
    &:not(:first-child) > .${btnGroup}:not(:last-child) > .${btn} {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    &:not(:first-child)
        > .${btn},
        &:not(:first-child)
        > .${btnGroup}
        > .${btn},
        &:not(:first-child)
        > .${dropdownToggle},
        &:not(:last-child)
        > .${btn}:not(:first-child),
    &:not(:last-child) > .${btnGroup}:not(:first-child) > .${btn} {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    position: relative;
    font-size: 0;
    white-space: nowrap;

    & > .${btn} {
        position: relative;
    }

    & > .${btn} + .${btn} {
        margin-left: -1px;
    }

    & > .${btn}:focus, & > .${btn}:active, & > .${btn}:hover {
        z-index: 3;
    }

    &:not(:last-child) > .${btn}, &:not(:last-child) > .${btnGroup} {
        margin-right: -1px;
    }

    &:not(:first-child) > .${btn}, &:not(:first-child) > .${btnGroup} {
        z-index: 2;
        margin-left: -1px;
    }

    &:not(:first-child)
        > .${btn}:focus,
        &:not(:first-child)
        > .${btn}:active,
        &:not(:first-child)
        > .${btn}:hover,
        &:not(:first-child)
        > .${btnGroup}:focus,
        &:not(:first-child)
        > .${btnGroup}:active,
        &:not(:first-child)
        > .${btnGroup}:hover {
        z-index: 3;
    }
`;

export const customControl = css`
    position: relative;
    display: -ms-inline-flexbox;
    display: inline-flex;
    min-height: 1.5rem;
    padding-left: 1.5rem;
    margin-right: 1rem;
`;

export const customControlIndicator = css`
    position: absolute;
    top: 0.25rem;
    left: 0;
    display: block;
    width: 1rem;
    height: 1rem;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #ddd;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
`;

export const customCheckbox = css`
    & .${customControlIndicator} {
        border-radius: 0.25rem;
    }

    & .${customControlInput}:checked ~ .${customControlIndicator} {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
    }

    & .${customControlInput}:indeterminate ~ .${customControlIndicator} {
        background-color: #007bff;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E");
    }
`;

export const customRadio = css`
    & .${customControlIndicator} {
        border-radius: 50%;
    }

    & .${customControlInput}:checked ~ .${customControlIndicator} {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");
    }
`;

export const customControlsStacked = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;

    & .${customControl} {
        margin-bottom: 0.25rem;
    }

    & .${customControl} + .${customControl} {
        margin-left: 0;
    }
`;

export const customSelectSm = css`
    height: calc(1.8125rem + 2px);
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    font-size: 75%;
`;

export const customFile = css`
    position: relative;
    display: inline-block;
    max-width: 100%;
    height: 2.5rem;
    margin-bottom: 0;
`;

export const customFileControl = css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 5;
    height: 2.5rem;
    padding: 0.5rem 1rem;
    line-height: 1.5;
    color: #495057;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;

    &:lang(en):empty::after {
        content: "Choose file...";
    }

    &::before {
        position: absolute;
        top: -1px;
        right: -1px;
        bottom: -1px;
        z-index: 6;
        display: block;
        height: 2.5rem;
        padding: 0.5rem 1rem;
        line-height: 1.5;
        color: #495057;
        background-color: #e9ecef;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 0 0.25rem 0.25rem 0;
    }

    &:lang(en)::before {
        content: "Browse";
    }
`;

export const nav = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
`;

export const navLink = css`
    display: block;
    padding: 0.5rem 1rem;

    &:focus,
    &:hover {
        text-decoration: none;
    }

    &.disabled {
        color: #868e96;
    }
`;

export const navTabs = css`
  border-bottom: 1px solid #ddd;


& .nav-item {
  margin-bottom: -1px;
}

& .${navLink} {
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

& .${navLink}:focus, & .${navLink}:hover {
  border-color: #e9ecef #e9ecef #ddd;
}

& .${navLink}.disabled {
  color: #868e96;
  background-color: transparent;
  border-color: transparent;
}

& .${navLink}.${active}, & .nav-item.${show} .${navLink} {
  color: #495057;
  background-color: #fff;
  border-color: #ddd #ddd #fff;
}

& .${dropdownMenu} {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

`;

export const navPills = css`& .${navLink} {
  border-radius: 0.25rem;
}

& .${navLink}.${active} {
  color: #fff;
  background-color: #007bff;
}

`;

export const navFill = css`
    & .nav-item {
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        text-align: center;
    }
`;

export const navJustified = css`
    & .nav-item {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -ms-flex-positive: 1;
        flex-grow: 1;
        text-align: center;
    }
`;

export const tabContent = css`
    & > .tab-pane {
        display: none;
    }

    & > .${active} {
        display: block;
    }
`;

export const navbarBrand = css`
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;

    &:focus,
    &:hover {
        text-decoration: none;
    }
`;

export const navbarNav = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;

    & .${navLink} {
        padding-right: 0;
        padding-left: 0;
    }

    & .${dropdownMenu} {
        position: static;
        float: none;
    }
`;

export const navbarText = css`
    display: inline-block;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
`;

export const navbarCollapse = css`
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -ms-flex-align: center;
    align-items: center;
`;

export const navbarToggler = css`
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;

    &:focus,
    &:hover {
        text-decoration: none;
    }
`;

export const navbarTogglerIcon = css`
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background: no-repeat center center;
    background-size: 100% 100%;
`;

export const navbarExpandSm = css`
    @media (max-width: 575px) {
        & > .${container}, & > .${containerFluid} {
            padding-right: 0;
            padding-left: 0;
        }
    }

    @media (min-width: 576px) {
        & {
            -ms-flex-direction: row;
            flex-direction: row;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -ms-flex-pack: start;
            justify-content: flex-start;
        }

        & .${navbarNav} {
            -ms-flex-direction: row;
            flex-direction: row;
        }

        & .${navbarNav} .${dropdownMenu} {
            position: absolute;
        }

        & .${navbarNav} .dropdown-menu-right {
            right: 0;
            left: auto;
        }

        & .${navbarNav} .${navLink} {
            padding-right: 0.5rem;
            padding-left: 0.5rem;
        }

        & > .${container}, & > .${containerFluid} {
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
        }

        & .${navbarCollapse} {
            display: -ms-flexbox !important;
            display: flex !important;
        }

        & .${navbarToggler} {
            display: none;
        }
    }
`;

export const navbarExpandMd = css`
    @media (max-width: 767px) {
        & > .${container}, & > .${containerFluid} {
            padding-right: 0;
            padding-left: 0;
        }
    }

    @media (min-width: 768px) {
        & {
            -ms-flex-direction: row;
            flex-direction: row;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -ms-flex-pack: start;
            justify-content: flex-start;
        }

        & .${navbarNav} {
            -ms-flex-direction: row;
            flex-direction: row;
        }

        & .${navbarNav} .${dropdownMenu} {
            position: absolute;
        }

        & .${navbarNav} .dropdown-menu-right {
            right: 0;
            left: auto;
        }

        & .${navbarNav} .${navLink} {
            padding-right: 0.5rem;
            padding-left: 0.5rem;
        }

        & > .${container}, & > .${containerFluid} {
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
        }

        & .${navbarCollapse} {
            display: -ms-flexbox !important;
            display: flex !important;
        }

        & .${navbarToggler} {
            display: none;
        }
    }
`;

export const navbarExpandLg = css`
    @media (max-width: 991px) {
        & > .${container}, & > .${containerFluid} {
            padding-right: 0;
            padding-left: 0;
        }
    }

    @media (min-width: 992px) {
        & {
            -ms-flex-direction: row;
            flex-direction: row;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -ms-flex-pack: start;
            justify-content: flex-start;
        }

        & .${navbarNav} {
            -ms-flex-direction: row;
            flex-direction: row;
        }

        & .${navbarNav} .${dropdownMenu} {
            position: absolute;
        }

        & .${navbarNav} .dropdown-menu-right {
            right: 0;
            left: auto;
        }

        & .${navbarNav} .${navLink} {
            padding-right: 0.5rem;
            padding-left: 0.5rem;
        }

        & > .${container}, & > .${containerFluid} {
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
        }

        & .${navbarCollapse} {
            display: -ms-flexbox !important;
            display: flex !important;
        }

        & .${navbarToggler} {
            display: none;
        }
    }
`;

export const navbarExpandXl = css`
    @media (max-width: 1199px) {
        & > .${container}, & > .${containerFluid} {
            padding-right: 0;
            padding-left: 0;
        }
    }

    @media (min-width: 1200px) {
        & {
            -ms-flex-direction: row;
            flex-direction: row;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -ms-flex-pack: start;
            justify-content: flex-start;
        }

        & .${navbarNav} {
            -ms-flex-direction: row;
            flex-direction: row;
        }

        & .${navbarNav} .${dropdownMenu} {
            position: absolute;
        }

        & .${navbarNav} .dropdown-menu-right {
            right: 0;
            left: auto;
        }

        & .${navbarNav} .${navLink} {
            padding-right: 0.5rem;
            padding-left: 0.5rem;
        }

        & > .${container}, & > .${containerFluid} {
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
        }

        & .${navbarCollapse} {
            display: -ms-flexbox !important;
            display: flex !important;
        }

        & .${navbarToggler} {
            display: none;
        }
    }
`;

export const navbarExpand = css`
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -ms-flex-pack: start;
    justify-content: flex-start;

    & > .${container}, & > .${containerFluid} {
        padding-right: 0;
        padding-left: 0;
    }

    & .${navbarNav} {
        -ms-flex-direction: row;
        flex-direction: row;
    }

    & .${navbarNav} .${dropdownMenu} {
        position: absolute;
    }

    & .${navbarNav} .dropdown-menu-right {
        right: 0;
        left: auto;
    }

    & .${navbarNav} .${navLink} {
        padding-right: 0.5rem;
        padding-left: 0.5rem;
    }

    & > .${container}, & > .${containerFluid} {
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    }

    & .${navbarCollapse} {
        display: -ms-flexbox !important;
        display: flex !important;
    }

    & .${navbarToggler} {
        display: none;
    }
`;

export const navbarLight = css`& .${navbarBrand} {
  color: rgba(0, 0, 0, 0.9);
}

& .${navbarBrand}:focus, & .${navbarBrand}:hover {
  color: rgba(0, 0, 0, 0.9);
}

& .${navbarNav} .${navLink} {
  color: rgba(0, 0, 0, 0.5);
}

& .${navbarNav} .${navLink}:focus, & .${navbarNav} .${navLink}:hover {
  color: rgba(0, 0, 0, 0.7);
}

& .${navbarNav} .${navLink}.disabled {
  color: rgba(0, 0, 0, 0.3);
}

& .${navbarNav} .${show} > .${navLink}, & .${navbarNav} .${active} > .${navLink}, & .${navbarNav} .${navLink}.${show}, & .${navbarNav} .${navLink}.${active} {
  color: rgba(0, 0, 0, 0.9);
}

& .${navbarToggler} {
  color: rgba(0, 0, 0, 0.5);
  border-color: rgba(0, 0, 0, 0.1);
}

& .${navbarTogglerIcon} {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

& .${navbarText} {
  color: rgba(0, 0, 0, 0.5);
}

`;

export const navbarDark = css`& .${navbarBrand} {
  color: white;
}

& .${navbarBrand}:focus, & .${navbarBrand}:hover {
  color: white;
}

& .${navbarNav} .${navLink} {
  color: rgba(255, 255, 255, 0.5);
}

& .${navbarNav} .${navLink}:focus, & .${navbarNav} .${navLink}:hover {
  color: rgba(255, 255, 255, 0.75);
}

& .${navbarNav} .${navLink}.disabled {
  color: rgba(255, 255, 255, 0.25);
}

& .${navbarNav} .${show} > .${navLink}, & .${navbarNav} .${active} > .${navLink}, & .${navbarNav} .${navLink}.${show}, & .${navbarNav} .${navLink}.${active} {
  color: white;
}

& .${navbarToggler} {
  color: rgba(255, 255, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.1);
}

& .${navbarTogglerIcon} {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

& .${navbarText} {
  color: rgba(255, 255, 255, 0.5);
}

`;

export const card = css`
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;

    & > .${listGroup}:first-child .${listGroupItem}:first-child {
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }

    & > .${listGroup}:last-child .${listGroupItem}:last-child {
        border-bottom-right-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
    }
`;

export const cardBody = css`
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
`;

export const cardTitle = css`
    margin-bottom: 0.75rem;
`;

export const cardSubtitle = css`
    margin-top: -0.375rem;
    margin-bottom: 0;
`;

export const cardText = css`
    &:last-child {
        margin-bottom: 0;
    }
`;

export const cardLink = css`
    &:hover {
        text-decoration: none;
    }

    & + & {
        margin-left: 1.25rem;
    }
`;

export const cardHeader = css`
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);

    &:first-child {
        border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
    }
`;

export const cardFooter = css`
    padding: 0.75rem 1.25rem;
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid rgba(0, 0, 0, 0.125);

    &:last-child {
        border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
    }
`;

export const cardHeaderTabs = css`
    margin-right: -0.625rem;
    margin-bottom: -0.75rem;
    margin-left: -0.625rem;
    border-bottom: 0;
`;

export const cardHeaderPills = css`
    margin-right: -0.625rem;
    margin-left: -0.625rem;
`;

export const cardImgOverlay = css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1.25rem;
`;

export const cardImg = css`
    width: 100%;
    border-radius: calc(0.25rem - 1px);
`;

export const cardImgTop = css`
    width: 100%;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
`;

export const cardImgBottom = css`
    width: 100%;
    border-bottom-right-radius: calc(0.25rem - 1px);
    border-bottom-left-radius: calc(0.25rem - 1px);
`;

export const cardDeck = css`
    @media (min-width: 576px) {
        & {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-flow: row wrap;
            flex-flow: row wrap;
            margin-right: -15px;
            margin-left: -15px;
        }

        & .${card} {
            display: -ms-flexbox;
            display: flex;
            -ms-flex: 1 0 0%;
            flex: 1 0 0%;
            -ms-flex-direction: column;
            flex-direction: column;
            margin-right: 15px;
            margin-left: 15px;
        }
    }
`;

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

export const cardColumns = css`
    & .${card} {
        margin-bottom: 0.75rem;
    }

    @media (min-width: 576px) {
        & {
            -webkit-column-count: 3;
            column-count: 3;
            -webkit-column-gap: 1.25rem;
            column-gap: 1.25rem;
        }

        & .${card} {
            display: inline-block;
            width: 100%;
        }
    }
`;

export const breadcrumb = css`
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #e9ecef;
    border-radius: 0.25rem;

    &::after {
        display: block;
        clear: both;
        content: "";
    }
`;

export const breadcrumbItem = css`
    float: left;

    & + &::before {
        display: inline-block;
        padding-right: 0.5rem;
        padding-left: 0.5rem;
        color: #868e96;
        content: "/";
    }

    & + &:hover::before {
        text-decoration: underline;
    }

    & + &:hover::before {
        text-decoration: none;
    }

    &.${active} {
        color: #868e96;
    }
`;

export const pagination = css`
    display: -ms-flexbox;
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: 0.25rem;
`;

export const pageItem = css`
    &:first-child .${pageLink} {
        margin-left: 0;
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
    }

    &:last-child .${pageLink} {
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
    }

    &.${active} .${pageLink} {
        z-index: 2;
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }

    &.disabled .${pageLink} {
        color: #868e96;
        pointer-events: none;
        background-color: #fff;
        border-color: #ddd;
    }
`;

export const pageLink = css`
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #007bff;
    background-color: #fff;
    border: 1px solid #ddd;

    &:focus,
    &:hover {
        color: #0056b3;
        text-decoration: none;
        background-color: #e9ecef;
        border-color: #ddd;
    }
`;

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

export const badgePill = css`
    padding-right: 0.6em;
    padding-left: 0.6em;
    border-radius: 10rem;
`;

export const badgePrimary = css`
    color: #fff;
    background-color: #007bff;

    &[href]:focus,
    &[href]:hover {
        color: #fff;
        text-decoration: none;
        background-color: #0062cc;
    }
`;

export const badgeSecondary = css`
    color: #fff;
    background-color: #868e96;

    &[href]:focus,
    &[href]:hover {
        color: #fff;
        text-decoration: none;
        background-color: #6c757d;
    }
`;

export const badgeSuccess = css`
    color: #fff;
    background-color: #28a745;

    &[href]:focus,
    &[href]:hover {
        color: #fff;
        text-decoration: none;
        background-color: #1e7e34;
    }
`;

export const badgeInfo = css`
    color: #fff;
    background-color: #17a2b8;

    &[href]:focus,
    &[href]:hover {
        color: #fff;
        text-decoration: none;
        background-color: #117a8b;
    }
`;

export const badgeWarning = css`
    color: #111;
    background-color: #ffc107;

    &[href]:focus,
    &[href]:hover {
        color: #111;
        text-decoration: none;
        background-color: #d39e00;
    }
`;

export const badgeDanger = css`
    color: #fff;
    background-color: #dc3545;

    &[href]:focus,
    &[href]:hover {
        color: #fff;
        text-decoration: none;
        background-color: #bd2130;
    }
`;

export const badgeLight = css`
    color: #111;
    background-color: #f8f9fa;

    &[href]:focus,
    &[href]:hover {
        color: #111;
        text-decoration: none;
        background-color: #dae0e5;
    }
`;

export const badgeDark = css`
    color: #fff;
    background-color: #343a40;

    &[href]:focus,
    &[href]:hover {
        color: #fff;
        text-decoration: none;
        background-color: #1d2124;
    }
`;

export const jumbotron = css`
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background-color: #e9ecef;
    border-radius: 0.3rem;

    @media (min-width: 576px) {
        & {
            padding: 4rem 2rem;
        }
    }
`;

export const jumbotronFluid = css`
    padding-right: 0;
    padding-left: 0;
    border-radius: 0;
`;

export const alert = css`
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
`;

export const alertHeading = css`
    color: inherit;
`;

export const alertLink = css`
    font-weight: bold;
`;

export const alertDismissible = css`
    & .${close} {
        position: relative;
        top: -0.75rem;
        right: -1.25rem;
        padding: 0.75rem 1.25rem;
        color: inherit;
    }
`;

export const alertPrimary = css`
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;

    & hr {
        border-top-color: #9fcdff;
    }

    & .${alertLink} {
        color: #002752;
    }
`;

export const alertSecondary = css`
    color: #464a4e;
    background-color: #e7e8ea;
    border-color: #dddfe2;

    & hr {
        border-top-color: #cfd2d6;
    }

    & .${alertLink} {
        color: #2e3133;
    }
`;

export const alertSuccess = css`
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;

    & hr {
        border-top-color: #b1dfbb;
    }

    & .${alertLink} {
        color: #0b2e13;
    }
`;

export const alertInfo = css`
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;

    & hr {
        border-top-color: #abdde5;
    }

    & .${alertLink} {
        color: #062c33;
    }
`;

export const alertWarning = css`
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;

    & hr {
        border-top-color: #ffe8a1;
    }

    & .${alertLink} {
        color: #533f03;
    }
`;

export const alertDanger = css`
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;

    & hr {
        border-top-color: #f1b0b7;
    }

    & .${alertLink} {
        color: #491217;
    }
`;

export const alertLight = css`
    color: #818182;
    background-color: #fefefe;
    border-color: #fdfdfe;

    & hr {
        border-top-color: #ececf6;
    }

    & .${alertLink} {
        color: #686868;
    }
`;

export const alertDark = css`
    color: #1b1e21;
    background-color: #d6d8d9;
    border-color: #c6c8ca;

    & hr {
        border-top-color: #b9bbbe;
    }

    & .${alertLink} {
        color: #040505;
    }
`;

export const progress = css`
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    font-size: 0.75rem;
    line-height: 1rem;
    text-align: center;
    background-color: #e9ecef;
    border-radius: 0.25rem;
`;

export const progressBar = css`
    height: 1rem;
    line-height: 1rem;
    color: #fff;
    background-color: #007bff;
    transition: width 0.6s ease;
`;

export const progressBarStriped = css`
    background-image: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        transparent 75%,
        transparent
    );
    background-size: 1rem 1rem;
`;

export const progressBarAnimated = css`
    -webkit-animation: progress-bar-stripes 1s linear infinite;
    animation: progress-bar-stripes 1s linear infinite;
`;

export const media = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
`;

export const mediaBody = css`
    -ms-flex: 1;
    flex: 1;
`;

export const listGroup = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
`;

export const listGroupItemAction = css`
    width: 100%;
    color: #495057;
    text-align: inherit;

    &:focus,
    &:hover {
        color: #495057;
        text-decoration: none;
        background-color: #f8f9fa;
    }

    &:active {
        color: #212529;
        background-color: #e9ecef;
    }
`;

export const listGroupItem = css`
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);

    &:first-child {
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }

    &:last-child {
        margin-bottom: 0;
        border-bottom-right-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
    }

    &:focus,
    &:hover {
        text-decoration: none;
    }

    &.disabled,
    &:disabled {
        color: #868e96;
        background-color: #fff;
    }

    &.${active} {
        z-index: 2;
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }
`;

export const listGroupFlush = css`
    & .${listGroupItem} {
        border-right: 0;
        border-left: 0;
        border-radius: 0;
    }

    &:first-child .${listGroupItem}:first-child {
        border-top: 0;
    }

    &:last-child .${listGroupItem}:last-child {
        border-bottom: 0;
    }
`;

export const listGroupItemPrimary = css`
    color: #004085;
    background-color: #b8daff;

    a&,
    button& {
        color: #004085;
    }

    a&:focus,
    a&:hover,
    button&:focus,
    button&:hover {
        color: #004085;
        background-color: #9fcdff;
    }

    a&.${active}, button&.${active} {
        color: #fff;
        background-color: #004085;
        border-color: #004085;
    }
`;

export const listGroupItemSecondary = css`
    color: #464a4e;
    background-color: #dddfe2;

    a&,
    button& {
        color: #464a4e;
    }

    a&:focus,
    a&:hover,
    button&:focus,
    button&:hover {
        color: #464a4e;
        background-color: #cfd2d6;
    }

    a&.${active}, button&.${active} {
        color: #fff;
        background-color: #464a4e;
        border-color: #464a4e;
    }
`;

export const listGroupItemSuccess = css`
    color: #155724;
    background-color: #c3e6cb;

    a&,
    button& {
        color: #155724;
    }

    a&:focus,
    a&:hover,
    button&:focus,
    button&:hover {
        color: #155724;
        background-color: #b1dfbb;
    }

    a&.${active}, button&.${active} {
        color: #fff;
        background-color: #155724;
        border-color: #155724;
    }
`;

export const listGroupItemInfo = css`
    color: #0c5460;
    background-color: #bee5eb;

    a&,
    button& {
        color: #0c5460;
    }

    a&:focus,
    a&:hover,
    button&:focus,
    button&:hover {
        color: #0c5460;
        background-color: #abdde5;
    }

    a&.${active}, button&.${active} {
        color: #fff;
        background-color: #0c5460;
        border-color: #0c5460;
    }
`;

export const listGroupItemWarning = css`
    color: #856404;
    background-color: #ffeeba;

    a&,
    button& {
        color: #856404;
    }

    a&:focus,
    a&:hover,
    button&:focus,
    button&:hover {
        color: #856404;
        background-color: #ffe8a1;
    }

    a&.${active}, button&.${active} {
        color: #fff;
        background-color: #856404;
        border-color: #856404;
    }
`;

export const listGroupItemDanger = css`
    color: #721c24;
    background-color: #f5c6cb;

    a&,
    button& {
        color: #721c24;
    }

    a&:focus,
    a&:hover,
    button&:focus,
    button&:hover {
        color: #721c24;
        background-color: #f1b0b7;
    }

    a&.${active}, button&.${active} {
        color: #fff;
        background-color: #721c24;
        border-color: #721c24;
    }
`;

export const listGroupItemLight = css`
    color: #818182;
    background-color: #fdfdfe;

    a&,
    button& {
        color: #818182;
    }

    a&:focus,
    a&:hover,
    button&:focus,
    button&:hover {
        color: #818182;
        background-color: #ececf6;
    }

    a&.${active}, button&.${active} {
        color: #fff;
        background-color: #818182;
        border-color: #818182;
    }
`;

export const listGroupItemDark = css`
    color: #1b1e21;
    background-color: #c6c8ca;

    a&,
    button& {
        color: #1b1e21;
    }

    a&:focus,
    a&:hover,
    button&:focus,
    button&:hover {
        color: #1b1e21;
        background-color: #b9bbbe;
    }

    a&.${active}, button&.${active} {
        color: #fff;
        background-color: #1b1e21;
        border-color: #1b1e21;
    }
`;

export const close = css`
    float: right;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.5;

    &:focus,
    &:hover {
        color: #000;
        text-decoration: none;
        opacity: 0.75;
    }

    button& {
        padding: 0;
        background: transparent;
        border: 0;
        -webkit-appearance: none;
    }
`;

export const modalOpen = css`
    overflow: hidden;

    & .${modal} {
        overflow-x: hidden;
        overflow-y: auto;
    }
`;

export const modal = css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    overflow: hidden;
    outline: 0;

    &.${fade} .${modalDialog} {
        transition: -webkit-transform 0.3s ease-out;
        transition: transform 0.3s ease-out;
        transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
        -webkit-transform: translate(0, -25%);
        transform: translate(0, -25%);
    }

    &.${show} .${modalDialog} {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
`;

export const modalDialog = css`
    position: relative;
    width: auto;
    margin: 10px;

    @media (min-width: 576px) {
        & {
            max-width: 500px;
            margin: 30px auto;
        }
    }
`;

export const modalContent = css`
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
`;

export const modalBackdrop = css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;

    &.${fade} {
        opacity: 0;
    }

    &.${show} {
        opacity: 0.5;
    }
`;

export const modalHeader = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #e9ecef;
`;

export const modalTitle = css`
    margin-bottom: 0;
    line-height: 1.5;
`;

export const modalBody = css`
    position: relative;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 15px;
`;

export const modalFooter = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 15px;
    border-top: 1px solid #e9ecef;

    & > :not(:first-child) {
        margin-left: 0.25rem;
    }

    & > :not(:last-child) {
        margin-right: 0.25rem;
    }
`;

export const modalScrollbarMeasure = css`
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll;
`;

export const modalSm = css`
    @media (min-width: 576px) {
        & {
            max-width: 300px;
        }
    }
`;

export const modalLg = css`
    @media (min-width: 992px) {
        & {
            max-width: 800px;
        }
    }
`;

export const tooltip = css`
    position: absolute;
    z-index: 1070;
    display: block;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.875rem;
    word-wrap: break-word;
    opacity: 0;

    &.${show} {
        opacity: 0.9;
    }

    & .arrow {
        position: absolute;
        display: block;
        width: 5px;
        height: 5px;
    }

    &.bs-tooltip-top,
    &.bs-tooltip-auto[x-placement^="top"] {
        padding: 5px 0;
    }

    &.bs-tooltip-top .arrow,
    &.bs-tooltip-auto[x-placement^="top"] .arrow {
        bottom: 0;
    }

    &.bs-tooltip-top .arrow::before,
    &.bs-tooltip-auto[x-placement^="top"] .arrow::before {
        margin-left: -3px;
        content: "";
        border-width: 5px 5px 0;
        border-top-color: #000;
    }

    &.bs-tooltip-right,
    &.bs-tooltip-auto[x-placement^="right"] {
        padding: 0 5px;
    }

    &.bs-tooltip-right .arrow,
    &.bs-tooltip-auto[x-placement^="right"] .arrow {
        left: 0;
    }

    &.bs-tooltip-right .arrow::before,
    &.bs-tooltip-auto[x-placement^="right"] .arrow::before {
        margin-top: -3px;
        content: "";
        border-width: 5px 5px 5px 0;
        border-right-color: #000;
    }

    &.bs-tooltip-bottom,
    &.bs-tooltip-auto[x-placement^="bottom"] {
        padding: 5px 0;
    }

    &.bs-tooltip-bottom .arrow,
    &.bs-tooltip-auto[x-placement^="bottom"] .arrow {
        top: 0;
    }

    &.bs-tooltip-bottom .arrow::before,
    &.bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
        margin-left: -3px;
        content: "";
        border-width: 0 5px 5px;
        border-bottom-color: #000;
    }

    &.bs-tooltip-left,
    &.bs-tooltip-auto[x-placement^="left"] {
        padding: 0 5px;
    }

    &.bs-tooltip-left .arrow,
    &.bs-tooltip-auto[x-placement^="left"] .arrow {
        right: 0;
    }

    &.bs-tooltip-left .arrow::before,
    &.bs-tooltip-auto[x-placement^="left"] .arrow::before {
        right: 0;
        margin-top: -3px;
        content: "";
        border-width: 5px 0 5px 5px;
        border-left-color: #000;
    }

    & .arrow::before {
        position: absolute;
        border-color: transparent;
        border-style: solid;
    }
`;

export const tooltipInner = css`
    max-width: 200px;
    padding: 3px 8px;
    color: #fff;
    text-align: center;
    background-color: #000;
    border-radius: 0.25rem;
`;

export const popover = css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1060;
    display: block;
    max-width: 276px;
    padding: 1px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.875rem;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;

    & .arrow {
        position: absolute;
        display: block;
        width: 10px;
        height: 5px;
    }

    & .arrow::before,
    & .arrow::after {
        position: absolute;
        display: block;
        border-color: transparent;
        border-style: solid;
    }

    & .arrow::before {
        content: "";
        border-width: 11px;
    }

    & .arrow::after {
        content: "";
        border-width: 11px;
    }

    &.bs-popover-top,
    &.bs-popover-auto[x-placement^="top"] {
        margin-bottom: 10px;
    }

    &.bs-popover-top .arrow,
    &.bs-popover-auto[x-placement^="top"] .arrow {
        bottom: 0;
    }

    &.bs-popover-top .arrow::before,
    &.bs-popover-auto[x-placement^="top"] .arrow::before,
    &.bs-popover-top .arrow::after,
    &.bs-popover-auto[x-placement^="top"] .arrow::after {
        border-bottom-width: 0;
    }

    &.bs-popover-top .arrow::before,
    &.bs-popover-auto[x-placement^="top"] .arrow::before {
        bottom: -11px;
        margin-left: -6px;
        border-top-color: rgba(0, 0, 0, 0.25);
    }

    &.bs-popover-top .arrow::after,
    &.bs-popover-auto[x-placement^="top"] .arrow::after {
        bottom: -10px;
        margin-left: -6px;
        border-top-color: #fff;
    }

    &.bs-popover-right,
    &.bs-popover-auto[x-placement^="right"] {
        margin-left: 10px;
    }

    &.bs-popover-right .arrow,
    &.bs-popover-auto[x-placement^="right"] .arrow {
        left: 0;
    }

    &.bs-popover-right .arrow::before,
    &.bs-popover-auto[x-placement^="right"] .arrow::before,
    &.bs-popover-right .arrow::after,
    &.bs-popover-auto[x-placement^="right"] .arrow::after {
        margin-top: -8px;
        border-left-width: 0;
    }

    &.bs-popover-right .arrow::before,
    &.bs-popover-auto[x-placement^="right"] .arrow::before {
        left: -11px;
        border-right-color: rgba(0, 0, 0, 0.25);
    }

    &.bs-popover-right .arrow::after,
    &.bs-popover-auto[x-placement^="right"] .arrow::after {
        left: -10px;
        border-right-color: #fff;
    }

    &.bs-popover-bottom,
    &.bs-popover-auto[x-placement^="bottom"] {
        margin-top: 10px;
    }

    &.bs-popover-bottom .arrow,
    &.bs-popover-auto[x-placement^="bottom"] .arrow {
        top: 0;
    }

    &.bs-popover-bottom .arrow::before,
    &.bs-popover-auto[x-placement^="bottom"] .arrow::before,
    &.bs-popover-bottom .arrow::after,
    &.bs-popover-auto[x-placement^="bottom"] .arrow::after {
        margin-left: -7px;
        border-top-width: 0;
    }

    &.bs-popover-bottom .arrow::before,
    &.bs-popover-auto[x-placement^="bottom"] .arrow::before {
        top: -11px;
        border-bottom-color: rgba(0, 0, 0, 0.25);
    }

    &.bs-popover-bottom .arrow::after,
    &.bs-popover-auto[x-placement^="bottom"] .arrow::after {
        top: -10px;
        border-bottom-color: #fff;
    }

    &.bs-popover-bottom
        .${popoverHeader}::before,
        &.bs-popover-auto[x-placement^="bottom"]
        .${popoverHeader}::before {
        position: absolute;
        top: 0;
        left: 50%;
        display: block;
        width: 20px;
        margin-left: -10px;
        content: "";
        border-bottom: 1px solid #f7f7f7;
    }

    &.bs-popover-left,
    &.bs-popover-auto[x-placement^="left"] {
        margin-right: 10px;
    }

    &.bs-popover-left .arrow,
    &.bs-popover-auto[x-placement^="left"] .arrow {
        right: 0;
    }

    &.bs-popover-left .arrow::before,
    &.bs-popover-auto[x-placement^="left"] .arrow::before,
    &.bs-popover-left .arrow::after,
    &.bs-popover-auto[x-placement^="left"] .arrow::after {
        margin-top: -8px;
        border-right-width: 0;
    }

    &.bs-popover-left .arrow::before,
    &.bs-popover-auto[x-placement^="left"] .arrow::before {
        right: -11px;
        border-left-color: rgba(0, 0, 0, 0.25);
    }

    &.bs-popover-left .arrow::after,
    &.bs-popover-auto[x-placement^="left"] .arrow::after {
        right: -10px;
        border-left-color: #fff;
    }
`;

export const popoverHeader = css`
    padding: 8px 14px;
    margin-bottom: 0;
    font-size: 1rem;
    color: inherit;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ebebeb;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);

    &:empty {
        display: none;
    }
`;

export const popoverBody = css`
    padding: 9px 14px;
    color: #212529;
`;

export const carousel = css`
    position: relative;
`;

export const carouselInner = css`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

export const carouselItem = css`
    position: relative;
    display: none;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    transition: -webkit-transform 0.6s ease;
    transition: transform 0.6s ease;
    transition: transform 0.6s ease, -webkit-transform 0.6s ease;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000px;
    perspective: 1000px;

    &.${active} {
        display: block;
    }
`;

export const carouselItemNext = css`
    display: block;

    position: absolute;
    top: 0;

    &.carousel-item-left {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        &.carousel-item-left {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    -webkit-transform: translateX(100%);
    transform: translateX(100%);

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        & {
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
        }
    }
`;

export const carouselItemPrev = css`
    display: block;

    position: absolute;
    top: 0;

    &.carousel-item-right {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        &.carousel-item-right {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        & {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
        }
    }
`;

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

export const carouselControlNext = css`
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

    right: 0;
`;

export const carouselControlPrevIcon = css`
    display: inline-block;
    width: 20px;
    height: 20px;
    background: transparent no-repeat center center;
    background-size: 100% 100%;

    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
`;

export const carouselControlNextIcon = css`
    display: inline-block;
    width: 20px;
    height: 20px;
    background: transparent no-repeat center center;
    background-size: 100% 100%;

    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
`;

export const carouselIndicators = css`
    position: absolute;
    right: 0;
    bottom: 10px;
    left: 0;
    z-index: 15;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    padding-left: 0;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;

    & li {
        position: relative;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        width: 30px;
        height: 3px;
        margin-right: 3px;
        margin-left: 3px;
        text-indent: -999px;
        background-color: rgba(255, 255, 255, 0.5);
    }

    & li::before {
        position: absolute;
        top: -10px;
        left: 0;
        display: inline-block;
        width: 100%;
        height: 10px;
        content: "";
    }

    & li::after {
        position: absolute;
        bottom: -10px;
        left: 0;
        display: inline-block;
        width: 100%;
        height: 10px;
        content: "";
    }

    & .${active} {
        background-color: #fff;
    }
`;

export const carouselCaption = css`
    position: absolute;
    right: 15%;
    bottom: 20px;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
`;

export const alignBaseline = css`
    vertical-align: baseline !important;
`;

export const alignTop = css`
    vertical-align: top !important;
`;

export const alignMiddle = css`
    vertical-align: middle !important;
`;

export const alignBottom = css`
    vertical-align: bottom !important;
`;

export const alignTextBottom = css`
    vertical-align: text-bottom !important;
`;

export const alignTextTop = css`
    vertical-align: text-top !important;
`;

export const bgPrimary = css`
    background-color: #007bff !important;

    a&:focus,
    a&:hover {
        background-color: #0062cc !important;
    }
`;

export const bgSecondary = css`
    background-color: #868e96 !important;

    a&:focus,
    a&:hover {
        background-color: #6c757d !important;
    }
`;

export const bgSuccess = css`
    background-color: #28a745 !important;

    a&:focus,
    a&:hover {
        background-color: #1e7e34 !important;
    }
`;

export const bgInfo = css`
    background-color: #17a2b8 !important;

    a&:focus,
    a&:hover {
        background-color: #117a8b !important;
    }
`;

export const bgWarning = css`
    background-color: #ffc107 !important;

    a&:focus,
    a&:hover {
        background-color: #d39e00 !important;
    }
`;

export const bgDanger = css`
    background-color: #dc3545 !important;

    a&:focus,
    a&:hover {
        background-color: #bd2130 !important;
    }
`;

export const bgLight = css`
    background-color: #f8f9fa !important;

    a&:focus,
    a&:hover {
        background-color: #dae0e5 !important;
    }
`;

export const bgDark = css`
    background-color: #343a40 !important;

    a&:focus,
    a&:hover {
        background-color: #1d2124 !important;
    }
`;

export const bgWhite = css`
    background-color: #fff !important;
`;

export const bgTransparent = css`
    background-color: transparent !important;
`;

export const border = css`
    border: 1px solid #e9ecef !important;
`;

export const border0 = css`
    border: 0 !important;
`;

export const borderTop0 = css`
    border-top: 0 !important;
`;

export const borderRight0 = css`
    border-right: 0 !important;
`;

export const borderBottom0 = css`
    border-bottom: 0 !important;
`;

export const borderLeft0 = css`
    border-left: 0 !important;
`;

export const borderPrimary = css`
    border-color: #007bff !important;
`;

export const borderSecondary = css`
    border-color: #868e96 !important;
`;

export const borderSuccess = css`
    border-color: #28a745 !important;
`;

export const borderInfo = css`
    border-color: #17a2b8 !important;
`;

export const borderWarning = css`
    border-color: #ffc107 !important;
`;

export const borderDanger = css`
    border-color: #dc3545 !important;
`;

export const borderLight = css`
    border-color: #f8f9fa !important;
`;

export const borderDark = css`
    border-color: #343a40 !important;
`;

export const borderWhite = css`
    border-color: #fff !important;
`;

export const rounded = css`
    border-radius: 0.25rem !important;
`;

export const roundedTop = css`
    border-top-left-radius: 0.25rem !important;
    border-top-right-radius: 0.25rem !important;
`;

export const roundedRight = css`
    border-top-right-radius: 0.25rem !important;
    border-bottom-right-radius: 0.25rem !important;
`;

export const roundedBottom = css`
    border-bottom-right-radius: 0.25rem !important;
    border-bottom-left-radius: 0.25rem !important;
`;

export const roundedLeft = css`
    border-top-left-radius: 0.25rem !important;
    border-bottom-left-radius: 0.25rem !important;
`;

export const roundedCircle = css`
    border-radius: 50%;
`;

export const rounded0 = css`
    border-radius: 0;
`;

export const clearfix = css`
    &::after {
        display: block;
        clear: both;
        content: "";
    }
`;

export const dNone = css`
    display: none !important;
`;

export const dInline = css`
    display: inline !important;
`;

export const dInlineBlock = css`
    display: inline-block !important;
`;

export const dBlock = css`
    display: block !important;
`;

export const dTable = css`
    display: table !important;
`;

export const dTableCell = css`
    display: table-cell !important;
`;

export const dFlex = css`
    display: -ms-flexbox !important;
    display: flex !important;
`;

export const dInlineFlex = css`
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
`;

export const dSmNone = css`
    @media (min-width: 576px) {
        & {
            display: none !important;
        }
    }
`;

export const dSmInline = css`
    @media (min-width: 576px) {
        & {
            display: inline !important;
        }
    }
`;

export const dSmInlineBlock = css`
    @media (min-width: 576px) {
        & {
            display: inline-block !important;
        }
    }
`;

export const dSmBlock = css`
    @media (min-width: 576px) {
        & {
            display: block !important;
        }
    }
`;

export const dSmTable = css`
    @media (min-width: 576px) {
        & {
            display: table !important;
        }
    }
`;

export const dSmTableCell = css`
    @media (min-width: 576px) {
        & {
            display: table-cell !important;
        }
    }
`;

export const dSmFlex = css`
    @media (min-width: 576px) {
        & {
            display: -ms-flexbox !important;
            display: flex !important;
        }
    }
`;

export const dSmInlineFlex = css`
    @media (min-width: 576px) {
        & {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }
`;

export const dMdNone = css`
    @media (min-width: 768px) {
        & {
            display: none !important;
        }
    }
`;

export const dMdInline = css`
    @media (min-width: 768px) {
        & {
            display: inline !important;
        }
    }
`;

export const dMdInlineBlock = css`
    @media (min-width: 768px) {
        & {
            display: inline-block !important;
        }
    }
`;

export const dMdBlock = css`
    @media (min-width: 768px) {
        & {
            display: block !important;
        }
    }
`;

export const dMdTable = css`
    @media (min-width: 768px) {
        & {
            display: table !important;
        }
    }
`;

export const dMdTableCell = css`
    @media (min-width: 768px) {
        & {
            display: table-cell !important;
        }
    }
`;

export const dMdFlex = css`
    @media (min-width: 768px) {
        & {
            display: -ms-flexbox !important;
            display: flex !important;
        }
    }
`;

export const dMdInlineFlex = css`
    @media (min-width: 768px) {
        & {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }
`;

export const dLgNone = css`
    @media (min-width: 992px) {
        & {
            display: none !important;
        }
    }
`;

export const dLgInline = css`
    @media (min-width: 992px) {
        & {
            display: inline !important;
        }
    }
`;

export const dLgInlineBlock = css`
    @media (min-width: 992px) {
        & {
            display: inline-block !important;
        }
    }
`;

export const dLgBlock = css`
    @media (min-width: 992px) {
        & {
            display: block !important;
        }
    }
`;

export const dLgTable = css`
    @media (min-width: 992px) {
        & {
            display: table !important;
        }
    }
`;

export const dLgTableCell = css`
    @media (min-width: 992px) {
        & {
            display: table-cell !important;
        }
    }
`;

export const dLgFlex = css`
    @media (min-width: 992px) {
        & {
            display: -ms-flexbox !important;
            display: flex !important;
        }
    }
`;

export const dLgInlineFlex = css`
    @media (min-width: 992px) {
        & {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }
`;

export const dXlNone = css`
    @media (min-width: 1200px) {
        & {
            display: none !important;
        }
    }
`;

export const dXlInline = css`
    @media (min-width: 1200px) {
        & {
            display: inline !important;
        }
    }
`;

export const dXlInlineBlock = css`
    @media (min-width: 1200px) {
        & {
            display: inline-block !important;
        }
    }
`;

export const dXlBlock = css`
    @media (min-width: 1200px) {
        & {
            display: block !important;
        }
    }
`;

export const dXlTable = css`
    @media (min-width: 1200px) {
        & {
            display: table !important;
        }
    }
`;

export const dXlTableCell = css`
    @media (min-width: 1200px) {
        & {
            display: table-cell !important;
        }
    }
`;

export const dXlFlex = css`
    @media (min-width: 1200px) {
        & {
            display: -ms-flexbox !important;
            display: flex !important;
        }
    }
`;

export const dXlInlineFlex = css`
    @media (min-width: 1200px) {
        & {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }
`;

export const dPrintBlock = css`
    display: none !important;

    @media print {
        & {
            display: block !important;
        }
    }
`;

export const dPrintInline = css`
    display: none !important;

    @media print {
        & {
            display: inline !important;
        }
    }
`;

export const dPrintInlineBlock = css`
    display: none !important;

    @media print {
        & {
            display: inline-block !important;
        }
    }
`;

export const dPrintNone = css`
    @media print {
        & {
            display: none !important;
        }
    }
`;

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

export const embedResponsive21by9 = css`
    &::before {
        padding-top: 42.857143%;
    }
`;

export const embedResponsive16by9 = css`
    &::before {
        padding-top: 56.25%;
    }
`;

export const embedResponsive4by3 = css`
    &::before {
        padding-top: 75%;
    }
`;

export const embedResponsive1by1 = css`
    &::before {
        padding-top: 100%;
    }
`;

export const flexRow = css`
    -ms-flex-direction: row !important;
    flex-direction: row !important;
`;

export const flexColumn = css`
    -ms-flex-direction: column !important;
    flex-direction: column !important;
`;

export const flexRowReverse = css`
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
`;

export const flexColumnReverse = css`
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
`;

export const flexWrap = css`
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
`;

export const flexNowrap = css`
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
`;

export const flexWrapReverse = css`
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
`;

export const justifyContentStart = css`
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
`;

export const justifyContentEnd = css`
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
`;

export const justifyContentCenter = css`
    -ms-flex-pack: center !important;
    justify-content: center !important;
`;

export const justifyContentBetween = css`
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
`;

export const justifyContentAround = css`
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
`;

export const alignItemsStart = css`
    -ms-flex-align: start !important;
    align-items: flex-start !important;
`;

export const alignItemsEnd = css`
    -ms-flex-align: end !important;
    align-items: flex-end !important;
`;

export const alignItemsCenter = css`
    -ms-flex-align: center !important;
    align-items: center !important;
`;

export const alignItemsBaseline = css`
    -ms-flex-align: baseline !important;
    align-items: baseline !important;
`;

export const alignItemsStretch = css`
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
`;

export const alignContentStart = css`
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important;
`;

export const alignContentEnd = css`
    -ms-flex-line-pack: end !important;
    align-content: flex-end !important;
`;

export const alignContentCenter = css`
    -ms-flex-line-pack: center !important;
    align-content: center !important;
`;

export const alignContentBetween = css`
    -ms-flex-line-pack: justify !important;
    align-content: space-between !important;
`;

export const alignContentAround = css`
    -ms-flex-line-pack: distribute !important;
    align-content: space-around !important;
`;

export const alignContentStretch = css`
    -ms-flex-line-pack: stretch !important;
    align-content: stretch !important;
`;

export const alignSelfAuto = css`
    -ms-flex-item-align: auto !important;
    align-self: auto !important;
`;

export const alignSelfStart = css`
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
`;

export const alignSelfEnd = css`
    -ms-flex-item-align: end !important;
    align-self: flex-end !important;
`;

export const alignSelfCenter = css`
    -ms-flex-item-align: center !important;
    align-self: center !important;
`;

export const alignSelfBaseline = css`
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important;
`;

export const alignSelfStretch = css`
    -ms-flex-item-align: stretch !important;
    align-self: stretch !important;
`;

export const flexSmRow = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-direction: row !important;
            flex-direction: row !important;
        }
    }
`;

export const flexSmColumn = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-direction: column !important;
            flex-direction: column !important;
        }
    }
`;

export const flexSmRowReverse = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
        }
    }
`;

export const flexSmColumnReverse = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important;
        }
    }
`;

export const flexSmWrap = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-wrap: wrap !important;
            flex-wrap: wrap !important;
        }
    }
`;

export const flexSmNowrap = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-wrap: nowrap !important;
            flex-wrap: nowrap !important;
        }
    }
`;

export const flexSmWrapReverse = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-wrap: wrap-reverse !important;
            flex-wrap: wrap-reverse !important;
        }
    }
`;

export const justifyContentSmStart = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-pack: start !important;
            justify-content: flex-start !important;
        }
    }
`;

export const justifyContentSmEnd = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-pack: end !important;
            justify-content: flex-end !important;
        }
    }
`;

export const justifyContentSmCenter = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-pack: center !important;
            justify-content: center !important;
        }
    }
`;

export const justifyContentSmBetween = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
        }
    }
`;

export const justifyContentSmAround = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-pack: distribute !important;
            justify-content: space-around !important;
        }
    }
`;

export const alignItemsSmStart = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-align: start !important;
            align-items: flex-start !important;
        }
    }
`;

export const alignItemsSmEnd = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-align: end !important;
            align-items: flex-end !important;
        }
    }
`;

export const alignItemsSmCenter = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-align: center !important;
            align-items: center !important;
        }
    }
`;

export const alignItemsSmBaseline = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-align: baseline !important;
            align-items: baseline !important;
        }
    }
`;

export const alignItemsSmStretch = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-align: stretch !important;
            align-items: stretch !important;
        }
    }
`;

export const alignContentSmStart = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-line-pack: start !important;
            align-content: flex-start !important;
        }
    }
`;

export const alignContentSmEnd = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-line-pack: end !important;
            align-content: flex-end !important;
        }
    }
`;

export const alignContentSmCenter = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-line-pack: center !important;
            align-content: center !important;
        }
    }
`;

export const alignContentSmBetween = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-line-pack: justify !important;
            align-content: space-between !important;
        }
    }
`;

export const alignContentSmAround = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-line-pack: distribute !important;
            align-content: space-around !important;
        }
    }
`;

export const alignContentSmStretch = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-line-pack: stretch !important;
            align-content: stretch !important;
        }
    }
`;

export const alignSelfSmAuto = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-item-align: auto !important;
            align-self: auto !important;
        }
    }
`;

export const alignSelfSmStart = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-item-align: start !important;
            align-self: flex-start !important;
        }
    }
`;

export const alignSelfSmEnd = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-item-align: end !important;
            align-self: flex-end !important;
        }
    }
`;

export const alignSelfSmCenter = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-item-align: center !important;
            align-self: center !important;
        }
    }
`;

export const alignSelfSmBaseline = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-item-align: baseline !important;
            align-self: baseline !important;
        }
    }
`;

export const alignSelfSmStretch = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-item-align: stretch !important;
            align-self: stretch !important;
        }
    }
`;

export const flexMdRow = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-direction: row !important;
            flex-direction: row !important;
        }
    }
`;

export const flexMdColumn = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-direction: column !important;
            flex-direction: column !important;
        }
    }
`;

export const flexMdRowReverse = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
        }
    }
`;

export const flexMdColumnReverse = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important;
        }
    }
`;

export const flexMdWrap = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-wrap: wrap !important;
            flex-wrap: wrap !important;
        }
    }
`;

export const flexMdNowrap = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-wrap: nowrap !important;
            flex-wrap: nowrap !important;
        }
    }
`;

export const flexMdWrapReverse = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-wrap: wrap-reverse !important;
            flex-wrap: wrap-reverse !important;
        }
    }
`;

export const justifyContentMdStart = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-pack: start !important;
            justify-content: flex-start !important;
        }
    }
`;

export const justifyContentMdEnd = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-pack: end !important;
            justify-content: flex-end !important;
        }
    }
`;

export const justifyContentMdCenter = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-pack: center !important;
            justify-content: center !important;
        }
    }
`;

export const justifyContentMdBetween = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
        }
    }
`;

export const justifyContentMdAround = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-pack: distribute !important;
            justify-content: space-around !important;
        }
    }
`;

export const alignItemsMdStart = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-align: start !important;
            align-items: flex-start !important;
        }
    }
`;

export const alignItemsMdEnd = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-align: end !important;
            align-items: flex-end !important;
        }
    }
`;

export const alignItemsMdCenter = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-align: center !important;
            align-items: center !important;
        }
    }
`;

export const alignItemsMdBaseline = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-align: baseline !important;
            align-items: baseline !important;
        }
    }
`;

export const alignItemsMdStretch = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-align: stretch !important;
            align-items: stretch !important;
        }
    }
`;

export const alignContentMdStart = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-line-pack: start !important;
            align-content: flex-start !important;
        }
    }
`;

export const alignContentMdEnd = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-line-pack: end !important;
            align-content: flex-end !important;
        }
    }
`;

export const alignContentMdCenter = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-line-pack: center !important;
            align-content: center !important;
        }
    }
`;

export const alignContentMdBetween = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-line-pack: justify !important;
            align-content: space-between !important;
        }
    }
`;

export const alignContentMdAround = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-line-pack: distribute !important;
            align-content: space-around !important;
        }
    }
`;

export const alignContentMdStretch = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-line-pack: stretch !important;
            align-content: stretch !important;
        }
    }
`;

export const alignSelfMdAuto = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-item-align: auto !important;
            align-self: auto !important;
        }
    }
`;

export const alignSelfMdStart = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-item-align: start !important;
            align-self: flex-start !important;
        }
    }
`;

export const alignSelfMdEnd = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-item-align: end !important;
            align-self: flex-end !important;
        }
    }
`;

export const alignSelfMdCenter = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-item-align: center !important;
            align-self: center !important;
        }
    }
`;

export const alignSelfMdBaseline = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-item-align: baseline !important;
            align-self: baseline !important;
        }
    }
`;

export const alignSelfMdStretch = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-item-align: stretch !important;
            align-self: stretch !important;
        }
    }
`;

export const flexLgRow = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-direction: row !important;
            flex-direction: row !important;
        }
    }
`;

export const flexLgColumn = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-direction: column !important;
            flex-direction: column !important;
        }
    }
`;

export const flexLgRowReverse = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
        }
    }
`;

export const flexLgColumnReverse = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important;
        }
    }
`;

export const flexLgWrap = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-wrap: wrap !important;
            flex-wrap: wrap !important;
        }
    }
`;

export const flexLgNowrap = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-wrap: nowrap !important;
            flex-wrap: nowrap !important;
        }
    }
`;

export const flexLgWrapReverse = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-wrap: wrap-reverse !important;
            flex-wrap: wrap-reverse !important;
        }
    }
`;

export const justifyContentLgStart = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-pack: start !important;
            justify-content: flex-start !important;
        }
    }
`;

export const justifyContentLgEnd = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-pack: end !important;
            justify-content: flex-end !important;
        }
    }
`;

export const justifyContentLgCenter = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-pack: center !important;
            justify-content: center !important;
        }
    }
`;

export const justifyContentLgBetween = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
        }
    }
`;

export const justifyContentLgAround = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-pack: distribute !important;
            justify-content: space-around !important;
        }
    }
`;

export const alignItemsLgStart = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-align: start !important;
            align-items: flex-start !important;
        }
    }
`;

export const alignItemsLgEnd = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-align: end !important;
            align-items: flex-end !important;
        }
    }
`;

export const alignItemsLgCenter = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-align: center !important;
            align-items: center !important;
        }
    }
`;

export const alignItemsLgBaseline = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-align: baseline !important;
            align-items: baseline !important;
        }
    }
`;

export const alignItemsLgStretch = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-align: stretch !important;
            align-items: stretch !important;
        }
    }
`;

export const alignContentLgStart = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-line-pack: start !important;
            align-content: flex-start !important;
        }
    }
`;

export const alignContentLgEnd = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-line-pack: end !important;
            align-content: flex-end !important;
        }
    }
`;

export const alignContentLgCenter = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-line-pack: center !important;
            align-content: center !important;
        }
    }
`;

export const alignContentLgBetween = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-line-pack: justify !important;
            align-content: space-between !important;
        }
    }
`;

export const alignContentLgAround = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-line-pack: distribute !important;
            align-content: space-around !important;
        }
    }
`;

export const alignContentLgStretch = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-line-pack: stretch !important;
            align-content: stretch !important;
        }
    }
`;

export const alignSelfLgAuto = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-item-align: auto !important;
            align-self: auto !important;
        }
    }
`;

export const alignSelfLgStart = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-item-align: start !important;
            align-self: flex-start !important;
        }
    }
`;

export const alignSelfLgEnd = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-item-align: end !important;
            align-self: flex-end !important;
        }
    }
`;

export const alignSelfLgCenter = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-item-align: center !important;
            align-self: center !important;
        }
    }
`;

export const alignSelfLgBaseline = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-item-align: baseline !important;
            align-self: baseline !important;
        }
    }
`;

export const alignSelfLgStretch = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-item-align: stretch !important;
            align-self: stretch !important;
        }
    }
`;

export const flexXlRow = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-direction: row !important;
            flex-direction: row !important;
        }
    }
`;

export const flexXlColumn = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-direction: column !important;
            flex-direction: column !important;
        }
    }
`;

export const flexXlRowReverse = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
        }
    }
`;

export const flexXlColumnReverse = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important;
        }
    }
`;

export const flexXlWrap = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-wrap: wrap !important;
            flex-wrap: wrap !important;
        }
    }
`;

export const flexXlNowrap = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-wrap: nowrap !important;
            flex-wrap: nowrap !important;
        }
    }
`;

export const flexXlWrapReverse = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-wrap: wrap-reverse !important;
            flex-wrap: wrap-reverse !important;
        }
    }
`;

export const justifyContentXlStart = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-pack: start !important;
            justify-content: flex-start !important;
        }
    }
`;

export const justifyContentXlEnd = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-pack: end !important;
            justify-content: flex-end !important;
        }
    }
`;

export const justifyContentXlCenter = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-pack: center !important;
            justify-content: center !important;
        }
    }
`;

export const justifyContentXlBetween = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
        }
    }
`;

export const justifyContentXlAround = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-pack: distribute !important;
            justify-content: space-around !important;
        }
    }
`;

export const alignItemsXlStart = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-align: start !important;
            align-items: flex-start !important;
        }
    }
`;

export const alignItemsXlEnd = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-align: end !important;
            align-items: flex-end !important;
        }
    }
`;

export const alignItemsXlCenter = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-align: center !important;
            align-items: center !important;
        }
    }
`;

export const alignItemsXlBaseline = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-align: baseline !important;
            align-items: baseline !important;
        }
    }
`;

export const alignItemsXlStretch = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-align: stretch !important;
            align-items: stretch !important;
        }
    }
`;

export const alignContentXlStart = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-line-pack: start !important;
            align-content: flex-start !important;
        }
    }
`;

export const alignContentXlEnd = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-line-pack: end !important;
            align-content: flex-end !important;
        }
    }
`;

export const alignContentXlCenter = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-line-pack: center !important;
            align-content: center !important;
        }
    }
`;

export const alignContentXlBetween = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-line-pack: justify !important;
            align-content: space-between !important;
        }
    }
`;

export const alignContentXlAround = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-line-pack: distribute !important;
            align-content: space-around !important;
        }
    }
`;

export const alignContentXlStretch = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-line-pack: stretch !important;
            align-content: stretch !important;
        }
    }
`;

export const alignSelfXlAuto = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-item-align: auto !important;
            align-self: auto !important;
        }
    }
`;

export const alignSelfXlStart = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-item-align: start !important;
            align-self: flex-start !important;
        }
    }
`;

export const alignSelfXlEnd = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-item-align: end !important;
            align-self: flex-end !important;
        }
    }
`;

export const alignSelfXlCenter = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-item-align: center !important;
            align-self: center !important;
        }
    }
`;

export const alignSelfXlBaseline = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-item-align: baseline !important;
            align-self: baseline !important;
        }
    }
`;

export const alignSelfXlStretch = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-item-align: stretch !important;
            align-self: stretch !important;
        }
    }
`;

export const floatLeft = css`
    float: left !important;
`;

export const floatRight = css`
    float: right !important;
`;

export const floatNone = css`
    float: none !important;
`;

export const floatSmLeft = css`
    @media (min-width: 576px) {
        & {
            float: left !important;
        }
    }
`;

export const floatSmRight = css`
    @media (min-width: 576px) {
        & {
            float: right !important;
        }
    }
`;

export const floatSmNone = css`
    @media (min-width: 576px) {
        & {
            float: none !important;
        }
    }
`;

export const floatMdLeft = css`
    @media (min-width: 768px) {
        & {
            float: left !important;
        }
    }
`;

export const floatMdRight = css`
    @media (min-width: 768px) {
        & {
            float: right !important;
        }
    }
`;

export const floatMdNone = css`
    @media (min-width: 768px) {
        & {
            float: none !important;
        }
    }
`;

export const floatLgLeft = css`
    @media (min-width: 992px) {
        & {
            float: left !important;
        }
    }
`;

export const floatLgRight = css`
    @media (min-width: 992px) {
        & {
            float: right !important;
        }
    }
`;

export const floatLgNone = css`
    @media (min-width: 992px) {
        & {
            float: none !important;
        }
    }
`;

export const floatXlLeft = css`
    @media (min-width: 1200px) {
        & {
            float: left !important;
        }
    }
`;

export const floatXlRight = css`
    @media (min-width: 1200px) {
        & {
            float: right !important;
        }
    }
`;

export const floatXlNone = css`
    @media (min-width: 1200px) {
        & {
            float: none !important;
        }
    }
`;

export const fixedTop = css`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
`;

export const fixedBottom = css`
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;
`;

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

export const srOnly = css`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    border: 0;
`;

export const srOnlyFocusable = css`
    &:active,
    &:focus {
        position: static;
        width: auto;
        height: auto;
        overflow: visible;
        clip: auto;
        white-space: normal;
        -webkit-clip-path: none;
        clip-path: none;
    }
`;

export const w25 = css`
    width: 25% !important;
`;

export const w50 = css`
    width: 50% !important;
`;

export const w75 = css`
    width: 75% !important;
`;

export const w100 = css`
    width: 100% !important;
`;

export const h25 = css`
    height: 25% !important;
`;

export const h50 = css`
    height: 50% !important;
`;

export const h75 = css`
    height: 75% !important;
`;

export const h100 = css`
    height: 100% !important;
`;

export const mw100 = css`
    max-width: 100% !important;
`;

export const mh100 = css`
    max-height: 100% !important;
`;

export const m0 = css`
    margin: 0 !important;
`;

export const mt0 = css`
    margin-top: 0 !important;
`;

export const mr0 = css`
    margin-right: 0 !important;
`;

export const mb0 = css`
    margin-bottom: 0 !important;
`;

export const ml0 = css`
    margin-left: 0 !important;
`;

export const mx0 = css`
    margin-right: 0 !important;
    margin-left: 0 !important;
`;

export const my0 = css`
    margin-top: 0 !important;
    margin-bottom: 0 !important;
`;

export const m1 = css`
    margin: 0.25rem !important;
`;

export const mt1 = css`
    margin-top: 0.25rem !important;
`;

export const mr1 = css`
    margin-right: 0.25rem !important;
`;

export const mb1 = css`
    margin-bottom: 0.25rem !important;
`;

export const ml1 = css`
    margin-left: 0.25rem !important;
`;

export const mx1 = css`
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
`;

export const my1 = css`
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
`;

export const m2 = css`
    margin: 0.5rem !important;
`;

export const mt2 = css`
    margin-top: 0.5rem !important;
`;

export const mr2 = css`
    margin-right: 0.5rem !important;
`;

export const mb2 = css`
    margin-bottom: 0.5rem !important;
`;

export const ml2 = css`
    margin-left: 0.5rem !important;
`;

export const mx2 = css`
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
`;

export const my2 = css`
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
`;

export const m3 = css`
    margin: 1rem !important;
`;

export const mt3 = css`
    margin-top: 1rem !important;
`;

export const mr3 = css`
    margin-right: 1rem !important;
`;

export const mb3 = css`
    margin-bottom: 1rem !important;
`;

export const ml3 = css`
    margin-left: 1rem !important;
`;

export const mx3 = css`
    margin-right: 1rem !important;
    margin-left: 1rem !important;
`;

export const my3 = css`
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
`;

export const m4 = css`
    margin: 1.5rem !important;
`;

export const mt4 = css`
    margin-top: 1.5rem !important;
`;

export const mr4 = css`
    margin-right: 1.5rem !important;
`;

export const mb4 = css`
    margin-bottom: 1.5rem !important;
`;

export const ml4 = css`
    margin-left: 1.5rem !important;
`;

export const mx4 = css`
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
`;

export const my4 = css`
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
`;

export const m5 = css`
    margin: 3rem !important;
`;

export const mt5 = css`
    margin-top: 3rem !important;
`;

export const mr5 = css`
    margin-right: 3rem !important;
`;

export const mb5 = css`
    margin-bottom: 3rem !important;
`;

export const ml5 = css`
    margin-left: 3rem !important;
`;

export const mx5 = css`
    margin-right: 3rem !important;
    margin-left: 3rem !important;
`;

export const my5 = css`
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
`;

export const p0 = css`
    padding: 0 !important;
`;

export const pt0 = css`
    padding-top: 0 !important;
`;

export const pr0 = css`
    padding-right: 0 !important;
`;

export const pb0 = css`
    padding-bottom: 0 !important;
`;

export const pl0 = css`
    padding-left: 0 !important;
`;

export const px0 = css`
    padding-right: 0 !important;
    padding-left: 0 !important;
`;

export const py0 = css`
    padding-top: 0 !important;
    padding-bottom: 0 !important;
`;

export const p1 = css`
    padding: 0.25rem !important;
`;

export const pt1 = css`
    padding-top: 0.25rem !important;
`;

export const pr1 = css`
    padding-right: 0.25rem !important;
`;

export const pb1 = css`
    padding-bottom: 0.25rem !important;
`;

export const pl1 = css`
    padding-left: 0.25rem !important;
`;

export const px1 = css`
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
`;

export const py1 = css`
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
`;

export const p2 = css`
    padding: 0.5rem !important;
`;

export const pt2 = css`
    padding-top: 0.5rem !important;
`;

export const pr2 = css`
    padding-right: 0.5rem !important;
`;

export const pb2 = css`
    padding-bottom: 0.5rem !important;
`;

export const pl2 = css`
    padding-left: 0.5rem !important;
`;

export const px2 = css`
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
`;

export const py2 = css`
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
`;

export const p3 = css`
    padding: 1rem !important;
`;

export const pt3 = css`
    padding-top: 1rem !important;
`;

export const pr3 = css`
    padding-right: 1rem !important;
`;

export const pb3 = css`
    padding-bottom: 1rem !important;
`;

export const pl3 = css`
    padding-left: 1rem !important;
`;

export const px3 = css`
    padding-right: 1rem !important;
    padding-left: 1rem !important;
`;

export const py3 = css`
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
`;

export const p4 = css`
    padding: 1.5rem !important;
`;

export const pt4 = css`
    padding-top: 1.5rem !important;
`;

export const pr4 = css`
    padding-right: 1.5rem !important;
`;

export const pb4 = css`
    padding-bottom: 1.5rem !important;
`;

export const pl4 = css`
    padding-left: 1.5rem !important;
`;

export const px4 = css`
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
`;

export const py4 = css`
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
`;

export const p5 = css`
    padding: 3rem !important;
`;

export const pt5 = css`
    padding-top: 3rem !important;
`;

export const pr5 = css`
    padding-right: 3rem !important;
`;

export const pb5 = css`
    padding-bottom: 3rem !important;
`;

export const pl5 = css`
    padding-left: 3rem !important;
`;

export const px5 = css`
    padding-right: 3rem !important;
    padding-left: 3rem !important;
`;

export const py5 = css`
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
`;

export const mAuto = css`
    margin: auto !important;
`;

export const mtAuto = css`
    margin-top: auto !important;
`;

export const mrAuto = css`
    margin-right: auto !important;
`;

export const mbAuto = css`
    margin-bottom: auto !important;
`;

export const mlAuto = css`
    margin-left: auto !important;
`;

export const mxAuto = css`
    margin-right: auto !important;
    margin-left: auto !important;
`;

export const myAuto = css`
    margin-top: auto !important;
    margin-bottom: auto !important;
`;

export const mSm0 = css`
    @media (min-width: 576px) {
        & {
            margin: 0 !important;
        }
    }
`;

export const mtSm0 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 0 !important;
        }
    }
`;

export const mrSm0 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 0 !important;
        }
    }
`;

export const mbSm0 = css`
    @media (min-width: 576px) {
        & {
            margin-bottom: 0 !important;
        }
    }
`;

export const mlSm0 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 0 !important;
        }
    }
`;

export const mxSm0 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 0 !important;
            margin-left: 0 !important;
        }
    }
`;

export const mySm0 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
        }
    }
`;

export const mSm1 = css`
    @media (min-width: 576px) {
        & {
            margin: 0.25rem !important;
        }
    }
`;

export const mtSm1 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 0.25rem !important;
        }
    }
`;

export const mrSm1 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 0.25rem !important;
        }
    }
`;

export const mbSm1 = css`
    @media (min-width: 576px) {
        & {
            margin-bottom: 0.25rem !important;
        }
    }
`;

export const mlSm1 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 0.25rem !important;
        }
    }
`;

export const mxSm1 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 0.25rem !important;
            margin-left: 0.25rem !important;
        }
    }
`;

export const mySm1 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 0.25rem !important;
            margin-bottom: 0.25rem !important;
        }
    }
`;

export const mSm2 = css`
    @media (min-width: 576px) {
        & {
            margin: 0.5rem !important;
        }
    }
`;

export const mtSm2 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 0.5rem !important;
        }
    }
`;

export const mrSm2 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 0.5rem !important;
        }
    }
`;

export const mbSm2 = css`
    @media (min-width: 576px) {
        & {
            margin-bottom: 0.5rem !important;
        }
    }
`;

export const mlSm2 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 0.5rem !important;
        }
    }
`;

export const mxSm2 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 0.5rem !important;
            margin-left: 0.5rem !important;
        }
    }
`;

export const mySm2 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 0.5rem !important;
            margin-bottom: 0.5rem !important;
        }
    }
`;

export const mSm3 = css`
    @media (min-width: 576px) {
        & {
            margin: 1rem !important;
        }
    }
`;

export const mtSm3 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 1rem !important;
        }
    }
`;

export const mrSm3 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 1rem !important;
        }
    }
`;

export const mbSm3 = css`
    @media (min-width: 576px) {
        & {
            margin-bottom: 1rem !important;
        }
    }
`;

export const mlSm3 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 1rem !important;
        }
    }
`;

export const mxSm3 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 1rem !important;
            margin-left: 1rem !important;
        }
    }
`;

export const mySm3 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 1rem !important;
            margin-bottom: 1rem !important;
        }
    }
`;

export const mSm4 = css`
    @media (min-width: 576px) {
        & {
            margin: 1.5rem !important;
        }
    }
`;

export const mtSm4 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 1.5rem !important;
        }
    }
`;

export const mrSm4 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 1.5rem !important;
        }
    }
`;

export const mbSm4 = css`
    @media (min-width: 576px) {
        & {
            margin-bottom: 1.5rem !important;
        }
    }
`;

export const mlSm4 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 1.5rem !important;
        }
    }
`;

export const mxSm4 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 1.5rem !important;
            margin-left: 1.5rem !important;
        }
    }
`;

export const mySm4 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 1.5rem !important;
            margin-bottom: 1.5rem !important;
        }
    }
`;

export const mSm5 = css`
    @media (min-width: 576px) {
        & {
            margin: 3rem !important;
        }
    }
`;

export const mtSm5 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 3rem !important;
        }
    }
`;

export const mrSm5 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 3rem !important;
        }
    }
`;

export const mbSm5 = css`
    @media (min-width: 576px) {
        & {
            margin-bottom: 3rem !important;
        }
    }
`;

export const mlSm5 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 3rem !important;
        }
    }
`;

export const mxSm5 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 3rem !important;
            margin-left: 3rem !important;
        }
    }
`;

export const mySm5 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 3rem !important;
            margin-bottom: 3rem !important;
        }
    }
`;

export const pSm0 = css`
    @media (min-width: 576px) {
        & {
            padding: 0 !important;
        }
    }
`;

export const ptSm0 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 0 !important;
        }
    }
`;

export const prSm0 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 0 !important;
        }
    }
`;

export const pbSm0 = css`
    @media (min-width: 576px) {
        & {
            padding-bottom: 0 !important;
        }
    }
`;

export const plSm0 = css`
    @media (min-width: 576px) {
        & {
            padding-left: 0 !important;
        }
    }
`;

export const pxSm0 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 0 !important;
            padding-left: 0 !important;
        }
    }
`;

export const pySm0 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }
    }
`;

export const pSm1 = css`
    @media (min-width: 576px) {
        & {
            padding: 0.25rem !important;
        }
    }
`;

export const ptSm1 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 0.25rem !important;
        }
    }
`;

export const prSm1 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 0.25rem !important;
        }
    }
`;

export const pbSm1 = css`
    @media (min-width: 576px) {
        & {
            padding-bottom: 0.25rem !important;
        }
    }
`;

export const plSm1 = css`
    @media (min-width: 576px) {
        & {
            padding-left: 0.25rem !important;
        }
    }
`;

export const pxSm1 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 0.25rem !important;
            padding-left: 0.25rem !important;
        }
    }
`;

export const pySm1 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 0.25rem !important;
            padding-bottom: 0.25rem !important;
        }
    }
`;

export const pSm2 = css`
    @media (min-width: 576px) {
        & {
            padding: 0.5rem !important;
        }
    }
`;

export const ptSm2 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 0.5rem !important;
        }
    }
`;

export const prSm2 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 0.5rem !important;
        }
    }
`;

export const pbSm2 = css`
    @media (min-width: 576px) {
        & {
            padding-bottom: 0.5rem !important;
        }
    }
`;

export const plSm2 = css`
    @media (min-width: 576px) {
        & {
            padding-left: 0.5rem !important;
        }
    }
`;

export const pxSm2 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 0.5rem !important;
            padding-left: 0.5rem !important;
        }
    }
`;

export const pySm2 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
        }
    }
`;

export const pSm3 = css`
    @media (min-width: 576px) {
        & {
            padding: 1rem !important;
        }
    }
`;

export const ptSm3 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 1rem !important;
        }
    }
`;

export const prSm3 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 1rem !important;
        }
    }
`;

export const pbSm3 = css`
    @media (min-width: 576px) {
        & {
            padding-bottom: 1rem !important;
        }
    }
`;

export const plSm3 = css`
    @media (min-width: 576px) {
        & {
            padding-left: 1rem !important;
        }
    }
`;

export const pxSm3 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 1rem !important;
            padding-left: 1rem !important;
        }
    }
`;

export const pySm3 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
        }
    }
`;

export const pSm4 = css`
    @media (min-width: 576px) {
        & {
            padding: 1.5rem !important;
        }
    }
`;

export const ptSm4 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 1.5rem !important;
        }
    }
`;

export const prSm4 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 1.5rem !important;
        }
    }
`;

export const pbSm4 = css`
    @media (min-width: 576px) {
        & {
            padding-bottom: 1.5rem !important;
        }
    }
`;

export const plSm4 = css`
    @media (min-width: 576px) {
        & {
            padding-left: 1.5rem !important;
        }
    }
`;

export const pxSm4 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 1.5rem !important;
            padding-left: 1.5rem !important;
        }
    }
`;

export const pySm4 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 1.5rem !important;
            padding-bottom: 1.5rem !important;
        }
    }
`;

export const pSm5 = css`
    @media (min-width: 576px) {
        & {
            padding: 3rem !important;
        }
    }
`;

export const ptSm5 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 3rem !important;
        }
    }
`;

export const prSm5 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 3rem !important;
        }
    }
`;

export const pbSm5 = css`
    @media (min-width: 576px) {
        & {
            padding-bottom: 3rem !important;
        }
    }
`;

export const plSm5 = css`
    @media (min-width: 576px) {
        & {
            padding-left: 3rem !important;
        }
    }
`;

export const pxSm5 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 3rem !important;
            padding-left: 3rem !important;
        }
    }
`;

export const pySm5 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
        }
    }
`;

export const mSmAuto = css`
    @media (min-width: 576px) {
        & {
            margin: auto !important;
        }
    }
`;

export const mtSmAuto = css`
    @media (min-width: 576px) {
        & {
            margin-top: auto !important;
        }
    }
`;

export const mrSmAuto = css`
    @media (min-width: 576px) {
        & {
            margin-right: auto !important;
        }
    }
`;

export const mbSmAuto = css`
    @media (min-width: 576px) {
        & {
            margin-bottom: auto !important;
        }
    }
`;

export const mlSmAuto = css`
    @media (min-width: 576px) {
        & {
            margin-left: auto !important;
        }
    }
`;

export const mxSmAuto = css`
    @media (min-width: 576px) {
        & {
            margin-right: auto !important;
            margin-left: auto !important;
        }
    }
`;

export const mySmAuto = css`
    @media (min-width: 576px) {
        & {
            margin-top: auto !important;
            margin-bottom: auto !important;
        }
    }
`;

export const mMd0 = css`
    @media (min-width: 768px) {
        & {
            margin: 0 !important;
        }
    }
`;

export const mtMd0 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 0 !important;
        }
    }
`;

export const mrMd0 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 0 !important;
        }
    }
`;

export const mbMd0 = css`
    @media (min-width: 768px) {
        & {
            margin-bottom: 0 !important;
        }
    }
`;

export const mlMd0 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 0 !important;
        }
    }
`;

export const mxMd0 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 0 !important;
            margin-left: 0 !important;
        }
    }
`;

export const myMd0 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
        }
    }
`;

export const mMd1 = css`
    @media (min-width: 768px) {
        & {
            margin: 0.25rem !important;
        }
    }
`;

export const mtMd1 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 0.25rem !important;
        }
    }
`;

export const mrMd1 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 0.25rem !important;
        }
    }
`;

export const mbMd1 = css`
    @media (min-width: 768px) {
        & {
            margin-bottom: 0.25rem !important;
        }
    }
`;

export const mlMd1 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 0.25rem !important;
        }
    }
`;

export const mxMd1 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 0.25rem !important;
            margin-left: 0.25rem !important;
        }
    }
`;

export const myMd1 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 0.25rem !important;
            margin-bottom: 0.25rem !important;
        }
    }
`;

export const mMd2 = css`
    @media (min-width: 768px) {
        & {
            margin: 0.5rem !important;
        }
    }
`;

export const mtMd2 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 0.5rem !important;
        }
    }
`;

export const mrMd2 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 0.5rem !important;
        }
    }
`;

export const mbMd2 = css`
    @media (min-width: 768px) {
        & {
            margin-bottom: 0.5rem !important;
        }
    }
`;

export const mlMd2 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 0.5rem !important;
        }
    }
`;

export const mxMd2 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 0.5rem !important;
            margin-left: 0.5rem !important;
        }
    }
`;

export const myMd2 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 0.5rem !important;
            margin-bottom: 0.5rem !important;
        }
    }
`;

export const mMd3 = css`
    @media (min-width: 768px) {
        & {
            margin: 1rem !important;
        }
    }
`;

export const mtMd3 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 1rem !important;
        }
    }
`;

export const mrMd3 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 1rem !important;
        }
    }
`;

export const mbMd3 = css`
    @media (min-width: 768px) {
        & {
            margin-bottom: 1rem !important;
        }
    }
`;

export const mlMd3 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 1rem !important;
        }
    }
`;

export const mxMd3 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 1rem !important;
            margin-left: 1rem !important;
        }
    }
`;

export const myMd3 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 1rem !important;
            margin-bottom: 1rem !important;
        }
    }
`;

export const mMd4 = css`
    @media (min-width: 768px) {
        & {
            margin: 1.5rem !important;
        }
    }
`;

export const mtMd4 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 1.5rem !important;
        }
    }
`;

export const mrMd4 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 1.5rem !important;
        }
    }
`;

export const mbMd4 = css`
    @media (min-width: 768px) {
        & {
            margin-bottom: 1.5rem !important;
        }
    }
`;

export const mlMd4 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 1.5rem !important;
        }
    }
`;

export const mxMd4 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 1.5rem !important;
            margin-left: 1.5rem !important;
        }
    }
`;

export const myMd4 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 1.5rem !important;
            margin-bottom: 1.5rem !important;
        }
    }
`;

export const mMd5 = css`
    @media (min-width: 768px) {
        & {
            margin: 3rem !important;
        }
    }
`;

export const mtMd5 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 3rem !important;
        }
    }
`;

export const mrMd5 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 3rem !important;
        }
    }
`;

export const mbMd5 = css`
    @media (min-width: 768px) {
        & {
            margin-bottom: 3rem !important;
        }
    }
`;

export const mlMd5 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 3rem !important;
        }
    }
`;

export const mxMd5 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 3rem !important;
            margin-left: 3rem !important;
        }
    }
`;

export const myMd5 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 3rem !important;
            margin-bottom: 3rem !important;
        }
    }
`;

export const pMd0 = css`
    @media (min-width: 768px) {
        & {
            padding: 0 !important;
        }
    }
`;

export const ptMd0 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 0 !important;
        }
    }
`;

export const prMd0 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 0 !important;
        }
    }
`;

export const pbMd0 = css`
    @media (min-width: 768px) {
        & {
            padding-bottom: 0 !important;
        }
    }
`;

export const plMd0 = css`
    @media (min-width: 768px) {
        & {
            padding-left: 0 !important;
        }
    }
`;

export const pxMd0 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 0 !important;
            padding-left: 0 !important;
        }
    }
`;

export const pyMd0 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }
    }
`;

export const pMd1 = css`
    @media (min-width: 768px) {
        & {
            padding: 0.25rem !important;
        }
    }
`;

export const ptMd1 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 0.25rem !important;
        }
    }
`;

export const prMd1 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 0.25rem !important;
        }
    }
`;

export const pbMd1 = css`
    @media (min-width: 768px) {
        & {
            padding-bottom: 0.25rem !important;
        }
    }
`;

export const plMd1 = css`
    @media (min-width: 768px) {
        & {
            padding-left: 0.25rem !important;
        }
    }
`;

export const pxMd1 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 0.25rem !important;
            padding-left: 0.25rem !important;
        }
    }
`;

export const pyMd1 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 0.25rem !important;
            padding-bottom: 0.25rem !important;
        }
    }
`;

export const pMd2 = css`
    @media (min-width: 768px) {
        & {
            padding: 0.5rem !important;
        }
    }
`;

export const ptMd2 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 0.5rem !important;
        }
    }
`;

export const prMd2 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 0.5rem !important;
        }
    }
`;

export const pbMd2 = css`
    @media (min-width: 768px) {
        & {
            padding-bottom: 0.5rem !important;
        }
    }
`;

export const plMd2 = css`
    @media (min-width: 768px) {
        & {
            padding-left: 0.5rem !important;
        }
    }
`;

export const pxMd2 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 0.5rem !important;
            padding-left: 0.5rem !important;
        }
    }
`;

export const pyMd2 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
        }
    }
`;

export const pMd3 = css`
    @media (min-width: 768px) {
        & {
            padding: 1rem !important;
        }
    }
`;

export const ptMd3 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 1rem !important;
        }
    }
`;

export const prMd3 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 1rem !important;
        }
    }
`;

export const pbMd3 = css`
    @media (min-width: 768px) {
        & {
            padding-bottom: 1rem !important;
        }
    }
`;

export const plMd3 = css`
    @media (min-width: 768px) {
        & {
            padding-left: 1rem !important;
        }
    }
`;

export const pxMd3 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 1rem !important;
            padding-left: 1rem !important;
        }
    }
`;

export const pyMd3 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
        }
    }
`;

export const pMd4 = css`
    @media (min-width: 768px) {
        & {
            padding: 1.5rem !important;
        }
    }
`;

export const ptMd4 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 1.5rem !important;
        }
    }
`;

export const prMd4 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 1.5rem !important;
        }
    }
`;

export const pbMd4 = css`
    @media (min-width: 768px) {
        & {
            padding-bottom: 1.5rem !important;
        }
    }
`;

export const plMd4 = css`
    @media (min-width: 768px) {
        & {
            padding-left: 1.5rem !important;
        }
    }
`;

export const pxMd4 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 1.5rem !important;
            padding-left: 1.5rem !important;
        }
    }
`;

export const pyMd4 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 1.5rem !important;
            padding-bottom: 1.5rem !important;
        }
    }
`;

export const pMd5 = css`
    @media (min-width: 768px) {
        & {
            padding: 3rem !important;
        }
    }
`;

export const ptMd5 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 3rem !important;
        }
    }
`;

export const prMd5 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 3rem !important;
        }
    }
`;

export const pbMd5 = css`
    @media (min-width: 768px) {
        & {
            padding-bottom: 3rem !important;
        }
    }
`;

export const plMd5 = css`
    @media (min-width: 768px) {
        & {
            padding-left: 3rem !important;
        }
    }
`;

export const pxMd5 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 3rem !important;
            padding-left: 3rem !important;
        }
    }
`;

export const pyMd5 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
        }
    }
`;

export const mMdAuto = css`
    @media (min-width: 768px) {
        & {
            margin: auto !important;
        }
    }
`;

export const mtMdAuto = css`
    @media (min-width: 768px) {
        & {
            margin-top: auto !important;
        }
    }
`;

export const mrMdAuto = css`
    @media (min-width: 768px) {
        & {
            margin-right: auto !important;
        }
    }
`;

export const mbMdAuto = css`
    @media (min-width: 768px) {
        & {
            margin-bottom: auto !important;
        }
    }
`;

export const mlMdAuto = css`
    @media (min-width: 768px) {
        & {
            margin-left: auto !important;
        }
    }
`;

export const mxMdAuto = css`
    @media (min-width: 768px) {
        & {
            margin-right: auto !important;
            margin-left: auto !important;
        }
    }
`;

export const myMdAuto = css`
    @media (min-width: 768px) {
        & {
            margin-top: auto !important;
            margin-bottom: auto !important;
        }
    }
`;

export const mLg0 = css`
    @media (min-width: 992px) {
        & {
            margin: 0 !important;
        }
    }
`;

export const mtLg0 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 0 !important;
        }
    }
`;

export const mrLg0 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 0 !important;
        }
    }
`;

export const mbLg0 = css`
    @media (min-width: 992px) {
        & {
            margin-bottom: 0 !important;
        }
    }
`;

export const mlLg0 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 0 !important;
        }
    }
`;

export const mxLg0 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 0 !important;
            margin-left: 0 !important;
        }
    }
`;

export const myLg0 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
        }
    }
`;

export const mLg1 = css`
    @media (min-width: 992px) {
        & {
            margin: 0.25rem !important;
        }
    }
`;

export const mtLg1 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 0.25rem !important;
        }
    }
`;

export const mrLg1 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 0.25rem !important;
        }
    }
`;

export const mbLg1 = css`
    @media (min-width: 992px) {
        & {
            margin-bottom: 0.25rem !important;
        }
    }
`;

export const mlLg1 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 0.25rem !important;
        }
    }
`;

export const mxLg1 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 0.25rem !important;
            margin-left: 0.25rem !important;
        }
    }
`;

export const myLg1 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 0.25rem !important;
            margin-bottom: 0.25rem !important;
        }
    }
`;

export const mLg2 = css`
    @media (min-width: 992px) {
        & {
            margin: 0.5rem !important;
        }
    }
`;

export const mtLg2 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 0.5rem !important;
        }
    }
`;

export const mrLg2 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 0.5rem !important;
        }
    }
`;

export const mbLg2 = css`
    @media (min-width: 992px) {
        & {
            margin-bottom: 0.5rem !important;
        }
    }
`;

export const mlLg2 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 0.5rem !important;
        }
    }
`;

export const mxLg2 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 0.5rem !important;
            margin-left: 0.5rem !important;
        }
    }
`;

export const myLg2 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 0.5rem !important;
            margin-bottom: 0.5rem !important;
        }
    }
`;

export const mLg3 = css`
    @media (min-width: 992px) {
        & {
            margin: 1rem !important;
        }
    }
`;

export const mtLg3 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 1rem !important;
        }
    }
`;

export const mrLg3 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 1rem !important;
        }
    }
`;

export const mbLg3 = css`
    @media (min-width: 992px) {
        & {
            margin-bottom: 1rem !important;
        }
    }
`;

export const mlLg3 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 1rem !important;
        }
    }
`;

export const mxLg3 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 1rem !important;
            margin-left: 1rem !important;
        }
    }
`;

export const myLg3 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 1rem !important;
            margin-bottom: 1rem !important;
        }
    }
`;

export const mLg4 = css`
    @media (min-width: 992px) {
        & {
            margin: 1.5rem !important;
        }
    }
`;

export const mtLg4 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 1.5rem !important;
        }
    }
`;

export const mrLg4 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 1.5rem !important;
        }
    }
`;

export const mbLg4 = css`
    @media (min-width: 992px) {
        & {
            margin-bottom: 1.5rem !important;
        }
    }
`;

export const mlLg4 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 1.5rem !important;
        }
    }
`;

export const mxLg4 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 1.5rem !important;
            margin-left: 1.5rem !important;
        }
    }
`;

export const myLg4 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 1.5rem !important;
            margin-bottom: 1.5rem !important;
        }
    }
`;

export const mLg5 = css`
    @media (min-width: 992px) {
        & {
            margin: 3rem !important;
        }
    }
`;

export const mtLg5 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 3rem !important;
        }
    }
`;

export const mrLg5 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 3rem !important;
        }
    }
`;

export const mbLg5 = css`
    @media (min-width: 992px) {
        & {
            margin-bottom: 3rem !important;
        }
    }
`;

export const mlLg5 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 3rem !important;
        }
    }
`;

export const mxLg5 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 3rem !important;
            margin-left: 3rem !important;
        }
    }
`;

export const myLg5 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 3rem !important;
            margin-bottom: 3rem !important;
        }
    }
`;

export const pLg0 = css`
    @media (min-width: 992px) {
        & {
            padding: 0 !important;
        }
    }
`;

export const ptLg0 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 0 !important;
        }
    }
`;

export const prLg0 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 0 !important;
        }
    }
`;

export const pbLg0 = css`
    @media (min-width: 992px) {
        & {
            padding-bottom: 0 !important;
        }
    }
`;

export const plLg0 = css`
    @media (min-width: 992px) {
        & {
            padding-left: 0 !important;
        }
    }
`;

export const pxLg0 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 0 !important;
            padding-left: 0 !important;
        }
    }
`;

export const pyLg0 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }
    }
`;

export const pLg1 = css`
    @media (min-width: 992px) {
        & {
            padding: 0.25rem !important;
        }
    }
`;

export const ptLg1 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 0.25rem !important;
        }
    }
`;

export const prLg1 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 0.25rem !important;
        }
    }
`;

export const pbLg1 = css`
    @media (min-width: 992px) {
        & {
            padding-bottom: 0.25rem !important;
        }
    }
`;

export const plLg1 = css`
    @media (min-width: 992px) {
        & {
            padding-left: 0.25rem !important;
        }
    }
`;

export const pxLg1 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 0.25rem !important;
            padding-left: 0.25rem !important;
        }
    }
`;

export const pyLg1 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 0.25rem !important;
            padding-bottom: 0.25rem !important;
        }
    }
`;

export const pLg2 = css`
    @media (min-width: 992px) {
        & {
            padding: 0.5rem !important;
        }
    }
`;

export const ptLg2 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 0.5rem !important;
        }
    }
`;

export const prLg2 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 0.5rem !important;
        }
    }
`;

export const pbLg2 = css`
    @media (min-width: 992px) {
        & {
            padding-bottom: 0.5rem !important;
        }
    }
`;

export const plLg2 = css`
    @media (min-width: 992px) {
        & {
            padding-left: 0.5rem !important;
        }
    }
`;

export const pxLg2 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 0.5rem !important;
            padding-left: 0.5rem !important;
        }
    }
`;

export const pyLg2 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
        }
    }
`;

export const pLg3 = css`
    @media (min-width: 992px) {
        & {
            padding: 1rem !important;
        }
    }
`;

export const ptLg3 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 1rem !important;
        }
    }
`;

export const prLg3 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 1rem !important;
        }
    }
`;

export const pbLg3 = css`
    @media (min-width: 992px) {
        & {
            padding-bottom: 1rem !important;
        }
    }
`;

export const plLg3 = css`
    @media (min-width: 992px) {
        & {
            padding-left: 1rem !important;
        }
    }
`;

export const pxLg3 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 1rem !important;
            padding-left: 1rem !important;
        }
    }
`;

export const pyLg3 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
        }
    }
`;

export const pLg4 = css`
    @media (min-width: 992px) {
        & {
            padding: 1.5rem !important;
        }
    }
`;

export const ptLg4 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 1.5rem !important;
        }
    }
`;

export const prLg4 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 1.5rem !important;
        }
    }
`;

export const pbLg4 = css`
    @media (min-width: 992px) {
        & {
            padding-bottom: 1.5rem !important;
        }
    }
`;

export const plLg4 = css`
    @media (min-width: 992px) {
        & {
            padding-left: 1.5rem !important;
        }
    }
`;

export const pxLg4 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 1.5rem !important;
            padding-left: 1.5rem !important;
        }
    }
`;

export const pyLg4 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 1.5rem !important;
            padding-bottom: 1.5rem !important;
        }
    }
`;

export const pLg5 = css`
    @media (min-width: 992px) {
        & {
            padding: 3rem !important;
        }
    }
`;

export const ptLg5 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 3rem !important;
        }
    }
`;

export const prLg5 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 3rem !important;
        }
    }
`;

export const pbLg5 = css`
    @media (min-width: 992px) {
        & {
            padding-bottom: 3rem !important;
        }
    }
`;

export const plLg5 = css`
    @media (min-width: 992px) {
        & {
            padding-left: 3rem !important;
        }
    }
`;

export const pxLg5 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 3rem !important;
            padding-left: 3rem !important;
        }
    }
`;

export const pyLg5 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
        }
    }
`;

export const mLgAuto = css`
    @media (min-width: 992px) {
        & {
            margin: auto !important;
        }
    }
`;

export const mtLgAuto = css`
    @media (min-width: 992px) {
        & {
            margin-top: auto !important;
        }
    }
`;

export const mrLgAuto = css`
    @media (min-width: 992px) {
        & {
            margin-right: auto !important;
        }
    }
`;

export const mbLgAuto = css`
    @media (min-width: 992px) {
        & {
            margin-bottom: auto !important;
        }
    }
`;

export const mlLgAuto = css`
    @media (min-width: 992px) {
        & {
            margin-left: auto !important;
        }
    }
`;

export const mxLgAuto = css`
    @media (min-width: 992px) {
        & {
            margin-right: auto !important;
            margin-left: auto !important;
        }
    }
`;

export const myLgAuto = css`
    @media (min-width: 992px) {
        & {
            margin-top: auto !important;
            margin-bottom: auto !important;
        }
    }
`;

export const mXl0 = css`
    @media (min-width: 1200px) {
        & {
            margin: 0 !important;
        }
    }
`;

export const mtXl0 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 0 !important;
        }
    }
`;

export const mrXl0 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 0 !important;
        }
    }
`;

export const mbXl0 = css`
    @media (min-width: 1200px) {
        & {
            margin-bottom: 0 !important;
        }
    }
`;

export const mlXl0 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 0 !important;
        }
    }
`;

export const mxXl0 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 0 !important;
            margin-left: 0 !important;
        }
    }
`;

export const myXl0 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
        }
    }
`;

export const mXl1 = css`
    @media (min-width: 1200px) {
        & {
            margin: 0.25rem !important;
        }
    }
`;

export const mtXl1 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 0.25rem !important;
        }
    }
`;

export const mrXl1 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 0.25rem !important;
        }
    }
`;

export const mbXl1 = css`
    @media (min-width: 1200px) {
        & {
            margin-bottom: 0.25rem !important;
        }
    }
`;

export const mlXl1 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 0.25rem !important;
        }
    }
`;

export const mxXl1 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 0.25rem !important;
            margin-left: 0.25rem !important;
        }
    }
`;

export const myXl1 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 0.25rem !important;
            margin-bottom: 0.25rem !important;
        }
    }
`;

export const mXl2 = css`
    @media (min-width: 1200px) {
        & {
            margin: 0.5rem !important;
        }
    }
`;

export const mtXl2 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 0.5rem !important;
        }
    }
`;

export const mrXl2 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 0.5rem !important;
        }
    }
`;

export const mbXl2 = css`
    @media (min-width: 1200px) {
        & {
            margin-bottom: 0.5rem !important;
        }
    }
`;

export const mlXl2 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 0.5rem !important;
        }
    }
`;

export const mxXl2 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 0.5rem !important;
            margin-left: 0.5rem !important;
        }
    }
`;

export const myXl2 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 0.5rem !important;
            margin-bottom: 0.5rem !important;
        }
    }
`;

export const mXl3 = css`
    @media (min-width: 1200px) {
        & {
            margin: 1rem !important;
        }
    }
`;

export const mtXl3 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 1rem !important;
        }
    }
`;

export const mrXl3 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 1rem !important;
        }
    }
`;

export const mbXl3 = css`
    @media (min-width: 1200px) {
        & {
            margin-bottom: 1rem !important;
        }
    }
`;

export const mlXl3 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 1rem !important;
        }
    }
`;

export const mxXl3 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 1rem !important;
            margin-left: 1rem !important;
        }
    }
`;

export const myXl3 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 1rem !important;
            margin-bottom: 1rem !important;
        }
    }
`;

export const mXl4 = css`
    @media (min-width: 1200px) {
        & {
            margin: 1.5rem !important;
        }
    }
`;

export const mtXl4 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 1.5rem !important;
        }
    }
`;

export const mrXl4 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 1.5rem !important;
        }
    }
`;

export const mbXl4 = css`
    @media (min-width: 1200px) {
        & {
            margin-bottom: 1.5rem !important;
        }
    }
`;

export const mlXl4 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 1.5rem !important;
        }
    }
`;

export const mxXl4 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 1.5rem !important;
            margin-left: 1.5rem !important;
        }
    }
`;

export const myXl4 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 1.5rem !important;
            margin-bottom: 1.5rem !important;
        }
    }
`;

export const mXl5 = css`
    @media (min-width: 1200px) {
        & {
            margin: 3rem !important;
        }
    }
`;

export const mtXl5 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 3rem !important;
        }
    }
`;

export const mrXl5 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 3rem !important;
        }
    }
`;

export const mbXl5 = css`
    @media (min-width: 1200px) {
        & {
            margin-bottom: 3rem !important;
        }
    }
`;

export const mlXl5 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 3rem !important;
        }
    }
`;

export const mxXl5 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 3rem !important;
            margin-left: 3rem !important;
        }
    }
`;

export const myXl5 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 3rem !important;
            margin-bottom: 3rem !important;
        }
    }
`;

export const pXl0 = css`
    @media (min-width: 1200px) {
        & {
            padding: 0 !important;
        }
    }
`;

export const ptXl0 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 0 !important;
        }
    }
`;

export const prXl0 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 0 !important;
        }
    }
`;

export const pbXl0 = css`
    @media (min-width: 1200px) {
        & {
            padding-bottom: 0 !important;
        }
    }
`;

export const plXl0 = css`
    @media (min-width: 1200px) {
        & {
            padding-left: 0 !important;
        }
    }
`;

export const pxXl0 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 0 !important;
            padding-left: 0 !important;
        }
    }
`;

export const pyXl0 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
        }
    }
`;

export const pXl1 = css`
    @media (min-width: 1200px) {
        & {
            padding: 0.25rem !important;
        }
    }
`;

export const ptXl1 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 0.25rem !important;
        }
    }
`;

export const prXl1 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 0.25rem !important;
        }
    }
`;

export const pbXl1 = css`
    @media (min-width: 1200px) {
        & {
            padding-bottom: 0.25rem !important;
        }
    }
`;

export const plXl1 = css`
    @media (min-width: 1200px) {
        & {
            padding-left: 0.25rem !important;
        }
    }
`;

export const pxXl1 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 0.25rem !important;
            padding-left: 0.25rem !important;
        }
    }
`;

export const pyXl1 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 0.25rem !important;
            padding-bottom: 0.25rem !important;
        }
    }
`;

export const pXl2 = css`
    @media (min-width: 1200px) {
        & {
            padding: 0.5rem !important;
        }
    }
`;

export const ptXl2 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 0.5rem !important;
        }
    }
`;

export const prXl2 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 0.5rem !important;
        }
    }
`;

export const pbXl2 = css`
    @media (min-width: 1200px) {
        & {
            padding-bottom: 0.5rem !important;
        }
    }
`;

export const plXl2 = css`
    @media (min-width: 1200px) {
        & {
            padding-left: 0.5rem !important;
        }
    }
`;

export const pxXl2 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 0.5rem !important;
            padding-left: 0.5rem !important;
        }
    }
`;

export const pyXl2 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
        }
    }
`;

export const pXl3 = css`
    @media (min-width: 1200px) {
        & {
            padding: 1rem !important;
        }
    }
`;

export const ptXl3 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 1rem !important;
        }
    }
`;

export const prXl3 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 1rem !important;
        }
    }
`;

export const pbXl3 = css`
    @media (min-width: 1200px) {
        & {
            padding-bottom: 1rem !important;
        }
    }
`;

export const plXl3 = css`
    @media (min-width: 1200px) {
        & {
            padding-left: 1rem !important;
        }
    }
`;

export const pxXl3 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 1rem !important;
            padding-left: 1rem !important;
        }
    }
`;

export const pyXl3 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
        }
    }
`;

export const pXl4 = css`
    @media (min-width: 1200px) {
        & {
            padding: 1.5rem !important;
        }
    }
`;

export const ptXl4 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 1.5rem !important;
        }
    }
`;

export const prXl4 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 1.5rem !important;
        }
    }
`;

export const pbXl4 = css`
    @media (min-width: 1200px) {
        & {
            padding-bottom: 1.5rem !important;
        }
    }
`;

export const plXl4 = css`
    @media (min-width: 1200px) {
        & {
            padding-left: 1.5rem !important;
        }
    }
`;

export const pxXl4 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 1.5rem !important;
            padding-left: 1.5rem !important;
        }
    }
`;

export const pyXl4 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 1.5rem !important;
            padding-bottom: 1.5rem !important;
        }
    }
`;

export const pXl5 = css`
    @media (min-width: 1200px) {
        & {
            padding: 3rem !important;
        }
    }
`;

export const ptXl5 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 3rem !important;
        }
    }
`;

export const prXl5 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 3rem !important;
        }
    }
`;

export const pbXl5 = css`
    @media (min-width: 1200px) {
        & {
            padding-bottom: 3rem !important;
        }
    }
`;

export const plXl5 = css`
    @media (min-width: 1200px) {
        & {
            padding-left: 3rem !important;
        }
    }
`;

export const pxXl5 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 3rem !important;
            padding-left: 3rem !important;
        }
    }
`;

export const pyXl5 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
        }
    }
`;

export const mXlAuto = css`
    @media (min-width: 1200px) {
        & {
            margin: auto !important;
        }
    }
`;

export const mtXlAuto = css`
    @media (min-width: 1200px) {
        & {
            margin-top: auto !important;
        }
    }
`;

export const mrXlAuto = css`
    @media (min-width: 1200px) {
        & {
            margin-right: auto !important;
        }
    }
`;

export const mbXlAuto = css`
    @media (min-width: 1200px) {
        & {
            margin-bottom: auto !important;
        }
    }
`;

export const mlXlAuto = css`
    @media (min-width: 1200px) {
        & {
            margin-left: auto !important;
        }
    }
`;

export const mxXlAuto = css`
    @media (min-width: 1200px) {
        & {
            margin-right: auto !important;
            margin-left: auto !important;
        }
    }
`;

export const myXlAuto = css`
    @media (min-width: 1200px) {
        & {
            margin-top: auto !important;
            margin-bottom: auto !important;
        }
    }
`;

export const textJustify = css`
    text-align: justify !important;
`;

export const textNowrap = css`
    white-space: nowrap !important;
`;

export const textTruncate = css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const textLeft = css`
    text-align: left !important;
`;

export const textRight = css`
    text-align: right !important;
`;

export const textCenter = css`
    text-align: center !important;
`;

export const textSmLeft = css`
    @media (min-width: 576px) {
        & {
            text-align: left !important;
        }
    }
`;

export const textSmRight = css`
    @media (min-width: 576px) {
        & {
            text-align: right !important;
        }
    }
`;

export const textSmCenter = css`
    @media (min-width: 576px) {
        & {
            text-align: center !important;
        }
    }
`;

export const textMdLeft = css`
    @media (min-width: 768px) {
        & {
            text-align: left !important;
        }
    }
`;

export const textMdRight = css`
    @media (min-width: 768px) {
        & {
            text-align: right !important;
        }
    }
`;

export const textMdCenter = css`
    @media (min-width: 768px) {
        & {
            text-align: center !important;
        }
    }
`;

export const textLgLeft = css`
    @media (min-width: 992px) {
        & {
            text-align: left !important;
        }
    }
`;

export const textLgRight = css`
    @media (min-width: 992px) {
        & {
            text-align: right !important;
        }
    }
`;

export const textLgCenter = css`
    @media (min-width: 992px) {
        & {
            text-align: center !important;
        }
    }
`;

export const textXlLeft = css`
    @media (min-width: 1200px) {
        & {
            text-align: left !important;
        }
    }
`;

export const textXlRight = css`
    @media (min-width: 1200px) {
        & {
            text-align: right !important;
        }
    }
`;

export const textXlCenter = css`
    @media (min-width: 1200px) {
        & {
            text-align: center !important;
        }
    }
`;

export const textLowercase = css`
    text-transform: lowercase !important;
`;

export const textUppercase = css`
    text-transform: uppercase !important;
`;

export const textCapitalize = css`
    text-transform: capitalize !important;
`;

export const fontWeightNormal = css`
    font-weight: normal;
`;

export const fontWeightBold = css`
    font-weight: bold;
`;

export const fontItalic = css`
    font-style: italic;
`;

export const textWhite = css`
    color: #fff !important;
`;

export const textPrimary = css`
    color: #007bff !important;

    a&:focus,
    a&:hover {
        color: #0062cc !important;
    }
`;

export const textSecondary = css`
    color: #868e96 !important;

    a&:focus,
    a&:hover {
        color: #6c757d !important;
    }
`;

export const textSuccess = css`
    color: #28a745 !important;

    a&:focus,
    a&:hover {
        color: #1e7e34 !important;
    }
`;

export const textInfo = css`
    color: #17a2b8 !important;

    a&:focus,
    a&:hover {
        color: #117a8b !important;
    }
`;

export const textWarning = css`
    color: #ffc107 !important;

    a&:focus,
    a&:hover {
        color: #d39e00 !important;
    }
`;

export const textDanger = css`
    color: #dc3545 !important;

    a&:focus,
    a&:hover {
        color: #bd2130 !important;
    }
`;

export const textLight = css`
    color: #f8f9fa !important;

    a&:focus,
    a&:hover {
        color: #dae0e5 !important;
    }
`;

export const textDark = css`
    color: #343a40 !important;

    a&:focus,
    a&:hover {
        color: #1d2124 !important;
    }
`;

export const textMuted = css`
    color: #868e96 !important;
`;

export const textHide = css`
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
`;

export const visible = css`
    visibility: visible !important;
`;

export const invisible = css`
    visibility: hidden !important;
`;

