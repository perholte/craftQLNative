import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Beer, useGetBeersQuery } from '../../__generated__/graphql';
import FlatListWithScrollToTop from '../scroll-to-top/FlatListWithScrollToTop';
import BeerItem from './BeerItem';

const RenderBeerItems: React.FC = () => {
	const { data, fetchMore } = useGetBeersQuery({
		variables: { skip: 0, sort: {} },
		fetchPolicy: 'cache-and-network',
	});
	const handleFetchMore = () => {
		if (data && data.beers.length > 30) {
			return;
		}
		fetchMore({ variables: { skip: data?.beers.length } });
	};

	const renderBeer = ({ item }: { item: Beer }) => (
		<BeerItem beerItem={item} />
	);
	return (
		<View style={{ flex: 1 }}>
			<FlatListWithScrollToTop
				beers={data?.beers}
				renderBeer={renderBeer}
				keyExtractor={(beer) => ' ' + beer.id}
				handleFetchMore={handleFetchMore} //
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
