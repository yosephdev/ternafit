
import sharp from 'sharp';
import { glob } from 'glob';
import fs from 'fs';

const imageFiles = glob.sync('public/images/**/*.{jpg,jpeg,png}');

imageFiles.forEach(file => {
  const newFile = file.replace(/\.(jpg|jpeg|png)$/, '.webp');
  if (fs.existsSync(newFile)) {
    console.log(`Skipping ${file}, ${newFile} already exists.`);
    return;
  }

  sharp(file)
    .resize({ width: 1920, withoutEnlargement: true })
    .toFormat('webp')
    .toFile(newFile, (err, info) => {
      if (err) {
        console.error(`Error converting ${file}:`, err);
      } else {
        console.log(`Converted ${file} to ${newFile}`);
        fs.unlinkSync(file); // Delete the original file
      }
    });
});
