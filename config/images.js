'use strict';

const path = require('path');
const filePaths = require('./file-paths');
const imageTypes = require('./image-types');

module.exports = [
  /*
   * 1:1
   */
  {
    name: 'dummy',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '1x1/dummy_1x1.png'),
    imageTypes: [
      imageTypes.half_content_width_square,
      imageTypes.one_third_content_width_square,
      imageTypes.image_gallery_square,
    ],
  },
  {
    name: 'recipe',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '1x1/recipe_1x1.png'),
    imageTypes: [
      imageTypes.half_content_width_square,
      imageTypes.one_third_content_width_square,
      imageTypes.image_gallery_square,
    ],
  },
  {
    name: 'product_a',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '1x1/product_a_1x1.png'),
    imageTypes: [imageTypes.teaser_square],
  },
  {
    name: 'product_b',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '1x1/product_b_1x1.png'),
    imageTypes: [imageTypes.teaser_square],
  },
  {
    name: 'product_c',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '1x1/product_c_1x1.png'),
    imageTypes: [imageTypes.teaser_square],
  },
  {
    name: 'jackpot_a',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '1x1/jackpot_a_1x1.png'),
    imageTypes: [imageTypes.teaser_jackpot],
  },
  {
    name: 'jackpot_b',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '1x1/jackpot_b_1x1.png'),
    imageTypes: [imageTypes.teaser_jackpot],
  },
  {
    name: 'jackpot_c',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '1x1/jackpot_c_1x1.png'),
    imageTypes: [imageTypes.teaser_jackpot],
  },
  {
    name: 'jackpot_d',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '1x1/jackpot_d_1x1.png'),
    imageTypes: [imageTypes.teaser_jackpot],
  },
  {
    name: 'jackpot_e',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '1x1/jackpot_e_1x1.png'),
    imageTypes: [imageTypes.teaser_jackpot],
  },
  {
    name: 'jackpot_f',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '1x1/jackpot_f_1x1.png'),
    imageTypes: [imageTypes.teaser_jackpot],
  },
  {
    name: 'retailer_a',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '1x1/retailer_a_1x1.png'),
    imageTypes: [
      imageTypes.half_content_width_square,
      imageTypes.one_third_content_width_square,
      imageTypes.image_gallery_square,
    ],
  },
  {
    name: 'retailer_b',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '1x1/retailer_b_1x1.png'),
    imageTypes: [
      imageTypes.half_content_width_square,
      imageTypes.one_third_content_width_square,
      imageTypes.image_gallery_square,
    ],
  },
  {
    name: 'retailer_c',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '1x1/retailer_c_1x1.png'),
    imageTypes: [
      imageTypes.half_content_width_square,
      imageTypes.one_third_content_width_square,
      imageTypes.image_gallery_square,
    ],
  },
  {
    name: 'retailer_d',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '1x1/retailer_d_1x1.png'),
    imageTypes: [
      imageTypes.half_content_width_square,
      imageTypes.one_third_content_width_square,
      imageTypes.image_gallery_square,
    ],
  },
  /*
   * 1xy
   */
  {
    name: 'retailer-logo',
    source: path.resolve(
      filePaths.IMAGES_INPUT_DIR,
      '1xy/retailer-logo_1xy.jpg'
    ),
    imageTypes: [imageTypes.retailer_logo],
  },
  /*
   * Decoration (2:3)
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
  /*
   * 2:3
   */
  {
    name: 'dummy',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '2x3/dummy_2x3.png'),
    imageTypes: [
      imageTypes.image_stage_portrait,
      imageTypes.half_content_width_portrait,
      imageTypes.image_gallery_portrait,
    ],
  },
  {
    name: 'recipe',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '2x3/recipe_2x3.png'),
    imageTypes: [
      imageTypes.image_stage_portrait,
      imageTypes.half_content_width_portrait,
      imageTypes.image_gallery_portrait,
    ],
  },
  {
    name: 'retailer_a',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '2x3/retailer_a_2x3.png'),
    imageTypes: [
      imageTypes.image_stage_portrait,
      imageTypes.half_content_width_portrait,
      imageTypes.image_gallery_portrait,
    ],
  },
  {
    name: 'retailer_b',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '2x3/retailer_b_2x3.png'),
    imageTypes: [
      imageTypes.image_stage_portrait,
      imageTypes.half_content_width_portrait,
      imageTypes.image_gallery_portrait,
    ],
  },
  {
    name: 'retailer_c',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '2x3/retailer_c_2x3.png'),
    imageTypes: [
      imageTypes.image_stage_portrait,
      imageTypes.half_content_width_portrait,
      imageTypes.image_gallery_portrait,
    ],
  },
  {
    name: 'retailer_d',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '2x3/retailer_d_2x3.png'),
    imageTypes: [
      imageTypes.image_stage_portrait,
      imageTypes.half_content_width_portrait,
      imageTypes.image_gallery_portrait,
    ],
  },
  /*
   * 16:9
   */
  {
    name: 'dummy',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '16x9/dummy_16x9.png'),
    imageTypes: [
      imageTypes.full_viewport_width,
      imageTypes.full_content_width,
      imageTypes.half_content_width_landscape,
      imageTypes.image_gallery_landscape,
      imageTypes.teaser_landscape,
    ],
  },
  {
    name: 'recipe',
    source: path.resolve(filePaths.IMAGES_INPUT_DIR, '16x9/recipe_16x9.png'),
    imageTypes: [
      imageTypes.full_viewport_width,
      imageTypes.full_content_width,
      imageTypes.half_content_width_landscape,
      imageTypes.image_gallery_landscape,
      imageTypes.teaser_landscape,
    ],
  },
  {
    name: 'retailer_a',
    source: path.resolve(
      filePaths.IMAGES_INPUT_DIR,
      '16x9/retailer_a_16x9.png'
    ),
    imageTypes: [
      imageTypes.full_viewport_width,
      imageTypes.full_content_width,
      imageTypes.half_content_width_landscape,
      imageTypes.image_gallery_landscape,
    ],
  },
  {
    name: 'retailer_b',
    source: path.resolve(
      filePaths.IMAGES_INPUT_DIR,
      '16x9/retailer_b_16x9.png'
    ),
    imageTypes: [
      imageTypes.full_viewport_width,
      imageTypes.full_content_width,
      imageTypes.half_content_width_landscape,
      imageTypes.image_gallery_landscape,
    ],
  },
  {
    name: 'retailer_c',
    source: path.resolve(
      filePaths.IMAGES_INPUT_DIR,
      '16x9/retailer_c_16x9.png'
    ),
    imageTypes: [
      imageTypes.full_viewport_width,
      imageTypes.full_content_width,
      imageTypes.half_content_width_landscape,
      imageTypes.image_gallery_landscape,
    ],
  },
  {
    name: 'retailer_d',
    source: path.resolve(
      filePaths.IMAGES_INPUT_DIR,
      '16x9/retailer_d_16x9.png'
    ),
    imageTypes: [
      imageTypes.full_viewport_width,
      imageTypes.full_content_width,
      imageTypes.half_content_width_landscape,
      imageTypes.image_gallery_landscape,
    ],
  },
];
