[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesReturnsServiceAlreadyAddedQuantityForSourceRequest

# Class: SalesReturnsServiceAlreadyAddedQuantityForSourceRequest

Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id

**`Generated`**

from message Genesis.SalesReturnsServiceAlreadyAddedQuantityForSourceRequest

## Hierarchy

- `Message`<[`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\>

  ↳ **`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`**

## Table of contents

### Constructors

- [constructor](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#constructor)

### Properties

- [familyId](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#familyid)
- [refFrom](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#reffrom)
- [refId](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#refid)
- [fields](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fields)
- [runtime](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#runtime)
- [typeName](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#typename)

### Methods

- [clone](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#clone)
- [equals](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#equals)
- [fromBinary](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#frombinary)
- [fromJson](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fromjson)
- [fromJsonString](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring)
- [getType](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#gettype)
- [toBinary](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#tobinary)
- [toJSON](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#tojson)
- [toJson](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#tojson-1)
- [toJsonString](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#tojsonstring)
- [equals](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#equals-1)
- [fromBinary](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#frombinary-1)
- [fromJson](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fromjson-1)
- [fromJsonString](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnsServiceAlreadyAddedQuantityForSourceRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Overrides

Message&lt;SalesReturnsServiceAlreadyAddedQuantityForSourceRequest\&gt;.constructor

#### Defined in

[src/sales_returns_pb.ts:945](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L945)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The associated family ID

**`Generated`**

from field: int64 family_id = 3;

#### Defined in

[src/sales_returns_pb.ts:943](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L943)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 1;

#### Defined in

[src/sales_returns_pb.ts:929](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L929)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 2;

#### Defined in

[src/sales_returns_pb.ts:936](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L936)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_returns_pb.ts:952](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L952)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_returns_pb.ts:950](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L950)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesReturnsServiceAlreadyAddedQuantityForSourceRequest"``

#### Defined in

[src/sales_returns_pb.ts:951](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L951)

## Methods

### clone

▸ **clone**(): [`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

Create a deep copy.

#### Returns

[`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`<[`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

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

[`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\>

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
| `a` | `undefined` \| [`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`<[`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\> |
| `b` | `undefined` \| [`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`<[`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_returns_pb.ts:970](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L970)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

[src/sales_returns_pb.ts:958](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L958)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

[src/sales_returns_pb.ts:962](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L962)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceAlreadyAddedQuantityForSourceRequest`](SalesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

[src/sales_returns_pb.ts:966](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L966)
