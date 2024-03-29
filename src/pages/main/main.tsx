import CardList from '../../components/card-list/card-list';
import CitiesList from '../../components/cities-list/cities-list';


function Main (): JSX.Element {

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList />
        </section>
      </div>
      <div className="cities">
        <CardList />
      </div>
    </>
  );
}

export default Main;
