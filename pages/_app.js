import Link from "next/link";
const MyApp =({ Component, pageProps })=> {
    return (
    <>
    <Link href="/">
    HOME
    </Link>
    <Link href="/about">
    ABOUT
    </Link>
   
     <Component {...pageProps} />
     <footer>Designed by shadowtech</footer>
    </>
   )
  }

  export default MyApp;