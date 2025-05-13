import About from "../About";
import Slider from "../Components/Slider";
import MoroccoMap from "./MoroccoMap";
import { useLanguage } from '../context/LanguageContext';

export default function Home () {
    const { language } = useLanguage();
    return (
    <>
    <Slider />
    <div className=" text-center py-8 rounded-2xl  mb-8">
      <h1 className="text-4xl font-bold tracking-wide">
        {
            language=='en'?"Morocco's Natural Treasures":language=='fr'?"Les Trésors Naturels du Maroc":"كنوز المغرب الطبيعية"
        }
        
      </h1>
      <p className="text-lg mt-2 opacity-90">
      {
            language=='en'?"Discover the importance of water, wetlands, and forests in Morocco":
            language=='fr'?"Découvrez l'importance de l'eau, des zones humides et des forêts au Maroc":
            "اكتشف أهمية المياه، الأراضي الرطبة والغابات في المغرب"
        }
        </p>
    </div>
    <MoroccoMap/>
    <About/>
    

    </>

    )
}