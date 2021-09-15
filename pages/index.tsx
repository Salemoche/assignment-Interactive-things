import LayoutComponent from '../components/layout/layout.component';
import SearchComponent from '../components/search/search.component';


const Home = () => {

  return (
    <LayoutComponent>
      <main className='iat-home'>
        <SearchComponent/>
      </main>
    </LayoutComponent>
  )
}

export default Home
