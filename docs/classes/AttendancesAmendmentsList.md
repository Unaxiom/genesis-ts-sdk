[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AttendancesAmendmentsList

# Class: AttendancesAmendmentsList

Describes the message consisting of the list of records

**`Generated`**

from message Genesis.AttendancesAmendmentsList

## Hierarchy

- `Message`<[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)\>

  ↳ **`AttendancesAmendmentsList`**

## Table of contents

### Constructors

- [constructor](AttendancesAmendmentsList.md#constructor)

### Properties

- [list](AttendancesAmendmentsList.md#list)
- [fields](AttendancesAmendmentsList.md#fields)
- [runtime](AttendancesAmendmentsList.md#runtime)
- [typeName](AttendancesAmendmentsList.md#typename)

### Methods

- [clone](AttendancesAmendmentsList.md#clone)
- [equals](AttendancesAmendmentsList.md#equals)
- [fromBinary](AttendancesAmendmentsList.md#frombinary)
- [fromJson](AttendancesAmendmentsList.md#fromjson)
- [fromJsonString](AttendancesAmendmentsList.md#fromjsonstring)
- [getType](AttendancesAmendmentsList.md#gettype)
- [toBinary](AttendancesAmendmentsList.md#tobinary)
- [toJSON](AttendancesAmendmentsList.md#tojson)
- [toJson](AttendancesAmendmentsList.md#tojson-1)
- [toJsonString](AttendancesAmendmentsList.md#tojsonstring)
- [equals](AttendancesAmendmentsList.md#equals-1)
- [fromBinary](AttendancesAmendmentsList.md#frombinary-1)
- [fromJson](AttendancesAmendmentsList.md#fromjson-1)
- [fromJsonString](AttendancesAmendmentsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendancesAmendmentsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)\> |

#### Overrides

Message&lt;AttendancesAmendmentsList\&gt;.constructor

#### Defined in

[src/attendances_amendments_pb.ts:538](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L538)

## Properties

### list

• **list**: [`AttendanceAmendment`](AttendanceAmendment.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.AttendanceAmendment list = 1;

#### Defined in

[src/attendances_amendments_pb.ts:536](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L536)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/attendances_amendments_pb.ts:545](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L545)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/attendances_amendments_pb.ts:543](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L543)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AttendancesAmendmentsList"``

#### Defined in

[src/attendances_amendments_pb.ts:544](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L544)

## Methods

### clone

▸ **clone**(): [`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

Create a deep copy.

#### Returns

[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

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
| `other` | `undefined` \| ``null`` \| [`AttendancesAmendmentsList`](AttendancesAmendmentsList.md) \| `PlainMessage`<[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

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

[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)\>

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
| `a` | `undefined` \| [`AttendancesAmendmentsList`](AttendancesAmendmentsList.md) \| `PlainMessage`<[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)\> |
| `b` | `undefined` \| [`AttendancesAmendmentsList`](AttendancesAmendmentsList.md) \| `PlainMessage`<[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/attendances_amendments_pb.ts:561](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L561)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

#### Defined in

[src/attendances_amendments_pb.ts:549](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L549)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

#### Defined in

[src/attendances_amendments_pb.ts:553](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L553)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsList`](AttendancesAmendmentsList.md)

#### Defined in

[src/attendances_amendments_pb.ts:557](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L557)
