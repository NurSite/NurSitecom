import { sanitize } from '@/utils/security/sanitizer'

// В methods:
handleInput() {
  this.safeQuery = sanitize(this.rawQuery)
}
