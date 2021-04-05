import { AppProps } from "next/app"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import Layout from "../components/Layout/Layout"
import createStore from "../lib/store"

const { store, persistor } = createStore()

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}

export default App
