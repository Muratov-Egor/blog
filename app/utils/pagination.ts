export const ITEMS_PER_FIRST_PAGE = 5;
export const ITEMS_PER_PAGE = 6;

export function calculatePagination(totalItems: number, currentPage: number, itemsPerPage?: number, itemsPerFirstPage?: number) {

    const iPerPage = itemsPerPage || ITEMS_PER_PAGE;
    const iPerFirstPage = itemsPerFirstPage || ITEMS_PER_FIRST_PAGE;

  const totalPages = Math.ceil(
    (totalItems - iPerFirstPage) / iPerPage + 1
  );

  const startIndex = currentPage === 1 
    ? 0 
    : iPerFirstPage + (currentPage - 2) * iPerPage;
    
  const endIndex = currentPage === 1 
    ? iPerFirstPage 
    : startIndex + iPerPage;

  return {
    totalPages,
    startIndex,
    endIndex
  };
} 