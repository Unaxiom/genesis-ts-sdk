[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesList

# Class: GoodsDispatchesList

Describes the message consisting of the list of goods dispatches

**`Generated`**

from message Genesis.GoodsDispatchesList

## Hierarchy

- `Message`<[`GoodsDispatchesList`](GoodsDispatchesList.md)\>

  ↳ **`GoodsDispatchesList`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesList.md#constructor)

### Properties

- [list](GoodsDispatchesList.md#list)
- [fields](GoodsDispatchesList.md#fields)
- [runtime](GoodsDispatchesList.md#runtime)
- [typeName](GoodsDispatchesList.md#typename)

### Methods

- [clone](GoodsDispatchesList.md#clone)
- [equals](GoodsDispatchesList.md#equals)
- [fromBinary](GoodsDispatchesList.md#frombinary)
- [fromJson](GoodsDispatchesList.md#fromjson)
- [fromJsonString](GoodsDispatchesList.md#fromjsonstring)
- [getType](GoodsDispatchesList.md#gettype)
- [toBinary](GoodsDispatchesList.md#tobinary)
- [toJSON](GoodsDispatchesList.md#tojson)
- [toJson](GoodsDispatchesList.md#tojson-1)
- [toJsonString](GoodsDispatchesList.md#tojsonstring)
- [equals](GoodsDispatchesList.md#equals-1)
- [fromBinary](GoodsDispatchesList.md#frombinary-1)
- [fromJson](GoodsDispatchesList.md#fromjson-1)
- [fromJsonString](GoodsDispatchesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsDispatchesList`](GoodsDispatchesList.md)\> |

#### Overrides

Message&lt;GoodsDispatchesList\&gt;.constructor

#### Defined in

[src/goods_dispatches_pb.ts:829](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L829)

## Properties

### list

• **list**: [`GoodsDispatch`](GoodsDispatch.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.GoodsDispatch list = 1;

#### Defined in

[src/goods_dispatches_pb.ts:827](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L827)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches_pb.ts:836](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L836)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches_pb.ts:834](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L834)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsDispatchesList"``

#### Defined in

[src/goods_dispatches_pb.ts:835](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L835)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesList`](GoodsDispatchesList.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesList`](GoodsDispatchesList.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesList`](GoodsDispatchesList.md) \| `PlainMessage`<[`GoodsDispatchesList`](GoodsDispatchesList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesList`](GoodsDispatchesList.md)

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

[`GoodsDispatchesList`](GoodsDispatchesList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesList`](GoodsDispatchesList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesList`](GoodsDispatchesList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesList`](GoodsDispatchesList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesList`](GoodsDispatchesList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsDispatchesList`](GoodsDispatchesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsDispatchesList`](GoodsDispatchesList.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesList`](GoodsDispatchesList.md) \| `PlainMessage`<[`GoodsDispatchesList`](GoodsDispatchesList.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesList`](GoodsDispatchesList.md) \| `PlainMessage`<[`GoodsDispatchesList`](GoodsDispatchesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches_pb.ts:852](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L852)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesList`](GoodsDispatchesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesList`](GoodsDispatchesList.md)

#### Defined in

[src/goods_dispatches_pb.ts:840](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L840)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesList`](GoodsDispatchesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesList`](GoodsDispatchesList.md)

#### Defined in

[src/goods_dispatches_pb.ts:844](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L844)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesList`](GoodsDispatchesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesList`](GoodsDispatchesList.md)

#### Defined in

[src/goods_dispatches_pb.ts:848](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_dispatches_pb.ts#L848)
