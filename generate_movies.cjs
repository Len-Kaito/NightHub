const fs = require('fs');
const path = require('path');

const danhMucPath = path.join(__dirname, 'public', 'DanhMuc');
const movies = [];
let idCounter = 1;

function generateData(dir, categoryStr) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            if (file === 'Poster') continue; // Skip hero posters
            generateData(fullPath, categoryStr || file);
        } else if (stat.isFile() && /\.(jpg|jpeg|png|webp)$/i.test(file)) {
            // Path: public/DanhMuc/Category/Tag/filename.jpg
            const relativePath = path.relative(danhMucPath, fullPath);
            const parts = relativePath.split(path.sep);
            
            if (parts.length >= 3) {
                const categoryFolder = parts[0]; // e.g., Phim điện ảnh, Hoạt hình
                const tag = parts[1]; // e.g., Hot Hit
                const filename = parts[parts.length - 1];
                const title = filename.replace(/\.(jpg|jpeg|png|webp)$/i, '').replace(/_/g, ' ');
                
                let categoryId = 'other';
                if (categoryFolder === 'Phim điện ảnh') categoryId = 'dien-anh';
                else if (categoryFolder === 'Phim truyền hình') categoryId = 'truyen-hinh';
                else if (categoryFolder === 'Hoạt hình') categoryId = 'hoat-hinh';
                else if (categoryFolder === 'Phim tài liệu') categoryId = 'tai-lieu';
                else if (categoryFolder === 'Trang chủ') categoryId = 'trang-chu';

                // Randomize some badges/meta for realism
                const ages = ['T13', 'T16', 'T18', 'P'];
                const qualities = ['4K', 'Full HD'];
                
                movies.push({
                    id: `m_${idCounter++}`,
                    title: title,
                    posterVertical: `/DanhMuc/${categoryFolder}/${tag}/${filename}`,
                    posterHorizontal: `/DanhMuc/${categoryFolder}/${tag}/${filename}`,
                    backdropUrl: `/DanhMuc/Trang chủ/Poster/AliceInBorderland.jpg`, // fallback
                    year: '20' + Math.floor(Math.random() * 24).toString().padStart(2, '0'),
                    age: ages[Math.floor(Math.random() * ages.length)],
                    quality: qualities[Math.floor(Math.random() * qualities.length)],
                    duration: '2h ' + Math.floor(Math.random() * 60) + 'm',
                    rating: (4 + Math.random()).toFixed(1) + '/5.0',
                    genres: [categoryFolder, tag],
                    badges: [{ label: qualities[Math.floor(Math.random() * qualities.length)], type: 'quality' }],
                    description: `Đây là bộ phim ${title} thuộc thể loại ${tag}. Khám phá những tình tiết hấp dẫn và lôi cuốn.`,
                    category: categoryId,
                    tags: [tag]
                });
            }
        }
    }
}

generateData(danhMucPath, null);
fs.writeFileSync(path.join(__dirname, 'src', 'data', 'generatedMovies.json'), JSON.stringify(movies, null, 2), 'utf-8');
console.log(`Generated ${movies.length} movies!`);
