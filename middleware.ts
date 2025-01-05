export { middleware } from 'nextra/locales'

// By default for i18n, links are redirected from zzmethod.com/some/path to zzmethod.com/en/some/path.
// This behaviour is sometimes unwanted. If you experience 404s due to this, update the below regex to ignore certain files/paths.
export const config = {
  // Matcher ignoring `/api`, `/_next` and `/assets`
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|icon.svg|apple-icon.png|manifest|robots.txt).*)'
  ]
}