import Navbar from '../components/Layout/Navbar';
import Section1 from '../components/Layout/Header';
import Section2 from '../components/Sections/Section2';
import Section4 from '../components/Sections/Commitments';
import Section5 from '../components/Sections/Section5';
import Features from '../components/Sections/Features';
import Application from '../components/Sections/Application';
import Tabs from '../components/Sections/Tabs';
import Footer from '../components/Layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section4 />
      <Features/>
      <Section5 />
      <Tabs/>
      <Application />
      <Footer />
    </div>
  );
}
