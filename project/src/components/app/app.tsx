import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  rentalOffers: number;
};

function App ({rentalOffers}: AppScreenProps): JSX.Element {

  return(
    <MainScreen rentalOffers={rentalOffers} />
  );
}
export default App;
