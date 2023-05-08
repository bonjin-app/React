import Link from "next/link";

export default function Home() {
  let name = 'gigas';

  return (
   <div>
    <div className="navbar">
      <Link href={'/'}>홈</Link>
      <Link href={'/list'}>List</Link>
    </div>
    <h4 className="title">애플후레시</h4>
    <p className="title-sub">{name} by dev bonjin</p>
   </div>
  )
}
