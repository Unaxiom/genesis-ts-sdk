[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServicePaginationResponse

# Class: GoodsDispatchesServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.GoodsDispatchesServicePaginationResponse

## Hierarchy

- `Message`<[`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md)\>

  ↳ **`GoodsDispatchesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServicePaginationResponse.md#constructor)

### Properties

- [count](GoodsDispatchesServicePaginationResponse.md#count)
- [offset](GoodsDispatchesServicePaginationResponse.md#offset)
- [payload](GoodsDispatchesServicePaginationResponse.md#payload)
- [total](GoodsDispatchesServicePaginationResponse.md#total)
- [fields](GoodsDispatchesServicePaginationResponse.md#fields)
- [runtime](GoodsDispatchesServicePaginationResponse.md#runtime)
- [typeName](GoodsDispatchesServicePaginationResponse.md#typename)

### Methods

- [clone](GoodsDispatchesServicePaginationResponse.md#clone)
- [equals](GoodsDispatchesServicePaginationResponse.md#equals)
- [fromBinary](GoodsDispatchesServicePaginationResponse.md#frombinary)
- [fromJson](GoodsDispatchesServicePaginationResponse.md#fromjson)
- [fromJsonString](GoodsDispatchesServicePaginationResponse.md#fromjsonstring)
- [getType](GoodsDispatchesServicePaginationResponse.md#gettype)
- [toBinary](GoodsDispatchesServicePaginationResponse.md#tobinary)
- [toJSON](GoodsDispatchesServicePaginationResponse.md#tojson)
- [toJson](GoodsDispatchesServicePaginationResponse.md#tojson-1)
- [toJsonString](GoodsDispatchesServicePaginationResponse.md#tojsonstring)
- [equals](GoodsDispatchesServicePaginationResponse.md#equals-1)
- [fromBinary](GoodsDispatchesServicePaginationResponse.md#frombinary-1)
- [fromJson](GoodsDispatchesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md)\> |

#### Overrides

Message&lt;GoodsDispatchesServicePaginationResponse\&gt;.constructor

#### Defined in

[src/goods_dispatches_pb.ts:1174](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1174)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/goods_dispatches_pb.ts:1151](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1151)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/goods_dispatches_pb.ts:1158](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1158)

___

### payload

• **payload**: [`GoodsDispatch`](GoodsDispatch.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.GoodsDispatch payload = 4;

#### Defined in

[src/goods_dispatches_pb.ts:1172](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1172)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/goods_dispatches_pb.ts:1165](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1165)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches_pb.ts:1181](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1181)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches_pb.ts:1179](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1179)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsDispatchesServicePaginationResponse"``

#### Defined in

[src/goods_dispatches_pb.ts:1180](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1180)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md) \| `PlainMessage`<[`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md)

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

[`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md) \| `PlainMessage`<[`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md) \| `PlainMessage`<[`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches_pb.ts:1200](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1200)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md)

#### Defined in

[src/goods_dispatches_pb.ts:1188](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1188)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md)

#### Defined in

[src/goods_dispatches_pb.ts:1192](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1192)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServicePaginationResponse`](GoodsDispatchesServicePaginationResponse.md)

#### Defined in

[src/goods_dispatches_pb.ts:1196](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1196)
