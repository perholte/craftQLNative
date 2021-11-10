import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { data } from './RenderBeerItems';

const Item = ({ beer }: { beer: data }) => {
	return (
		<View style={styles.item}>
			<Text style={styles.titleBold}>
				{beer.id}
				{'\n'}
				{beer.name}
				{'\n'}
				{beer.type}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		backgroundColor: 'white',
		padding: 20,
		width: '40%',
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
export default Item;
