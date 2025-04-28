export const sanitize = (dirty) => {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong'],
    FORBID_ATTR: ['style', 'onerror']
  })
}
import DOMPurify from 'dompurify'

export const sanitize = (html) => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'span'],
    FORBID_ATTR: ['style', 'onclick']
  })
}
