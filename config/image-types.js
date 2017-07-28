'use strict';

const RATIO_1x1 = '1x1';
const RATIO_1xy = '1xy';
const RATIO_2x3 = '2x3';
const RATIO_16x9 = '16x9';

const FORMAT_JPG = 'jpg';
const FORMAT_PNG = 'png';

module.exports = {
  decoration: {
    ratio: RATIO_2x3,
    format: FORMAT_PNG,
    fallbackWidth: 450,
    widths: [380, 450, 760, 900],
    sizes: [
      { condition: 'min-width: 980px', width: '450px' },
      { condition: 'min-width: 600px', width: '380px' },
      { width: '1px' },
    ],
  },
  image_stage_portrait: {
    ratio: RATIO_2x3,
    format: FORMAT_JPG,
    fallbackWidth: 640,
    widths: [300, 380, 490, 640, 760, 980, 1280, 1520],
    sizes: [
      { condition: 'min-width: 700px', width: '38vw' },
      { width: '100vw' },
    ],
  },
  full_viewport_width: {
    ratio: RATIO_16x9,
    format: FORMAT_JPG,
    fallbackWidth: 640,
    widths: [
      375,
      470,
      640,
      768,
      960,
      1024,
      1280,
      1600,
      1920,
      2048,
      2560,
      3200,
      3840,
    ],
    sizes: [{ width: '100vw' }],
  },
  full_content_width: {
    ratio: RATIO_16x9,
    format: FORMAT_JPG,
    fallbackWidth: 640,
    widths: [375, 470, 640, 768, 960, 1280, 1600, 1920],
    sizes: [
      { condition: 'min-width: 1600px', width: '50vw' },
      { condition: 'min-width: 980px', width: '60vw' },
      { condition: 'min-width: 700px', width: '75vw' },
      { width: '100vw' },
    ],
  },
  half_content_width_landscape: {
    ratio: RATIO_16x9,
    format: FORMAT_JPG,
    fallbackWidth: 470,
    widths: [210, 375, 470, 640, 960],
    sizes: [
      { condition: 'min-width: 980px', width: '30vw' },
      { condition: 'min-width: 700px', width: '40vw' },
      { condition: 'min-width: 450px', width: '45vw' },
      { width: '100vw' },
    ],
  },
  half_content_width_square: {
    ratio: RATIO_1x1,
    format: FORMAT_JPG,
    fallbackWidth: 480,
    widths: [240, 380, 480, 760, 960],
    sizes: [
      { condition: 'min-width: 980px', width: '30vw' },
      { condition: 'min-width: 700px', width: '40vw' },
      { condition: 'min-width: 450px', width: '45vw' },
      { width: '100vw' },
    ],
  },
  half_content_width_portrait: {
    ratio: RATIO_2x3,
    format: FORMAT_JPG,
    fallbackWidth: 480,
    widths: [240, 380, 490, 640, 980],
    sizes: [
      { condition: 'min-width: 980px', width: '30vw' },
      { condition: 'min-width: 700px', width: '40vw' },
      { condition: 'min-width: 450px', width: '45vw' },
      { width: '100vw' },
    ],
  },
  one_third_content_width_square: {
    ratio: RATIO_1x1,
    format: FORMAT_JPG,
    fallbackWidth: 380,
    widths: [80, 160, 240, 380, 480, 760],
    sizes: [
      { condition: 'min-width: 1280px', width: '20vw' },
      { condition: 'min-width: 980px', width: '25vw' },
      { condition: 'min-width: 700px', width: '35vw' },
      { condition: 'min-width: 450px', width: '40vw' },
      { width: '80px' },
    ],
  },
  retailer_logo: {
    ratio: RATIO_1xy,
    format: FORMAT_JPG,
    fallbackWidth: 240,
    widths: [240, 380, 480, 760],
    sizes: [
      { condition: 'min-width: 980px', width: '20vw' },
      { condition: 'min-width: 700px', width: '35vw' },
      { width: '1px' },
    ],
  },
};
