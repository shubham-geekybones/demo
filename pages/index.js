import { Footer, Navbar } from '../components';
import { Feedback, GetStarted, Insights, WhatsNew, World } from '../sections';
import CarouselMain from './carousel';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <CarouselMain/>
    <div className="relative">
      <GetStarted />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      {/* <Feedback /> */}
    </div>
  </div>
);

export default Home;
