import { injectGlobal } from "emotion";

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
