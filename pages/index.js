import { Footer, Navbar } from '../components';
import { Feedback, GetStarted, Insights, WhatsNew, World } from '../sections';
import Trade from '../sections/Trade';
import CarouselMain from './carousel';

const Home = () => (
  <div className="bg-primary-black" style={{ overflowX: "hidden" }}>
    <CarouselMain />
    <div className="relative">
      <GetStarted />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      {/* <Insights /> */}
      <Trade />
      {/* <Feedback /> */}
    </div>
  </div>
);

export default Home;
