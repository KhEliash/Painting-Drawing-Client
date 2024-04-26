import ArtCategory from "../HomeComponents/ArtCategory";
import Artists from "../HomeComponents/Artists";
import CraftItems from "../HomeComponents/CraftItems";
import Gallery from "../HomeComponents/Gallery";
import Slider from "../HomeComponents/Slider";

 

const Home = () => {
    return (
        <div>
         <Slider></Slider>
         <CraftItems></CraftItems>
         <ArtCategory></ArtCategory>
         <Artists></Artists>
         <Gallery></Gallery>
        </div>
    );
};

export default Home;