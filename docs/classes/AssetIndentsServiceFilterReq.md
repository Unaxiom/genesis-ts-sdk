[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AssetIndentsServiceFilterReq

# Class: AssetIndentsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.AssetIndentsServiceFilterReq

## Hierarchy

- `Message`<[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)\>

  ↳ **`AssetIndentsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](AssetIndentsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](AssetIndentsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](AssetIndentsServiceFilterReq.md#approvedonend)
- [approvedOnStart](AssetIndentsServiceFilterReq.md#approvedonstart)
- [approverRoleId](AssetIndentsServiceFilterReq.md#approverroleid)
- [completedOnEnd](AssetIndentsServiceFilterReq.md#completedonend)
- [completedOnStart](AssetIndentsServiceFilterReq.md#completedonstart)
- [count](AssetIndentsServiceFilterReq.md#count)
- [creationTimestampEnd](AssetIndentsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](AssetIndentsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](AssetIndentsServiceFilterReq.md#entityuuid)
- [finalRefNumber](AssetIndentsServiceFilterReq.md#finalrefnumber)
- [isActive](AssetIndentsServiceFilterReq.md#isactive)
- [locationId](AssetIndentsServiceFilterReq.md#locationid)
- [offset](AssetIndentsServiceFilterReq.md#offset)
- [projectId](AssetIndentsServiceFilterReq.md#projectid)
- [referenceId](AssetIndentsServiceFilterReq.md#referenceid)
- [sortKey](AssetIndentsServiceFilterReq.md#sortkey)
- [sortOrder](AssetIndentsServiceFilterReq.md#sortorder)
- [status](AssetIndentsServiceFilterReq.md#status)
- [userId](AssetIndentsServiceFilterReq.md#userid)
- [fields](AssetIndentsServiceFilterReq.md#fields)
- [runtime](AssetIndentsServiceFilterReq.md#runtime)
- [typeName](AssetIndentsServiceFilterReq.md#typename)

### Methods

- [clone](AssetIndentsServiceFilterReq.md#clone)
- [equals](AssetIndentsServiceFilterReq.md#equals)
- [fromBinary](AssetIndentsServiceFilterReq.md#frombinary)
- [fromJson](AssetIndentsServiceFilterReq.md#fromjson)
- [fromJsonString](AssetIndentsServiceFilterReq.md#fromjsonstring)
- [getType](AssetIndentsServiceFilterReq.md#gettype)
- [toBinary](AssetIndentsServiceFilterReq.md#tobinary)
- [toJSON](AssetIndentsServiceFilterReq.md#tojson)
- [toJson](AssetIndentsServiceFilterReq.md#tojson-1)
- [toJsonString](AssetIndentsServiceFilterReq.md#tojsonstring)
- [equals](AssetIndentsServiceFilterReq.md#equals-1)
- [fromBinary](AssetIndentsServiceFilterReq.md#frombinary-1)
- [fromJson](AssetIndentsServiceFilterReq.md#fromjson-1)
- [fromJsonString](AssetIndentsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssetIndentsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)\> |

#### Overrides

Message&lt;AssetIndentsServiceFilterReq\&gt;.constructor

#### Defined in

[src/asset_indents_pb.ts:1227](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1227)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/asset_indents_pb.ts:1169](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1169)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/asset_indents_pb.ts:1162](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1162)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/asset_indents_pb.ts:1155](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1155)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/asset_indents_pb.ts:1176](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1176)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/asset_indents_pb.ts:1190](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1190)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/asset_indents_pb.ts:1183](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1183)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/asset_indents_pb.ts:1099](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1099)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/asset_indents_pb.ts:1134](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1134)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/asset_indents_pb.ts:1127](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1127)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/asset_indents_pb.ts:1141](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1141)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/asset_indents_pb.ts:1204](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1204)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/asset_indents_pb.ts:1092](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1092)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: int64 location_id = 24;

#### Defined in

[src/asset_indents_pb.ts:1211](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1211)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/asset_indents_pb.ts:1106](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1106)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: int64 project_id = 50;

#### Defined in

[src/asset_indents_pb.ts:1225](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1225)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the asset indent

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/asset_indents_pb.ts:1197](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1197)

___

### sortKey

• **sortKey**: [`ASSET_INDENT_SORT_KEY`](../enums/ASSET_INDENT_SORT_KEY.md) = `ASSET_INDENT_SORT_KEY.ASSET_INDENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.ASSET_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/asset_indents_pb.ts:1120](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1120)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/asset_indents_pb.ts:1113](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1113)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this asset indent

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/asset_indents_pb.ts:1148](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1148)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the associated user

**`Generated`**

from field: int64 user_id = 25;

#### Defined in

[src/asset_indents_pb.ts:1218](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1218)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/asset_indents_pb.ts:1234](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1234)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/asset_indents_pb.ts:1232](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1232)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AssetIndentsServiceFilterReq"``

#### Defined in

[src/asset_indents_pb.ts:1233](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1233)

## Methods

### clone

▸ **clone**(): [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md) \| `PlainMessage`<[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

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

[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md) \| `PlainMessage`<[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md) \| `PlainMessage`<[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/asset_indents_pb.ts:1269](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1269)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Defined in

[src/asset_indents_pb.ts:1257](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1257)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Defined in

[src/asset_indents_pb.ts:1261](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1261)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssetIndentsServiceFilterReq`](AssetIndentsServiceFilterReq.md)

#### Defined in

[src/asset_indents_pb.ts:1265](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/asset_indents_pb.ts#L1265)
