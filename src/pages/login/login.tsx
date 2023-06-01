import { Helmet } from 'react-helmet-async';
import { FormEvent } from 'react';
import { UserAuth } from '../../types/user';
import { loginUser } from '../../store/action';
import { useAppDispatch } from '../../hooks';
import { Link } from 'react-router-dom';

function Login(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;

    const formData = new FormData(form) as Iterable<[UserAuth]>;
    const data = Object.fromEntries(formData) as UserAuth;

    dispatch(loginUser(data));
  };


  return (
    <>
      <Helmet>
        <title>Sign In | 6 cities</title>
      </Helmet>
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input className="login__input form__input" type="email" name="email" placeholder="Email" required />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input className="login__input form__input" type="password" name="password" placeholder="Password"
                required
              />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to="/">
              <span>Amsterdam</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
