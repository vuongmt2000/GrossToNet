/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from './src/screens/Home'
import GrossToNet from './src/screens/GrossToNet'
import Navigation from './src/screens/Navigation';


AppRegistry.registerComponent(appName, () => Navigation);
