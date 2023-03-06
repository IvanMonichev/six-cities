import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../constant';
import { Helmet } from 'react-helmet';

function NotFoundPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>404 — Not Found</title>
      </Helmet>
      <div className="container">
        <section className="not-found">
          <h1 className="visually-hidden">Not Found Page</h1>
          <div className="not-found__content">
            <b className="not-found__code">404</b>
            <p className="favorites__status-description">Unfortunately, the page was not found.</p>
          </div>
          <ul className="not-found__navigation">
            <li className="not-found__navigation-item">
              <Link className="not-found__navigation-link" to={AppRoute.Root}>Main</Link>
            </li>
            <li className="not-found__navigation--item">
              <button className="not-found__navigation-link btn-reset" onClick={() => navigate(-1)}>Back</button>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default NotFoundPage;
