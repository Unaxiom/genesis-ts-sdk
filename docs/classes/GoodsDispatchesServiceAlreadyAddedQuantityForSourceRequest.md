[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest

# Class: GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest

Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id

**`Generated`**

from message Genesis.GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest

## Hierarchy

- `Message`<[`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md)\>

  ↳ **`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md#constructor)

### Properties

- [familyId](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md#familyid)
- [refFrom](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md#reffrom)
- [refId](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md#refid)
- [fields](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md#fields)
- [runtime](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md#runtime)
- [typeName](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md#typename)

### Methods

- [clone](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md#clone)
- [equals](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md#equals)
- [fromBinary](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md#frombinary)
- [fromJson](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md#fromjson)
- [fromJsonString](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring)
- [getType](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md#gettype)
- [toBinary](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md#tobinary)
- [toJSON](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md#tojson)
- [toJson](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md#tojson-1)
- [toJsonString](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md#tojsonstring)
- [equals](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md#equals-1)
- [fromBinary](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md#frombinary-1)
- [fromJson](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Overrides

Message&lt;GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest\&gt;.constructor

#### Defined in

[src/goods_dispatches_pb.ts:1027](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1027)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The associated family ID

**`Generated`**

from field: int64 family_id = 3;

#### Defined in

[src/goods_dispatches_pb.ts:1025](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1025)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 1;

#### Defined in

[src/goods_dispatches_pb.ts:1011](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1011)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 2;

#### Defined in

[src/goods_dispatches_pb.ts:1018](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1018)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches_pb.ts:1034](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1034)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches_pb.ts:1032](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1032)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest"``

#### Defined in

[src/goods_dispatches_pb.ts:1033](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1033)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`<[`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md)

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

[`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`<[`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`<[`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches_pb.ts:1052](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1052)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

[src/goods_dispatches_pb.ts:1040](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1040)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

[src/goods_dispatches_pb.ts:1044](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1044)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest`](GoodsDispatchesServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

[src/goods_dispatches_pb.ts:1048](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L1048)
