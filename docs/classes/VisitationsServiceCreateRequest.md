[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / VisitationsServiceCreateRequest

# Class: VisitationsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.VisitationsServiceCreateRequest

## Hierarchy

- `Message`<[`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md)\>

  ↳ **`VisitationsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](VisitationsServiceCreateRequest.md#constructor)

### Properties

- [associateId](VisitationsServiceCreateRequest.md#associateid)
- [description](VisitationsServiceCreateRequest.md#description)
- [entityUuid](VisitationsServiceCreateRequest.md#entityuuid)
- [entryTimestamp](VisitationsServiceCreateRequest.md#entrytimestamp)
- [exitTimestamp](VisitationsServiceCreateRequest.md#exittimestamp)
- [formData](VisitationsServiceCreateRequest.md#formdata)
- [referenceId](VisitationsServiceCreateRequest.md#referenceid)
- [userComment](VisitationsServiceCreateRequest.md#usercomment)
- [userId](VisitationsServiceCreateRequest.md#userid)
- [vaultFolderId](VisitationsServiceCreateRequest.md#vaultfolderid)
- [fields](VisitationsServiceCreateRequest.md#fields)
- [runtime](VisitationsServiceCreateRequest.md#runtime)
- [typeName](VisitationsServiceCreateRequest.md#typename)

### Methods

- [clone](VisitationsServiceCreateRequest.md#clone)
- [equals](VisitationsServiceCreateRequest.md#equals)
- [fromBinary](VisitationsServiceCreateRequest.md#frombinary)
- [fromJson](VisitationsServiceCreateRequest.md#fromjson)
- [fromJsonString](VisitationsServiceCreateRequest.md#fromjsonstring)
- [getType](VisitationsServiceCreateRequest.md#gettype)
- [toBinary](VisitationsServiceCreateRequest.md#tobinary)
- [toJSON](VisitationsServiceCreateRequest.md#tojson)
- [toJson](VisitationsServiceCreateRequest.md#tojson-1)
- [toJsonString](VisitationsServiceCreateRequest.md#tojsonstring)
- [equals](VisitationsServiceCreateRequest.md#equals-1)
- [fromBinary](VisitationsServiceCreateRequest.md#frombinary-1)
- [fromJson](VisitationsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](VisitationsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VisitationsServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md)\> |

#### Overrides

Message&lt;VisitationsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/visitations_pb.ts:203](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L203)

## Properties

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

The ID of the associate who has requested for visitation

**`Generated`**

from field: int64 associate_id = 12;

#### Defined in

[src/visitations_pb.ts:173](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L173)

___

### description

• **description**: `string` = `""`

The description of the visitation

**`Generated`**

from field: string description = 15;

#### Defined in

[src/visitations_pb.ts:194](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L194)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/visitations_pb.ts:138](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L138)

___

### entryTimestamp

• **entryTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the visitation begins

**`Generated`**

from field: int64 entry_timestamp = 13;

#### Defined in

[src/visitations_pb.ts:180](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L180)

___

### exitTimestamp

• **exitTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the visitation ends

**`Generated`**

from field: int64 exit_timestamp = 14;

#### Defined in

[src/visitations_pb.ts:187](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L187)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/visitations_pb.ts:201](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L201)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the visitation

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/visitations_pb.ts:159](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L159)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/visitations_pb.ts:145](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L145)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who is being visited

**`Generated`**

from field: int64 user_id = 11;

#### Defined in

[src/visitations_pb.ts:166](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L166)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/visitations_pb.ts:152](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L152)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/visitations_pb.ts:210](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L210)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/visitations_pb.ts:208](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L208)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.VisitationsServiceCreateRequest"``

#### Defined in

[src/visitations_pb.ts:209](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L209)

## Methods

### clone

▸ **clone**(): [`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md) \| `PlainMessage`<[`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md)

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

[`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md) \| `PlainMessage`<[`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md) \| `PlainMessage`<[`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/visitations_pb.ts:235](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L235)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md)

#### Defined in

[src/visitations_pb.ts:223](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L223)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md)

#### Defined in

[src/visitations_pb.ts:227](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L227)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`VisitationsServiceCreateRequest`](VisitationsServiceCreateRequest.md)

#### Defined in

[src/visitations_pb.ts:231](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/visitations_pb.ts#L231)
