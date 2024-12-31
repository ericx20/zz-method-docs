import styles from "./index-page.module.css"
import { Link } from 'nextra-theme-docs'

// Usage in MDX: export { IndexPage as default } from '@components/index-page'
export const IndexPage = () => (
    <div>
        <h1>hello there!</h1>
        <Link href="/roux">Roux Method</Link>
        <Link href="/zz">ZZ Method</Link>
    </div>
)