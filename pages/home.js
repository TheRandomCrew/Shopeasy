import Footer from '../components/footer'
import style from './css/home.module.css';

const Home = () => {
  return (
    <div>
      <div className={style.wrap}>
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