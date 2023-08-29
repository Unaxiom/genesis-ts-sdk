[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsServiceEntityPaginationReq

# Class: PurchasesIndentsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.PurchasesIndentsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md)\>

  ↳ **`PurchasesIndentsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](PurchasesIndentsServiceEntityPaginationReq.md#count)
- [entityUuid](PurchasesIndentsServiceEntityPaginationReq.md#entityuuid)
- [isActive](PurchasesIndentsServiceEntityPaginationReq.md#isactive)
- [offset](PurchasesIndentsServiceEntityPaginationReq.md#offset)
- [sortKey](PurchasesIndentsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](PurchasesIndentsServiceEntityPaginationReq.md#sortorder)
- [fields](PurchasesIndentsServiceEntityPaginationReq.md#fields)
- [runtime](PurchasesIndentsServiceEntityPaginationReq.md#runtime)
- [typeName](PurchasesIndentsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](PurchasesIndentsServiceEntityPaginationReq.md#clone)
- [equals](PurchasesIndentsServiceEntityPaginationReq.md#equals)
- [fromBinary](PurchasesIndentsServiceEntityPaginationReq.md#frombinary)
- [fromJson](PurchasesIndentsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](PurchasesIndentsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](PurchasesIndentsServiceEntityPaginationReq.md#gettype)
- [toBinary](PurchasesIndentsServiceEntityPaginationReq.md#tobinary)
- [toJSON](PurchasesIndentsServiceEntityPaginationReq.md#tojson)
- [toJson](PurchasesIndentsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](PurchasesIndentsServiceEntityPaginationReq.md#tojsonstring)
- [equals](PurchasesIndentsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](PurchasesIndentsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](PurchasesIndentsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](PurchasesIndentsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;PurchasesIndentsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/purchases_indents_pb.ts:1221](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1221)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/purchases_indents_pb.ts:1191](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1191)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/purchases_indents_pb.ts:1219](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1219)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/purchases_indents_pb.ts:1184](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1184)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/purchases_indents_pb.ts:1198](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1198)

___

### sortKey

• **sortKey**: [`PURCHASE_INDENT_SORT_KEY`](../enums/PURCHASE_INDENT_SORT_KEY.md) = `PURCHASE_INDENT_SORT_KEY.PURCHASE_INDENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PURCHASE_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_indents_pb.ts:1212](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1212)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/purchases_indents_pb.ts:1205](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1205)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_indents_pb.ts:1228](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1228)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_indents_pb.ts:1226](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1226)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesIndentsServiceEntityPaginationReq"``

#### Defined in

[src/purchases_indents_pb.ts:1227](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1227)

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md)

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

[`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md) \| `PlainMessage`<[`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_indents_pb.ts:1249](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1249)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md)

#### Defined in

[src/purchases_indents_pb.ts:1237](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1237)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md)

#### Defined in

[src/purchases_indents_pb.ts:1241](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1241)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceEntityPaginationReq`](PurchasesIndentsServiceEntityPaginationReq.md)

#### Defined in

[src/purchases_indents_pb.ts:1245](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1245)
