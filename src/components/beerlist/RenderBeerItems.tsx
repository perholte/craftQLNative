import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Beer, useGetBeersQuery } from '../../__generated__/graphql';
import Searchbar from '../filters/Searchbar';
import BeerModal from './BeerModal';

const RenderBeerItems: React.FC = () => {
	const filters = useSelector((state: RootState) => state);

	const { data, fetchMore, refetch } = useGetBeersQuery({
		variables: { skip: 0, sort: {}, filter: filters.search },
	});

	const handleFetchMore = () => {
		fetchMore({
			variables: { skip: data?.beers.length, filter: filters.search },
		});
	};

	const renderBeer = ({ item }: { item: Beer }) => (
		<BeerModal beerItem={item} />
	);

	useEffect(() => {
		refetch();
	}, [filters]);

	return (
		<>
			<FlatList
				ListHeaderComponent={Searchbar}
				style={styles.container}
				data={data?.beers}
				renderItem={renderBeer}
				keyExtractor={(beer) => ' ' + beer.id}
				horizontal={false}
				initialNumToRender={4}
				onEndReached={handleFetchMore}
				onEndReachedThreshold={0.1}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: 'rgba(232, 205, 102, 255)',
	},
	submitButton: {
		position: 'absolute',
		top: 0,
		left: 0,
		color: 'black',
		backgroundColor: 'blue',
		width: 'fit-content',
		height: 'fit-content',
	},
});

export default RenderBeerItems;
