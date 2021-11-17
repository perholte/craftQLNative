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
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		backgroundColor: 'rgba(232, 205, 102, 255)',
	},
});

export default Filters;
