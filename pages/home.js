import Footer from '../components/footer'
import style from './css/home.module.css';

const Home = () => {
  return (
    <div>
      <div className={style.wrap}>
        <nav>
          <h1>ShopEasy</h1>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li></li>
          </ul>
        </nav>
        <section className={style.headSect}>
          <div>
            <h1>SS90</h1>
            <h1>Collection</h1>
            <p>Redefining Excellence</p>
          </div>
          <img src='/shoe-head.png' alt="stock-shoe" />
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Home