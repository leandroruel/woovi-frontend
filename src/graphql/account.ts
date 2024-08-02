import { graphql } from "react-relay";

export const ACCOUNT_FRAGMENT = graphql`
  fragment accountFragment on Account {
    accountNumber
  }
`;

export const ACCOUNT_QUERY = graphql`
  query accountQuery($userId: ObjectID!) {
    accountByUserId(userId: $userId) {
      ...accountFragment
    }
  }
`;