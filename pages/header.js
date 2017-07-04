import Link from 'next/link'

const Header = () => (
  <div>
    <Link href="/">
      <a style={{fontSize: 20}}>Home page</a>
    </Link>
    <Link href="/about">
      <a style={{fontSize: 20}}>About page</a>
    </Link>
  </div>
)

export default Header