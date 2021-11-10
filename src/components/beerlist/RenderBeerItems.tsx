import React from 'react';
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar,
} from 'react-native';
import CustomHeader from '../header/Header';
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
	const DATA: Array<data> = [
		{
			id: 1621,
			name: 'Lobo Lito',
			volume: 0.04,
			type: 'IPA',
			brand: 'American Pale Ale',
			rating: 4,
		},
		{
			id: 2077,
			name: 'Greenwood Beach',
			volume: 0.04,
			type: 'IPA',
			brand: 'American Pale Ale',
			rating: 3,
		},
		{
			id: 2174,
			name: 'Knotty Blonde Ale',
			volume: 0.04,
			type: 'IPA',
			brand: 'American Pale Ale',
			rating: 4,
		},
		{
			id: 3453,
			name: 'Yard Sale Winter Lager',
			volume: 0.04,
			type: 'IPA',
			brand: 'American Pale Ale',
			rating: 4,
		},
		{
			id: 2521,
			name: 'Trader Session IPA',
			volume: 0.04,
			type: 'IPA',
			brand: 'American Pale Ale',
			rating: 4,
		},
	];
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

/*
import React from 'react';
import { useGetBeersQuery } from '../../__generated__/graphql';

const BeerList: React.FC = () => {
	const { data, fetchMore } = useGetBeersQuery({
		variables: { skip: 0, sort: {} },
	});

	console.log(data);
	return <></>;
};

export default BeerList;

     */

export default RenderBeerItems;
