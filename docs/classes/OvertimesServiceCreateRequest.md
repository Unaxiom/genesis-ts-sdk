[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / OvertimesServiceCreateRequest

# Class: OvertimesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.OvertimesServiceCreateRequest

## Hierarchy

- `Message`<[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)\>

  ↳ **`OvertimesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](OvertimesServiceCreateRequest.md#constructor)

### Properties

- [description](OvertimesServiceCreateRequest.md#description)
- [entityUuid](OvertimesServiceCreateRequest.md#entityuuid)
- [formData](OvertimesServiceCreateRequest.md#formdata)
- [fromTimestamp](OvertimesServiceCreateRequest.md#fromtimestamp)
- [referenceId](OvertimesServiceCreateRequest.md#referenceid)
- [toTimestamp](OvertimesServiceCreateRequest.md#totimestamp)
- [userComment](OvertimesServiceCreateRequest.md#usercomment)
- [userId](OvertimesServiceCreateRequest.md#userid)
- [vaultFolderId](OvertimesServiceCreateRequest.md#vaultfolderid)
- [fields](OvertimesServiceCreateRequest.md#fields)
- [runtime](OvertimesServiceCreateRequest.md#runtime)
- [typeName](OvertimesServiceCreateRequest.md#typename)

### Methods

- [clone](OvertimesServiceCreateRequest.md#clone)
- [equals](OvertimesServiceCreateRequest.md#equals)
- [fromBinary](OvertimesServiceCreateRequest.md#frombinary)
- [fromJson](OvertimesServiceCreateRequest.md#fromjson)
- [fromJsonString](OvertimesServiceCreateRequest.md#fromjsonstring)
- [getType](OvertimesServiceCreateRequest.md#gettype)
- [toBinary](OvertimesServiceCreateRequest.md#tobinary)
- [toJSON](OvertimesServiceCreateRequest.md#tojson)
- [toJson](OvertimesServiceCreateRequest.md#tojson-1)
- [toJsonString](OvertimesServiceCreateRequest.md#tojsonstring)
- [equals](OvertimesServiceCreateRequest.md#equals-1)
- [fromBinary](OvertimesServiceCreateRequest.md#frombinary-1)
- [fromJson](OvertimesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](OvertimesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OvertimesServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)\> |

#### Overrides

Message&lt;OvertimesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/overtimes_pb.ts:188](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L188)

## Properties

### description

• **description**: `string` = `""`

The description of the overtime

**`Generated`**

from field: string description = 14;

#### Defined in

[src/overtimes_pb.ts:179](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L179)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/overtimes_pb.ts:130](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L130)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/overtimes_pb.ts:186](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L186)

___

### fromTimestamp

• **fromTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the overtime begins

**`Generated`**

from field: int64 from_timestamp = 12;

#### Defined in

[src/overtimes_pb.ts:165](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L165)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the overtime

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/overtimes_pb.ts:151](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L151)

___

### toTimestamp

• **toTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the overtime ends

**`Generated`**

from field: int64 to_timestamp = 13;

#### Defined in

[src/overtimes_pb.ts:172](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L172)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/overtimes_pb.ts:137](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L137)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for overtime

**`Generated`**

from field: int64 user_id = 11;

#### Defined in

[src/overtimes_pb.ts:158](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L158)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/overtimes_pb.ts:144](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L144)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/overtimes_pb.ts:195](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L195)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/overtimes_pb.ts:193](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L193)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.OvertimesServiceCreateRequest"``

#### Defined in

[src/overtimes_pb.ts:194](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L194)

## Methods

### clone

▸ **clone**(): [`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md) \| `PlainMessage`<[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

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

[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md) \| `PlainMessage`<[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md) \| `PlainMessage`<[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/overtimes_pb.ts:219](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L219)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

#### Defined in

[src/overtimes_pb.ts:207](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L207)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

#### Defined in

[src/overtimes_pb.ts:211](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L211)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

#### Defined in

[src/overtimes_pb.ts:215](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/overtimes_pb.ts#L215)
