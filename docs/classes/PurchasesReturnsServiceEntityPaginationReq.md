[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesReturnsServiceEntityPaginationReq

# Class: PurchasesReturnsServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.PurchasesReturnsServiceEntityPaginationReq

## Hierarchy

- `Message`<[`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md)\>

  ↳ **`PurchasesReturnsServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](PurchasesReturnsServiceEntityPaginationReq.md#constructor)

### Properties

- [count](PurchasesReturnsServiceEntityPaginationReq.md#count)
- [entityUuid](PurchasesReturnsServiceEntityPaginationReq.md#entityuuid)
- [isActive](PurchasesReturnsServiceEntityPaginationReq.md#isactive)
- [offset](PurchasesReturnsServiceEntityPaginationReq.md#offset)
- [sortKey](PurchasesReturnsServiceEntityPaginationReq.md#sortkey)
- [sortOrder](PurchasesReturnsServiceEntityPaginationReq.md#sortorder)
- [fields](PurchasesReturnsServiceEntityPaginationReq.md#fields)
- [runtime](PurchasesReturnsServiceEntityPaginationReq.md#runtime)
- [typeName](PurchasesReturnsServiceEntityPaginationReq.md#typename)

### Methods

- [clone](PurchasesReturnsServiceEntityPaginationReq.md#clone)
- [equals](PurchasesReturnsServiceEntityPaginationReq.md#equals)
- [fromBinary](PurchasesReturnsServiceEntityPaginationReq.md#frombinary)
- [fromJson](PurchasesReturnsServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](PurchasesReturnsServiceEntityPaginationReq.md#fromjsonstring)
- [getType](PurchasesReturnsServiceEntityPaginationReq.md#gettype)
- [toBinary](PurchasesReturnsServiceEntityPaginationReq.md#tobinary)
- [toJSON](PurchasesReturnsServiceEntityPaginationReq.md#tojson)
- [toJson](PurchasesReturnsServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](PurchasesReturnsServiceEntityPaginationReq.md#tojsonstring)
- [equals](PurchasesReturnsServiceEntityPaginationReq.md#equals-1)
- [fromBinary](PurchasesReturnsServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](PurchasesReturnsServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](PurchasesReturnsServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesReturnsServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;PurchasesReturnsServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/purchases_returns_pb.ts:1172](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1172)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/purchases_returns_pb.ts:1142](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1142)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/purchases_returns_pb.ts:1170](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1170)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/purchases_returns_pb.ts:1135](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1135)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/purchases_returns_pb.ts:1149](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1149)

___

### sortKey

• **sortKey**: [`PURCHASE_RETURN_SORT_KEY`](../enums/PURCHASE_RETURN_SORT_KEY.md) = `PURCHASE_RETURN_SORT_KEY.PURCHASE_RETURN_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PURCHASE_RETURN_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_returns_pb.ts:1163](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1163)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/purchases_returns_pb.ts:1156](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1156)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_returns_pb.ts:1179](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1179)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_returns_pb.ts:1177](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1177)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesReturnsServiceEntityPaginationReq"``

#### Defined in

[src/purchases_returns_pb.ts:1178](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1178)

## Methods

### clone

▸ **clone**(): [`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md) \| `PlainMessage`<[`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md)

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

[`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md) \| `PlainMessage`<[`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md) \| `PlainMessage`<[`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_returns_pb.ts:1200](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1200)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md)

#### Defined in

[src/purchases_returns_pb.ts:1188](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1188)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md)

#### Defined in

[src/purchases_returns_pb.ts:1192](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1192)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceEntityPaginationReq`](PurchasesReturnsServiceEntityPaginationReq.md)

#### Defined in

[src/purchases_returns_pb.ts:1196](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L1196)
