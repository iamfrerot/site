import Highlightext from "./Highlightext";

const About = () => {
 return (
  <section className='flex flex-col items-center w-full' id='about'>
   <div className='flex gap-x-6'>
    <p className='font-semibold text-black-100 dark:text-white text-3xl'>
     <Highlightext text='frérot' styles='inline' /> who??
    </p>
    <p className='font-thin text-black-100 dark:text-white max-w-[900px] lg:text-xl  '>
     a driven developer offering expertise in
     <Highlightext text=' full stack web ' styles='inline' />
     and <Highlightext text='mobile development,' styles='inline' /> proficient
     in
     <Highlightext
      text=' mern stack & pern stack + typescript & react native. '
      styles='inline'
     />
     committed to delivering high-quality solutions and contributing skills to
     impactful projects.
    </p>
   </div>
   <div>
    <p>main focus:</p>
   </div>
  </section>
 );
};

export default About;
