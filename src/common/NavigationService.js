import {NavigationActions} from 'react-navigation';

let _navigator;

class NavigationService {
  setTopLevelNavigator = navigatorRef => {
    _navigator = navigatorRef;
  };

  navigate = (routeName, params) => {
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      }),
    );
  }

  back = () => {
    _navigator.dispatch(NavigationActions.back());
  };
}

export default NavigationService;
