import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';

const Searchbar = () => {

	const [search, setSearch] = useState<string>('');

	const updateSearch = (search: string) => {
		setSearch(search);
		console.log(search);
	};

	return (
		<SearchBar
			placeholder='Search for beer...'
			onChangeText={updateSearch}
			value={search}
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
