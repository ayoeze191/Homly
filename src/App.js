
import './App.css';
import RecentlyBuilt from './body/RecentlyBuilt';
import Header from './header/header';
import Hero from './Hero/Hero';
import Search from './Search/search';

function App() {
  return (
    <div className="bg-[#f1f2f3]">
      <Header />
      <Hero />
      <Search />
      <RecentlyBuilt />
    </div>
  );
}

export default App;
