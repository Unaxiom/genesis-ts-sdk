[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchaseReturn

# Class: PurchaseReturn

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.PurchaseReturn

## Hierarchy

- `Message`<[`PurchaseReturn`](PurchaseReturn.md)\>

  ↳ **`PurchaseReturn`**

## Table of contents

### Constructors

- [constructor](PurchaseReturn.md#constructor)

### Properties

- [approvalMetadata](PurchaseReturn.md#approvalmetadata)
- [completedOn](PurchaseReturn.md#completedon)
- [entityUuid](PurchaseReturn.md#entityuuid)
- [finalRefNumber](PurchaseReturn.md#finalrefnumber)
- [formData](PurchaseReturn.md#formdata)
- [list](PurchaseReturn.md#list)
- [logs](PurchaseReturn.md#logs)
- [metadata](PurchaseReturn.md#metadata)
- [refFrom](PurchaseReturn.md#reffrom)
- [refId](PurchaseReturn.md#refid)
- [referenceId](PurchaseReturn.md#referenceid)
- [status](PurchaseReturn.md#status)
- [vaultFolderId](PurchaseReturn.md#vaultfolderid)
- [fields](PurchaseReturn.md#fields)
- [runtime](PurchaseReturn.md#runtime)
- [typeName](PurchaseReturn.md#typename)

### Methods

- [clone](PurchaseReturn.md#clone)
- [equals](PurchaseReturn.md#equals)
- [fromBinary](PurchaseReturn.md#frombinary)
- [fromJson](PurchaseReturn.md#fromjson)
- [fromJsonString](PurchaseReturn.md#fromjsonstring)
- [getType](PurchaseReturn.md#gettype)
- [toBinary](PurchaseReturn.md#tobinary)
- [toJSON](PurchaseReturn.md#tojson)
- [toJson](PurchaseReturn.md#tojson-1)
- [toJsonString](PurchaseReturn.md#tojsonstring)
- [equals](PurchaseReturn.md#equals-1)
- [fromBinary](PurchaseReturn.md#frombinary-1)
- [fromJson](PurchaseReturn.md#fromjson-1)
- [fromJsonString](PurchaseReturn.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseReturn**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchaseReturn`](PurchaseReturn.md)\> |

#### Overrides

Message&lt;PurchaseReturn\&gt;.constructor

#### Defined in

[src/purchases_returns_pb.ts:399](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L399)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/purchases_returns_pb.ts:327](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L327)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this purchase return was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/purchases_returns_pb.ts:348](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L348)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/purchases_returns_pb.ts:313](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L313)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/purchases_returns_pb.ts:369](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L369)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatum form_data = 30;

#### Defined in

[src/purchases_returns_pb.ts:397](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L397)

___

### list

• **list**: [`PurchaseReturnItem`](PurchaseReturnItem.md)[] = `[]`

The list of associated purchase return items

**`Generated`**

from field: repeated Genesis.PurchaseReturnItem list = 20;

#### Defined in

[src/purchases_returns_pb.ts:390](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L390)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this purchase return

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/purchases_returns_pb.ts:341](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L341)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this purchase return

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/purchases_returns_pb.ts:320](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L320)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 12;

#### Defined in

[src/purchases_returns_pb.ts:376](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L376)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 13;

#### Defined in

[src/purchases_returns_pb.ts:383](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L383)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase return

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/purchases_returns_pb.ts:362](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L362)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this purchase return

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/purchases_returns_pb.ts:334](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L334)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/purchases_returns_pb.ts:355](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L355)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_returns_pb.ts:406](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L406)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_returns_pb.ts:404](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L404)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchaseReturn"``

#### Defined in

[src/purchases_returns_pb.ts:405](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L405)

## Methods

### clone

▸ **clone**(): [`PurchaseReturn`](PurchaseReturn.md)

Create a deep copy.

#### Returns

[`PurchaseReturn`](PurchaseReturn.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:27

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`PurchaseReturn`](PurchaseReturn.md) \| `PlainMessage`<[`PurchaseReturn`](PurchaseReturn.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseReturn`](PurchaseReturn.md)

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchaseReturn`](PurchaseReturn.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseReturn`](PurchaseReturn.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchaseReturn`](PurchaseReturn.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseReturn`](PurchaseReturn.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchaseReturn`](PurchaseReturn.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchaseReturn`](PurchaseReturn.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchaseReturn`](PurchaseReturn.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:80

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:49

___

### toJSON

▸ `Protected` **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:74

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:54

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:58

___

### equals

▸ `Static` **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`PurchaseReturn`](PurchaseReturn.md) \| `PlainMessage`<[`PurchaseReturn`](PurchaseReturn.md)\> |
| `b` | `undefined` \| [`PurchaseReturn`](PurchaseReturn.md) \| `PlainMessage`<[`PurchaseReturn`](PurchaseReturn.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_returns_pb.ts:434](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L434)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchaseReturn`](PurchaseReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchaseReturn`](PurchaseReturn.md)

#### Defined in

[src/purchases_returns_pb.ts:422](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L422)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchaseReturn`](PurchaseReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchaseReturn`](PurchaseReturn.md)

#### Defined in

[src/purchases_returns_pb.ts:426](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L426)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchaseReturn`](PurchaseReturn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchaseReturn`](PurchaseReturn.md)

#### Defined in

[src/purchases_returns_pb.ts:430](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L430)
