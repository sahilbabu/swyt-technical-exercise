/* Sorting Util
 * ------------------------- */

// export const getSorting = (sortBy: string, order: string) => {
//     const sort = sortBy ? sortBy : 'id';
//     const sortOrder = order && (order.toLowerCase() === 'desc' || order.toLowerCase() === 'asc') ? order : 'asc';
//     return { sort, sortOrder };
//   };
  
  export const getSorting = (sortBy: string, order: string) => {
    const sort = sortBy ? sortBy : 'createdAt';
    const sortOrder = order ? order : 'desc';
  
    return { sort, sortOrder };
  };
  