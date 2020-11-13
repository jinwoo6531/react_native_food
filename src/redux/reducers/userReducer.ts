import { UserAction } from '../actions';
import { UserModel, UserState } from '../models';
import { LocationGeocodedAddress } from 'expo-location';

const initialState: UserState = {
  user: {} as UserModel,
  location: {} as LocationGeocodedAddress,
  error: undefined,
};

export const UserReducer = (
  state: UserState = initialState,
  action: UserAction
) => {
  switch (action.type) {
    case 'ON_UPDATE_LOCATION':
      return {
        ...state,
        location: action.payload,
      };

    default:
      break;
  }
};
