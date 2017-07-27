'use strict';

const imageRatios = require('./image-ratios');
const imageFormats = require('./image-formats');

module.exports = {
  decoration: {
    ratio: imageRatios.RATIO_2x3,
    format: imageFormats.FORMAT_PNG,
    widths: [380, 450, 760, 900],
  },
  image_stage_portrait: {
    ratio: imageRatios.RATIO_2x3,
    format: imageFormats.FORMAT_JPG,
    widths: [300, 380, 490, 640, 760, 980, 1280, 1520],
  },
  full_viewport_width: {
    ratio: imageRatios.RATIO_16x9,
    format: imageFormats.FORMAT_JPG,
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
  },
  full_content_width: {
    ratio: imageRatios.RATIO_16x9,
    format: imageFormats.FORMAT_JPG,
    widths: [375, 470, 640, 768, 960, 1280, 1600, 1920],
  },
  half_content_width_landscape: {
    ratio: imageRatios.RATIO_16x9,
    format: imageFormats.FORMAT_JPG,
    widths: [210, 375, 470, 640, 960],
  },
  half_content_width_square: {
    ratio: imageRatios.RATIO_1x1,
    format: imageFormats.FORMAT_JPG,
    widths: [240, 380, 480, 760, 960],
  },
  one_third_content_width_square: {
    ratio: imageRatios.RATIO_1x1,
    format: imageFormats.FORMAT_JPG,
    widths: [80, 160, 240, 380, 480, 760],
  },
  half_content_width_portrait: {
    ratio: imageRatios.RATIO_2x3,
    format: imageFormats.FORMAT_JPG,
    widths: [240, 380, 490, 640, 980],
  },
  retailer_logo: {
    ratio: imageRatios.RATIO_1xy,
    format: imageFormats.FORMAT_JPG,
    widths: [240, 380, 480, 760],
  },
};
