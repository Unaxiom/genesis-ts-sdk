[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / HolidaysServiceUpdateRequest

# Class: HolidaysServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Genesis.HolidaysServiceUpdateRequest

## Hierarchy

- `Message`<[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)\>

  ↳ **`HolidaysServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](HolidaysServiceUpdateRequest.md#constructor)

### Properties

- [description](HolidaysServiceUpdateRequest.md#description)
- [endOn](HolidaysServiceUpdateRequest.md#endon)
- [id](HolidaysServiceUpdateRequest.md#id)
- [notifyUsers](HolidaysServiceUpdateRequest.md#notifyusers)
- [startOn](HolidaysServiceUpdateRequest.md#starton)
- [title](HolidaysServiceUpdateRequest.md#title)
- [userComment](HolidaysServiceUpdateRequest.md#usercomment)
- [vaultFolderId](HolidaysServiceUpdateRequest.md#vaultfolderid)
- [fields](HolidaysServiceUpdateRequest.md#fields)
- [runtime](HolidaysServiceUpdateRequest.md#runtime)
- [typeName](HolidaysServiceUpdateRequest.md#typename)

### Methods

- [clone](HolidaysServiceUpdateRequest.md#clone)
- [equals](HolidaysServiceUpdateRequest.md#equals)
- [fromBinary](HolidaysServiceUpdateRequest.md#frombinary)
- [fromJson](HolidaysServiceUpdateRequest.md#fromjson)
- [fromJsonString](HolidaysServiceUpdateRequest.md#fromjsonstring)
- [getType](HolidaysServiceUpdateRequest.md#gettype)
- [toBinary](HolidaysServiceUpdateRequest.md#tobinary)
- [toJSON](HolidaysServiceUpdateRequest.md#tojson)
- [toJson](HolidaysServiceUpdateRequest.md#tojson-1)
- [toJsonString](HolidaysServiceUpdateRequest.md#tojsonstring)
- [equals](HolidaysServiceUpdateRequest.md#equals-1)
- [fromBinary](HolidaysServiceUpdateRequest.md#frombinary-1)
- [fromJson](HolidaysServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](HolidaysServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new HolidaysServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;HolidaysServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/holidays_pb.ts:268](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L268)

## Properties

### description

• **description**: `string` = `""`

The description of the holiday

**`Generated`**

from field: string description = 11;

#### Defined in

[src/holidays_pb.ts:252](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L252)

___

### endOn

• **endOn**: `bigint` = `protoInt64.zero`

The end timestamp

**`Generated`**

from field: int64 end_on = 13;

#### Defined in

[src/holidays_pb.ts:266](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L266)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/holidays_pb.ts:224](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L224)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/holidays_pb.ts:231](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L231)

___

### startOn

• **startOn**: `bigint` = `protoInt64.zero`

The start timestamp

**`Generated`**

from field: int64 start_on = 12;

#### Defined in

[src/holidays_pb.ts:259](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L259)

___

### title

• **title**: `string` = `""`

The title of the holiday

**`Generated`**

from field: string title = 10;

#### Defined in

[src/holidays_pb.ts:245](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L245)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/holidays_pb.ts:217](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L217)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/holidays_pb.ts:238](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L238)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/holidays_pb.ts:275](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L275)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/holidays_pb.ts:273](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L273)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.HolidaysServiceUpdateRequest"``

#### Defined in

[src/holidays_pb.ts:274](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L274)

## Methods

### clone

▸ **clone**(): [`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md) \| `PlainMessage`<[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

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

[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md) \| `PlainMessage`<[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md) \| `PlainMessage`<[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/holidays_pb.ts:298](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L298)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

#### Defined in

[src/holidays_pb.ts:286](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L286)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

#### Defined in

[src/holidays_pb.ts:290](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L290)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceUpdateRequest`](HolidaysServiceUpdateRequest.md)

#### Defined in

[src/holidays_pb.ts:294](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L294)
