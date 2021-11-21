import React from 'react';
import { View } from 'react-native';
import Sort from './Sort';
import { StyleSheet } from 'react-native';

const Filters = () => {
	return (
		<View style={styles.container}>
			<Sort />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		zIndex: 1000,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		backgroundColor: 'rgba(232, 205, 102, 255)',
	},
});

export default Filters;
