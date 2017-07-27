const path = require('path');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const imagemagick = require('imagemagick');

const OUTPUT_DIRECTORY_NAME = 'out';

const PROJECT_DIR = __dirname;
const IMAGES_INPUT_DIR = path.join(PROJECT_DIR, 'images/input');
const IMAGES_OUTPUT_DIR = path.join(PROJECT_DIR, 'images/output');

const RATIO_1x1 = '1x1';
const RATIO_2x3 = '2x3';
const RATIO_19x9 = '16x9';

const FORMAT_PNG = 'png';
const FORMAT_JPG = 'jpg';

const OPTIONS = {
  [FORMAT_PNG]: {
    quality: 0.9,
    format: 'png',
  },
  [FORMAT_JPG]: {
    quality: 0.85,
    format: 'jpg',
  },
};

const WIDTHS = {
  [RATIO_1x1]: [80, 160, 240, 380, 480, 760, 960],
  [RATIO_2x3]: [300, 380, 450, 490, 640, 760, 900],
  [RATIO_19x9]: [
    210,
    320,
    375,
    470,
    640,
    768,
    940,
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
};

const IMAGES = [
  {
    name: 'dummy',
    source: path.resolve(IMAGES_INPUT_DIR, '1x1/dummy_1x1.png'),
    ratio: RATIO_1x1,
    format: FORMAT_JPG,
  },
  {
    name: 'recipe',
    source: path.resolve(IMAGES_INPUT_DIR, '1x1/recipe_1x1.png'),
    ratio: RATIO_1x1,
    format: FORMAT_JPG,
  },
  {
    name: 'dummy',
    source: path.resolve(IMAGES_INPUT_DIR, '2x3/dummy_2x3.png'),
    ratio: RATIO_2x3,
    format: FORMAT_JPG,
  },
  {
    name: 'recipe',
    source: path.resolve(IMAGES_INPUT_DIR, '2x3/recipe_2x3.png'),
    ratio: RATIO_2x3,
    format: FORMAT_JPG,
  },
  {
    name: 'lunch-table-left',
    source: path.resolve(IMAGES_INPUT_DIR, '2x3/lunch-table-left_2x3.png'),
    ratio: RATIO_2x3,
    format: FORMAT_PNG,
  },
  {
    name: 'lunch-table-right',
    source: path.resolve(IMAGES_INPUT_DIR, '2x3/lunch-table-right_2x3.png'),
    ratio: RATIO_2x3,
    format: FORMAT_PNG,
  },
  {
    name: 'assortment-left',
    source: path.resolve(IMAGES_INPUT_DIR, '2x3/assortment-left_2x3.png'),
    ratio: RATIO_2x3,
    format: FORMAT_PNG,
  },
  {
    name: 'assortment-right',
    source: path.resolve(IMAGES_INPUT_DIR, '2x3/assortment-right_2x3.png'),
    ratio: RATIO_2x3,
    format: FORMAT_PNG,
  },
  {
    name: 'image-copy-button-teaser-left',
    source: path.resolve(
      IMAGES_INPUT_DIR,
      '2x3/image-copy-button-teaser-left_2x3.png'
    ),
    ratio: RATIO_2x3,
    format: FORMAT_PNG,
  },
  {
    name: 'image-copy-button-teaser-right',
    source: path.resolve(
      IMAGES_INPUT_DIR,
      '2x3/image-copy-button-teaser-right_2x3.png'
    ),
    ratio: RATIO_2x3,
    format: FORMAT_PNG,
  },
  {
    name: 'dummy',
    source: path.resolve(IMAGES_INPUT_DIR, '16x9/dummy_16x9.png'),
    ratio: RATIO_19x9,
    format: FORMAT_JPG,
  },
  {
    name: 'recipe',
    source: path.resolve(IMAGES_INPUT_DIR, '16x9/recipe_16x9.png'),
    ratio: RATIO_19x9,
    format: FORMAT_JPG,
  },
];

function getWidthsByRatio(ratio) {
  const out = [];
  WIDTHS[ratio].sort((a, b) => b - a).forEach(width => {
    if (out.indexOf(width) < 0) {
      out.push(width);
    }
  });
  return out;
}

Promise.all(
  IMAGES.map(image => {
    const widths = getWidthsByRatio(image.ratio);
    return Promise.all(
      widths.map(
        width =>
          new Promise((resolve, reject) => {
            const outputDir = path.join(
              IMAGES_OUTPUT_DIR,
              `${image.ratio}/${image.name}`
            );
            const outputFile = path.resolve(
              outputDir,
              `${image.name}_${image.ratio}_${width}.${image.format}`
            );

            rimraf(outputDir, error => {
              if (error) {
                reject(error);
              } else {
                mkdirp(outputDir, error => {
                  if (error) {
                    reject(error);
                  } else {
                    const options = Object.assign({}, OPTIONS[image.format], {
                      srcPath: image.source,
                      dstPath: outputFile,
                      width: width,
                    });

                    imagemagick.resize(options, error => {
                      if (error) {
                        reject(error);
                      } else {
                        console.log(`File "${outputFile}" created.`);
                        resolve();
                      }
                    });
                  }
                });
              }
            });
          })
      )
    );
  })
)
  .then(() => console.log('done'))
  .catch(error => console.log(error));
