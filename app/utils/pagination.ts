export const ITEMS_PER_FIRST_PAGE = 5;
export const ITEMS_PER_PAGE = 6;

export function calculatePagination(totalItems: number, currentPage: number) {
  const totalPages = Math.ceil(
    (totalItems - ITEMS_PER_FIRST_PAGE) / ITEMS_PER_PAGE + 1
  );

  const startIndex = currentPage === 1 
    ? 0 
    : ITEMS_PER_FIRST_PAGE + (currentPage - 2) * ITEMS_PER_PAGE;
    
  const endIndex = currentPage === 1 
    ? ITEMS_PER_FIRST_PAGE 
    : startIndex + ITEMS_PER_PAGE;

  return {
    totalPages,
    startIndex,
    endIndex
  };
} 