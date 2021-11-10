import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Beer = {
  __typename?: 'Beer';
  abv: Scalars['Float'];
  brand: Scalars['String'];
  /**
   * Defines a beer in our system
   * ABV stands for Alcohol By Volume (alkoholprosent)
   */
  id: Scalars['ID'];
  name: Scalars['String'];
  rating?: Maybe<Scalars['Float']>;
  type: Scalars['String'];
};

export type BeerFilter = {
  field: FilterField;
  value: Scalars['String'];
};

export type BeerOrder = {
  abv?: Maybe<Sort>;
  /** Defines which fields the beers can be sorted on */
  brand?: Maybe<Sort>;
  name?: Maybe<Sort>;
  rating?: Maybe<Sort>;
  type?: Maybe<Sort>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export enum FilterField {
  All = 'all',
  Brand = 'brand',
  Name = 'name',
  Type = 'type'
}

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Endpoint for rating a beer
   * Returns null if no beer with the given id exists
   */
  rateBeer?: Maybe<Beer>;
};


export type MutationRateBeerArgs = {
  beerId: Scalars['ID'];
  rating: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  /**
   * Endpoint for fetching beers
   * Can be filtered, sorted and paged
   */
  beers: Array<Beer>;
};


export type QueryBeersArgs = {
  filter?: Maybe<BeerFilter>;
  orderBy?: Maybe<BeerOrder>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export enum Sort {
  /** Defines which direction to sort */
  Asc = 'asc',
  Desc = 'desc'
}

export type RateBeerMutationVariables = Exact<{
  beerId: Scalars['ID'];
  rating: Scalars['Int'];
}>;


export type RateBeerMutation = { __typename?: 'Mutation', rateBeer?: { __typename?: 'Beer', id: string, rating?: number | null | undefined } | null | undefined };

export type GetBeersQueryVariables = Exact<{
  skip: Scalars['Int'];
  sort: BeerOrder;
  filter?: Maybe<BeerFilter>;
}>;


export type GetBeersQuery = { __typename?: 'Query', beers: Array<{ __typename?: 'Beer', name: string, rating?: number | null | undefined, id: string, brand: string, type: string, abv: number }> };


export const RateBeerDocument = gql`
    mutation RateBeer($beerId: ID!, $rating: Int!) {
  rateBeer(beerId: $beerId, rating: $rating) {
    id
    rating
  }
}
    `;
export type RateBeerMutationFn = Apollo.MutationFunction<RateBeerMutation, RateBeerMutationVariables>;

/**
 * __useRateBeerMutation__
 *
 * To run a mutation, you first call `useRateBeerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRateBeerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rateBeerMutation, { data, loading, error }] = useRateBeerMutation({
 *   variables: {
 *      beerId: // value for 'beerId'
 *      rating: // value for 'rating'
 *   },
 * });
 */
export function useRateBeerMutation(baseOptions?: Apollo.MutationHookOptions<RateBeerMutation, RateBeerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RateBeerMutation, RateBeerMutationVariables>(RateBeerDocument, options);
      }
export type RateBeerMutationHookResult = ReturnType<typeof useRateBeerMutation>;
export type RateBeerMutationResult = Apollo.MutationResult<RateBeerMutation>;
export type RateBeerMutationOptions = Apollo.BaseMutationOptions<RateBeerMutation, RateBeerMutationVariables>;
export const GetBeersDocument = gql`
    query getBeers($skip: Int!, $sort: BeerOrder!, $filter: BeerFilter) {
  beers(take: 20, skip: $skip, orderBy: $sort, filter: $filter) {
    name
    rating
    id
    brand
    type
    abv
  }
}
    `;

/**
 * __useGetBeersQuery__
 *
 * To run a query within a React component, call `useGetBeersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBeersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBeersQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      sort: // value for 'sort'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetBeersQuery(baseOptions: Apollo.QueryHookOptions<GetBeersQuery, GetBeersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBeersQuery, GetBeersQueryVariables>(GetBeersDocument, options);
      }
export function useGetBeersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBeersQuery, GetBeersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBeersQuery, GetBeersQueryVariables>(GetBeersDocument, options);
        }
export type GetBeersQueryHookResult = ReturnType<typeof useGetBeersQuery>;
export type GetBeersLazyQueryHookResult = ReturnType<typeof useGetBeersLazyQuery>;
export type GetBeersQueryResult = Apollo.QueryResult<GetBeersQuery, GetBeersQueryVariables>;