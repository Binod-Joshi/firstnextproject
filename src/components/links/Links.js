import Link from "next/link";

const Links = () => {

    const links = [
        {
            title : "Home",
            path : "/",
        },
        {
            title : "About",
            path : "/about"
        },
        {
            title : "Admin",
            path : "/admin"
        },
        {
            title : "Blog",
            path : "/blog"
        },
        {
            title : "Contact",
            path : "/contact"
        }
    ]

  return (
    <div>
    {links.map(link => {
      return (
        <Link href={link.path} key={link.path} style={{ display:"flex",flexDirection:"column",textDecoration:"none" }}>{link.title}</Link>
      );
    })}
  </div>
  
  )
}

export default Links
