'use strict';

const path = require('path');
const filePaths = require('./file-paths');
const imageTypes = require('./image-types');

module.exports = [
  {
    name: 'dummy',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '1x1/dummy_1x1.png'),
    imageTypes: [
      imageTypes.half_content_width_square,
      imageTypes.one_third_content_width_square,
    ],
  },
  {
    name: 'recipe',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '1x1/recipe_1x1.png'),
    imageTypes: [
      imageTypes.half_content_width_square,
      imageTypes.one_third_content_width_square,
    ],
  },
  /*
  {
    name: 'dummy',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '2x3/dummy_2x3.png'),
    imageTypes: [],
  },
  {
    name: 'recipe',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '2x3/recipe_2x3.png'),
    imageTypes: [],
  },
  */
  {
    name: 'lunch-table-left',
    source: path.resolve(
      filePaths.IMAGES_INPUT_DIR,
      '2x3/lunch-table-left_2x3.png'
    ),
    imageTypes: [imageTypes.decoration],
  },
  {
    name: 'lunch-table-right',
    source: path.resolve(
      filePaths.IMAGES_INPUT_DIR,
      '2x3/lunch-table-right_2x3.png'
    ),
    imageTypes: [imageTypes.decoration],
  },
  {
    name: 'assortment-left',
    source: path.resolve(
      filePaths.IMAGES_INPUT_DIR,
      '2x3/assortment-left_2x3.png'
    ),
    imageTypes: [imageTypes.decoration],
  },
  {
    name: 'assortment-right',
    source: path.resolve(
      filePaths.IMAGES_INPUT_DIR,
      '2x3/assortment-right_2x3.png'
    ),
    imageTypes: [imageTypes.decoration],
  },
  {
    name: 'image-copy-button-teaser-left',
    source: path.resolve(
      filePaths.IMAGES_INPUT_DIR,
      '2x3/image-copy-button-teaser-left_2x3.png'
    ),
    imageTypes: [imageTypes.decoration],
  },
  {
    name: 'image-copy-button-teaser-right',
    source: path.resolve(
      filePaths.IMAGES_INPUT_DIR,
      '2x3/image-copy-button-teaser-right_2x3.png'
    ),
    imageTypes: [imageTypes.decoration],
  },
  {
    name: 'dummy',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '16x9/dummy_16x9.png'),
    imageTypes: [
      imageTypes.full_viewport_width,
      imageTypes.full_content_width,
      imageTypes.half_content_width_landscape,
    ],
  },
  {
    name: 'recipe',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '16x9/recipe_16x9.png'),
    imageTypes: [
      imageTypes.full_viewport_width,
      imageTypes.full_content_width,
      imageTypes.half_content_width_landscape,
    ],
  },
];
