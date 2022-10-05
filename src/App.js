
import './App.css';
import HowWeOperate from './body/HowWeOperate';
import RecentlyBuilt from './body/RecentlyBuilt';
import Header from './header/header';
import Hero from './Hero/Hero';
import Search from './Search/search';
import Brand from './body/brand';
import ForYou from './body/ForYou';
import About from './body/About';
import OurClient from './body/OurClient';
import RecentlyBuiltText from './body/RecentlyBuiltText';
import HowWeOperateText from './body/HowWeOperateText';

function App() {
  return (
    <div className="bg-[#f1f2f3] px-0">
      <Header />
      <Hero />
      <Search />
      <RecentlyBuiltText />
      <RecentlyBuilt />
      <HowWeOperateText />
      <HowWeOperate />
      <Brand />
      <ForYou />
      <About />
      {/* <OurClient /> */}
    </div>
  );
}

export default App;
