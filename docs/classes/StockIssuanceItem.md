[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StockIssuanceItem

# Class: StockIssuanceItem

Describes the parameters that constitute an item associated to a stock issuance

**`Generated`**

from message Genesis.StockIssuanceItem

## Hierarchy

- `Message`<[`StockIssuanceItem`](StockIssuanceItem.md)\>

  ↳ **`StockIssuanceItem`**

## Table of contents

### Constructors

- [constructor](StockIssuanceItem.md#constructor)

### Properties

- [approvalMetadata](StockIssuanceItem.md#approvalmetadata)
- [entityUuid](StockIssuanceItem.md#entityuuid)
- [familyId](StockIssuanceItem.md#familyid)
- [internalQuantity](StockIssuanceItem.md#internalquantity)
- [itemHash](StockIssuanceItem.md#itemhash)
- [metadata](StockIssuanceItem.md#metadata)
- [needApproval](StockIssuanceItem.md#needapproval)
- [stockIssuanceId](StockIssuanceItem.md#stockissuanceid)
- [userComment](StockIssuanceItem.md#usercomment)
- [fields](StockIssuanceItem.md#fields)
- [runtime](StockIssuanceItem.md#runtime)
- [typeName](StockIssuanceItem.md#typename)

### Methods

- [clone](StockIssuanceItem.md#clone)
- [equals](StockIssuanceItem.md#equals)
- [fromBinary](StockIssuanceItem.md#frombinary)
- [fromJson](StockIssuanceItem.md#fromjson)
- [fromJsonString](StockIssuanceItem.md#fromjsonstring)
- [getType](StockIssuanceItem.md#gettype)
- [toBinary](StockIssuanceItem.md#tobinary)
- [toJSON](StockIssuanceItem.md#tojson)
- [toJson](StockIssuanceItem.md#tojson-1)
- [toJsonString](StockIssuanceItem.md#tojsonstring)
- [equals](StockIssuanceItem.md#equals-1)
- [fromBinary](StockIssuanceItem.md#frombinary-1)
- [fromJson](StockIssuanceItem.md#fromjson-1)
- [fromJsonString](StockIssuanceItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuanceItem**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StockIssuanceItem`](StockIssuanceItem.md)\> |

#### Overrides

Message&lt;StockIssuanceItem\&gt;.constructor

#### Defined in

[src/stock_issuances_pb.ts:672](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L672)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/stock_issuances_pb.ts:628](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L628)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/stock_issuances_pb.ts:614](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L614)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/stock_issuances_pb.ts:656](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L656)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: int64 internal_quantity = 12;

#### Defined in

[src/stock_issuances_pb.ts:663](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L663)

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 13;

#### Defined in

[src/stock_issuances_pb.ts:670](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L670)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this stock issuance

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/stock_issuances_pb.ts:621](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L621)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/stock_issuances_pb.ts:635](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L635)

___

### stockIssuanceId

• **stockIssuanceId**: `bigint` = `protoInt64.zero`

Stores the stock issuance ID

**`Generated`**

from field: int64 stock_issuance_id = 10;

#### Defined in

[src/stock_issuances_pb.ts:649](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L649)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/stock_issuances_pb.ts:642](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L642)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances_pb.ts:679](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L679)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances_pb.ts:677](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L677)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.StockIssuanceItem"``

#### Defined in

[src/stock_issuances_pb.ts:678](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L678)

## Methods

### clone

▸ **clone**(): [`StockIssuanceItem`](StockIssuanceItem.md)

Create a deep copy.

#### Returns

[`StockIssuanceItem`](StockIssuanceItem.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuanceItem`](StockIssuanceItem.md) \| `PlainMessage`<[`StockIssuanceItem`](StockIssuanceItem.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuanceItem`](StockIssuanceItem.md)

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

[`StockIssuanceItem`](StockIssuanceItem.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuanceItem`](StockIssuanceItem.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuanceItem`](StockIssuanceItem.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuanceItem`](StockIssuanceItem.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuanceItem`](StockIssuanceItem.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StockIssuanceItem`](StockIssuanceItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StockIssuanceItem`](StockIssuanceItem.md)\>

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
| `a` | `undefined` \| [`StockIssuanceItem`](StockIssuanceItem.md) \| `PlainMessage`<[`StockIssuanceItem`](StockIssuanceItem.md)\> |
| `b` | `undefined` \| [`StockIssuanceItem`](StockIssuanceItem.md) \| `PlainMessage`<[`StockIssuanceItem`](StockIssuanceItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances_pb.ts:703](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L703)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StockIssuanceItem`](StockIssuanceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StockIssuanceItem`](StockIssuanceItem.md)

#### Defined in

[src/stock_issuances_pb.ts:691](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L691)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StockIssuanceItem`](StockIssuanceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuanceItem`](StockIssuanceItem.md)

#### Defined in

[src/stock_issuances_pb.ts:695](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L695)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StockIssuanceItem`](StockIssuanceItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuanceItem`](StockIssuanceItem.md)

#### Defined in

[src/stock_issuances_pb.ts:699](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L699)
