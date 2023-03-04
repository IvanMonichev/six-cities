import MainScreen from '../../pages/main-screen/main-screen';

function App (): JSX.Element {

  const rentalOffers = 312;

  return(
    <MainScreen rentalOffers={rentalOffers} />
  );
}
export default App;
