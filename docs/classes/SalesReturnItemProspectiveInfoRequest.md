[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesReturnItemProspectiveInfoRequest

# Class: SalesReturnItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective sales return item

**`Generated`**

from message Genesis.SalesReturnItemProspectiveInfoRequest

## Hierarchy

- `Message`<[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)\>

  ↳ **`SalesReturnItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](SalesReturnItemProspectiveInfoRequest.md#constructor)

### Properties

- [familyId](SalesReturnItemProspectiveInfoRequest.md#familyid)
- [salesReturnId](SalesReturnItemProspectiveInfoRequest.md#salesreturnid)
- [fields](SalesReturnItemProspectiveInfoRequest.md#fields)
- [runtime](SalesReturnItemProspectiveInfoRequest.md#runtime)
- [typeName](SalesReturnItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](SalesReturnItemProspectiveInfoRequest.md#clone)
- [equals](SalesReturnItemProspectiveInfoRequest.md#equals)
- [fromBinary](SalesReturnItemProspectiveInfoRequest.md#frombinary)
- [fromJson](SalesReturnItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](SalesReturnItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](SalesReturnItemProspectiveInfoRequest.md#gettype)
- [toBinary](SalesReturnItemProspectiveInfoRequest.md#tobinary)
- [toJSON](SalesReturnItemProspectiveInfoRequest.md#tojson)
- [toJson](SalesReturnItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](SalesReturnItemProspectiveInfoRequest.md#tojsonstring)
- [equals](SalesReturnItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](SalesReturnItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](SalesReturnItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](SalesReturnItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnItemProspectiveInfoRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)\> |

#### Overrides

Message&lt;SalesReturnItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

[src/sales_returns_pb.ts:888](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L888)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/sales_returns_pb.ts:886](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L886)

___

### salesReturnId

• **salesReturnId**: `bigint` = `protoInt64.zero`

Stores the sales return ID

**`Generated`**

from field: int64 sales_return_id = 10;

#### Defined in

[src/sales_returns_pb.ts:879](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L879)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_returns_pb.ts:895](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L895)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_returns_pb.ts:893](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L893)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesReturnItemProspectiveInfoRequest"``

#### Defined in

[src/sales_returns_pb.ts:894](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L894)

## Methods

### clone

▸ **clone**(): [`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md) \| `PlainMessage`<[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

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

[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md) \| `PlainMessage`<[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md) \| `PlainMessage`<[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_returns_pb.ts:912](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L912)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

#### Defined in

[src/sales_returns_pb.ts:900](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L900)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

#### Defined in

[src/sales_returns_pb.ts:904](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L904)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnItemProspectiveInfoRequest`](SalesReturnItemProspectiveInfoRequest.md)

#### Defined in

[src/sales_returns_pb.ts:908](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L908)
