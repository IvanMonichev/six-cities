import MainPage from '../../pages/main-page/main-page';


type AppScreenProps = {
  rentalOffers: number;
};

function App ({rentalOffers}: AppScreenProps): JSX.Element {

  return(
    <MainPage rentalOffers={rentalOffers} />
  );
}
export default App;
