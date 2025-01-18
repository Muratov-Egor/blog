export const IGNORED_CHARS = [
  // Markdown символы
  '#', '*', '_', '`', '[', ']', '(', ')', '{', '}', '<', '>', '![',
  // HTML теги
  '<br>', '<p>', '</p>', '<div>', '</div>', '<span>', '</span>',
  // Специальные символы
  '|', '\\', '/', '-', '+', '=', 
  // Кавычки разных типов
  '"', '"', '"', '«', '»', '"', '"',
  // Другие символы форматирования
  '•', '·', '…', '—', '–',
  // Пунктуация
  '.', ',', ':', ';', '!', '?',
  // URL и специальные паттерны
  'http://', 'https://', '@', 'www.'
];

export function cleanText(text: string): string {
  let cleanedText = text;

  // Удаляем URL-адреса Cloudinary и другие URL
  cleanedText = cleanedText.replace(/res\.cloudinary\.com[^\s]*/g, '');
  cleanedText = cleanedText.replace(/https?:\/\/[^\s]*/g, '');
  
  // Удаляем все варианты YouTube компонентов
  cleanedText = cleanedText.replace(/<Youtube[^>]*>/g, '');
  cleanedText = cleanedText.replace(/<YouTube[^>]*\/>/g, '');
  cleanedText = cleanedText.replace(/<YouTube[^>]*>[^<]*<\/YouTube>/g, '');
  
  // Заменяем все игнорируемые символы на пробелы
  IGNORED_CHARS.forEach(char => {
    cleanedText = cleanedText.split(char).join(' ');
  });

  // Удаляем множественные пробелы
  cleanedText = cleanedText.replace(/\s+/g, ' ');
  
  // Приводим к нижнему регистру
  cleanedText = cleanedText.toLowerCase();
  
  // Убираем пробелы в начале и конце
  cleanedText = cleanedText.trim();

  return cleanedText;
} 