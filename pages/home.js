import Footer from '../components/footer'
import style from './css/home.module.css';

const Home = () => {
  return (
    <div>
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
          <h1>Eqt support shoes</h1>
        </div>
        <img src='/shoe-head.png' alt="stock-shoe" />
      </section>
      <Footer />
    </div>
  )
}

export default Home