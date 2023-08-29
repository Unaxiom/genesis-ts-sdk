[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesReturnsList

# Class: SalesReturnsList

Describes the message consisting of the list of sales returns

**`Generated`**

from message Genesis.SalesReturnsList

## Hierarchy

- `Message`<[`SalesReturnsList`](SalesReturnsList.md)\>

  ↳ **`SalesReturnsList`**

## Table of contents

### Constructors

- [constructor](SalesReturnsList.md#constructor)

### Properties

- [list](SalesReturnsList.md#list)
- [fields](SalesReturnsList.md#fields)
- [runtime](SalesReturnsList.md#runtime)
- [typeName](SalesReturnsList.md#typename)

### Methods

- [clone](SalesReturnsList.md#clone)
- [equals](SalesReturnsList.md#equals)
- [fromBinary](SalesReturnsList.md#frombinary)
- [fromJson](SalesReturnsList.md#fromjson)
- [fromJsonString](SalesReturnsList.md#fromjsonstring)
- [getType](SalesReturnsList.md#gettype)
- [toBinary](SalesReturnsList.md#tobinary)
- [toJSON](SalesReturnsList.md#tojson)
- [toJson](SalesReturnsList.md#tojson-1)
- [toJsonString](SalesReturnsList.md#tojsonstring)
- [equals](SalesReturnsList.md#equals-1)
- [fromBinary](SalesReturnsList.md#frombinary-1)
- [fromJson](SalesReturnsList.md#fromjson-1)
- [fromJsonString](SalesReturnsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesReturnsList`](SalesReturnsList.md)\> |

#### Overrides

Message&lt;SalesReturnsList\&gt;.constructor

#### Defined in

[src/sales_returns_pb.ts:747](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L747)

## Properties

### list

• **list**: [`SalesReturn`](SalesReturn.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.SalesReturn list = 1;

#### Defined in

[src/sales_returns_pb.ts:745](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L745)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_returns_pb.ts:754](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L754)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_returns_pb.ts:752](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L752)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesReturnsList"``

#### Defined in

[src/sales_returns_pb.ts:753](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L753)

## Methods

### clone

▸ **clone**(): [`SalesReturnsList`](SalesReturnsList.md)

Create a deep copy.

#### Returns

[`SalesReturnsList`](SalesReturnsList.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnsList`](SalesReturnsList.md) \| `PlainMessage`<[`SalesReturnsList`](SalesReturnsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnsList`](SalesReturnsList.md)

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

[`SalesReturnsList`](SalesReturnsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnsList`](SalesReturnsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsList`](SalesReturnsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsList`](SalesReturnsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsList`](SalesReturnsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesReturnsList`](SalesReturnsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesReturnsList`](SalesReturnsList.md)\>

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
| `a` | `undefined` \| [`SalesReturnsList`](SalesReturnsList.md) \| `PlainMessage`<[`SalesReturnsList`](SalesReturnsList.md)\> |
| `b` | `undefined` \| [`SalesReturnsList`](SalesReturnsList.md) \| `PlainMessage`<[`SalesReturnsList`](SalesReturnsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_returns_pb.ts:770](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L770)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesReturnsList`](SalesReturnsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnsList`](SalesReturnsList.md)

#### Defined in

[src/sales_returns_pb.ts:758](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L758)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesReturnsList`](SalesReturnsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsList`](SalesReturnsList.md)

#### Defined in

[src/sales_returns_pb.ts:762](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L762)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsList`](SalesReturnsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsList`](SalesReturnsList.md)

#### Defined in

[src/sales_returns_pb.ts:766](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L766)
