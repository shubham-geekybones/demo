import { Footer, Navbar } from '../components';
import { Feedback, GetStarted, Insights, WhatsNew, World } from '../sections';
import CarouselMain from './carousel';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <CarouselMain/>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      {/* <Feedback /> */}
    </div>
  </div>
);

export default Home;
