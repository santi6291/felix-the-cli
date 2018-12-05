/*----------------------------------------------------*/
/*  Vendors
/*----------------------------------------------------*/
/** Foundation */
@import 'foundation-sites/scss/foundation';

/*----------------------------------------------------*/
/*  Core Styles
/*----------------------------------------------------*/
@import './core/functions';
@import './core/mixins';
@import './core/reset';
@import './core/variables';
@import './core/settings';
@import './core/global';


/*----------------------------------------------------*/
/* Style Utilities
/*----------------------------------------------------*/
@import './utilities/u-fonts';
@import './utilities/u-colors';

/*----------------------------------------------------*/
/*  Foundation Styles / Mixins
/*----------------------------------------------------*/
@include foundation-xy-grid-classes;
// @include foundation-flex-classes;
// @include foundation-visibility-classes;
// @include foundation-typography;
// @include foundation-reveal;
// @include foundation-accordion;

/*----------------------------------------------------*/
/*  Partials
/*----------------------------------------------------*/
@import './partials/group-label';
