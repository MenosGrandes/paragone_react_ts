import 'react-native-gesture-handler';
import TicketsC from './src/components/ticketViewComponents/TicketsC';

import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { useTailwind } from 'tailwind-rn';


import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/components/ticketViewComponents/screens/Home';
import { About } from './src/components/ticketViewComponents/screens/About';
import { Config } from './src/components/ticketViewComponents/screens/Configuration';

type RootStackParamList = {
  Home: undefined;
  About: undefined;
	Config: undefined;
};


const Drawer = createDrawerNavigator<RootStackParamList>();
const App = () => {
	return (
		<TailwindProvider utilities={utilities}>
			<NavigationContainer>
				<Drawer.Navigator initialRouteName="Home">
					<Drawer.Screen name='Home' component={Home}/>
					<Drawer.Screen name='About' component={About}/>
					<Drawer.Screen name='Config' component={Config}/>

				</Drawer.Navigator>
			</NavigationContainer>
		</TailwindProvider>
	);
}
export default App;
