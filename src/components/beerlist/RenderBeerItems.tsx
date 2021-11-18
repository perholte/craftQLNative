import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Beer, useGetBeersQuery } from '../../__generated__/graphql';
import FlatListWithScrollToTop from '../scroll-to-top/FlatListWithScrollToTop';
import BeerModal from './BeerModal';

const RenderBeerItems: React.FC = () => {
	const filters = useSelector((state: RootState) => state);

	const { data, fetchMore, refetch } = useGetBeersQuery({
		variables: {
			skip: 0,
			sort: filters.sort.graphqlParams,
			filter: filters.search,
		},
	});
	const handleFetchMore = () => {
		fetchMore({
			variables: {
				skip: data?.beers.length,
				sort: filters.sort.graphqlParams,
				filter: filters.search,
			},
		});
	};

	useEffect(() => {
		refetch();
	}, [filters]);

	const renderBeer = ({ item }: { item: Beer }) => (
		<BeerModal beerItem={item} key={item.id} />
	);
	return (
		<View style={{ flex: 1 }}>
			<FlatListWithScrollToTop
				beers={data?.beers}
				renderBeer={renderBeer}
				keyExtractor={(beer) =>
					`${beer.id}-${(Math.random() + 1)
						.toString(36)
						.substring(7)}`
				}
				handleFetchMore={handleFetchMore}
				style={styles.container}
			/>
		</View>
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
