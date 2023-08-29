[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / RolesServicePaginationResponse

# Class: RolesServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.RolesServicePaginationResponse

## Hierarchy

- `Message`<[`RolesServicePaginationResponse`](RolesServicePaginationResponse.md)\>

  ↳ **`RolesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](RolesServicePaginationResponse.md#constructor)

### Properties

- [count](RolesServicePaginationResponse.md#count)
- [offset](RolesServicePaginationResponse.md#offset)
- [payload](RolesServicePaginationResponse.md#payload)
- [total](RolesServicePaginationResponse.md#total)
- [fields](RolesServicePaginationResponse.md#fields)
- [runtime](RolesServicePaginationResponse.md#runtime)
- [typeName](RolesServicePaginationResponse.md#typename)

### Methods

- [clone](RolesServicePaginationResponse.md#clone)
- [equals](RolesServicePaginationResponse.md#equals)
- [fromBinary](RolesServicePaginationResponse.md#frombinary)
- [fromJson](RolesServicePaginationResponse.md#fromjson)
- [fromJsonString](RolesServicePaginationResponse.md#fromjsonstring)
- [getType](RolesServicePaginationResponse.md#gettype)
- [toBinary](RolesServicePaginationResponse.md#tobinary)
- [toJSON](RolesServicePaginationResponse.md#tojson)
- [toJson](RolesServicePaginationResponse.md#tojson-1)
- [toJsonString](RolesServicePaginationResponse.md#tojsonstring)
- [equals](RolesServicePaginationResponse.md#equals-1)
- [fromBinary](RolesServicePaginationResponse.md#frombinary-1)
- [fromJson](RolesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](RolesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new RolesServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`RolesServicePaginationResponse`](RolesServicePaginationResponse.md)\> |

#### Overrides

Message&lt;RolesServicePaginationResponse\&gt;.constructor

#### Defined in

[src/roles_pb.ts:774](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L774)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/roles_pb.ts:751](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L751)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/roles_pb.ts:758](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L758)

___

### payload

• **payload**: [`Role`](Role.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.Role payload = 4;

#### Defined in

[src/roles_pb.ts:772](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L772)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/roles_pb.ts:765](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L765)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/roles_pb.ts:781](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L781)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/roles_pb.ts:779](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L779)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.RolesServicePaginationResponse"``

#### Defined in

[src/roles_pb.ts:780](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L780)

## Methods

### clone

▸ **clone**(): [`RolesServicePaginationResponse`](RolesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`RolesServicePaginationResponse`](RolesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`RolesServicePaginationResponse`](RolesServicePaginationResponse.md) \| `PlainMessage`<[`RolesServicePaginationResponse`](RolesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RolesServicePaginationResponse`](RolesServicePaginationResponse.md)

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

[`RolesServicePaginationResponse`](RolesServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RolesServicePaginationResponse`](RolesServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServicePaginationResponse`](RolesServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RolesServicePaginationResponse`](RolesServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServicePaginationResponse`](RolesServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RolesServicePaginationResponse`](RolesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RolesServicePaginationResponse`](RolesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`RolesServicePaginationResponse`](RolesServicePaginationResponse.md) \| `PlainMessage`<[`RolesServicePaginationResponse`](RolesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`RolesServicePaginationResponse`](RolesServicePaginationResponse.md) \| `PlainMessage`<[`RolesServicePaginationResponse`](RolesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/roles_pb.ts:800](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L800)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RolesServicePaginationResponse`](RolesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RolesServicePaginationResponse`](RolesServicePaginationResponse.md)

#### Defined in

[src/roles_pb.ts:788](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L788)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RolesServicePaginationResponse`](RolesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServicePaginationResponse`](RolesServicePaginationResponse.md)

#### Defined in

[src/roles_pb.ts:792](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L792)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RolesServicePaginationResponse`](RolesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServicePaginationResponse`](RolesServicePaginationResponse.md)

#### Defined in

[src/roles_pb.ts:796](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L796)
