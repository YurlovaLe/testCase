export function parsePaginationLinks(link) {
  const patterns = {
    next: /(?<=<)([\S]*)(?=>; rel="next")/i,
    prev: /(?<=<)([\S]*)(?=>; rel="prev")/i,
    first: /(?<=<)([\S]*)(?=>; rel="first")/i,
    last: /(?<=<)([\S]*)(?=>; rel="last")/i
  }
  return {
    next: link.match(patterns.next),
    prev: link.match(patterns.prev),
    first: link.match(patterns.first),
    last: link.match(patterns.last)
  }
};
