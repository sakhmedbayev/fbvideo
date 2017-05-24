import gql from 'graphql-tag';

export default gql`
    query getCount {
        count {
            amount
        }
    }
`;
