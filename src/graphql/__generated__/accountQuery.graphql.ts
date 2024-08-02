/**
 * @generated SignedSource<<a0ddc3ae6dffa75ec3ce1f0e6dc6100c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type accountQuery$variables = {
  userId: any;
};
export type accountQuery$data = {
  readonly account: {
    readonly " $fragmentSpreads": FragmentRefs<"accountFragment">;
  } | null | undefined;
};
export type accountQuery = {
  response: accountQuery$data;
  variables: accountQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "userId",
    "variableName": "userId"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "accountQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Account",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "accountFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "accountQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Account",
        "kind": "LinkedField",
        "name": "account",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "accountNumber",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8e399eab61910897b970c964df8df129",
    "id": null,
    "metadata": {},
    "name": "accountQuery",
    "operationKind": "query",
    "text": "query accountQuery(\n  $userId: ObjectID!\n) {\n  account(userId: $userId) {\n    ...accountFragment\n  }\n}\n\nfragment accountFragment on Account {\n  accountNumber\n}\n"
  }
};
})();

(node as any).hash = "1a8b86b95c2baceccea29c2599ec0938";

export default node;
