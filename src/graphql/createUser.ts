import { graphql } from "react-relay";

export const CREATE_USER = graphql`
  mutation createUserMutation($user: CreateUserPayload!) {
    createUser(user: $user) {
      user {
        id
        name
      }
    }
  }
`;
