import Head from 'next/head'

import styles from '../styles/404.module.css'

export default function Custom404() {
    return (
        
        <>
            <Head>
                <title>JmRona - Oops! :(</title>
            </Head>
            <div className={styles.container}>
            </div>
            <div className={styles.bg1}>
            </div>
            <div className={styles.content}>
                <p className={styles.p}>
                    Oops! We could not find it
                </p>
                <h1 className={styles.h1}>404</h1>
            </div>
        </>
    )
}