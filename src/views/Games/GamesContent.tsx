import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import SubtleButton from "../../components/SubtleButton";
import { cn } from "../../utils";
import { useTranslation } from "react-i18next";

interface gamesInterface {
  title: string;
  subHeader: string;
  description: string;
  slug: string;
  link: string;
  image: string;
}

const GamesContent = () => {
  const { t } = useTranslation();
  console.log(t("games_content", { returnObjects: true }));

  const navigate = useNavigate();

  return (
    <section className="w-full min-h-screen relative px-8 lg:pt-5 pt-2 text-secondary font-primary">
      <div className="max-w-[1100px] w-full mx-auto flex flex-col md:gap-y-24 gap-y-10">
        {(t("games_content", { returnObjects: true }) as gamesInterface[]).map(
          (item: any, i: number) => (
            <div
              className={cn(
                "flex lg:flex-row flex-col-reverse justify-between gap-x-5",
                {
                  "lg:flex-row-reverse flex-col-reverse": i % 2 !== 0,
                }
              )}
              key={item.title}
            >
              <div
                className={cn("max-w-xl w-full md:pt-20 pt-4 md:pr-10", {
                  "mr-auto": i % 2 !== 0,
                  "md:!pt-10": i === 0,
                })}
              >
                <h1 className="text-2xl md:text-4xl font-bold text-primary capitalize max-w-xl">
                  {item.subHeader}
                </h1>

                <p className="md:mt-10 mt-2 md:text-xl text-base break-words">
                  {item.description}
                </p>
                <div className="flex sm:gap-4 sm:flex-row flex-col mt-5 ">
                  <Button className="md:w-[13rem] w-full" stretchOnMobile>
                    {t("games.play_game")}
                  </Button>
                  <SubtleButton
                    className="md:w-[13rem] w-full"
                    stretchOnMobile
                    onClick={() => {
                      navigate(`/games/${item.slug}`);
                    }}
                  >
                    {t("details")}
                  </SubtleButton>
                </div>
              </div>

              <div className="relative h-auto overflow-hidden  flex flex-col mr-auto space-y-5 sm:space-y-10 w-full sm:w-4/5">
                <h1
                  className={cn(
                    "capitalize font-bold text-2xl sm:text-3xl md:text-5xl",
                    { "lg:text-right text-left": i % 2 === 0 }
                  )}
                >
                  {item.title}
                </h1>
                <img
                  src={`/games/${item.image}.webp`}
                  alt={item.title}
                  className="object-cover w-full h-full object-bottom lg:block hidden"
                />
                <img
                  src={`/games/split/${item.image}.png`}
                  alt={item.title}
                  className="object-cover w-full h-full object-bottom lg:hidden block"
                />
              </div>
            </div>
          )
        )}
      </div>

      <p className="text-center my-auto mt-10 md:mt-auto -mb-10 md:+mb-0 md:!my-28 text-xl sm:text-2xl md:text-3xl font-medium">
        {t("more_games")}
      </p>
    </section>
  );
};

export default GamesContent;
