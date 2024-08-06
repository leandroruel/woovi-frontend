import { graphql } from "react-relay";

/**
 * Mutation to logout the user
 * revokes the user's token
 */
export const LOGOUT_MUTATION = graphql`
  mutation logoutMutation {
    logout
  }
`;
