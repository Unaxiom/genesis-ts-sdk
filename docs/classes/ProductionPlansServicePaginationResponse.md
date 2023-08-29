[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansServicePaginationResponse

# Class: ProductionPlansServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.ProductionPlansServicePaginationResponse

## Hierarchy

- `Message`<[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)\>

  ↳ **`ProductionPlansServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](ProductionPlansServicePaginationResponse.md#constructor)

### Properties

- [count](ProductionPlansServicePaginationResponse.md#count)
- [offset](ProductionPlansServicePaginationResponse.md#offset)
- [payload](ProductionPlansServicePaginationResponse.md#payload)
- [total](ProductionPlansServicePaginationResponse.md#total)
- [fields](ProductionPlansServicePaginationResponse.md#fields)
- [runtime](ProductionPlansServicePaginationResponse.md#runtime)
- [typeName](ProductionPlansServicePaginationResponse.md#typename)

### Methods

- [clone](ProductionPlansServicePaginationResponse.md#clone)
- [equals](ProductionPlansServicePaginationResponse.md#equals)
- [fromBinary](ProductionPlansServicePaginationResponse.md#frombinary)
- [fromJson](ProductionPlansServicePaginationResponse.md#fromjson)
- [fromJsonString](ProductionPlansServicePaginationResponse.md#fromjsonstring)
- [getType](ProductionPlansServicePaginationResponse.md#gettype)
- [toBinary](ProductionPlansServicePaginationResponse.md#tobinary)
- [toJSON](ProductionPlansServicePaginationResponse.md#tojson)
- [toJson](ProductionPlansServicePaginationResponse.md#tojson-1)
- [toJsonString](ProductionPlansServicePaginationResponse.md#tojsonstring)
- [equals](ProductionPlansServicePaginationResponse.md#equals-1)
- [fromBinary](ProductionPlansServicePaginationResponse.md#frombinary-1)
- [fromJson](ProductionPlansServicePaginationResponse.md#fromjson-1)
- [fromJsonString](ProductionPlansServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)\> |

#### Overrides

Message&lt;ProductionPlansServicePaginationResponse\&gt;.constructor

#### Defined in

[src/production_plans_pb.ts:1169](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1169)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/production_plans_pb.ts:1146](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1146)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/production_plans_pb.ts:1153](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1153)

___

### payload

• **payload**: [`ProductionPlan`](ProductionPlan.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.ProductionPlan payload = 4;

#### Defined in

[src/production_plans_pb.ts:1167](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1167)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/production_plans_pb.ts:1160](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1160)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans_pb.ts:1176](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1176)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans_pb.ts:1174](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1174)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionPlansServicePaginationResponse"``

#### Defined in

[src/production_plans_pb.ts:1175](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1175)

## Methods

### clone

▸ **clone**(): [`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md) \| `PlainMessage`<[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

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

[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md) \| `PlainMessage`<[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md) \| `PlainMessage`<[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_plans_pb.ts:1195](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1195)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

#### Defined in

[src/production_plans_pb.ts:1183](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1183)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

#### Defined in

[src/production_plans_pb.ts:1187](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1187)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansServicePaginationResponse`](ProductionPlansServicePaginationResponse.md)

#### Defined in

[src/production_plans_pb.ts:1191](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L1191)
