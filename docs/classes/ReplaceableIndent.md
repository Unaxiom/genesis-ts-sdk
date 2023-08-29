[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndent

# Class: ReplaceableIndent

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.ReplaceableIndent

## Hierarchy

- `Message`<[`ReplaceableIndent`](ReplaceableIndent.md)\>

  ↳ **`ReplaceableIndent`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndent.md#constructor)

### Properties

- [approvalMetadata](ReplaceableIndent.md#approvalmetadata)
- [completedOn](ReplaceableIndent.md#completedon)
- [description](ReplaceableIndent.md#description)
- [entityUuid](ReplaceableIndent.md#entityuuid)
- [familyId](ReplaceableIndent.md#familyid)
- [finalRefNumber](ReplaceableIndent.md#finalrefnumber)
- [formData](ReplaceableIndent.md#formdata)
- [itemHash](ReplaceableIndent.md#itemhash)
- [list](ReplaceableIndent.md#list)
- [locationId](ReplaceableIndent.md#locationid)
- [logs](ReplaceableIndent.md#logs)
- [metadata](ReplaceableIndent.md#metadata)
- [referenceId](ReplaceableIndent.md#referenceid)
- [status](ReplaceableIndent.md#status)
- [supervisor](ReplaceableIndent.md#supervisor)
- [vaultFolderId](ReplaceableIndent.md#vaultfolderid)
- [fields](ReplaceableIndent.md#fields)
- [runtime](ReplaceableIndent.md#runtime)
- [typeName](ReplaceableIndent.md#typename)

### Methods

- [clone](ReplaceableIndent.md#clone)
- [equals](ReplaceableIndent.md#equals)
- [fromBinary](ReplaceableIndent.md#frombinary)
- [fromJson](ReplaceableIndent.md#fromjson)
- [fromJsonString](ReplaceableIndent.md#fromjsonstring)
- [getType](ReplaceableIndent.md#gettype)
- [toBinary](ReplaceableIndent.md#tobinary)
- [toJSON](ReplaceableIndent.md#tojson)
- [toJson](ReplaceableIndent.md#tojson-1)
- [toJsonString](ReplaceableIndent.md#tojsonstring)
- [equals](ReplaceableIndent.md#equals-1)
- [fromBinary](ReplaceableIndent.md#frombinary-1)
- [fromJson](ReplaceableIndent.md#fromjson-1)
- [fromJsonString](ReplaceableIndent.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndent**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ReplaceableIndent`](ReplaceableIndent.md)\> |

#### Overrides

Message&lt;ReplaceableIndent\&gt;.constructor

#### Defined in

[src/replaceable_indents_pb.ts:491](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L491)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/replaceable_indents_pb.ts:398](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L398)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this replaceable indent was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/replaceable_indents_pb.ts:419](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L419)

___

### description

• **description**: `string` = `""`

The description of the replaceable indent

**`Generated`**

from field: string description = 16;

#### Defined in

[src/replaceable_indents_pb.ts:475](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L475)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/replaceable_indents_pb.ts:384](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L384)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: int64 family_id = 14;

#### Defined in

[src/replaceable_indents_pb.ts:461](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L461)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/replaceable_indents_pb.ts:440](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L440)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatum form_data = 40;

#### Defined in

[src/replaceable_indents_pb.ts:489](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L489)

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 15;

#### Defined in

[src/replaceable_indents_pb.ts:468](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L468)

___

### list

• **list**: [`ReplaceableIndentItem`](ReplaceableIndentItem.md)[] = `[]`

The list of associated replaceable indent items

**`Generated`**

from field: repeated Genesis.ReplaceableIndentItem list = 30;

#### Defined in

[src/replaceable_indents_pb.ts:482](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L482)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: int64 location_id = 12;

#### Defined in

[src/replaceable_indents_pb.ts:447](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L447)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this replaceable indent

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/replaceable_indents_pb.ts:412](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L412)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this replaceable indent

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/replaceable_indents_pb.ts:391](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L391)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the replaceable indent

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/replaceable_indents_pb.ts:433](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L433)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this replaceable indent

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/replaceable_indents_pb.ts:405](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L405)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 13;

#### Defined in

[src/replaceable_indents_pb.ts:454](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L454)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/replaceable_indents_pb.ts:426](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L426)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents_pb.ts:498](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L498)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents_pb.ts:496](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L496)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ReplaceableIndent"``

#### Defined in

[src/replaceable_indents_pb.ts:497](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L497)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndent`](ReplaceableIndent.md)

Create a deep copy.

#### Returns

[`ReplaceableIndent`](ReplaceableIndent.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndent`](ReplaceableIndent.md) \| `PlainMessage`<[`ReplaceableIndent`](ReplaceableIndent.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndent`](ReplaceableIndent.md)

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

[`ReplaceableIndent`](ReplaceableIndent.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndent`](ReplaceableIndent.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndent`](ReplaceableIndent.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndent`](ReplaceableIndent.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndent`](ReplaceableIndent.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ReplaceableIndent`](ReplaceableIndent.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ReplaceableIndent`](ReplaceableIndent.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndent`](ReplaceableIndent.md) \| `PlainMessage`<[`ReplaceableIndent`](ReplaceableIndent.md)\> |
| `b` | `undefined` \| [`ReplaceableIndent`](ReplaceableIndent.md) \| `PlainMessage`<[`ReplaceableIndent`](ReplaceableIndent.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents_pb.ts:529](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L529)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ReplaceableIndent`](ReplaceableIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndent`](ReplaceableIndent.md)

#### Defined in

[src/replaceable_indents_pb.ts:517](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L517)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndent`](ReplaceableIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndent`](ReplaceableIndent.md)

#### Defined in

[src/replaceable_indents_pb.ts:521](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L521)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndent`](ReplaceableIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndent`](ReplaceableIndent.md)

#### Defined in

[src/replaceable_indents_pb.ts:525](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L525)
