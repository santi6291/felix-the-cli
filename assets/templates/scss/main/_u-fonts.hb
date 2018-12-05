/**
 * Loop through $font_sizes map and create classes with the
 * named styles
 */
@each $style, $sizes in $font_sizes {
  .u-style-#{$style} {
    @include get-font-size($style);
  }
}

@each $weight, $style in $fontWeights {
    .u-style-weight-#{$weight} {
        @include get-font-weight($weight);
    }
}

.u-style-italic {
    font-style: italic;
}

.u-style-underline {
    text-decoration: underline;
}

.u-style-text-transform-uppercase {
    text-transform: uppercase;
}
