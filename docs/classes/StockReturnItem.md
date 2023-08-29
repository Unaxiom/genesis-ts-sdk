[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StockReturnItem

# Class: StockReturnItem

Describes the parameters that constitute an item associated to a stock return

**`Generated`**

from message Genesis.StockReturnItem

## Hierarchy

- `Message`<[`StockReturnItem`](StockReturnItem.md)\>

  ↳ **`StockReturnItem`**

## Table of contents

### Constructors

- [constructor](StockReturnItem.md#constructor)

### Properties

- [approvalMetadata](StockReturnItem.md#approvalmetadata)
- [entityUuid](StockReturnItem.md#entityuuid)
- [familyId](StockReturnItem.md#familyid)
- [internalQuantity](StockReturnItem.md#internalquantity)
- [itemHash](StockReturnItem.md#itemhash)
- [metadata](StockReturnItem.md#metadata)
- [needApproval](StockReturnItem.md#needapproval)
- [remainingDimensions](StockReturnItem.md#remainingdimensions)
- [stockReturnId](StockReturnItem.md#stockreturnid)
- [userComment](StockReturnItem.md#usercomment)
- [fields](StockReturnItem.md#fields)
- [runtime](StockReturnItem.md#runtime)
- [typeName](StockReturnItem.md#typename)

### Methods

- [clone](StockReturnItem.md#clone)
- [equals](StockReturnItem.md#equals)
- [fromBinary](StockReturnItem.md#frombinary)
- [fromJson](StockReturnItem.md#fromjson)
- [fromJsonString](StockReturnItem.md#fromjsonstring)
- [getType](StockReturnItem.md#gettype)
- [toBinary](StockReturnItem.md#tobinary)
- [toJSON](StockReturnItem.md#tojson)
- [toJson](StockReturnItem.md#tojson-1)
- [toJsonString](StockReturnItem.md#tojsonstring)
- [equals](StockReturnItem.md#equals-1)
- [fromBinary](StockReturnItem.md#frombinary-1)
- [fromJson](StockReturnItem.md#fromjson-1)
- [fromJsonString](StockReturnItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockReturnItem**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StockReturnItem`](StockReturnItem.md)\> |

#### Overrides

Message&lt;StockReturnItem\&gt;.constructor

#### Defined in

[src/stock_returns_pb.ts:637](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L637)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/stock_returns_pb.ts:586](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L586)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/stock_returns_pb.ts:572](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L572)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/stock_returns_pb.ts:614](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L614)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: int64 internal_quantity = 12;

#### Defined in

[src/stock_returns_pb.ts:621](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L621)

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 13;

#### Defined in

[src/stock_returns_pb.ts:628](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L628)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this stock return

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/stock_returns_pb.ts:579](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L579)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/stock_returns_pb.ts:593](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L593)

___

### remainingDimensions

• **remainingDimensions**: `string` = `""`

The remaining dimensions of the item (if applicable)

**`Generated`**

from field: string remaining_dimensions = 14;

#### Defined in

[src/stock_returns_pb.ts:635](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L635)

___

### stockReturnId

• **stockReturnId**: `bigint` = `protoInt64.zero`

Stores the stock return ID

**`Generated`**

from field: int64 stock_return_id = 10;

#### Defined in

[src/stock_returns_pb.ts:607](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L607)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/stock_returns_pb.ts:600](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L600)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_returns_pb.ts:644](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L644)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_returns_pb.ts:642](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L642)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.StockReturnItem"``

#### Defined in

[src/stock_returns_pb.ts:643](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L643)

## Methods

### clone

▸ **clone**(): [`StockReturnItem`](StockReturnItem.md)

Create a deep copy.

#### Returns

[`StockReturnItem`](StockReturnItem.md)

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
| `other` | `undefined` \| ``null`` \| [`StockReturnItem`](StockReturnItem.md) \| `PlainMessage`<[`StockReturnItem`](StockReturnItem.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockReturnItem`](StockReturnItem.md)

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

[`StockReturnItem`](StockReturnItem.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockReturnItem`](StockReturnItem.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnItem`](StockReturnItem.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockReturnItem`](StockReturnItem.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnItem`](StockReturnItem.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StockReturnItem`](StockReturnItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StockReturnItem`](StockReturnItem.md)\>

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
| `a` | `undefined` \| [`StockReturnItem`](StockReturnItem.md) \| `PlainMessage`<[`StockReturnItem`](StockReturnItem.md)\> |
| `b` | `undefined` \| [`StockReturnItem`](StockReturnItem.md) \| `PlainMessage`<[`StockReturnItem`](StockReturnItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_returns_pb.ts:669](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L669)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StockReturnItem`](StockReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StockReturnItem`](StockReturnItem.md)

#### Defined in

[src/stock_returns_pb.ts:657](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L657)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StockReturnItem`](StockReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnItem`](StockReturnItem.md)

#### Defined in

[src/stock_returns_pb.ts:661](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L661)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StockReturnItem`](StockReturnItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnItem`](StockReturnItem.md)

#### Defined in

[src/stock_returns_pb.ts:665](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L665)
