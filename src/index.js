import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./pages/home";
import AboutScreen from "./pages/about";
import AmsterdamScreen from "./pages/amsterdam";
import AnchorageScreen from "./pages/anchorage";
import AustinScreen from "./pages/austin";
import BarcelonaScreen from "./pages/barcelona";
import BanosScreen from "./pages/banos";
import BayAreaScreen from "./pages/bay_area";
import BerlinScreen from "./pages/berlin";
import BigBendScreen from "./pages/big_bend";
import BolivarScreen from "./pages/bolivar";
import BratislavaScreen from "./pages/bratislava";
import BrugesScreen from "./pages/bruges";
import CadillacRanchScreen from "./pages/cadillac_ranch";
import CaliforniaScreen from "./pages/california";
import ChicagoScreen from "./pages/chicago";
import CoversScreen from "./pages/covers";
import DallasScreen from "./pages/dallas";
import DeathValleyNpScreen from "./pages/death_valley_np";
import DinosaurScreen from "./pages/dinosaur";
import FussenScreen from "./pages/fussen";
import GalapagosScreen from "./pages/galapagos";
import GoldenScreen from "./pages/golden";
import GoldenCircleScreen from "./pages/golden_circle";
import GoldenGateCanyonScreen from "./pages/golden_gate_canyon";
import GrandCanyonScreen from "./pages/grand_canyon";
import HavanaScreen from "./pages/havana";
import JoshuaTreeScreen from "./pages/joshua_tree";
import LaScreen from "./pages/la";
import LasVegasScreen from "./pages/las_vegas";
import LittleBigHornScreen from "./pages/little_big_horn";
import LondonScreen from "./pages/london";
import MardiGrasScreen from "./pages/mardi_gras";
import McKinneyFallsScreen from "./pages/mckinney_falls";
import MiamiScreen from "./pages/miami";
import MidCalScreen from "./pages/mid_cal";
import MorroBayScreen from "./pages/morro_bay";
import MunichScreen from "./pages/munich";
import NashvilleScreen from "./pages/nashville";
import NoLaScreen from "./pages/nola";
import NorCalScreen from "./pages/nor_cal";
import OregonCoastScreen from "./pages/oregon_coast";
import ParisScreen from "./pages/paris";
import PetroglyphScreen from "./pages/petroglyph";
import PilsenScreen from "./pages/pilsen";
import PortlandScreen from "./pages/portland";
import PragueScreen from "./pages/prague";
import RegensburgScreen from "./pages/regensburg";
import ReykjavikScreen from "./pages/reykjavik";
import RmnpScreen from "./pages/rmnp";
import RockyPointScreen from "./pages/rocky_point";
import RushmoreScreen from "./pages/rushmore";
import SalzburgScreen from "./pages/salzburg";
import SeattleScreen from "./pages/seattle";
import ViennaScreen from "./pages/vienna";
import WestTexasScreen from "./pages/west_texas";
import WhiteSandsScreen from "./pages/white_sands";
import ZaragozaScreen from "./pages/zaragoza";
import NoPagesScreen from "./pages/noPages";
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="amsterdam" element={<AmsterdamScreen />} />
        <Route path="anchorage" element={<AnchorageScreen />} />
        <Route path="austin" element={<AustinScreen />} />
        <Route path="banos" element={<BanosScreen />} />
        <Route path="barcelona" element={<BarcelonaScreen />} />
        <Route path="bayarea" element={<BayAreaScreen />} />
        <Route path="berlin" element={<BerlinScreen />} />       
        <Route path="bigbend" element={<BigBendScreen />} />
        <Route path="bolivar" element={<BolivarScreen />} /> 
        <Route path="bratislava" element={<BratislavaScreen />} />
        <Route path="bruges" element={<BrugesScreen />} />
        <Route path="cadillacranch" element={<CadillacRanchScreen />} />
        <Route path="chicago" element={<ChicagoScreen />} />
        <Route path="covers" element={<CoversScreen />} />
        <Route path="dallas" element={<DallasScreen />} />
        <Route path="deathvalley" element={<DeathValleyNpScreen />} />
        <Route path="dinosaur" element={<DinosaurScreen />} />
        <Route path="fussen" element={<FussenScreen />} />
        <Route path="galapagos" element={<GalapagosScreen />} />
        <Route path="golden" element={<GoldenScreen />} />
        <Route path="goldencircle" element={<GoldenCircleScreen />} />
        <Route path="goldengatecanyon" element={<GoldenGateCanyonScreen />} />
        <Route path="grandcanyon" element={<GrandCanyonScreen />} />
        <Route path="havana" element={<HavanaScreen />} />
        <Route path="joshuatree" element={<JoshuaTreeScreen />} />
        <Route path="la" element={<LaScreen />} />
        <Route path="lasvegas" element={<LasVegasScreen />} />
        <Route path="littlebighorn" element={<LittleBigHornScreen />} />
        <Route path="london" element={<LondonScreen />} />
        <Route path="mardigras" element={<MardiGrasScreen />} />
        <Route path="miami" element={<MiamiScreen />} />
        <Route path="mckinneyfalls" element={<McKinneyFallsScreen />} />
        <Route path="midcal" element={<MidCalScreen />} />
        <Route path="morrobay" element={<MorroBayScreen />} />
        <Route path="munich" element={<MunichScreen />} />
        <Route path="nashville" element={<NashvilleScreen />} />
        <Route path="nola" element={<NoLaScreen />} />
        <Route path="norcal" element={<NorCalScreen />} />
        <Route path="oregoncoast" element={<OregonCoastScreen />} />
        <Route path="paris" element={<ParisScreen />} />
        <Route path="petroglyph" element={<PetroglyphScreen />} />
        <Route path="pilsen" element={<PilsenScreen />} />
        <Route path="portland" element={<PortlandScreen />} />
        <Route path="prague" element={<PragueScreen />} />
        <Route path="regensburg" element={<RegensburgScreen />} />
        <Route path="reykjavik" element={<ReykjavikScreen />} />
        <Route path="rmnp" element={<RmnpScreen />} />
        <Route path="rockypoint" element={<RockyPointScreen />} />
        <Route path="rushmore" element={<RushmoreScreen />} />
        <Route path="salzburg" element={<SalzburgScreen />} />
        <Route path="seattle" element={<SeattleScreen />} />
        <Route path="vienna" element={<ViennaScreen />} />
        <Route path="westtexas" element={<WestTexasScreen />} />
        <Route path="whitesands" element={<WhiteSandsScreen />} />
        <Route path="zaragoza" element={<ZaragozaScreen />} />
        <Route path="*" element={<NoPagesScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);