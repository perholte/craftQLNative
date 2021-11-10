import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Beer } from '../../__generated__/graphql';

const BeerItem = ({ beerItem }: { beerItem: Beer }) => {
	return (
		<View style={styles.item}>
			<Text style={styles.titleBold}>
				{beerItem.id}
				{'\n'}
				{beerItem.name}
				{'\n'}
				{beerItem.type}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		backgroundColor: 'white',
		padding: 20,
		width: '80%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 10,
		textAlign: 'center',
	},
	titleBold: {
		fontSize: 10,
		textAlign: 'center',
		fontWeight: 'bold',
	},
});
export default BeerItem;
