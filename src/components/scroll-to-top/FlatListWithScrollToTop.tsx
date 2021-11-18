import React, { FC, useRef, useState } from 'react';
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import { Beer } from '../../__generated__/graphql';
import Searchbar from '../filters/Searchbar';
import ScrollToTop from './ScrollToTop';

interface IFlatListProps {
	beers: Beer[] | undefined;
	renderBeer: ({ item }: { item: Beer }) => JSX.Element;
	keyExtractor: (item: Beer) => string;
	handleFetchMore: () => void;
	style?: StyleSheet.NamedStyles<{}>;
}

const FlatListWithScrollToTop: FC<IFlatListProps> = (props) => {
	const { beers, renderBeer, keyExtractor, handleFetchMore, style } = props;
	const listRef = useRef<FlatList>(null);
	const [contentVerticalOffset, setContentVerticalOffset] =
		useState<number>(0);
	const CONTENT_OFFSET_THRESHOLD = 10;
	const scrollToTop = () => {
		if (listRef.current) {
			const params = {
				offset: 0,
			};
			listRef.current.scrollToOffset(params);
		}
	};
	return (
		<>
			{contentVerticalOffset > CONTENT_OFFSET_THRESHOLD && (
				<ScrollView
					style={{
						position: 'absolute',
						alignSelf: 'flex-end',
						bottom: 0,
						zIndex: 1,
					}}
				>
					<ScrollToTop onClick={scrollToTop} />
				</ScrollView>
			)}
			<FlatList
				ref={listRef}
				ListHeaderComponent={Searchbar}
				data={beers}
				extraData={beers} // Updates the visible rating without re-rendering the entire page
				onScroll={(event) => {
					setContentVerticalOffset(event.nativeEvent.contentOffset.y);
				}}
				renderItem={renderBeer}
				keyExtractor={keyExtractor}
				onEndReached={handleFetchMore}
				initialNumToRender={5}
				onEndReachedThreshold={0.5}
				horizontal={false}
				style={style}
			/>
		</>
	);
};
const styles = StyleSheet.create({
	scrollTopButton: {
		position: 'absolute',
		bottom: 0,
		right: 0,
	},
});

export default FlatListWithScrollToTop;
