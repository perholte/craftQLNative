import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomHeader from './components/header/Header';

export default function App() {
	return (
		<SafeAreaProvider>
			<View style={styles.container}>
				<CustomHeader />
				<StatusBar style='auto' />
			</View>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
});
