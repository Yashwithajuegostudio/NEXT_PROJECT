import Link from 'next/link';

const StyleNavBar = {
  margin: 10,
  backgroundColor: "lightcoral",
  border: "2px, dotted, #DDD"
}

const StyleLink = {
  marginRight: 10
}

const NavBar = () => {
  return (
    <div style={StyleNavBar}>
      <Link href="/">
        <a style={StyleLink}>Home</a>
      </Link>
      <Link href="/about">
        <a style={StyleLink}>About</a>
      </Link>
    </div>
  );
}

export default NavBar;