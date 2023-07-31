import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";

const NotFoundPage = () => {

  const router = useRouter();

  useEffect (() =>{
      setTimeout(() => {
        router.push('/');
        }, 3000);
    },[]);

  return(
    <div className='not_found'>
      <h1>Ups...</h1>
      <h2>Что-то прошло не так</h2>
      <p> Перехожу на <Link href='/'>главную</Link> страницу через 3 секунды....</p>
    </div>
  )
}

export default NotFoundPage;
