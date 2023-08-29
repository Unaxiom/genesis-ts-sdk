[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesReturnsItemsList

# Class: SalesReturnsItemsList

Describes the message consisting of the list of sales return items

**`Generated`**

from message Genesis.SalesReturnsItemsList

## Hierarchy

- `Message`<[`SalesReturnsItemsList`](SalesReturnsItemsList.md)\>

  ↳ **`SalesReturnsItemsList`**

## Table of contents

### Constructors

- [constructor](SalesReturnsItemsList.md#constructor)

### Properties

- [list](SalesReturnsItemsList.md#list)
- [fields](SalesReturnsItemsList.md#fields)
- [runtime](SalesReturnsItemsList.md#runtime)
- [typeName](SalesReturnsItemsList.md#typename)

### Methods

- [clone](SalesReturnsItemsList.md#clone)
- [equals](SalesReturnsItemsList.md#equals)
- [fromBinary](SalesReturnsItemsList.md#frombinary)
- [fromJson](SalesReturnsItemsList.md#fromjson)
- [fromJsonString](SalesReturnsItemsList.md#fromjsonstring)
- [getType](SalesReturnsItemsList.md#gettype)
- [toBinary](SalesReturnsItemsList.md#tobinary)
- [toJSON](SalesReturnsItemsList.md#tojson)
- [toJson](SalesReturnsItemsList.md#tojson-1)
- [toJsonString](SalesReturnsItemsList.md#tojsonstring)
- [equals](SalesReturnsItemsList.md#equals-1)
- [fromBinary](SalesReturnsItemsList.md#frombinary-1)
- [fromJson](SalesReturnsItemsList.md#fromjson-1)
- [fromJsonString](SalesReturnsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnsItemsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesReturnsItemsList`](SalesReturnsItemsList.md)\> |

#### Overrides

Message&lt;SalesReturnsItemsList\&gt;.constructor

#### Defined in

[src/sales_returns_pb.ts:789](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L789)

## Properties

### list

• **list**: [`SalesReturnItem`](SalesReturnItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.SalesReturnItem list = 1;

#### Defined in

[src/sales_returns_pb.ts:787](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L787)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_returns_pb.ts:796](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L796)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_returns_pb.ts:794](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L794)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesReturnsItemsList"``

#### Defined in

[src/sales_returns_pb.ts:795](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L795)

## Methods

### clone

▸ **clone**(): [`SalesReturnsItemsList`](SalesReturnsItemsList.md)

Create a deep copy.

#### Returns

[`SalesReturnsItemsList`](SalesReturnsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnsItemsList`](SalesReturnsItemsList.md) \| `PlainMessage`<[`SalesReturnsItemsList`](SalesReturnsItemsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnsItemsList`](SalesReturnsItemsList.md)

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

[`SalesReturnsItemsList`](SalesReturnsItemsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnsItemsList`](SalesReturnsItemsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsItemsList`](SalesReturnsItemsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsItemsList`](SalesReturnsItemsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsItemsList`](SalesReturnsItemsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesReturnsItemsList`](SalesReturnsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesReturnsItemsList`](SalesReturnsItemsList.md)\>

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
| `a` | `undefined` \| [`SalesReturnsItemsList`](SalesReturnsItemsList.md) \| `PlainMessage`<[`SalesReturnsItemsList`](SalesReturnsItemsList.md)\> |
| `b` | `undefined` \| [`SalesReturnsItemsList`](SalesReturnsItemsList.md) \| `PlainMessage`<[`SalesReturnsItemsList`](SalesReturnsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_returns_pb.ts:812](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L812)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesReturnsItemsList`](SalesReturnsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnsItemsList`](SalesReturnsItemsList.md)

#### Defined in

[src/sales_returns_pb.ts:800](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L800)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesReturnsItemsList`](SalesReturnsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsItemsList`](SalesReturnsItemsList.md)

#### Defined in

[src/sales_returns_pb.ts:804](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L804)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsItemsList`](SalesReturnsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsItemsList`](SalesReturnsItemsList.md)

#### Defined in

[src/sales_returns_pb.ts:808](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L808)
