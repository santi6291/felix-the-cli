html,
body {
    font-size: $default-font-size;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    &, * {
        // DO NOT make this !important
        // Video players use custom fonts and will be overwritten
        font-family: $body-font-family;
        -webkit-font-smoothing: antialiased;
    }
}

html {
    &.lock-scroll {
        overflow: hidden;
    }
}

// body.loading {
//     opacity: 0;
// }

picture img{
    width: 100%;
}

div {
    // removes dead space on div
    line-height: 1;
}

svg {
    width: auto;
    height: auto;
}

pre {
    margin-bottom: 40px !important;

    * {
        font-family: monospace;
    }
}
p {
    color: inherit;
}