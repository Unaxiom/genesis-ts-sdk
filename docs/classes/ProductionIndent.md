[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionIndent

# Class: ProductionIndent

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.ProductionIndent

## Hierarchy

- `Message`<[`ProductionIndent`](ProductionIndent.md)\>

  ↳ **`ProductionIndent`**

## Table of contents

### Constructors

- [constructor](ProductionIndent.md#constructor)

### Properties

- [approvalMetadata](ProductionIndent.md#approvalmetadata)
- [completedOn](ProductionIndent.md#completedon)
- [entityUuid](ProductionIndent.md#entityuuid)
- [finalRefNumber](ProductionIndent.md#finalrefnumber)
- [formData](ProductionIndent.md#formdata)
- [indentRefFor](ProductionIndent.md#indentreffor)
- [indentRefId](ProductionIndent.md#indentrefid)
- [list](ProductionIndent.md#list)
- [locationId](ProductionIndent.md#locationid)
- [logs](ProductionIndent.md#logs)
- [metadata](ProductionIndent.md#metadata)
- [productionRefFor](ProductionIndent.md#productionreffor)
- [productionRefId](ProductionIndent.md#productionrefid)
- [referenceId](ProductionIndent.md#referenceid)
- [status](ProductionIndent.md#status)
- [supervisor](ProductionIndent.md#supervisor)
- [vaultFolderId](ProductionIndent.md#vaultfolderid)
- [fields](ProductionIndent.md#fields)
- [runtime](ProductionIndent.md#runtime)
- [typeName](ProductionIndent.md#typename)

### Methods

- [clone](ProductionIndent.md#clone)
- [equals](ProductionIndent.md#equals)
- [fromBinary](ProductionIndent.md#frombinary)
- [fromJson](ProductionIndent.md#fromjson)
- [fromJsonString](ProductionIndent.md#fromjsonstring)
- [getType](ProductionIndent.md#gettype)
- [toBinary](ProductionIndent.md#tobinary)
- [toJSON](ProductionIndent.md#tojson)
- [toJson](ProductionIndent.md#tojson-1)
- [toJsonString](ProductionIndent.md#tojsonstring)
- [equals](ProductionIndent.md#equals-1)
- [fromBinary](ProductionIndent.md#frombinary-1)
- [fromJson](ProductionIndent.md#fromjson-1)
- [fromJsonString](ProductionIndent.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndent**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionIndent`](ProductionIndent.md)\> |

#### Overrides

Message&lt;ProductionIndent\&gt;.constructor

#### Defined in

[src/production_indents_pb.ts:498](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L498)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/production_indents_pb.ts:398](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L398)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this production indent was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/production_indents_pb.ts:419](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L419)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/production_indents_pb.ts:384](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L384)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/production_indents_pb.ts:440](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L440)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatum form_data = 40;

#### Defined in

[src/production_indents_pb.ts:496](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L496)

___

### indentRefFor

• **indentRefFor**: `string` = `""`

Stores if the indent should be created on the basis of a work order or a family

**`Generated`**

from field: string indent_ref_for = 18;

#### Defined in

[src/production_indents_pb.ts:475](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L475)

___

### indentRefId

• **indentRefId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family or work order

**`Generated`**

from field: int64 indent_ref_id = 19;

#### Defined in

[src/production_indents_pb.ts:482](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L482)

___

### list

• **list**: [`ProductionIndentItem`](ProductionIndentItem.md)[] = `[]`

The list of associated production indent items

**`Generated`**

from field: repeated Genesis.ProductionIndentItem list = 30;

#### Defined in

[src/production_indents_pb.ts:489](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L489)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: int64 location_id = 14;

#### Defined in

[src/production_indents_pb.ts:447](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L447)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this production indent

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/production_indents_pb.ts:412](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L412)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this production indent

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/production_indents_pb.ts:391](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L391)

___

### productionRefFor

• **productionRefFor**: `string` = `""`

Stores if the indent is associated to a production plan

**`Generated`**

from field: string production_ref_for = 16;

#### Defined in

[src/production_indents_pb.ts:461](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L461)

___

### productionRefId

• **productionRefId**: `bigint` = `protoInt64.zero`

Stores the production plan ID if production_ref_for is production-plan

**`Generated`**

from field: int64 production_ref_id = 17;

#### Defined in

[src/production_indents_pb.ts:468](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L468)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the production indent

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/production_indents_pb.ts:433](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L433)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this production indent

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/production_indents_pb.ts:405](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L405)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 15;

#### Defined in

[src/production_indents_pb.ts:454](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L454)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/production_indents_pb.ts:426](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L426)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_indents_pb.ts:505](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L505)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_indents_pb.ts:503](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L503)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionIndent"``

#### Defined in

[src/production_indents_pb.ts:504](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L504)

## Methods

### clone

▸ **clone**(): [`ProductionIndent`](ProductionIndent.md)

Create a deep copy.

#### Returns

[`ProductionIndent`](ProductionIndent.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndent`](ProductionIndent.md) \| `PlainMessage`<[`ProductionIndent`](ProductionIndent.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndent`](ProductionIndent.md)

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

[`ProductionIndent`](ProductionIndent.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndent`](ProductionIndent.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndent`](ProductionIndent.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndent`](ProductionIndent.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndent`](ProductionIndent.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionIndent`](ProductionIndent.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionIndent`](ProductionIndent.md)\>

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
| `a` | `undefined` \| [`ProductionIndent`](ProductionIndent.md) \| `PlainMessage`<[`ProductionIndent`](ProductionIndent.md)\> |
| `b` | `undefined` \| [`ProductionIndent`](ProductionIndent.md) \| `PlainMessage`<[`ProductionIndent`](ProductionIndent.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_indents_pb.ts:537](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L537)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionIndent`](ProductionIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndent`](ProductionIndent.md)

#### Defined in

[src/production_indents_pb.ts:525](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L525)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionIndent`](ProductionIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndent`](ProductionIndent.md)

#### Defined in

[src/production_indents_pb.ts:529](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L529)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionIndent`](ProductionIndent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndent`](ProductionIndent.md)

#### Defined in

[src/production_indents_pb.ts:533](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L533)
