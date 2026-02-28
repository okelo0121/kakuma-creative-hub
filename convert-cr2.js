import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import dcraw from 'dcraw';

const dirs = [
    'src/assets/Education & Remedial Learning-20260228T182214Z-1-001/Education & Remedial Learning',
    'src/assets/Environmental Initiatives-20260228T182222Z-1-001/Environmental Initiatives',
    'src/assets/Storytelling & Media-20260228T182229Z-1-001/Storytelling & Media'
];

async function convertCr2() {
    for (const dir of dirs) {
        const fullDir = path.resolve(dir);
        if (!fs.existsSync(fullDir)) continue;

        const files = fs.readdirSync(fullDir);
        for (const file of files) {
            if (file.toLowerCase().endsWith('.cr2')) {
                const cr2Path = path.join(fullDir, file);
                const jpgPath = path.join(fullDir, file.replace(/\.cr2$/i, '.jpg'));

                console.log(`Processing ${file}...`);
                try {
                    // Read CR2 buffer
                    const buf = fs.readFileSync(cr2Path);
                    // Convert using dcraw to tiff buffer
                    const tiffBuf = dcraw(buf, { extractThumbnail: true });
                    // Use sharp to convert to compressed JPG
                    await sharp(tiffBuf)
                        .jpeg({ quality: 85 })
                        .toFile(jpgPath);
                    console.log(`Converted ${file} to JPG.`);
                } catch (err) {
                    console.error(`Failed to convert ${file}:`, err);
                }
            }
        }
    }
}

convertCr2().then(() => console.log('Done.')).catch(console.error);
