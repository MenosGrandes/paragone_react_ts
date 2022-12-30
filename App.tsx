import 'react-native-gesture-handler';
import TicketsC from './src/components/ticketViewComponents/TicketsC';

import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { useTailwind } from 'tailwind-rn';


import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/components/ticketViewComponents/screens/Home';

type RootStackParamList = {
  Home: undefined;
};


const Drawer = createDrawerNavigator<RootStackParamList>();
const App = () => {
	return (
		<TailwindProvider utilities={utilities}>
			<NavigationContainer>
				<Drawer.Navigator initialRouteName="Home">
					<Drawer.Screen name='Home' component={TicketsC}/>

				</Drawer.Navigator>
			</NavigationContainer>
		</TailwindProvider>
	);
}
export default App;
