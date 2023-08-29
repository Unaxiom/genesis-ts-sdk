[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentsServiceFilterReq

# Class: ProductionIndentsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.ProductionIndentsServiceFilterReq

## Hierarchy

- `Message`<[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)\>

  ↳ **`ProductionIndentsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ProductionIndentsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ProductionIndentsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ProductionIndentsServiceFilterReq.md#approvedonend)
- [approvedOnStart](ProductionIndentsServiceFilterReq.md#approvedonstart)
- [approverRoleId](ProductionIndentsServiceFilterReq.md#approverroleid)
- [completedOnEnd](ProductionIndentsServiceFilterReq.md#completedonend)
- [completedOnStart](ProductionIndentsServiceFilterReq.md#completedonstart)
- [count](ProductionIndentsServiceFilterReq.md#count)
- [creationTimestampEnd](ProductionIndentsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ProductionIndentsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](ProductionIndentsServiceFilterReq.md#entityuuid)
- [finalRefNumber](ProductionIndentsServiceFilterReq.md#finalrefnumber)
- [indentRefFor](ProductionIndentsServiceFilterReq.md#indentreffor)
- [indentRefId](ProductionIndentsServiceFilterReq.md#indentrefid)
- [isActive](ProductionIndentsServiceFilterReq.md#isactive)
- [locationId](ProductionIndentsServiceFilterReq.md#locationid)
- [offset](ProductionIndentsServiceFilterReq.md#offset)
- [productionRefFor](ProductionIndentsServiceFilterReq.md#productionreffor)
- [productionRefId](ProductionIndentsServiceFilterReq.md#productionrefid)
- [referenceId](ProductionIndentsServiceFilterReq.md#referenceid)
- [sortKey](ProductionIndentsServiceFilterReq.md#sortkey)
- [sortOrder](ProductionIndentsServiceFilterReq.md#sortorder)
- [status](ProductionIndentsServiceFilterReq.md#status)
- [supervisor](ProductionIndentsServiceFilterReq.md#supervisor)
- [fields](ProductionIndentsServiceFilterReq.md#fields)
- [runtime](ProductionIndentsServiceFilterReq.md#runtime)
- [typeName](ProductionIndentsServiceFilterReq.md#typename)

### Methods

- [clone](ProductionIndentsServiceFilterReq.md#clone)
- [equals](ProductionIndentsServiceFilterReq.md#equals)
- [fromBinary](ProductionIndentsServiceFilterReq.md#frombinary)
- [fromJson](ProductionIndentsServiceFilterReq.md#fromjson)
- [fromJsonString](ProductionIndentsServiceFilterReq.md#fromjsonstring)
- [getType](ProductionIndentsServiceFilterReq.md#gettype)
- [toBinary](ProductionIndentsServiceFilterReq.md#tobinary)
- [toJSON](ProductionIndentsServiceFilterReq.md#tojson)
- [toJson](ProductionIndentsServiceFilterReq.md#tojson-1)
- [toJsonString](ProductionIndentsServiceFilterReq.md#tojsonstring)
- [equals](ProductionIndentsServiceFilterReq.md#equals-1)
- [fromBinary](ProductionIndentsServiceFilterReq.md#frombinary-1)
- [fromJson](ProductionIndentsServiceFilterReq.md#fromjson-1)
- [fromJsonString](ProductionIndentsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)\> |

#### Overrides

Message&lt;ProductionIndentsServiceFilterReq\&gt;.constructor

#### Defined in

[src/production_indents_pb.ts:1346](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1346)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/production_indents_pb.ts:1267](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1267)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/production_indents_pb.ts:1260](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1260)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/production_indents_pb.ts:1253](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1253)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/production_indents_pb.ts:1274](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1274)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/production_indents_pb.ts:1288](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1288)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/production_indents_pb.ts:1281](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1281)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/production_indents_pb.ts:1197](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1197)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/production_indents_pb.ts:1232](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1232)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/production_indents_pb.ts:1225](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1225)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/production_indents_pb.ts:1239](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1239)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/production_indents_pb.ts:1302](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1302)

___

### indentRefFor

• **indentRefFor**: `string` = `""`

Stores if the indent should be created on the basis of a work order or a family

**`Generated`**

from field: string indent_ref_for = 28;

#### Defined in

[src/production_indents_pb.ts:1337](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1337)

___

### indentRefId

• **indentRefId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family or work order

**`Generated`**

from field: int64 indent_ref_id = 29;

#### Defined in

[src/production_indents_pb.ts:1344](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1344)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/production_indents_pb.ts:1190](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1190)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: int64 location_id = 24;

#### Defined in

[src/production_indents_pb.ts:1309](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1309)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/production_indents_pb.ts:1204](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1204)

___

### productionRefFor

• **productionRefFor**: `string` = `""`

Stores if the indent is associated to a production plan

**`Generated`**

from field: string production_ref_for = 26;

#### Defined in

[src/production_indents_pb.ts:1323](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1323)

___

### productionRefId

• **productionRefId**: `bigint` = `protoInt64.zero`

Stores the production plan ID if production_ref_for is production-plan

**`Generated`**

from field: int64 production_ref_id = 27;

#### Defined in

[src/production_indents_pb.ts:1330](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1330)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the production indent

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/production_indents_pb.ts:1295](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1295)

___

### sortKey

• **sortKey**: [`PRODUCTION_INDENT_SORT_KEY`](../enums/PRODUCTION_INDENT_SORT_KEY.md) = `PRODUCTION_INDENT_SORT_KEY.PRODUCTION_INDENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PRODUCTION_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/production_indents_pb.ts:1218](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1218)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/production_indents_pb.ts:1211](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1211)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this production indent

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/production_indents_pb.ts:1246](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1246)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 25;

#### Defined in

[src/production_indents_pb.ts:1316](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1316)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_indents_pb.ts:1353](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1353)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_indents_pb.ts:1351](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1351)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionIndentsServiceFilterReq"``

#### Defined in

[src/production_indents_pb.ts:1352](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1352)

## Methods

### clone

▸ **clone**(): [`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md) \| `PlainMessage`<[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

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

[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md) \| `PlainMessage`<[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md) \| `PlainMessage`<[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_indents_pb.ts:1391](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1391)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

#### Defined in

[src/production_indents_pb.ts:1379](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1379)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

#### Defined in

[src/production_indents_pb.ts:1383](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1383)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceFilterReq`](ProductionIndentsServiceFilterReq.md)

#### Defined in

[src/production_indents_pb.ts:1387](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1387)
