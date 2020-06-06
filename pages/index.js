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
    <>
      <h1>Shopeasy Coming Soon!</h1>
      <Clock />
      <Counter />
      <p>Take Notes on what items you want to shop when we open!</p>
      <Link href="/notes">
        <a>
          Here!
        </a>
      </Link>
    </>
  )
}

export default IndexPage
