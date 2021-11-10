import {
	ApolloClient,
	ApolloProvider,
	createHttpLink,
	InMemoryCache,
} from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomHeader from './src/components/header/Header';

export default function App() {
	const link = createHttpLink({
		uri: 'http://129.241.104.92:4000',
	});

	const client = new ApolloClient({
		link,
		cache: new InMemoryCache(),
	});

	return (
		<ApolloProvider client={client}>
			<SafeAreaProvider>
				<View style={styles.container}>
					<CustomHeader />
					<StatusBar style='auto' />
				</View>
			</SafeAreaProvider>
		</ApolloProvider>
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
