import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Beer, useGetBeersQuery } from '../../__generated__/graphql';
import BeerModal from './BeerModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const RenderBeerItems: React.FC = () => {
	const filters = useSelector((state: RootState) => state);
	const { data, fetchMore } = useGetBeersQuery({
		variables: { skip: 0, sort: filters.sort.graphqlParams },
	});

	const handleFetchMore = () => {
		fetchMore({
			variables: {
				skip: data?.beers.length,
				sort: filters.sort.graphqlParams,
			},
		});
	};

	const renderBeer = ({ item }: { item: Beer }) => (
		<BeerModal beerItem={item} key={item.id} />
	);

	return (
		<FlatList
			style={styles.container}
			data={data?.beers}
			renderItem={renderBeer}
			keyExtractor={(beer) => ' ' + beer.id}
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
