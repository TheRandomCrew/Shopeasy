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
          height: 100vh;
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
          background: #5924B0;
          padding: 10px;
          font-size: 25px;
          margin-bottom: 50px;
          color: #fff;
          text-transform: uppercase;
          text-decoration: none;
          border: 3px solid gray;
        }
      `}
      </style>
    </div>
  )
}

export default IndexPage
