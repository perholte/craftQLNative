import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import BeerItem from './BeerItem';

export interface data {
	id: number;
	name: string;
	volume: number;
	type: string;
	brand: string;
	rating: number;
}
const RenderBeerItems = () => {
	const renderBeer = ({ item }: { item: data }) => <BeerItem beer={item} />;

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				style={styles.flatlist}
				data={DATA}
				renderItem={renderBeer}
				keyExtractor={(beer) => ' ' + beer.id}
				horizontal={false}
				numColumns={2}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	flatlist: {},
	container: {
		flex: 1,
		marginTop: 30,
		backgroundColor: 'rgba(232, 205, 102, 255)',
	},
});

export default RenderBeerItems;
