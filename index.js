const path = require('path');
const colors = require('colors/safe');
const mkdirp = require('mkdirp');
const imagemagick = require('imagemagick');

const filePaths = require('./config/file-paths');
const imageFormats = require('./config/image-formats');
const imageRatios = require('./config/image-ratios');
const images = require('./config/images');

const MAX_OPERATIONS = 4;

/**
 * @param {string} format 
 * @returns {number}
 */
function getQualityByFormat(format) {
  switch (format) {
    case imageFormats.FORMAT_JPG:
      return 0.85;
    case imageFormats.FORMAT_PNG:
      return 0.9;
    default:
      return 1.0;
  }
}

/**
 * @returns {{dir:string, options:{}}[]}
 */
function getItemList() {
  const items = [];
  images.forEach(image => {
    const keys = [];
    image.imageTypes.forEach(imageType => {
      imageType.widths.forEach(width => {
        const itemKey = `${imageType.ratio}_${width}_${imageType.format}`;
        if (keys.indexOf(itemKey) < 0) {
          keys.push(itemKey);

          const dir = path.join(
            filePaths.IMAGES_OUTPUT_DIR,
            `${imageType.ratio}/${image.name}`
          );

          const options = {
            srcPath: image.source,
            dstPath: path.resolve(
              dir,
              `${image.name}_${imageType.ratio}_${width}.${imageType.format}`
            ),
            width: width,
            format: imageType.format,
            quality: getQualityByFormat(imageType.format),
          };

          items.push({ dir: dir, options: options });
        }
      });
    });
  });
  return items;
}

/**
 * @param {{dir:string, options:{}}} item 
 * @returns {Promise}
 */
function convert(item) {
  return new Promise((resolve, reject) => {
    mkdirp(item.dir, error => {
      if (error) {
        reject(error);
      } else {
        imagemagick.resize(item.options, error => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      }
    });
  });
}

let completed = [];
let failed = [];
let queue = getItemList();
let current = [];

function run() {
  if (current.length === 0 && queue.length === 0) {
    end();
  } else {
    const count = Math.min(MAX_OPERATIONS - current.length, queue.length);
    const newItems = queue.splice(0, count);

    newItems.forEach(item => {
      current.push(item);

      convert(item)
        .then(
          () => {
            console.log(colors.green(item.options.dstPath));
            completed.push(item);
          },
          () => {
            console.log(colors.red(item.options.dstPath));
            failed.push(item);
          }
        )
        .then(error => {
          current = current.filter(tempItem => tempItem !== item);
          run();
        });
    });
  }
}

function end() {
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);

  console.log(`Duration: ${duration} s`);

  console.log(colors.green(`Files created: ${completed.length}`));

  if (failed.length) {
    console.log(colors.red(`Failures: ${failed.length}`));
  } else {
    console.log(colors.green(`Failures: ${failed.length}`));
  }
}

const startTime = Date.now();
run();
