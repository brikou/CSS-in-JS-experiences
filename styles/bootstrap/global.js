import { injectGlobal } from "emotion";

import { active } from "./active";
import { bgDanger } from "./bgDanger";
import { bgDark } from "./bgDark";
import { bgInfo } from "./bgInfo";
import { bgLight } from "./bgLight";
import { bgPrimary } from "./bgPrimary";
import { bgSecondary } from "./bgSecondary";
import { bgSuccess } from "./bgSuccess";
import { bgWarning } from "./bgWarning";
import { btn } from "./btn";
import { btnBlock } from "./btnBlock";
import { btnGroup } from "./btnGroup";
import { close } from "./close";
import { collapse } from "./collapse";
import { formControl } from "./formControl";
import { formControlLg } from "./formControlLg";
import { formControlSm } from "./formControlSm";
import { listGroupItemDanger } from "./listGroupItemDanger";
import { listGroupItemDark } from "./listGroupItemDark";
import { listGroupItemInfo } from "./listGroupItemInfo";
import { listGroupItemLight } from "./listGroupItemLight";
import { listGroupItemPrimary } from "./listGroupItemPrimary";
import { listGroupItemSecondary } from "./listGroupItemSecondary";
import { listGroupItemSuccess } from "./listGroupItemSuccess";
import { listGroupItemWarning } from "./listGroupItemWarning";
import { show } from "./show";
import { textDanger } from "./textDanger";
import { textDark } from "./textDark";
import { textInfo } from "./textInfo";
import { textLight } from "./textLight";
import { textPrimary } from "./textPrimary";
import { textSecondary } from "./textSecondary";
import { textSuccess } from "./textSuccess";
import { textWarning } from "./textWarning";

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
        bottom: -.25em;
    }

    sup {
        top: -.5em;
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

    select.${formControl}:not([size]):not([multiple]) {
        height: calc(2.25rem + 2px);
    }

    select.${formControl}:focus::-ms-value {
        color: #495057;
        background-color: #fff;
    }

    select.${formControlSm}:not([size]):not([multiple]) {
        height: calc(1.8125rem + 2px);
    }

    select.${formControlLg}:not([size]):not([multiple]) {
        height: calc(2.3125rem + 2px);
    }

    a.${btn}.disabled, fieldset[disabled] a.${btn} {
        pointer-events: none;
    }

    input[type="submit"].${btnBlock},
        input[type="reset"].${btnBlock},
        input[type="button"].${btnBlock} {
        width: 100%;
    }

    tr.${collapse}.${show} {
        display: table-row;
    }

    tbody.${collapse}.${show} {
        display: table-row-group;
    }

    [data-toggle="buttons"] > .${btn} input[type="radio"],
    [data-toggle="buttons"] > .${btn} input[type="checkbox"],
    [data-toggle="buttons"] > .${btnGroup} > .${btn} input[type="radio"],
    [data-toggle="buttons"] > .${btnGroup} > .${btn} input[type="checkbox"] {
        position: absolute;
        clip: rect(0, 0, 0, 0);
        pointer-events: none;
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

    a.${listGroupItemPrimary}, button.${listGroupItemPrimary} {
        color: #004085;
    }

    a.${listGroupItemPrimary}:focus,
        a.${listGroupItemPrimary}:hover,
        button.${listGroupItemPrimary}:focus,
        button.${listGroupItemPrimary}:hover {
        color: #004085;
        background-color: #9fcdff;
    }

    a.${listGroupItemPrimary}.${active},
        button.${listGroupItemPrimary}.${active} {
        color: #fff;
        background-color: #004085;
        border-color: #004085;
    }

    a.${listGroupItemSecondary}, button.${listGroupItemSecondary} {
        color: #464a4e;
    }

    a.${listGroupItemSecondary}:focus,
        a.${listGroupItemSecondary}:hover,
        button.${listGroupItemSecondary}:focus,
        button.${listGroupItemSecondary}:hover {
        color: #464a4e;
        background-color: #cfd2d6;
    }

    a.${listGroupItemSecondary}.${active},
        button.${listGroupItemSecondary}.${active} {
        color: #fff;
        background-color: #464a4e;
        border-color: #464a4e;
    }

    a.${listGroupItemSuccess}, button.${listGroupItemSuccess} {
        color: #155724;
    }

    a.${listGroupItemSuccess}:focus,
        a.${listGroupItemSuccess}:hover,
        button.${listGroupItemSuccess}:focus,
        button.${listGroupItemSuccess}:hover {
        color: #155724;
        background-color: #b1dfbb;
    }

    a.${listGroupItemSuccess}.${active},
        button.${listGroupItemSuccess}.${active} {
        color: #fff;
        background-color: #155724;
        border-color: #155724;
    }

    a.${listGroupItemInfo}, button.${listGroupItemInfo} {
        color: #0c5460;
    }

    a.${listGroupItemInfo}:focus,
        a.${listGroupItemInfo}:hover,
        button.${listGroupItemInfo}:focus,
        button.${listGroupItemInfo}:hover {
        color: #0c5460;
        background-color: #abdde5;
    }

    a.${listGroupItemInfo}.${active}, button.${listGroupItemInfo}.${active} {
        color: #fff;
        background-color: #0c5460;
        border-color: #0c5460;
    }

    a.${listGroupItemWarning}, button.${listGroupItemWarning} {
        color: #856404;
    }

    a.${listGroupItemWarning}:focus,
        a.${listGroupItemWarning}:hover,
        button.${listGroupItemWarning}:focus,
        button.${listGroupItemWarning}:hover {
        color: #856404;
        background-color: #ffe8a1;
    }

    a.${listGroupItemWarning}.${active},
        button.${listGroupItemWarning}.${active} {
        color: #fff;
        background-color: #856404;
        border-color: #856404;
    }

    a.${listGroupItemDanger}, button.${listGroupItemDanger} {
        color: #721c24;
    }

    a.${listGroupItemDanger}:focus,
        a.${listGroupItemDanger}:hover,
        button.${listGroupItemDanger}:focus,
        button.${listGroupItemDanger}:hover {
        color: #721c24;
        background-color: #f1b0b7;
    }

    a.${listGroupItemDanger}.${active},
        button.${listGroupItemDanger}.${active} {
        color: #fff;
        background-color: #721c24;
        border-color: #721c24;
    }

    a.${listGroupItemLight}, button.${listGroupItemLight} {
        color: #818182;
    }

    a.${listGroupItemLight}:focus,
        a.${listGroupItemLight}:hover,
        button.${listGroupItemLight}:focus,
        button.${listGroupItemLight}:hover {
        color: #818182;
        background-color: #ececf6;
    }

    a.${listGroupItemLight}.${active},
        button.${listGroupItemLight}.${active} {
        color: #fff;
        background-color: #818182;
        border-color: #818182;
    }

    a.${listGroupItemDark}, button.${listGroupItemDark} {
        color: #1b1e21;
    }

    a.${listGroupItemDark}:focus,
        a.${listGroupItemDark}:hover,
        button.${listGroupItemDark}:focus,
        button.${listGroupItemDark}:hover {
        color: #1b1e21;
        background-color: #b9bbbe;
    }

    a.${listGroupItemDark}.${active}, button.${listGroupItemDark}.${active} {
        color: #fff;
        background-color: #1b1e21;
        border-color: #1b1e21;
    }

    button.${close} {
        padding: 0;
        background: transparent;
        border: 0;
        -webkit-appearance: none;
    }

    a.${bgPrimary}:focus, a.${bgPrimary}:hover {
        background-color: #0062cc !important;
    }

    a.${bgSecondary}:focus, a.${bgSecondary}:hover {
        background-color: #6c757d !important;
    }

    a.${bgSuccess}:focus, a.${bgSuccess}:hover {
        background-color: #1e7e34 !important;
    }

    a.${bgInfo}:focus, a.${bgInfo}:hover {
        background-color: #117a8b !important;
    }

    a.${bgWarning}:focus, a.${bgWarning}:hover {
        background-color: #d39e00 !important;
    }

    a.${bgDanger}:focus, a.${bgDanger}:hover {
        background-color: #bd2130 !important;
    }

    a.${bgLight}:focus, a.${bgLight}:hover {
        background-color: #dae0e5 !important;
    }

    a.${bgDark}:focus, a.${bgDark}:hover {
        background-color: #1d2124 !important;
    }

    a.${textPrimary}:focus, a.${textPrimary}:hover {
        color: #0062cc !important;
    }

    a.${textSecondary}:focus, a.${textSecondary}:hover {
        color: #6c757d !important;
    }

    a.${textSuccess}:focus, a.${textSuccess}:hover {
        color: #1e7e34 !important;
    }

    a.${textInfo}:focus, a.${textInfo}:hover {
        color: #117a8b !important;
    }

    a.${textWarning}:focus, a.${textWarning}:hover {
        color: #d39e00 !important;
    }

    a.${textDanger}:focus, a.${textDanger}:hover {
        color: #bd2130 !important;
    }

    a.${textLight}:focus, a.${textLight}:hover {
        color: #dae0e5 !important;
    }

    a.${textDark}:focus, a.${textDark}:hover {
        color: #1d2124 !important;
    }

    /*# sourceMappingURL=bootstrap.css.map */
`;
