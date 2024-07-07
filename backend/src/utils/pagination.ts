/* Pagination Util
 * ------------------------- */
export const getPagination = (page: number, size: number) => {
  const limit = size ? +size : 3;
  const currentPage = page ? +page : 1;

  return { limit, page: currentPage };
};

export const getPagingData = (data: any, page: number, limit: number) => {
  const { totalItems, products } = data;
  const currentPage = page ? +page : 1;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, products, totalPages, currentPage };
};


// interface PaginationParams {
//   page: number;
//   limit: number;
// }

// export const getPagination = (page: number, limit: number): PaginationParams => {
//   const offset = page > 0 ? (page - 1) * limit : 0;
//   return { page, limit };
// };

// export const getPagingData = (data: any, page: number, limit: number) => {
//   const { count: totalItems, rows: items } = data;
//   const currentPage = page ? +page : 0;
//   const totalPages = Math.ceil(totalItems / limit);

//   return { totalItems, items, totalPages, currentPage };
// };
