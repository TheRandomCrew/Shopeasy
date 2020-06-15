import { useEffect } from 'react'
import Footer from '../components/footer'
import style from './css/home.module.css';

const Home = () => {
  const showShadow = () => {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        document.querySelector('.wrap nav').style.boxShadow = "0 15px 55px 15px rgba(0, 0, 0, 0.1)";
      } else {
        document.querySelector('.wrap nav').style.boxShadow = "none";
      }
    }
  }

  useEffect(() => {
    showShadow();
  }, [])

  return (
    <>
      <div className={`${style.wrap} wrap`}>
        <nav>
          <div className={style.bag}>
            <img src='/icon-bag.png' alt="" />
            <h2>Bag(0000)</h2>
          </div>
          <div className={style.headWrap}>
            <h1>ShopEasy</h1>
            <img src='/icon-dot.png' alt="" />
          </div>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
          <p>Login/Register</p>
        </nav>
        <section className={style.headSect}>
          <div>
            <h1>SS90</h1>
            <h1>Collection</h1>
            <p>Redefining Excellence</p>
          </div>
          <img src='/shoe-head.png' alt="stock-shoe" />
        </section>
        <section className={style.unPlug}>
          <h2>Unplug and connect to the outdoors with ShopEasy</h2>
          <button type="button">
            <span>SHOP NOW</span>
          </button>
        </section>
      </div>
      <section className={style.vidWrap}>
        <video src="/shoe-vid.mp4" autoPlay={true} loop={true}></video>
        <p>Come shop at the world's largest delears in running shoes.</p>
        <div className={style.vidText}>
          <h4>Good things come from those who run.</h4>
          <button type="button">
            <span>Experience Now!</span>
          </button>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home