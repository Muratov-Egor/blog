interface modifyCloudinaryProps {
    url: string;
    width?: number;
    height?: number;
  }

export function modifyCloudinaryUrl({url, width = 1024, height = 768}: modifyCloudinaryProps) {
    // Проверяем, является ли URL Backblaze
    if (url.includes('backblazeb2.com')) {
        // Backblaze не поддерживает изменение размера через URL, возвращаем оригинальный URL
        return url;
    }
    
    // Обработка Cloudinary URL
    const parts = url.split('/image/upload/');
    if (parts.length !== 2) {
        throw new Error('Invalid Cloudinary URL');
    }
    return `${parts[0]}/image/upload/w_${width},h_${height},c_fit/${parts[1]}`;
  }