import React from 'react';
import { useGetBeersQuery } from '../../__generated__/graphql';

const BeerList: React.FC = () => {
	const { data, fetchMore } = useGetBeersQuery({
		variables: { skip: 0, sort: {} },
	});

	console.log(data);
	return <></>;
};

export default BeerList;
