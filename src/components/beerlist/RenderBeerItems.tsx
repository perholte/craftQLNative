import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import BeerItem from './BeerItem';
import { Beer, useGetBeersQuery } from '../../__generated__/graphql';

const RenderBeerItems: React.FC = () => {
	const { data, fetchMore } = useGetBeersQuery({
		variables: { skip: 0, sort: {} },
	});

	const handleFetchMore = () => {
		fetchMore({ variables: { skip: data?.beers.length } });
	};

	const renderBeer = ({ item }: { item: Beer }) => (
		<BeerItem beerItem={item} />
	);

	return (
		<FlatList
			style={styles.container}
			data={data?.beers}
			renderItem={renderBeer}
			keyExtractor={(beer) => ' ' + beer}
			horizontal={false}
			initialNumToRender={4}
			onEndReached={handleFetchMore}
			onEndReachedThreshold={0.1}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: 'rgba(232, 205, 102, 255)',
	},
});

export default RenderBeerItems;
