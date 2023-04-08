import { userProcess } from './user-process';
import { AuthorizationStatus } from '../../constant';
import { fetchUserStatus, loginUser } from '../action';


const email = 'user-email@domain.com';

describe('Reducer: userProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(void 0, { type: 'UNKNOWN_ACTION'}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Unknown,
        user: ''
      });
  });

  it('should fetch authorization status', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      user: ''
    };

    expect(userProcess.reducer(state, { type: fetchUserStatus.rejected.type }))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NoAuth,
        user: ''
      });

    expect(userProcess.reducer(state, { type: fetchUserStatus.fulfilled.type, payload: email }))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Auth,
        user: email
      });
  });

  it('should login user', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: ''
    };

    expect(userProcess.reducer(state, { type: loginUser.fulfilled.type, payload: email }))
      .toEqual({
        authorizationStatus: AuthorizationStatus.Auth,
        user: email
      });
  });
});

