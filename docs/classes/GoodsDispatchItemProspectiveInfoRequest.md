[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchItemProspectiveInfoRequest

# Class: GoodsDispatchItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective goods dispatch item

**`Generated`**

from message Genesis.GoodsDispatchItemProspectiveInfoRequest

## Hierarchy

- `Message`<[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)\>

  ↳ **`GoodsDispatchItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchItemProspectiveInfoRequest.md#constructor)

### Properties

- [familyId](GoodsDispatchItemProspectiveInfoRequest.md#familyid)
- [goodsDispatchId](GoodsDispatchItemProspectiveInfoRequest.md#goodsdispatchid)
- [fields](GoodsDispatchItemProspectiveInfoRequest.md#fields)
- [runtime](GoodsDispatchItemProspectiveInfoRequest.md#runtime)
- [typeName](GoodsDispatchItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](GoodsDispatchItemProspectiveInfoRequest.md#clone)
- [equals](GoodsDispatchItemProspectiveInfoRequest.md#equals)
- [fromBinary](GoodsDispatchItemProspectiveInfoRequest.md#frombinary)
- [fromJson](GoodsDispatchItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](GoodsDispatchItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](GoodsDispatchItemProspectiveInfoRequest.md#gettype)
- [toBinary](GoodsDispatchItemProspectiveInfoRequest.md#tobinary)
- [toJSON](GoodsDispatchItemProspectiveInfoRequest.md#tojson)
- [toJson](GoodsDispatchItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](GoodsDispatchItemProspectiveInfoRequest.md#tojsonstring)
- [equals](GoodsDispatchItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](GoodsDispatchItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](GoodsDispatchItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](GoodsDispatchItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchItemProspectiveInfoRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)\> |

#### Overrides

Message&lt;GoodsDispatchItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

[src/goods_dispatches_pb.ts:970](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L970)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/goods_dispatches_pb.ts:968](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L968)

___

### goodsDispatchId

• **goodsDispatchId**: `bigint` = `protoInt64.zero`

Stores the goods dispatch ID

**`Generated`**

from field: int64 goods_dispatch_id = 10;

#### Defined in

[src/goods_dispatches_pb.ts:961](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L961)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches_pb.ts:977](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L977)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches_pb.ts:975](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L975)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsDispatchItemProspectiveInfoRequest"``

#### Defined in

[src/goods_dispatches_pb.ts:976](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L976)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md) \| `PlainMessage`<[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

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

[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md) \| `PlainMessage`<[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md) \| `PlainMessage`<[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches_pb.ts:994](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L994)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

#### Defined in

[src/goods_dispatches_pb.ts:982](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L982)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

#### Defined in

[src/goods_dispatches_pb.ts:986](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L986)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItemProspectiveInfoRequest`](GoodsDispatchItemProspectiveInfoRequest.md)

#### Defined in

[src/goods_dispatches_pb.ts:990](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L990)
