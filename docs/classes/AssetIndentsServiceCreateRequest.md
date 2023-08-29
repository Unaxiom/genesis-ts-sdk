[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AssetIndentsServiceCreateRequest

# Class: AssetIndentsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.AssetIndentsServiceCreateRequest

## Hierarchy

- `Message`<[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)\>

  ↳ **`AssetIndentsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](AssetIndentsServiceCreateRequest.md#constructor)

### Properties

- [entityUuid](AssetIndentsServiceCreateRequest.md#entityuuid)
- [formData](AssetIndentsServiceCreateRequest.md#formdata)
- [locationId](AssetIndentsServiceCreateRequest.md#locationid)
- [projectId](AssetIndentsServiceCreateRequest.md#projectid)
- [referenceId](AssetIndentsServiceCreateRequest.md#referenceid)
- [userComment](AssetIndentsServiceCreateRequest.md#usercomment)
- [userId](AssetIndentsServiceCreateRequest.md#userid)
- [vaultFolderId](AssetIndentsServiceCreateRequest.md#vaultfolderid)
- [fields](AssetIndentsServiceCreateRequest.md#fields)
- [runtime](AssetIndentsServiceCreateRequest.md#runtime)
- [typeName](AssetIndentsServiceCreateRequest.md#typename)

### Methods

- [clone](AssetIndentsServiceCreateRequest.md#clone)
- [equals](AssetIndentsServiceCreateRequest.md#equals)
- [fromBinary](AssetIndentsServiceCreateRequest.md#frombinary)
- [fromJson](AssetIndentsServiceCreateRequest.md#fromjson)
- [fromJsonString](AssetIndentsServiceCreateRequest.md#fromjsonstring)
- [getType](AssetIndentsServiceCreateRequest.md#gettype)
- [toBinary](AssetIndentsServiceCreateRequest.md#tobinary)
- [toJSON](AssetIndentsServiceCreateRequest.md#tojson)
- [toJson](AssetIndentsServiceCreateRequest.md#tojson-1)
- [toJsonString](AssetIndentsServiceCreateRequest.md#tojsonstring)
- [equals](AssetIndentsServiceCreateRequest.md#equals-1)
- [fromBinary](AssetIndentsServiceCreateRequest.md#frombinary-1)
- [fromJson](AssetIndentsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](AssetIndentsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentsServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)\> |

#### Overrides

Message&lt;AssetIndentsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/asset_indents_pb.ts:165](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L165)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/asset_indents_pb.ts:114](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L114)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/asset_indents_pb.ts:163](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L163)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: int64 location_id = 14;

#### Defined in

[src/asset_indents_pb.ts:149](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L149)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: int64 project_id = 8;

#### Defined in

[src/asset_indents_pb.ts:128](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L128)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the asset indent

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/asset_indents_pb.ts:142](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L142)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/asset_indents_pb.ts:121](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L121)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the associated user

**`Generated`**

from field: int64 user_id = 15;

#### Defined in

[src/asset_indents_pb.ts:156](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L156)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/asset_indents_pb.ts:135](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L135)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/asset_indents_pb.ts:172](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L172)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/asset_indents_pb.ts:170](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L170)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AssetIndentsServiceCreateRequest"``

#### Defined in

[src/asset_indents_pb.ts:171](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L171)

## Methods

### clone

▸ **clone**(): [`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md) \| `PlainMessage`<[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

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

[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md) \| `PlainMessage`<[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md) \| `PlainMessage`<[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/asset_indents_pb.ts:195](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L195)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

#### Defined in

[src/asset_indents_pb.ts:183](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L183)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

#### Defined in

[src/asset_indents_pb.ts:187](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L187)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceCreateRequest`](AssetIndentsServiceCreateRequest.md)

#### Defined in

[src/asset_indents_pb.ts:191](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L191)
