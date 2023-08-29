[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QCGroupsServicePaginationResponse

# Class: QCGroupsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.QCGroupsServicePaginationResponse

## Hierarchy

- `Message`<[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)\>

  ↳ **`QCGroupsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](QCGroupsServicePaginationResponse.md#constructor)

### Properties

- [count](QCGroupsServicePaginationResponse.md#count)
- [offset](QCGroupsServicePaginationResponse.md#offset)
- [payload](QCGroupsServicePaginationResponse.md#payload)
- [total](QCGroupsServicePaginationResponse.md#total)
- [fields](QCGroupsServicePaginationResponse.md#fields)
- [runtime](QCGroupsServicePaginationResponse.md#runtime)
- [typeName](QCGroupsServicePaginationResponse.md#typename)

### Methods

- [clone](QCGroupsServicePaginationResponse.md#clone)
- [equals](QCGroupsServicePaginationResponse.md#equals)
- [fromBinary](QCGroupsServicePaginationResponse.md#frombinary)
- [fromJson](QCGroupsServicePaginationResponse.md#fromjson)
- [fromJsonString](QCGroupsServicePaginationResponse.md#fromjsonstring)
- [getType](QCGroupsServicePaginationResponse.md#gettype)
- [toBinary](QCGroupsServicePaginationResponse.md#tobinary)
- [toJSON](QCGroupsServicePaginationResponse.md#tojson)
- [toJson](QCGroupsServicePaginationResponse.md#tojson-1)
- [toJsonString](QCGroupsServicePaginationResponse.md#tojsonstring)
- [equals](QCGroupsServicePaginationResponse.md#equals-1)
- [fromBinary](QCGroupsServicePaginationResponse.md#frombinary-1)
- [fromJson](QCGroupsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](QCGroupsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroupsServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)\> |

#### Overrides

Message&lt;QCGroupsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/qc_groups_pb.ts:1104](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1104)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/qc_groups_pb.ts:1081](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1081)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/qc_groups_pb.ts:1088](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1088)

___

### payload

• **payload**: [`QCGroup`](QCGroup.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.QCGroup payload = 4;

#### Defined in

[src/qc_groups_pb.ts:1102](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1102)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/qc_groups_pb.ts:1095](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1095)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_groups_pb.ts:1111](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1111)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_groups_pb.ts:1109](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1109)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QCGroupsServicePaginationResponse"``

#### Defined in

[src/qc_groups_pb.ts:1110](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1110)

## Methods

### clone

▸ **clone**(): [`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md) \| `PlainMessage`<[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

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

[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md) \| `PlainMessage`<[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md) \| `PlainMessage`<[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_groups_pb.ts:1130](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1130)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

#### Defined in

[src/qc_groups_pb.ts:1118](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1118)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

#### Defined in

[src/qc_groups_pb.ts:1122](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1122)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServicePaginationResponse`](QCGroupsServicePaginationResponse.md)

#### Defined in

[src/qc_groups_pb.ts:1126](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L1126)
