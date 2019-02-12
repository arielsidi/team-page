// @flow

export const MAX_PAGE_BUTTONS = 7;

/*
 Extracts a page from an array
*/
export const getPage = (
    elements: Array<any>,
    ItemsPerPage: number,
    currentPage: number
): Array<any> => {
    --currentPage;
    return elements.slice(
        currentPage * ItemsPerPage,
        (currentPage + 1) * ItemsPerPage
    );
};

/**
 Create an array of page numbers
 */
export const createPages = (
    pageCount: number,
    currentPage: number
): Array<number> => {
    let pages = [currentPage];
    let nextPage = currentPage + 1;
    let prevPage = currentPage - 1;
    const pagesCount = Math.min(pageCount, MAX_PAGE_BUTTONS);
    while (pages.length < Math.min(pageCount, pagesCount)) {
        if (nextPage <= pageCount && pages.length < pagesCount) {
            pages.push(nextPage++);
        }
        if (prevPage >= 1 && pages.length < pagesCount) {
            pages.unshift(prevPage--);
        }
    }
    return pages;
};
