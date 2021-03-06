
import './App.css';
import HowWeOperate from './body/HowWeOperate';
import RecentlyBuilt from './body/RecentlyBuilt';
import Header from './header/header';
import Hero from './Hero/Hero';
import Search from './Search/search';
import Brand from './body/brand';
import ForYou from './body/ForYou';
import About from './body/About';

function App() {
  return (
    <div className="bg-[#f1f2f3]">
      <Header />
      <Hero />
      <Search />
      <RecentlyBuilt />
      <HowWeOperate />
      <Brand />
      <ForYou />
      <About />
    </div>
  );
}

export default App;
