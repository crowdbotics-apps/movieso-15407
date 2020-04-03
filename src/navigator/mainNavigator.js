import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial25481Navigator from '../features/Tutorial25481/navigator';
import Messaging25480Navigator from '../features/Messaging25480/navigator';
import ArticleList25479Navigator from '../features/ArticleList25479/navigator';
import Achievements25478Navigator from '../features/Achievements25478/navigator';
import Add-Item25475Navigator from '../features/Add-Item25475/navigator';
import BlankScreen25469Navigator from '../features/BlankScreen25469/navigator';
import Contacts25452Navigator from '../features/Contacts25452/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Tutorial25481: { screen: Tutorial25481Navigator },
Messaging25480: { screen: Messaging25480Navigator },
ArticleList25479: { screen: ArticleList25479Navigator },
Achievements25478: { screen: Achievements25478Navigator },
Add-Item25475: { screen: Add-Item25475Navigator },
BlankScreen25469: { screen: BlankScreen25469Navigator },
Contacts25452: { screen: Contacts25452Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
