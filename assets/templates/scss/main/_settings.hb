/*----------------------------------------------------*/
/* Foundation Variables
/* Reference /node_modules/foundation-sites/scss/settings/_settings.scss
/* or http://foundation.zurb.com/sites/docs/
/*----------------------------------------------------*/

/**
 * Foudnation Media query breakpoints
 */
$breakpoints: (
    'small'   : 0px,
    'medium'  : 640px,
    'large'   : 1024px,
    'xlarge'  : 1280px,
    'xxlarge'  : 1440px,
);
$breakpoint-classes: (small medium large xlarge xxlarge);

/**
 * Gutter for each breakpoint
 */
$grid-gutter: (
    'small'   : 8px,
    'medium'  : 24px,
    'large'   : 32px
);

$grid-margin-gutters: $grid-gutter;
$grid-padding-gutters: $grid-gutter;

/**
 * usage: color(color_name);
 */
$foundation-palette:(
    'white': #ffffff,
    'blue': #B9D8E5,
    'green': #C0E2DB,
    'red':#EC3250,
);

$body-main-background: get-color('white');

$grid-container: 1280px;
$grid-container-padding: (
    'small': 48px,
    'medium': 80px,
);

$grid-row-width-small: rem-calc(290px);
$grid-row-width-medium: rem-calc(730px);
$grid-row-width: rem-calc(1040px);

// disable anchor tag hover color
$anchor-color-hover: '';

// Flex control
$flexbox-responsive-breakpoints: true;

$anchor-color: inherit;

$offcanvas-sizes: (
  'small': 100%,
  'medium': 336px,
  'large': 348px,
);

$offcanvas-background: get-color('white');
$offcanvas-exit-background: rgba(get-color('black'), 0.45);
$offcanvas-overlay-zindex: 60;
$offcanvas-push-zindex: 70;
$offcanvas-reveal-zindex: 70;
$offcanvas-overlap-zindex: 80;

$paragraph-lineheight: inherit;

$body-font-family: 'Gilroy', Helvetica, Arial,  sans-serif;
$header-font-family: $body-font-family;
