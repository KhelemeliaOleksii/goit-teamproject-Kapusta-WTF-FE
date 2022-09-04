import { useDispatch } from 'react-redux';
// import { GoogleLogin } from 'react-google-login';
import { authOperations } from '../../redux/auth';

import styles from './GoogleAuth.module.css';

import googleSymbol from '../../images/svg/google.svg';

function GoogleAuth() {
  const dispatch = useDispatch();

  const clientId = '51721947540-3v0it789klih54cbp4h0dj7j40hgr943.apps.googleusercontent.com';

  const responseGoogle = (response) => {
    const email = response.profileObj;
    const password = response.profileObj.googleId;
    dispatch(authOperations.register({ email, password }));
    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <div>
      {/* <GoogleLogin */}
      <div>
        clientId={clientId}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className={styles.googleButton}
            type="button"
          >
            <img
              src={googleSymbol}
              alt="GoogleSymbol"
              className={styles.googleSymbol}
            />
            Google
          </button>
      )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      </div>
      {/* /> */}
    </div>
  );
}

export default GoogleAuth;
