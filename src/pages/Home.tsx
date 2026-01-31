import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Statistics from '../components/sections/Statistics';
import ZipperCollection from '../components/sections/ZipperCollection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Industries from '../components/sections/Industries';
import QuoteForm from '../components/sections/QuoteForm';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Statistics />
      <ZipperCollection />
      <WhyChooseUs />
      <Industries />
      <QuoteForm />
    </>
  );
}
