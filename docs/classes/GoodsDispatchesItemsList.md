[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesItemsList

# Class: GoodsDispatchesItemsList

Describes the message consisting of the list of goods dispatch items

**`Generated`**

from message Genesis.GoodsDispatchesItemsList

## Hierarchy

- `Message`<[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)\>

  ↳ **`GoodsDispatchesItemsList`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesItemsList.md#constructor)

### Properties

- [list](GoodsDispatchesItemsList.md#list)
- [fields](GoodsDispatchesItemsList.md#fields)
- [runtime](GoodsDispatchesItemsList.md#runtime)
- [typeName](GoodsDispatchesItemsList.md#typename)

### Methods

- [clone](GoodsDispatchesItemsList.md#clone)
- [equals](GoodsDispatchesItemsList.md#equals)
- [fromBinary](GoodsDispatchesItemsList.md#frombinary)
- [fromJson](GoodsDispatchesItemsList.md#fromjson)
- [fromJsonString](GoodsDispatchesItemsList.md#fromjsonstring)
- [getType](GoodsDispatchesItemsList.md#gettype)
- [toBinary](GoodsDispatchesItemsList.md#tobinary)
- [toJSON](GoodsDispatchesItemsList.md#tojson)
- [toJson](GoodsDispatchesItemsList.md#tojson-1)
- [toJsonString](GoodsDispatchesItemsList.md#tojsonstring)
- [equals](GoodsDispatchesItemsList.md#equals-1)
- [fromBinary](GoodsDispatchesItemsList.md#frombinary-1)
- [fromJson](GoodsDispatchesItemsList.md#fromjson-1)
- [fromJsonString](GoodsDispatchesItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesItemsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)\> |

#### Overrides

Message&lt;GoodsDispatchesItemsList\&gt;.constructor

#### Defined in

[src/goods_dispatches_pb.ts:871](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L871)

## Properties

### list

• **list**: [`GoodsDispatchItem`](GoodsDispatchItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.GoodsDispatchItem list = 1;

#### Defined in

[src/goods_dispatches_pb.ts:869](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L869)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches_pb.ts:878](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L878)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches_pb.ts:876](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L876)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsDispatchesItemsList"``

#### Defined in

[src/goods_dispatches_pb.ts:877](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L877)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md) \| `PlainMessage`<[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

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

[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md) \| `PlainMessage`<[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md) \| `PlainMessage`<[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches_pb.ts:894](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L894)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

#### Defined in

[src/goods_dispatches_pb.ts:882](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L882)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

#### Defined in

[src/goods_dispatches_pb.ts:886](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L886)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesItemsList`](GoodsDispatchesItemsList.md)

#### Defined in

[src/goods_dispatches_pb.ts:890](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L890)
