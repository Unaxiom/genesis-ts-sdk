[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AttendancesAmendmentsServicePaginationResponse

# Class: AttendancesAmendmentsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.AttendancesAmendmentsServicePaginationResponse

## Hierarchy

- `Message`<[`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md)\>

  ↳ **`AttendancesAmendmentsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](AttendancesAmendmentsServicePaginationResponse.md#constructor)

### Properties

- [count](AttendancesAmendmentsServicePaginationResponse.md#count)
- [offset](AttendancesAmendmentsServicePaginationResponse.md#offset)
- [payload](AttendancesAmendmentsServicePaginationResponse.md#payload)
- [total](AttendancesAmendmentsServicePaginationResponse.md#total)
- [fields](AttendancesAmendmentsServicePaginationResponse.md#fields)
- [runtime](AttendancesAmendmentsServicePaginationResponse.md#runtime)
- [typeName](AttendancesAmendmentsServicePaginationResponse.md#typename)

### Methods

- [clone](AttendancesAmendmentsServicePaginationResponse.md#clone)
- [equals](AttendancesAmendmentsServicePaginationResponse.md#equals)
- [fromBinary](AttendancesAmendmentsServicePaginationResponse.md#frombinary)
- [fromJson](AttendancesAmendmentsServicePaginationResponse.md#fromjson)
- [fromJsonString](AttendancesAmendmentsServicePaginationResponse.md#fromjsonstring)
- [getType](AttendancesAmendmentsServicePaginationResponse.md#gettype)
- [toBinary](AttendancesAmendmentsServicePaginationResponse.md#tobinary)
- [toJSON](AttendancesAmendmentsServicePaginationResponse.md#tojson)
- [toJson](AttendancesAmendmentsServicePaginationResponse.md#tojson-1)
- [toJsonString](AttendancesAmendmentsServicePaginationResponse.md#tojsonstring)
- [equals](AttendancesAmendmentsServicePaginationResponse.md#equals-1)
- [fromBinary](AttendancesAmendmentsServicePaginationResponse.md#frombinary-1)
- [fromJson](AttendancesAmendmentsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](AttendancesAmendmentsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendancesAmendmentsServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md)\> |

#### Overrides

Message&lt;AttendancesAmendmentsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/attendances_amendments_pb.ts:683](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L683)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/attendances_amendments_pb.ts:660](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L660)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/attendances_amendments_pb.ts:667](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L667)

___

### payload

• **payload**: [`AttendanceAmendment`](AttendanceAmendment.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.AttendanceAmendment payload = 4;

#### Defined in

[src/attendances_amendments_pb.ts:681](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L681)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/attendances_amendments_pb.ts:674](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L674)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/attendances_amendments_pb.ts:690](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L690)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/attendances_amendments_pb.ts:688](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L688)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AttendancesAmendmentsServicePaginationResponse"``

#### Defined in

[src/attendances_amendments_pb.ts:689](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L689)

## Methods

### clone

▸ **clone**(): [`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md) \| `PlainMessage`<[`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md)

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

[`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md) \| `PlainMessage`<[`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md) \| `PlainMessage`<[`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/attendances_amendments_pb.ts:709](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L709)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md)

#### Defined in

[src/attendances_amendments_pb.ts:697](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L697)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md)

#### Defined in

[src/attendances_amendments_pb.ts:701](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L701)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServicePaginationResponse`](AttendancesAmendmentsServicePaginationResponse.md)

#### Defined in

[src/attendances_amendments_pb.ts:705](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L705)
