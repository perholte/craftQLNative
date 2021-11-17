import {
	ApolloClient,
	ApolloProvider,
	createHttpLink,
	InMemoryCache,
} from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import RenderBeerItems from './src/components/beerlist/RenderBeerItems';
import CustomHeader from './src/components/header/Header';
import { store } from './src/redux/store';

function App() {
	const link = createHttpLink({
		uri: 'http://129.241.104.92:4000',
	});

	const client = new ApolloClient({
		link,
		cache: new InMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						beers: {
							keyArgs: [],
							merge(existing = [], incoming) {
								return [...existing, ...incoming];
							},
						},
					},
				},
			},
		}),
	});

	return (
		<ApolloProvider client={client}>
			<Provider store={store}>
				<SafeAreaProvider>
					<CustomHeader />
					<StatusBar style='auto' />
					<RenderBeerItems />
				</SafeAreaProvider>
			</Provider>
		</ApolloProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 0,
		backgroundColor: 'rgba(232, 205, 102, 255)',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
});

export default App;
