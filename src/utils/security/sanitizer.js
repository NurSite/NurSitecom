export const sanitize = (dirty) => {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong'],
    FORBID_ATTR: ['style', 'onerror']
  })
}
