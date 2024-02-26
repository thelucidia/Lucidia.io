import { useTranslation } from 'react-i18next';
// import React from "react";
// import { Images } from "../components/Images";
import { ProductCard } from '../components/ProductCard';
const FeaturedProducts = () => {
  const { t } = useTranslation();
  // const [isHover, setIsHover] = React.useState(false);

  // const handleHover = () => {
  //   setIsHover(!isHover);
  // };
  return (
    <section className="w-full h-auto mt-10 pt-10 sm:pt-20 lg:pt-16 lg:pb-28 bg-[#171717] relative flex items-center font-primary text-secondary px-5">
      <div className="md:w-[82%] w-fit mx-auto flex flex-col">
        <h1 className="font-bold text-2xl sm:text-2xl md:text-5xl">{t('featured_products')}</h1>
        <div className="pt-12 grid md:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-x-5 2 gap-y-8 justify-items-stretch">
          <ProductCard
            title={t('product_title1')}
            desc={t('product_desc1')}
            owner={t('product_owner1')}
            price={t('product_price1')}
            image={t('/avatar1.svg')}
          />
          <ProductCard
            title={t('product_title2')}
            desc={t('product_desc2')}
            owner={t('product_owner2')}
            price={t('product_price2')}
            image={t('/avatar1.svg')}
          />
          <ProductCard
            title={t('product_title3')}
            desc={t('product_desc3')}
            owner={t('product_owner3')}
            price={t('product_price3')}
            image={t('/avatar1.svg')}
          />
          <ProductCard
            title={t('product_title4')}
            desc={t('product_desc4')}
            owner={t('product_owner4')}
            price={t('product_price4')}
            image={t('/avatar1.svg')}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
