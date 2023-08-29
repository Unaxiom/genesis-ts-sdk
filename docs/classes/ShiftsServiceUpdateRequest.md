[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ShiftsServiceUpdateRequest

# Class: ShiftsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Genesis.ShiftsServiceUpdateRequest

## Hierarchy

- `Message`<[`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md)\>

  ↳ **`ShiftsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ShiftsServiceUpdateRequest.md#constructor)

### Properties

- [code](ShiftsServiceUpdateRequest.md#code)
- [dayOfWeek](ShiftsServiceUpdateRequest.md#dayofweek)
- [description](ShiftsServiceUpdateRequest.md#description)
- [endAt](ShiftsServiceUpdateRequest.md#endat)
- [id](ShiftsServiceUpdateRequest.md#id)
- [name](ShiftsServiceUpdateRequest.md#name)
- [notifyUsers](ShiftsServiceUpdateRequest.md#notifyusers)
- [startAt](ShiftsServiceUpdateRequest.md#startat)
- [timezone](ShiftsServiceUpdateRequest.md#timezone)
- [userComment](ShiftsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](ShiftsServiceUpdateRequest.md#vaultfolderid)
- [fields](ShiftsServiceUpdateRequest.md#fields)
- [runtime](ShiftsServiceUpdateRequest.md#runtime)
- [typeName](ShiftsServiceUpdateRequest.md#typename)

### Methods

- [clone](ShiftsServiceUpdateRequest.md#clone)
- [equals](ShiftsServiceUpdateRequest.md#equals)
- [fromBinary](ShiftsServiceUpdateRequest.md#frombinary)
- [fromJson](ShiftsServiceUpdateRequest.md#fromjson)
- [fromJsonString](ShiftsServiceUpdateRequest.md#fromjsonstring)
- [getType](ShiftsServiceUpdateRequest.md#gettype)
- [toBinary](ShiftsServiceUpdateRequest.md#tobinary)
- [toJSON](ShiftsServiceUpdateRequest.md#tojson)
- [toJson](ShiftsServiceUpdateRequest.md#tojson-1)
- [toJsonString](ShiftsServiceUpdateRequest.md#tojsonstring)
- [equals](ShiftsServiceUpdateRequest.md#equals-1)
- [fromBinary](ShiftsServiceUpdateRequest.md#frombinary-1)
- [fromJson](ShiftsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ShiftsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;ShiftsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/shifts_pb.ts:307](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L307)

## Properties

### code

• **code**: `string` = `""`

The shift code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/shifts_pb.ts:270](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L270)

___

### dayOfWeek

• **dayOfWeek**: `string` = `""`

The week day that the shift is applicable on

**`Generated`**

from field: string day_of_week = 15;

#### Defined in

[src/shifts_pb.ts:298](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L298)

___

### description

• **description**: `string` = `""`

The description of the shift

**`Generated`**

from field: string description = 12;

#### Defined in

[src/shifts_pb.ts:277](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L277)

___

### endAt

• **endAt**: `bigint` = `protoInt64.zero`

The timestamp of when the shift ends (in seconds within a 24 hour cycle)

**`Generated`**

from field: int64 end_at = 14;

#### Defined in

[src/shifts_pb.ts:291](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L291)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/shifts_pb.ts:242](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L242)

___

### name

• **name**: `string` = `""`

The name of the shift

**`Generated`**

from field: string name = 10;

#### Defined in

[src/shifts_pb.ts:263](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L263)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/shifts_pb.ts:249](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L249)

___

### startAt

• **startAt**: `bigint` = `protoInt64.zero`

The timestamp of when the shift begins (in seconds within a 24 hour cycle)

**`Generated`**

from field: int64 start_at = 13;

#### Defined in

[src/shifts_pb.ts:284](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L284)

___

### timezone

• **timezone**: `string` = `""`

The timezone as represented in the TZ database

**`Generated`**

from field: string timezone = 16;

#### Defined in

[src/shifts_pb.ts:305](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L305)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/shifts_pb.ts:235](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L235)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/shifts_pb.ts:256](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L256)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts_pb.ts:314](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L314)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts_pb.ts:312](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L312)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ShiftsServiceUpdateRequest"``

#### Defined in

[src/shifts_pb.ts:313](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L313)

## Methods

### clone

▸ **clone**(): [`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md) \| `PlainMessage`<[`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md)

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

[`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md) \| `PlainMessage`<[`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md) \| `PlainMessage`<[`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts_pb.ts:340](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L340)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md)

#### Defined in

[src/shifts_pb.ts:328](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L328)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md)

#### Defined in

[src/shifts_pb.ts:332](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L332)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceUpdateRequest`](ShiftsServiceUpdateRequest.md)

#### Defined in

[src/shifts_pb.ts:336](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L336)
