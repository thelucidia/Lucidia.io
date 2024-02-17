const PartnersUpper = () => {
  const partners = ['bloomberg', 'yahoo', 'block', 'benzinga', 'digital', 'market', 'globe'];

  return (
    <section className="w-full h-auto p-5 relative bg-bg pb-10 pt-16 sm:pt-28">
      <div className="w-full max-w-[1300px] mx-auto flex flex-wrap items-center gap-x-9 md:gap-24 gap-y-4 sm:gap-y-12 justify-center h-auto">
        {partners.map((items, i) => {
          return <img src={`/partnersog/${items}.png`} key={i} alt={items} className="md:w-auto w-20" />;
        })}
      </div>
    </section>
  );
};

export default PartnersUpper;
