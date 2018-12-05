/**
 * style input field placeholder
 */
@mixin placeholder{
    &::-webkit-input-placeholder {
        @content;
    }

    &:-moz-placeholder {
        @content;
    }

    &::-moz-placeholder {
        @content;
    }

    &:-ms-input-placeholder {
        @content;
    }
}

/**
 * Maintain Aspect Ratio Mixin
 * credit: https://css-tricks.com/snippets/sass/maintain-aspect-ratio-mixin/b
 */

@mixin aspect-ratio($width, $height) {
  position: relative;
  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: ($height / $width) * 100%;
  }
  > .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

/**
 * Since font sizes are predefined for different breakpoints we can use a mixin to keep things consistent
 * This mixin will handle font sizes breakpoints as well
 * @param  {Number} $index Index for font size group
 * @return {[type]}        [description]
 */
@mixin get-font-size($key){
    $font: map-get($font_sizes, $key);
    $fontSizes: map-get($font, 'size');
    $fontWeight: map-get($font, 'weight');
    $fontWeight: map-get($fontWeights, $fontWeight);
    $fontSize: map-get($fontSizes, 'small');

    font-size: rem-calc($fontSize);
    font-weight: $fontWeight;

    @include breakpoint(medium) {
        $fontSize: map-get($fontSizes, 'medium');
        font-size:  rem-calc($fontSize);
    }

    @include breakpoint(large) {
        $fontSize: map-get($fontSizes, 'large');
        font-size:  rem-calc($fontSize);
    }
}

/**
 * Since font sizes are predefined for different breakpoints we can use a mixin to keep things consistent
 * This mixin will handle font sizes breakpoints as well
 * @param  {Number} $index Index for font size group
 * @return {[type]}        [description]
 */
@mixin get-font-weight($key){
    $weight: map-get($fontWeights, $key);
    font-weight: $weight;
}
