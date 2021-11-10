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
import RenderBeerItems from './src/components/beerlist/RenderBeerItems';
import CustomHeader from './src/components/header/Header';
import { useGetBeersQuery } from './src/__generated__/graphql';

export default function App() {
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
			<SafeAreaProvider>
				<CustomHeader />
				<RenderBeerItems />
				<StatusBar style='auto' />
			</SafeAreaProvider>
		</ApolloProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 0,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
});
