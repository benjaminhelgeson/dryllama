import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./pages/home";
import AboutScreen from "./pages/about";
import AmsterdamScreen from "./pages/international/amsterdam";
import AnchorageScreen from "./pages/usa/anchorage";
import ArchesScreen from "./pages/parks/arches";
import AustinScreen from "./pages/usa/austin";
import BarcelonaScreen from "./pages/international/barcelona";
import BanosScreen from "./pages/international/banos";
import BayAreaScreen from "./pages/usa/bay_area";
import BelfastScreen from "./pages/international/belfast";
import BerlinScreen from "./pages/international/berlin";
import BigBendScreen from "./pages/parks/big_bend";
import BogotaScreen from "./pages/international/bogota";
import BolivarScreen from "./pages/usa/bolivar";
import BratislavaScreen from "./pages/international/bratislava";
import BrugesScreen from "./pages/international/bruges";
import CadillacRanchScreen from "./pages/usa/cadillac_ranch";
import CaliforniaScreen from "./pages/usa/california";
import CanyonlandsScreen from "./pages/parks/canyonlands";
import ChicagoScreen from "./pages/usa/chicago";
import CliffsOfMoherScreen from "./pages/international/cliffs_of_moher";
import CoversScreen from "./pages/covers";
import DallasScreen from "./pages/usa/dallas";
import DeathValleyNpScreen from "./pages/parks/death_valley_np";
import DinosaurScreen from "./pages/parks/dinosaur";
import DublinScreen from "./pages/international/dublin";
import FussenScreen from "./pages/international/fussen";
import GalapagosScreen from "./pages/international/galapagos";
import GiantsCausewayScreen from "./pages/international/giants_causeway";
import GoldenScreen from "./pages/usa/golden";
import GoldenCircleScreen from "./pages/international/golden_circle";
import GoldenGateCanyonScreen from "./pages/usa/golden_gate_canyon";
import GrandCanyonScreen from "./pages/parks/grand_canyon";
import HavanaScreen from "./pages/international/havana";
import IrishCoastScreen from "./pages/international/irish_coast";
import JoshuaTreeScreen from "./pages/parks/joshua_tree";
import KyotoScreen from "./pages/international/kyoto";
import LaScreen from "./pages/usa/la";
import LandsEndScreen from "./pages/international/lands_end";
import LasVegasScreen from "./pages/usa/las_vegas";
import LittleBigHornScreen from "./pages/parks/little_big_horn";
import LisbonScreen from "./pages/international/lisbon";
import LondonScreen from "./pages/international/london";
import MadridScreen from "./pages/international/madrid";
import ManchesterScreen from "./pages/international/manchester";
import MardiGrasScreen from "./pages/usa/mardi_gras";
import McKinneyFallsScreen from "./pages/usa/mckinney_falls";
import MiamiScreen from "./pages/usa/miami";
import MidCalScreen from "./pages/usa/mid_cal";
import MorroBayScreen from "./pages/usa/morro_bay";
import MexicoCityScreen from "./pages/international/mexico_city";
import MunichScreen from "./pages/international/munich";
import NashvilleScreen from "./pages/usa/nashville";
import NoLaScreen from "./pages/usa/nola";
import NorCalScreen from "./pages/usa/nor_cal";
import OregonCoastScreen from "./pages/usa/oregon_coast";
import ParisScreen from "./pages/international/paris";
import PenzanceScreen from "./pages/international/penzance";
import PetroglyphScreen from "./pages/parks/petroglyph";
import PilsenScreen from "./pages/international/pilsen";
import PortlandScreen from "./pages/usa/portland";
import PragueScreen from "./pages/international/prague";
import RegensburgScreen from "./pages/international/regensburg";
import ReykjavikScreen from "./pages/international/reykjavik";
import RmnpScreen from "./pages/parks/rmnp";
import RockyPointScreen from "./pages/international/rocky_point";
import RondaScreen from "./pages/international/ronda";
import RushmoreScreen from "./pages/parks/rushmore";
import SanDiegoScreen from "./pages/usa/san_diego";
import SalzburgScreen from "./pages/international/salzburg";
import SantiagoScreen from "./pages/international/santiago";
import SeattleScreen from "./pages/usa/seattle";
import SevillaScreen from "./pages/international/sevilla";
import SpanishCountrysideScreen from "./pages/international/spanish_countryside";
import TokyoScreen from "./pages/international/tokyo";
import ViennaScreen from "./pages/international/vienna";
import WestTexasScreen from "./pages/usa/west_texas";
import WhiteSandsScreen from "./pages/parks/white_sands";
import ZaragozaScreen from "./pages/international/zaragoza";
import NoPagesScreen from "./pages/noPages";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="amsterdam" element={<AmsterdamScreen />} />
        <Route path="anchorage" element={<AnchorageScreen />} />
        <Route path="arches" element={<ArchesScreen />} />
        <Route path="austin" element={<AustinScreen />} />
        <Route path="banos" element={<BanosScreen />} />
        <Route path="barcelona" element={<BarcelonaScreen />} />
        <Route path="bayarea" element={<BayAreaScreen />} />
        <Route path="belfast" element={<BelfastScreen />} />
        <Route path="berlin" element={<BerlinScreen />} />
        <Route path="bigbend" element={<BigBendScreen />} />
        <Route path="bogota" element={<BogotaScreen />} />
        <Route path="bolivar" element={<BolivarScreen />} />
        <Route path="bratislava" element={<BratislavaScreen />} />
        <Route path="bruges" element={<BrugesScreen />} />
        <Route path="cadillacranch" element={<CadillacRanchScreen />} />
        <Route path="canyonlands" element={<CanyonlandsScreen />} />
        <Route path="chicago" element={<ChicagoScreen />} />
        <Route path="cliffsofmoher" element={<CliffsOfMoherScreen />} />
        <Route path="covers" element={<CoversScreen />} />
        <Route path="dallas" element={<DallasScreen />} />
        <Route path="deathvalley" element={<DeathValleyNpScreen />} />
        <Route path="dinosaur" element={<DinosaurScreen />} />
        <Route path="dublin" element={<DublinScreen />} />
        <Route path="fussen" element={<FussenScreen />} />
        <Route path="galapagos" element={<GalapagosScreen />} />
        <Route path="giantscauseway" element={<GiantsCausewayScreen />} />
        <Route path="golden" element={<GoldenScreen />} />
        <Route path="goldencircle" element={<GoldenCircleScreen />} />
        <Route path="goldengatecanyon" element={<GoldenGateCanyonScreen />} />
        <Route path="grandcanyon" element={<GrandCanyonScreen />} />
        <Route path="havana" element={<HavanaScreen />} />
        <Route path="irishcoast" element={<IrishCoastScreen />} />
        <Route path="joshuatree" element={<JoshuaTreeScreen />} />
        <Route path="kyoto" element={<KyotoScreen />} />
        <Route path="la" element={<LaScreen />} />
        <Route path="landsend" element={<LandsEndScreen />} />
        <Route path="lasvegas" element={<LasVegasScreen />} />
        <Route path="lisbon" element={<LisbonScreen />} />
        <Route path="littlebighorn" element={<LittleBigHornScreen />} />
        <Route path="london" element={<LondonScreen />} />
        <Route path="madrid" element={<MadridScreen />} />
        <Route path="manchester" element={<ManchesterScreen />} />
        <Route path="mardigras" element={<MardiGrasScreen />} />
        <Route path="miami" element={<MiamiScreen />} />
        <Route path="mckinneyfalls" element={<McKinneyFallsScreen />} />
        <Route path="midcal" element={<MidCalScreen />} />
        <Route path="morrobay" element={<MorroBayScreen />} />
        <Route path="mexicocity" element={<MexicoCityScreen />} />
        <Route path="munich" element={<MunichScreen />} />
        <Route path="nashville" element={<NashvilleScreen />} />
        <Route path="nola" element={<NoLaScreen />} />
        <Route path="norcal" element={<NorCalScreen />} />
        <Route path="oregoncoast" element={<OregonCoastScreen />} />
        <Route path="paris" element={<ParisScreen />} />
        <Route path="penzance" element={<PenzanceScreen />} />
        <Route path="petroglyph" element={<PetroglyphScreen />} />
        <Route path="pilsen" element={<PilsenScreen />} />
        <Route path="portland" element={<PortlandScreen />} />
        <Route path="prague" element={<PragueScreen />} />
        <Route path="regensburg" element={<RegensburgScreen />} />
        <Route path="reykjavik" element={<ReykjavikScreen />} />
        <Route path="rmnp" element={<RmnpScreen />} />
        <Route path="rockypoint" element={<RockyPointScreen />} />
        <Route path="ronda" element={<RondaScreen />} />
        <Route path="rushmore" element={<RushmoreScreen />} />
        <Route path="salzburg" element={<SalzburgScreen />} />
        <Route path="sandiego" element={<SanDiegoScreen />} />
        <Route path="santiago" element={<SantiagoScreen />} />
        <Route path="seattle" element={<SeattleScreen />} />
        <Route path="sevilla" element={<SevillaScreen />} />
        <Route
          path="spanishcountryside"
          element={<SpanishCountrysideScreen />}
        />
        <Route path="tokyo" element={<TokyoScreen />} />
        <Route path="vienna" element={<ViennaScreen />} />
        <Route path="westtexas" element={<WestTexasScreen />} />
        <Route path="whitesands" element={<WhiteSandsScreen />} />
        <Route path="zaragoza" element={<ZaragozaScreen />} />
        <Route path="*" element={<NoPagesScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
