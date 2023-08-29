[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesList

# Class: SalesEnquiriesList

Describes the message consisting of the list of sales enquiries

**`Generated`**

from message Genesis.SalesEnquiriesList

## Hierarchy

- `Message`<[`SalesEnquiriesList`](SalesEnquiriesList.md)\>

  ↳ **`SalesEnquiriesList`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesList.md#constructor)

### Properties

- [list](SalesEnquiriesList.md#list)
- [fields](SalesEnquiriesList.md#fields)
- [runtime](SalesEnquiriesList.md#runtime)
- [typeName](SalesEnquiriesList.md#typename)

### Methods

- [clone](SalesEnquiriesList.md#clone)
- [equals](SalesEnquiriesList.md#equals)
- [fromBinary](SalesEnquiriesList.md#frombinary)
- [fromJson](SalesEnquiriesList.md#fromjson)
- [fromJsonString](SalesEnquiriesList.md#fromjsonstring)
- [getType](SalesEnquiriesList.md#gettype)
- [toBinary](SalesEnquiriesList.md#tobinary)
- [toJSON](SalesEnquiriesList.md#tojson)
- [toJson](SalesEnquiriesList.md#tojson-1)
- [toJsonString](SalesEnquiriesList.md#tojsonstring)
- [equals](SalesEnquiriesList.md#equals-1)
- [fromBinary](SalesEnquiriesList.md#frombinary-1)
- [fromJson](SalesEnquiriesList.md#fromjson-1)
- [fromJsonString](SalesEnquiriesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesEnquiriesList`](SalesEnquiriesList.md)\> |

#### Overrides

Message&lt;SalesEnquiriesList\&gt;.constructor

#### Defined in

[src/sales_enquiries_pb.ts:1008](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1008)

## Properties

### list

• **list**: [`SalesEnquiry`](SalesEnquiry.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.SalesEnquiry list = 1;

#### Defined in

[src/sales_enquiries_pb.ts:1006](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1006)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries_pb.ts:1015](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1015)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries_pb.ts:1013](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1013)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesEnquiriesList"``

#### Defined in

[src/sales_enquiries_pb.ts:1014](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1014)

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesList`](SalesEnquiriesList.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesList`](SalesEnquiriesList.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesList`](SalesEnquiriesList.md) \| `PlainMessage`<[`SalesEnquiriesList`](SalesEnquiriesList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesList`](SalesEnquiriesList.md)

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

[`SalesEnquiriesList`](SalesEnquiriesList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesList`](SalesEnquiriesList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesList`](SalesEnquiriesList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesList`](SalesEnquiriesList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesList`](SalesEnquiriesList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesEnquiriesList`](SalesEnquiriesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesEnquiriesList`](SalesEnquiriesList.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesList`](SalesEnquiriesList.md) \| `PlainMessage`<[`SalesEnquiriesList`](SalesEnquiriesList.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesList`](SalesEnquiriesList.md) \| `PlainMessage`<[`SalesEnquiriesList`](SalesEnquiriesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries_pb.ts:1031](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1031)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesList`](SalesEnquiriesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesList`](SalesEnquiriesList.md)

#### Defined in

[src/sales_enquiries_pb.ts:1019](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1019)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesList`](SalesEnquiriesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesList`](SalesEnquiriesList.md)

#### Defined in

[src/sales_enquiries_pb.ts:1023](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1023)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesList`](SalesEnquiriesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesList`](SalesEnquiriesList.md)

#### Defined in

[src/sales_enquiries_pb.ts:1027](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L1027)
