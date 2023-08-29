[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentsServicePaginationReq

# Class: ProductionIndentsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.ProductionIndentsServicePaginationReq

## Hierarchy

- `Message`<[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)\>

  ↳ **`ProductionIndentsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ProductionIndentsServicePaginationReq.md#constructor)

### Properties

- [count](ProductionIndentsServicePaginationReq.md#count)
- [isActive](ProductionIndentsServicePaginationReq.md#isactive)
- [offset](ProductionIndentsServicePaginationReq.md#offset)
- [sortKey](ProductionIndentsServicePaginationReq.md#sortkey)
- [sortOrder](ProductionIndentsServicePaginationReq.md#sortorder)
- [status](ProductionIndentsServicePaginationReq.md#status)
- [fields](ProductionIndentsServicePaginationReq.md#fields)
- [runtime](ProductionIndentsServicePaginationReq.md#runtime)
- [typeName](ProductionIndentsServicePaginationReq.md#typename)

### Methods

- [clone](ProductionIndentsServicePaginationReq.md#clone)
- [equals](ProductionIndentsServicePaginationReq.md#equals)
- [fromBinary](ProductionIndentsServicePaginationReq.md#frombinary)
- [fromJson](ProductionIndentsServicePaginationReq.md#fromjson)
- [fromJsonString](ProductionIndentsServicePaginationReq.md#fromjsonstring)
- [getType](ProductionIndentsServicePaginationReq.md#gettype)
- [toBinary](ProductionIndentsServicePaginationReq.md#tobinary)
- [toJSON](ProductionIndentsServicePaginationReq.md#tojson)
- [toJson](ProductionIndentsServicePaginationReq.md#tojson-1)
- [toJsonString](ProductionIndentsServicePaginationReq.md#tojsonstring)
- [equals](ProductionIndentsServicePaginationReq.md#equals-1)
- [fromBinary](ProductionIndentsServicePaginationReq.md#frombinary-1)
- [fromJson](ProductionIndentsServicePaginationReq.md#fromjson-1)
- [fromJsonString](ProductionIndentsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)\> |

#### Overrides

Message&lt;ProductionIndentsServicePaginationReq\&gt;.constructor

#### Defined in

[src/production_indents_pb.ts:997](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L997)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/production_indents_pb.ts:967](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L967)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/production_indents_pb.ts:960](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L960)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/production_indents_pb.ts:974](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L974)

___

### sortKey

• **sortKey**: [`PRODUCTION_INDENT_SORT_KEY`](../enums/PRODUCTION_INDENT_SORT_KEY.md) = `PRODUCTION_INDENT_SORT_KEY.PRODUCTION_INDENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PRODUCTION_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/production_indents_pb.ts:988](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L988)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/production_indents_pb.ts:981](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L981)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this production indent

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/production_indents_pb.ts:995](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L995)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_indents_pb.ts:1004](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1004)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_indents_pb.ts:1002](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1002)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionIndentsServicePaginationReq"``

#### Defined in

[src/production_indents_pb.ts:1003](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1003)

## Methods

### clone

▸ **clone**(): [`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md) \| `PlainMessage`<[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

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

[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md) \| `PlainMessage`<[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md) \| `PlainMessage`<[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_indents_pb.ts:1025](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1025)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

#### Defined in

[src/production_indents_pb.ts:1013](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1013)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

#### Defined in

[src/production_indents_pb.ts:1017](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1017)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

#### Defined in

[src/production_indents_pb.ts:1021](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1021)
