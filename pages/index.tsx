import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useEffect, FC } from 'react';
import LayoutComponent from '../components/layout/layout.component';

interface HomeInterface {
  municipalities: any
}

const Home: FC<HomeInterface> = ({municipalities}) => {

  useEffect(() => {
      console.log('hey');
      console.log(municipalities);
  }, [municipalities])

  return (
    <LayoutComponent>
      <div className={styles.container}>
        <h1>Hello World!</h1>
      </div>
    </LayoutComponent>
  )
}

export default Home
