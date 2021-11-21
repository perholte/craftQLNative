import React, { useEffect, useState } from 'react';
import { setSortingChoice, SortOptions } from '../../redux/slices/sortSlice';
import { useAppDispatch, RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { Platform, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Sort: React.FC = () => {
	const dispatch = useAppDispatch();
	const selected = useSelector((state: RootState) => state.sort.sortOption);
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState<SortOptions>(SortOptions.AlcoholDESC);

	useEffect(() => {
		setValue(selected);
	}, [selected]);

	if (Platform.OS == 'android') {
		return (
			<View style={styles.container}>
				<Picker
					selectedValue={selected}
					onValueChange={(itemValue) => {
						dispatch(setSortingChoice(itemValue));
					}}
				>
					{Object.values(SortOptions).map((so) => (
						<Picker.Item value={so} key={so} label={so} />
					))}
				</Picker>
			</View>
		);
	} else {
		return (
			<DropDownPicker
				style={styles.iosStyle}
				open={open}
				value={value}
				items={Object.values(SortOptions).map((so) => ({
					label: so,
					value: so as SortOptions,
				}))}
				setOpen={setOpen}
				setValue={setValue}
				onChangeValue={() => {
					console.log(value);
					dispatch(setSortingChoice(value as SortOptions));
				}}
				labelStyle={{ backgroundColor: 'rgba(232, 205, 102, 255)' }}
			/>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 0,
	},
	iosStyle: {
		backgroundColor: 'rgba(232, 205, 102, 255)',
		padding: 1,
		marginTop: 10,
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
	},
});

export default Sort;
