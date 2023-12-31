[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchItemHistoryRequest

# Class: GoodsDispatchItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Genesis.GoodsDispatchItemHistoryRequest

## Hierarchy

- `Message`<[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)\>

  ↳ **`GoodsDispatchItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchItemHistoryRequest.md#constructor)

### Properties

- [familyId](GoodsDispatchItemHistoryRequest.md#familyid)
- [goodsDispatchId](GoodsDispatchItemHistoryRequest.md#goodsdispatchid)
- [fields](GoodsDispatchItemHistoryRequest.md#fields)
- [runtime](GoodsDispatchItemHistoryRequest.md#runtime)
- [typeName](GoodsDispatchItemHistoryRequest.md#typename)

### Methods

- [clone](GoodsDispatchItemHistoryRequest.md#clone)
- [equals](GoodsDispatchItemHistoryRequest.md#equals)
- [fromBinary](GoodsDispatchItemHistoryRequest.md#frombinary)
- [fromJson](GoodsDispatchItemHistoryRequest.md#fromjson)
- [fromJsonString](GoodsDispatchItemHistoryRequest.md#fromjsonstring)
- [getType](GoodsDispatchItemHistoryRequest.md#gettype)
- [toBinary](GoodsDispatchItemHistoryRequest.md#tobinary)
- [toJSON](GoodsDispatchItemHistoryRequest.md#tojson)
- [toJson](GoodsDispatchItemHistoryRequest.md#tojson-1)
- [toJsonString](GoodsDispatchItemHistoryRequest.md#tojsonstring)
- [equals](GoodsDispatchItemHistoryRequest.md#equals-1)
- [fromBinary](GoodsDispatchItemHistoryRequest.md#frombinary-1)
- [fromJson](GoodsDispatchItemHistoryRequest.md#fromjson-1)
- [fromJsonString](GoodsDispatchItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchItemHistoryRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)\> |

#### Overrides

Message&lt;GoodsDispatchItemHistoryRequest\&gt;.constructor

#### Defined in

[src/goods_dispatches_pb.ts:920](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L920)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/goods_dispatches_pb.ts:918](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L918)

___

### goodsDispatchId

• **goodsDispatchId**: `bigint` = `protoInt64.zero`

Stores the goods dispatch ID

**`Generated`**

from field: int64 goods_dispatch_id = 10;

#### Defined in

[src/goods_dispatches_pb.ts:911](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L911)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches_pb.ts:927](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L927)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches_pb.ts:925](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L925)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsDispatchItemHistoryRequest"``

#### Defined in

[src/goods_dispatches_pb.ts:926](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L926)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md) \| `PlainMessage`<[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

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

[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md) \| `PlainMessage`<[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md) \| `PlainMessage`<[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches_pb.ts:944](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L944)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

#### Defined in

[src/goods_dispatches_pb.ts:932](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L932)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

#### Defined in

[src/goods_dispatches_pb.ts:936](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L936)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItemHistoryRequest`](GoodsDispatchItemHistoryRequest.md)

#### Defined in

[src/goods_dispatches_pb.ts:940](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L940)
