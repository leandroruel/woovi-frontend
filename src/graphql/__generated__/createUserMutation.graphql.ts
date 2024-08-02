/**
 * @generated SignedSource<<18925ea02d1dc3c3c79aec9d8d25a7fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UserEnum = "Female" | "Male" | "%future added value";
export type UserRoleEnum = "Admin" | "User" | "%future added value";
export type CreateUserPayload = {
  birthdate: string;
  email: string;
  gender: UserEnum;
  name: string;
  password: string;
  role: UserRoleEnum;
  taxId: string;
};
export type createUserMutation$variables = {
  user: CreateUserPayload;
};
export type createUserMutation$data = {
  readonly createUser: {
    readonly user: {
      readonly id: string;
      readonly name: string;
    };
  } | null | undefined;
};
export type createUserMutation = {
  response: createUserMutation$data;
  variables: createUserMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "user"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "user",
        "variableName": "user"
      }
    ],
    "concreteType": "AuthUser",
    "kind": "LinkedField",
    "name": "createUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "60dbc4bee9cbf6a5539a557129087764",
    "id": null,
    "metadata": {},
    "name": "createUserMutation",
    "operationKind": "mutation",
    "text": "mutation createUserMutation(\n  $user: CreateUserPayload!\n) {\n  createUser(user: $user) {\n    user {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4972f9dc8e3015c9de506df46437f54f";

export default node;
