import React, { ChangeEvent } from 'react';
import { setSortingChoice, SortOptions } from '../../redux/slices/sortSlice';
import { useAppDispatch, RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet } from 'react-native';

const Sort: React.FC = () => {
	const dispatch = useAppDispatch();
	const selected = useSelector((state: RootState) => state.sort.sortOption);

	return (
		<View style={styles.container}>
			<Picker
				selectedValue={selected}
				onValueChange={(itemValue) =>
					dispatch(setSortingChoice(itemValue))
				}
			>
				{Object.values(SortOptions).map((so) => (
					<Picker.Item value={so} key={so} label={so} />
				))}
			</Picker>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
	},
});

export default Sort;
