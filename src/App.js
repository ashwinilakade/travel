import './App.css';
import Home from './modules/home';
import CarService from './modules/car-service';
import ClientsSatisfaction from './modules/clients-satisfaction';
import Collectionsofvehicles from './modules/collections-of-vehicles';
import OurCustomer from './modules/our-customer';
import Greatdeals from './modules/great-deals';
import LatestNews from './modules/latest-news';
import Tow from './modules/tow';

function App() {
  return (
    <>
      <Home />
      <CarService />
      <ClientsSatisfaction />
      <Collectionsofvehicles />
      <OurCustomer />
      <Greatdeals />
      <LatestNews />
      <Tow />
    </>
  );
}

export default App;
