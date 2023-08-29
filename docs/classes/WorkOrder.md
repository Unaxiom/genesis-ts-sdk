[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / WorkOrder

# Class: WorkOrder

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.WorkOrder

## Hierarchy

- `Message`<[`WorkOrder`](WorkOrder.md)\>

  ↳ **`WorkOrder`**

## Table of contents

### Constructors

- [constructor](WorkOrder.md#constructor)

### Properties

- [approvalMetadata](WorkOrder.md#approvalmetadata)
- [completedOn](WorkOrder.md#completedon)
- [entityUuid](WorkOrder.md#entityuuid)
- [finalRefNumber](WorkOrder.md#finalrefnumber)
- [formData](WorkOrder.md#formdata)
- [list](WorkOrder.md#list)
- [locationId](WorkOrder.md#locationid)
- [logs](WorkOrder.md#logs)
- [metadata](WorkOrder.md#metadata)
- [refFrom](WorkOrder.md#reffrom)
- [refId](WorkOrder.md#refid)
- [referenceId](WorkOrder.md#referenceid)
- [status](WorkOrder.md#status)
- [vaultFolderId](WorkOrder.md#vaultfolderid)
- [fields](WorkOrder.md#fields)
- [runtime](WorkOrder.md#runtime)
- [typeName](WorkOrder.md#typename)

### Methods

- [clone](WorkOrder.md#clone)
- [equals](WorkOrder.md#equals)
- [fromBinary](WorkOrder.md#frombinary)
- [fromJson](WorkOrder.md#fromjson)
- [fromJsonString](WorkOrder.md#fromjsonstring)
- [getType](WorkOrder.md#gettype)
- [toBinary](WorkOrder.md#tobinary)
- [toJSON](WorkOrder.md#tojson)
- [toJson](WorkOrder.md#tojson-1)
- [toJsonString](WorkOrder.md#tojsonstring)
- [equals](WorkOrder.md#equals-1)
- [fromBinary](WorkOrder.md#frombinary-1)
- [fromJson](WorkOrder.md#fromjson-1)
- [fromJsonString](WorkOrder.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrder**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`WorkOrder`](WorkOrder.md)\> |

#### Overrides

Message&lt;WorkOrder\&gt;.constructor

#### Defined in

[src/work_orders_pb.ts:445](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L445)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/work_orders_pb.ts:366](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L366)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this work order was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/work_orders_pb.ts:387](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L387)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/work_orders_pb.ts:352](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L352)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/work_orders_pb.ts:408](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L408)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatum form_data = 30;

#### Defined in

[src/work_orders_pb.ts:443](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L443)

___

### list

• **list**: [`WorkOrderItem`](WorkOrderItem.md)[] = `[]`

The list of associated work order items

**`Generated`**

from field: repeated Genesis.WorkOrderItem list = 20;

#### Defined in

[src/work_orders_pb.ts:436](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L436)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: int64 location_id = 14;

#### Defined in

[src/work_orders_pb.ts:429](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L429)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this work order

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/work_orders_pb.ts:380](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L380)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this work order

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/work_orders_pb.ts:359](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L359)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 12;

#### Defined in

[src/work_orders_pb.ts:415](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L415)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 13;

#### Defined in

[src/work_orders_pb.ts:422](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L422)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the work order

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/work_orders_pb.ts:401](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L401)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this work order

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/work_orders_pb.ts:373](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L373)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/work_orders_pb.ts:394](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L394)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/work_orders_pb.ts:452](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L452)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/work_orders_pb.ts:450](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L450)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.WorkOrder"``

#### Defined in

[src/work_orders_pb.ts:451](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L451)

## Methods

### clone

▸ **clone**(): [`WorkOrder`](WorkOrder.md)

Create a deep copy.

#### Returns

[`WorkOrder`](WorkOrder.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrder`](WorkOrder.md) \| `PlainMessage`<[`WorkOrder`](WorkOrder.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrder`](WorkOrder.md)

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

[`WorkOrder`](WorkOrder.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrder`](WorkOrder.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrder`](WorkOrder.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrder`](WorkOrder.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrder`](WorkOrder.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`WorkOrder`](WorkOrder.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`WorkOrder`](WorkOrder.md)\>

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
| `a` | `undefined` \| [`WorkOrder`](WorkOrder.md) \| `PlainMessage`<[`WorkOrder`](WorkOrder.md)\> |
| `b` | `undefined` \| [`WorkOrder`](WorkOrder.md) \| `PlainMessage`<[`WorkOrder`](WorkOrder.md)\> |

#### Returns

`boolean`

#### Defined in

[src/work_orders_pb.ts:481](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L481)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`WorkOrder`](WorkOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`WorkOrder`](WorkOrder.md)

#### Defined in

[src/work_orders_pb.ts:469](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L469)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`WorkOrder`](WorkOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrder`](WorkOrder.md)

#### Defined in

[src/work_orders_pb.ts:473](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L473)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`WorkOrder`](WorkOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrder`](WorkOrder.md)

#### Defined in

[src/work_orders_pb.ts:477](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L477)
