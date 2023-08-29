[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AssetIndent

# Class: AssetIndent

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.AssetIndent

## Hierarchy

- `Message`<[`AssetIndent`](AssetIndent.md)\>

  ↳ **`AssetIndent`**

## Table of contents

### Constructors

- [constructor](AssetIndent.md#constructor)

### Properties

- [approvalMetadata](AssetIndent.md#approvalmetadata)
- [completedOn](AssetIndent.md#completedon)
- [entityUuid](AssetIndent.md#entityuuid)
- [finalRefNumber](AssetIndent.md#finalrefnumber)
- [formData](AssetIndent.md#formdata)
- [list](AssetIndent.md#list)
- [locationId](AssetIndent.md#locationid)
- [logs](AssetIndent.md#logs)
- [metadata](AssetIndent.md#metadata)
- [projectId](AssetIndent.md#projectid)
- [referenceId](AssetIndent.md#referenceid)
- [status](AssetIndent.md#status)
- [userId](AssetIndent.md#userid)
- [vaultFolderId](AssetIndent.md#vaultfolderid)
- [fields](AssetIndent.md#fields)
- [runtime](AssetIndent.md#runtime)
- [typeName](AssetIndent.md#typename)

### Methods

- [clone](AssetIndent.md#clone)
- [equals](AssetIndent.md#equals)
- [fromBinary](AssetIndent.md#frombinary)
- [fromJson](AssetIndent.md#fromjson)
- [fromJsonString](AssetIndent.md#fromjsonstring)
- [getType](AssetIndent.md#gettype)
- [toBinary](AssetIndent.md#tobinary)
- [toJSON](AssetIndent.md#tojson)
- [toJson](AssetIndent.md#tojson-1)
- [toJsonString](AssetIndent.md#tojsonstring)
- [equals](AssetIndent.md#equals-1)
- [fromBinary](AssetIndent.md#frombinary-1)
- [fromJson](AssetIndent.md#fromjson-1)
- [fromJsonString](AssetIndent.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndent**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AssetIndent`](AssetIndent.md)\> |

#### Overrides

Message&lt;AssetIndent\&gt;.constructor

#### Defined in

[src/asset_indents_pb.ts:403](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L403)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/asset_indents_pb.ts:324](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L324)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this asset indent was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/asset_indents_pb.ts:345](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L345)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/asset_indents_pb.ts:310](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L310)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/asset_indents_pb.ts:373](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L373)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatum form_data = 30;

#### Defined in

[src/asset_indents_pb.ts:401](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L401)

___

### list

• **list**: [`AssetIndentItem`](AssetIndentItem.md)[] = `[]`

The list of associated asset indent items

**`Generated`**

from field: repeated Genesis.AssetIndentItem list = 20;

#### Defined in

[src/asset_indents_pb.ts:394](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L394)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: int64 location_id = 14;

#### Defined in

[src/asset_indents_pb.ts:380](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L380)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this asset indent

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/asset_indents_pb.ts:338](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L338)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this asset indent

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/asset_indents_pb.ts:317](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L317)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: int64 project_id = 8;

#### Defined in

[src/asset_indents_pb.ts:352](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L352)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the asset indent

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/asset_indents_pb.ts:366](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L366)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this asset indent

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/asset_indents_pb.ts:331](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L331)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the associated user

**`Generated`**

from field: int64 user_id = 15;

#### Defined in

[src/asset_indents_pb.ts:387](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L387)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/asset_indents_pb.ts:359](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L359)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/asset_indents_pb.ts:410](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L410)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/asset_indents_pb.ts:408](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L408)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AssetIndent"``

#### Defined in

[src/asset_indents_pb.ts:409](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L409)

## Methods

### clone

▸ **clone**(): [`AssetIndent`](AssetIndent.md)

Create a deep copy.

#### Returns

[`AssetIndent`](AssetIndent.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndent`](AssetIndent.md) \| `PlainMessage`<[`AssetIndent`](AssetIndent.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndent`](AssetIndent.md)

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

[`AssetIndent`](AssetIndent.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndent`](AssetIndent.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndent`](AssetIndent.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndent`](AssetIndent.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndent`](AssetIndent.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AssetIndent`](AssetIndent.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AssetIndent`](AssetIndent.md)\>

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
| `a` | `undefined` \| [`AssetIndent`](AssetIndent.md) \| `PlainMessage`<[`AssetIndent`](AssetIndent.md)\> |
| `b` | `undefined` \| [`AssetIndent`](AssetIndent.md) \| `PlainMessage`<[`AssetIndent`](AssetIndent.md)\> |

#### Returns

`boolean`

#### Defined in

[src/asset_indents_pb.ts:439](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L439)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AssetIndent`](AssetIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AssetIndent`](AssetIndent.md)

#### Defined in

[src/asset_indents_pb.ts:427](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L427)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AssetIndent`](AssetIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndent`](AssetIndent.md)

#### Defined in

[src/asset_indents_pb.ts:431](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L431)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AssetIndent`](AssetIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndent`](AssetIndent.md)

#### Defined in

[src/asset_indents_pb.ts:435](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L435)
