import { useDispatch } from 'react-redux'

import Link from 'next/link'
import Clock from '../components/clock'
import Counter from '../components/counter'
import { tick } from '../lib/slices/clockSlice'
import useInterval from '../lib/useInterval'


const IndexPage = () => {
  const dispatch = useDispatch()
  // Tick the time every second
  useInterval(() => {
    dispatch(tick({ light: true, lastUpdate: Date.now() }))
  }, 1000)

  return (
    <div>
      <h1>Shopeasy Coming Soon!</h1>
      <h2>We are currently working hard building this store.</h2>
      <Clock />
      {/* <Counter /> */}
      <p>Take Notes on what items you want to shop when we open!</p>
      <Link href="/notes">
        <a>
          Take Notes!
        </a>
      </Link>
      <style jsx>{`
        div {
          background: #CBEBEE;
          min-height: 100vh;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
        }
        h1 {
          font-size: 40px;
          color: #009798;
        }
        a {
          border-radius: 15px;
          background: linear-gradient(145deg, #d6f9fd, #b4d2d4);
          padding: 10px 20px;
          font-size: 30px;
          margin-bottom: 50px;
          color: gray;
          text-transform: uppercase;
          text-decoration: none;
          box-shadow: 6px 6px 16px 0 #e6ffff, -6px -6px 16px 0 #aac6c9;
          transition: .1s all ease-in-out;
          border: 1px solid #aac6c9;
        }
        
        a:hover {
          box-shadow: inset 6px 6px 5px 0 #e6ffff, inset -6px -6px 5px 0 #aac6c9;
          color: #000;
        }
      `}
      </style>
    </div>
  )
}

export default IndexPage
