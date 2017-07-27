const path = require('path');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const imagemagick = require('imagemagick');

const filePaths = require('./config/file-paths');
const imageFormats = require('./config/image-formats');
const imageRatios = require('./config/image-ratios');
const images = require('./config/images');

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

const createdFiles = [];

Promise.all(
  images.map(image => {
    const exportItems = image.imageTypes.reduce((acc, imageType) => {
      if (imageType && imageType.widths) {
        return acc.concat(
          imageType.widths.map(width => ({
            width: width,
            ratio: imageType.ratio,
            format: imageType.format,
          }))
        );
      }
      return acc;
    }, []);

    const existingList = [];
    let filteredExportItems = exportItems.filter(item => {
      const key = `${item.ratio}_${item.width}_${item.format}`;
      if (existingList.indexOf(key)) {
        existingList.push(key);
        return true;
      }
      return false;
    });

    return Promise.all(
      filteredExportItems.map(item => {
        const width = item.width;
        const ratio = item.ratio;
        const format = item.format;

        return new Promise((resolve, reject) => {
          const outputDir = path.join(
            filePaths.IMAGES_OUTPUT_DIR,
            `${ratio}/${image.name}`
          );
          const outputFile = path.resolve(
            outputDir,
            `${image.name}_${ratio}_${width}.${format}`
          );

          mkdirp(outputDir, error => {
            if (error) {
              reject(error);
            } else {
              const options = Object.assign(
                {},
                {
                  srcPath: image.source,
                  dstPath: outputFile,
                  width: width,
                  format: format,
                  quality: getQualityByFormat(format),
                }
              );

              imagemagick.resize(options, error => {
                if (error) {
                  reject(error);
                } else {
                  createdFiles.push(outputFile);
                  console.log(`File "${outputFile}" created.`);
                  resolve();
                }
              });
            }
          });
        });
      })
    );
  })
)
  .then(() => console.log(`Done (${createdFiles.length} files)`))
  .catch(error => console.log(error));
