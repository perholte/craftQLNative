import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomHeader from './components/header/Header';
import BeerModal from './components/beerModal/BeerModal';

export default function App() {
	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<CustomHeader />
				<BeerModal />
				<StatusBar style='auto' />
			</View>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgba(232, 205, 102, 255)',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
});
