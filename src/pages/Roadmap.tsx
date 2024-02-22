import clsx from 'clsx';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Banner from '../views/Banner';
import Meta from '../views/Meta';

const StepComponent = ({ steps, active }: { steps: number; active: number }) => {
  // Generate an array of length equal to the 'steps' prop
  const stepsArray = Array.from({ length: steps });

  return (
    <ul className="step flex flex-row gap-16 py-2 mt-8">
      {stepsArray.map((_, index) => (
        <li
          key={index}
          className={`step w-[28px] h-[28px] rounded-full ${index === active ? 'bg-[#B38539]' : 'bg-[#F0F0F0]'}`}
        ></li>
      ))}
    </ul>
  );
};

const MilestoneComponent = ({
  label1,
  label2,
  label3,
  steps,
  active,
  direction,
  className,
}: {
  label1: string;
  label2: string;
  label3: string;
  steps: number;
  active: number;
  direction: string;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        className,
        'flex flex-col font-bold text-[64px] leading-[77px] border-[#F0F0F0]',
        direction == 'right' ? 'text-right pr-28 border-r-2 mr-28' : 'text-left pl-28 border-l-2 ml-28',
      )}
    >
      <span className="text-[#F0F0F0]">{label1}</span>
      <span className="text-[#F0F0F0]">{label2}</span>
      <span className="text-[#B38539]">{label3}</span>
      <StepComponent steps={steps} active={active} />
    </div>
  );
};

const ItemsComponent = ({ items, className }: { items: string[]; className?: string }) => {
  return (
    <ul className={clsx(className, 'pl-12 list-disc')}>
      {items.map((item, index) => (
        <li key={index} className="font-bold text-[32px] leading-[38px] text-[#F0F0F0]">
          {item}
        </li>
      ))}
    </ul>
  );
};
const RoadComponent = ({
  label1,
  label2,
  label3,
  steps,
  active,
  direction,
  items,
  className,
}: {
  label1: string;
  label2: string;
  label3: string;
  steps: number;
  active: number;
  direction: string;
  items: string[];
  className?: string;
}) => {
  return (
    <div
      className={clsx(className, 'relative flex flex-row items-start', direction == 'right' ? '' : 'flex-row-reverse')}
    >
      <div
        className="absolute w-[544px] h-[291px] top-28 -left-4"
        style={{ backgroundColor: 'rgba(179, 133, 57, 0.08)', filter: 'blur(75px)' }}
      />
      <div
        className="absolute w-[515px] h-[301px] top-8 left-[507px]"
        style={{ backgroundColor: 'rgba(179, 133, 57, 0.08)', filter: 'blur(60px)' }}
      />
      <MilestoneComponent
        label1={label1}
        label2={label2}
        label3={label3}
        steps={steps}
        active={active}
        direction={direction}
      />
      <ItemsComponent items={items} />
    </div>
  );
};

const Roadmap = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full bg-bg min-h-screen font-primary"
    >
      <Meta title={t('meta.road_map.title')} description={t('meta.road_map.desc')} />
      <Nav />
      <Banner bg_path="/roadmap/banner.png" title={t('roadmap_page.title')} content="" />
      <div className="flex max-w-[1100px] mx-auto md:mt-6 text-secondary md:pb-20 flex-col ">
        <RoadComponent
          className="mt-24 py-1"
          label1={t('roadmap_page.quarter')}
          label2="1 - 2"
          label3="2024"
          steps={3}
          active={0}
          items={
            t('roadmap_page.road1', {
              returnObjects: true,
            }) as string[]
          }
          direction="right"
        />
        <RoadComponent
          className="mt-24 py-1"
          label1={t('roadmap_page.quarter')}
          label2="3 - 4"
          label3="2024"
          steps={3}
          active={1}
          items={
            t('roadmap_page.road2', {
              returnObjects: true,
            }) as string[]
          }
          direction="left"
        />
        <RoadComponent
          className="mt-24 py-1"
          label1="2025"
          label2="-"
          label3="2026"
          steps={3}
          active={2}
          items={
            t('roadmap_page.road3', {
              returnObjects: true,
            }) as string[]
          }
          direction="right"
        />
      </div>
      <Footer />
    </motion.section>
  );
};

export default Roadmap;
