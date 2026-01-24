
import sharp from 'sharp';

console.log('Starting conversion...');
sharp('public/hero-sniper.png')
    .webp({ quality: 90 })
    .toFile('public/hero-sniper.webp')
    .then(() => console.log('Conversion successful'))
    .catch(err => {
        console.error('Error converting:', err);
        process.exit(1);
    });
