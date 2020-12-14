import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router}) {
  return (
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        x: -600,
        opacity: 0
      },
      pageAnimate: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 }
      },
    }}>
      <Component {...pageProps} />
    </motion.div>
  )
  // <Component {...pageProps} />
}

export default MyApp
