import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Because movieData.js is an ES module, we need to import it
import movies from '../src/data/movieData.js';

const exportData = movies.map(m => {
  const isSeries = String(m.duration || '').toLowerCase().includes('tập') || m.category === 'phim-truyen-hinh';
  
  return {
    "Tên phim": m.title,
    "Loại phim": isSeries ? "Phim bộ" : "Phim lẻ",
    "Thời lượng / Số tập": m.duration
  };
});

const outputPath = path.join(process.cwd(), 'movies_list.json');
fs.writeFileSync(outputPath, JSON.stringify(exportData, null, 2), 'utf-8');

console.log(`Đã xuất ${exportData.length} phim ra file ${outputPath}`);
