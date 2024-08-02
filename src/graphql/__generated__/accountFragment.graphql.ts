/**
 * @generated SignedSource<<3c4afeb5ab44b3cef35119932e6dc1f7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type accountFragment$data = {
  readonly accountNumber: string;
  readonly " $fragmentType": "accountFragment";
};
export type accountFragment$key = {
  readonly " $data"?: accountFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"accountFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "accountFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "accountNumber",
      "storageKey": null
    }
  ],
  "type": "Account",
  "abstractKey": null
};

(node as any).hash = "cfe387bc4b13e29461f50b7adcbee269";

export default node;
