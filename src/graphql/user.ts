import { graphql } from "react-relay";

export const USER = graphql`
  query userQuery($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`;

export const USERS = graphql`
  query usersQuery {
    users {
      id
      name
      email
    }
  }
`;
