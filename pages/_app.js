import "../src/styles/style.scss";
import "../src/styles/main.scss";

import Router from 'next/router';
import NProgress from 'nprogress';
import { motion, AnimatePresence } from 'framer-motion';

NProgress.configure({ showSpinner: true });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
        pageExit: {
          backgroundColor: 'white',
          filter: `invert()`,
          opacity: 0
        }
      }}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp

