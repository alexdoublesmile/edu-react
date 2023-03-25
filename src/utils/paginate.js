export function paginateManually(items, page, size) {
    const startIndex = (page - 1) * size;
    return [...items].slice(startIndex, size);
}