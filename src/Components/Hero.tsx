import { HeroHighlight } from "../ui/HeroHighlight";
import { TextGenerateEffect } from "../ui/TextGenerate";
import Highlightext from "./Highlightext";
const Hero = () => {
 return (
  <section className='h-screen overflow-y-scroll no-scrollbar' id='home'>
   <HeroHighlight containerClassName='dark:bg-black-100 h-full'>
    <TextGenerateEffect
     words='crafting seamless cross-platform experiences for user empowerment..'
     className='dark:text-white text-black-100 sm:text-xl md:text-2xl lg:text-3xl font-bold'
    />
    <p className='text-black-100 dark:text-white lg:text-lg sm:text-base mt-4 font-thin '>
     hey there 👋🏾!!!, i'm{" "}
     <a
      href='https://github.com/iamfrerot'
      target='_blank'
      className='inline-flex'
     >
      <Highlightext text='frérot' styles='hover:underline' />
     </a>
    </p>
   </HeroHighlight>
  </section>
 );
};

export default Hero;
