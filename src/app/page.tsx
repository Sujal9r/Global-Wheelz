import Navbar from '../components/Layout/Navbar';
import Section1 from '../components/Layout/Header';
import Section2 from '../components/Sections/Section2';
import Slider from '../components/Sections/Slider';
import Section4 from '../components/Sections/Commitments';
import Section5 from '../components/Sections/Section5';
import Section6 from '../components/Sections/Section6';
import Features from '../components/Sections/Features';
import Application from '../components/Sections/Application';
import Tabs from '../components/Sections/Tabs';
import Footer from '../components/Layout/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2 />
      <Slider />
      <Section4 />
      <Features/>
      <Section5 />
      <Tabs/>
      <Section6 />
      <Application />
      <Footer />
    </div>
  );
}
