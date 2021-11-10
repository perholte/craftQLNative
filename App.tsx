import React from 'react';
import CustomHeader from './components/header/Header';
import RenderBeerItems from './components/beerCard/RenderBeerItems';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const App = () => {
	return (
		<SafeAreaProvider>
			<CustomHeader />
			<RenderBeerItems />
			<StatusBar style='auto' />
		</SafeAreaProvider>
	);
};

export default App;
