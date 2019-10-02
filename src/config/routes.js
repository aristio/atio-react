import Home from '../Home';
import List from '../List';
import {createDrawerNavigator} from 'react-navigation-drawer';

export const Drawer = createDrawerNavigator({
  Home: Home,
  List: List,
});
