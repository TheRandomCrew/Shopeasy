import { Provider } from 'react-redux'

import store from '../lib/store'
import '../view/css/reset.css'


const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
