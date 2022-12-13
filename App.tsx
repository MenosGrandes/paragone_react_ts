
import TicketsC from './src/components/ticketViewComponents/TicketsC';

import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { useTailwind } from 'tailwind-rn';

const App = () => {
	return (
		<TailwindProvider utilities={utilities}>
			<TicketsC/>
	</TailwindProvider>
	);
}
export default App;
