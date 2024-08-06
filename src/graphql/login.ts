import { graphql } from "react-relay";

export const LOGIN_MUTATION = graphql`
  mutation loginMutation($input: LoginInput!) {
    login(input: $input) {
      token
    }
  }
`;
