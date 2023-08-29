[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsServiceCreateRequest

# Class: ReplaceableIndentsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.ReplaceableIndentsServiceCreateRequest

## Hierarchy

- `Message`<[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)\>

  ↳ **`ReplaceableIndentsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsServiceCreateRequest.md#constructor)

### Properties

- [description](ReplaceableIndentsServiceCreateRequest.md#description)
- [entityUuid](ReplaceableIndentsServiceCreateRequest.md#entityuuid)
- [familyId](ReplaceableIndentsServiceCreateRequest.md#familyid)
- [formData](ReplaceableIndentsServiceCreateRequest.md#formdata)
- [itemHash](ReplaceableIndentsServiceCreateRequest.md#itemhash)
- [locationId](ReplaceableIndentsServiceCreateRequest.md#locationid)
- [referenceId](ReplaceableIndentsServiceCreateRequest.md#referenceid)
- [supervisor](ReplaceableIndentsServiceCreateRequest.md#supervisor)
- [userComment](ReplaceableIndentsServiceCreateRequest.md#usercomment)
- [vaultFolderId](ReplaceableIndentsServiceCreateRequest.md#vaultfolderid)
- [fields](ReplaceableIndentsServiceCreateRequest.md#fields)
- [runtime](ReplaceableIndentsServiceCreateRequest.md#runtime)
- [typeName](ReplaceableIndentsServiceCreateRequest.md#typename)

### Methods

- [clone](ReplaceableIndentsServiceCreateRequest.md#clone)
- [equals](ReplaceableIndentsServiceCreateRequest.md#equals)
- [fromBinary](ReplaceableIndentsServiceCreateRequest.md#frombinary)
- [fromJson](ReplaceableIndentsServiceCreateRequest.md#fromjson)
- [fromJsonString](ReplaceableIndentsServiceCreateRequest.md#fromjsonstring)
- [getType](ReplaceableIndentsServiceCreateRequest.md#gettype)
- [toBinary](ReplaceableIndentsServiceCreateRequest.md#tobinary)
- [toJSON](ReplaceableIndentsServiceCreateRequest.md#tojson)
- [toJson](ReplaceableIndentsServiceCreateRequest.md#tojson-1)
- [toJsonString](ReplaceableIndentsServiceCreateRequest.md#tojsonstring)
- [equals](ReplaceableIndentsServiceCreateRequest.md#equals-1)
- [fromBinary](ReplaceableIndentsServiceCreateRequest.md#frombinary-1)
- [fromJson](ReplaceableIndentsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)\> |

#### Overrides

Message&lt;ReplaceableIndentsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/replaceable_indents_pb.ts:179](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L179)

## Properties

### description

• **description**: `string` = `""`

The description of the replaceable indent

**`Generated`**

from field: string description = 16;

#### Defined in

[src/replaceable_indents_pb.ts:170](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L170)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/replaceable_indents_pb.ts:114](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L114)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: int64 family_id = 14;

#### Defined in

[src/replaceable_indents_pb.ts:156](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L156)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/replaceable_indents_pb.ts:177](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L177)

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 15;

#### Defined in

[src/replaceable_indents_pb.ts:163](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L163)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: int64 location_id = 12;

#### Defined in

[src/replaceable_indents_pb.ts:142](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L142)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the replaceable indent

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/replaceable_indents_pb.ts:135](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L135)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 13;

#### Defined in

[src/replaceable_indents_pb.ts:149](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L149)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/replaceable_indents_pb.ts:121](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L121)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/replaceable_indents_pb.ts:128](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L128)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents_pb.ts:186](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L186)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents_pb.ts:184](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L184)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ReplaceableIndentsServiceCreateRequest"``

#### Defined in

[src/replaceable_indents_pb.ts:185](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L185)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md) \| `PlainMessage`<[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

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

[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md) \| `PlainMessage`<[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md) \| `PlainMessage`<[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents_pb.ts:211](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L211)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

#### Defined in

[src/replaceable_indents_pb.ts:199](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L199)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

#### Defined in

[src/replaceable_indents_pb.ts:203](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L203)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceCreateRequest`](ReplaceableIndentsServiceCreateRequest.md)

#### Defined in

[src/replaceable_indents_pb.ts:207](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L207)
