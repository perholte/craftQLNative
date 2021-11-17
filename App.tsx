import {
	ApolloClient,
	ApolloProvider,
	createHttpLink,
	InMemoryCache,
} from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import RenderBeerItems from './src/components/beerlist/RenderBeerItems';
import Filters from './src/components/filters/Filters';
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
					<Filters />
					<RenderBeerItems />
				</SafeAreaProvider>
			</Provider>
		</ApolloProvider>
	);
}

export default App;
