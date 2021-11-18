import React, { useEffect, useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import useDebounce from '../../hooks/Debounce';
import { setSearchValue } from '../../redux/slices/searchSlice';

const Searchbar = () => {
	const { value: startValue } = useSelector(
		(state: RootState) => state.search
	);
	const [value, setValue] = useState<string>(startValue || '');
	const dispatch = useAppDispatch();
	const debouncedValue = useDebounce(value, 500);
	useEffect(() => {
		dispatch(setSearchValue(debouncedValue));
	}, [dispatch, debouncedValue]);

	const updateText = (text: string): void => {
		setValue(text);
	};

	return (
		<SearchBar
			placeholder='Search for beer...'
			//Denne røde streken er en bug i "react-native-elements", ref: https://stackoverflow.com/questions/68401996/typescript-error-when-using-searchbar-from-react-native-elements
			onChangeText={updateText}
			value={value}
			autoCompleteType='off'
			autoCorrect={false}
			searchIcon={{
				name: 'search',
				color: 'rgba(117, 56, 19, 255)',
			}}
			placeholderTextColor='rgba(117, 56, 19, 255)'
			containerStyle={{
				backgroundColor: 'rgba(232, 205, 102, 255)',
			}}
			inputStyle={{
				backgroundColor: 'rgba(232, 205, 102, 255)',
				color: 'rgba(117, 56, 19, 255)',
			}}
			inputContainerStyle={{
				backgroundColor: 'rgba(232, 205, 102, 255)',
			}}
		/>
	);
};

export default Searchbar;
