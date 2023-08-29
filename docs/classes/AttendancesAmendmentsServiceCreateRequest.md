[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AttendancesAmendmentsServiceCreateRequest

# Class: AttendancesAmendmentsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.AttendancesAmendmentsServiceCreateRequest

## Hierarchy

- `Message`<[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)\>

  ↳ **`AttendancesAmendmentsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](AttendancesAmendmentsServiceCreateRequest.md#constructor)

### Properties

- [amendmentEntryTimestamp](AttendancesAmendmentsServiceCreateRequest.md#amendmententrytimestamp)
- [amendmentExitTimestamp](AttendancesAmendmentsServiceCreateRequest.md#amendmentexittimestamp)
- [attendanceId](AttendancesAmendmentsServiceCreateRequest.md#attendanceid)
- [description](AttendancesAmendmentsServiceCreateRequest.md#description)
- [entityUuid](AttendancesAmendmentsServiceCreateRequest.md#entityuuid)
- [formData](AttendancesAmendmentsServiceCreateRequest.md#formdata)
- [referenceId](AttendancesAmendmentsServiceCreateRequest.md#referenceid)
- [userComment](AttendancesAmendmentsServiceCreateRequest.md#usercomment)
- [userId](AttendancesAmendmentsServiceCreateRequest.md#userid)
- [vaultFolderId](AttendancesAmendmentsServiceCreateRequest.md#vaultfolderid)
- [fields](AttendancesAmendmentsServiceCreateRequest.md#fields)
- [runtime](AttendancesAmendmentsServiceCreateRequest.md#runtime)
- [typeName](AttendancesAmendmentsServiceCreateRequest.md#typename)

### Methods

- [clone](AttendancesAmendmentsServiceCreateRequest.md#clone)
- [equals](AttendancesAmendmentsServiceCreateRequest.md#equals)
- [fromBinary](AttendancesAmendmentsServiceCreateRequest.md#frombinary)
- [fromJson](AttendancesAmendmentsServiceCreateRequest.md#fromjson)
- [fromJsonString](AttendancesAmendmentsServiceCreateRequest.md#fromjsonstring)
- [getType](AttendancesAmendmentsServiceCreateRequest.md#gettype)
- [toBinary](AttendancesAmendmentsServiceCreateRequest.md#tobinary)
- [toJSON](AttendancesAmendmentsServiceCreateRequest.md#tojson)
- [toJson](AttendancesAmendmentsServiceCreateRequest.md#tojson-1)
- [toJsonString](AttendancesAmendmentsServiceCreateRequest.md#tojsonstring)
- [equals](AttendancesAmendmentsServiceCreateRequest.md#equals-1)
- [fromBinary](AttendancesAmendmentsServiceCreateRequest.md#frombinary-1)
- [fromJson](AttendancesAmendmentsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](AttendancesAmendmentsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendancesAmendmentsServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)\> |

#### Overrides

Message&lt;AttendancesAmendmentsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/attendances_amendments_pb.ts:211](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L211)

## Properties

### amendmentEntryTimestamp

• **amendmentEntryTimestamp**: `bigint` = `protoInt64.zero`

The amended entry timestamp

**`Generated`**

from field: int64 amendment_entry_timestamp = 13;

#### Defined in

[src/attendances_amendments_pb.ts:188](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L188)

___

### amendmentExitTimestamp

• **amendmentExitTimestamp**: `bigint` = `protoInt64.zero`

The amended exit timestamp

**`Generated`**

from field: int64 amendment_exit_timestamp = 14;

#### Defined in

[src/attendances_amendments_pb.ts:195](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L195)

___

### attendanceId

• **attendanceId**: `bigint` = `protoInt64.zero`

The ID of the associated attendance that needs to be amended

**`Generated`**

from field: int64 attendance_id = 12;

#### Defined in

[src/attendances_amendments_pb.ts:181](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L181)

___

### description

• **description**: `string` = `""`

The description of the attendance amendment

**`Generated`**

from field: string description = 15;

#### Defined in

[src/attendances_amendments_pb.ts:202](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L202)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/attendances_amendments_pb.ts:146](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L146)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/attendances_amendments_pb.ts:209](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L209)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the attendance amendment

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/attendances_amendments_pb.ts:167](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L167)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/attendances_amendments_pb.ts:153](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L153)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for attendance amendment

**`Generated`**

from field: int64 user_id = 11;

#### Defined in

[src/attendances_amendments_pb.ts:174](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L174)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/attendances_amendments_pb.ts:160](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L160)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/attendances_amendments_pb.ts:218](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L218)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/attendances_amendments_pb.ts:216](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L216)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AttendancesAmendmentsServiceCreateRequest"``

#### Defined in

[src/attendances_amendments_pb.ts:217](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L217)

## Methods

### clone

▸ **clone**(): [`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md) \| `PlainMessage`<[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

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

[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md) \| `PlainMessage`<[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md) \| `PlainMessage`<[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/attendances_amendments_pb.ts:243](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L243)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

#### Defined in

[src/attendances_amendments_pb.ts:231](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L231)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

#### Defined in

[src/attendances_amendments_pb.ts:235](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L235)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceCreateRequest`](AttendancesAmendmentsServiceCreateRequest.md)

#### Defined in

[src/attendances_amendments_pb.ts:239](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L239)
