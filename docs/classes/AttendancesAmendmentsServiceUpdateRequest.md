[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AttendancesAmendmentsServiceUpdateRequest

# Class: AttendancesAmendmentsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Genesis.AttendancesAmendmentsServiceUpdateRequest

## Hierarchy

- `Message`<[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)\>

  ↳ **`AttendancesAmendmentsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](AttendancesAmendmentsServiceUpdateRequest.md#constructor)

### Properties

- [amendmentEntryTimestamp](AttendancesAmendmentsServiceUpdateRequest.md#amendmententrytimestamp)
- [amendmentExitTimestamp](AttendancesAmendmentsServiceUpdateRequest.md#amendmentexittimestamp)
- [description](AttendancesAmendmentsServiceUpdateRequest.md#description)
- [formData](AttendancesAmendmentsServiceUpdateRequest.md#formdata)
- [id](AttendancesAmendmentsServiceUpdateRequest.md#id)
- [notifyUsers](AttendancesAmendmentsServiceUpdateRequest.md#notifyusers)
- [referenceId](AttendancesAmendmentsServiceUpdateRequest.md#referenceid)
- [userComment](AttendancesAmendmentsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](AttendancesAmendmentsServiceUpdateRequest.md#vaultfolderid)
- [fields](AttendancesAmendmentsServiceUpdateRequest.md#fields)
- [runtime](AttendancesAmendmentsServiceUpdateRequest.md#runtime)
- [typeName](AttendancesAmendmentsServiceUpdateRequest.md#typename)

### Methods

- [clone](AttendancesAmendmentsServiceUpdateRequest.md#clone)
- [equals](AttendancesAmendmentsServiceUpdateRequest.md#equals)
- [fromBinary](AttendancesAmendmentsServiceUpdateRequest.md#frombinary)
- [fromJson](AttendancesAmendmentsServiceUpdateRequest.md#fromjson)
- [fromJsonString](AttendancesAmendmentsServiceUpdateRequest.md#fromjsonstring)
- [getType](AttendancesAmendmentsServiceUpdateRequest.md#gettype)
- [toBinary](AttendancesAmendmentsServiceUpdateRequest.md#tobinary)
- [toJSON](AttendancesAmendmentsServiceUpdateRequest.md#tojson)
- [toJson](AttendancesAmendmentsServiceUpdateRequest.md#tojson-1)
- [toJsonString](AttendancesAmendmentsServiceUpdateRequest.md#tojsonstring)
- [equals](AttendancesAmendmentsServiceUpdateRequest.md#equals-1)
- [fromBinary](AttendancesAmendmentsServiceUpdateRequest.md#frombinary-1)
- [fromJson](AttendancesAmendmentsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](AttendancesAmendmentsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendancesAmendmentsServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;AttendancesAmendmentsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/attendances_amendments_pb.ts:318](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L318)

## Properties

### amendmentEntryTimestamp

• **amendmentEntryTimestamp**: `bigint` = `protoInt64.zero`

The amended entry timestamp

**`Generated`**

from field: int64 amendment_entry_timestamp = 12;

#### Defined in

[src/attendances_amendments_pb.ts:295](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L295)

___

### amendmentExitTimestamp

• **amendmentExitTimestamp**: `bigint` = `protoInt64.zero`

The amended exit timestamp

**`Generated`**

from field: int64 amendment_exit_timestamp = 13;

#### Defined in

[src/attendances_amendments_pb.ts:302](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L302)

___

### description

• **description**: `string` = `""`

The description of the attendance amendment

**`Generated`**

from field: string description = 14;

#### Defined in

[src/attendances_amendments_pb.ts:309](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L309)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/attendances_amendments_pb.ts:316](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L316)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/attendances_amendments_pb.ts:267](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L267)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/attendances_amendments_pb.ts:274](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L274)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the attendance amendment

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/attendances_amendments_pb.ts:288](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L288)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/attendances_amendments_pb.ts:260](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L260)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/attendances_amendments_pb.ts:281](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L281)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/attendances_amendments_pb.ts:325](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L325)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/attendances_amendments_pb.ts:323](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L323)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AttendancesAmendmentsServiceUpdateRequest"``

#### Defined in

[src/attendances_amendments_pb.ts:324](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L324)

## Methods

### clone

▸ **clone**(): [`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md) \| `PlainMessage`<[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

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

[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md) \| `PlainMessage`<[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md) \| `PlainMessage`<[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/attendances_amendments_pb.ts:349](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L349)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

#### Defined in

[src/attendances_amendments_pb.ts:337](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L337)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

#### Defined in

[src/attendances_amendments_pb.ts:341](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L341)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServiceUpdateRequest`](AttendancesAmendmentsServiceUpdateRequest.md)

#### Defined in

[src/attendances_amendments_pb.ts:345](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/attendances_amendments_pb.ts#L345)
