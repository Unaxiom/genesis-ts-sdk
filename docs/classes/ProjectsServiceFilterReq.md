[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProjectsServiceFilterReq

# Class: ProjectsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.ProjectsServiceFilterReq

## Hierarchy

- `Message`<[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)\>

  ↳ **`ProjectsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ProjectsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](ProjectsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](ProjectsServiceFilterReq.md#approvedonend)
- [approvedOnStart](ProjectsServiceFilterReq.md#approvedonstart)
- [approverRoleId](ProjectsServiceFilterReq.md#approverroleid)
- [clientId](ProjectsServiceFilterReq.md#clientid)
- [completedOnEnd](ProjectsServiceFilterReq.md#completedonend)
- [completedOnStart](ProjectsServiceFilterReq.md#completedonstart)
- [count](ProjectsServiceFilterReq.md#count)
- [creationTimestampEnd](ProjectsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ProjectsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](ProjectsServiceFilterReq.md#entityuuid)
- [finalRefNumber](ProjectsServiceFilterReq.md#finalrefnumber)
- [isActive](ProjectsServiceFilterReq.md#isactive)
- [offset](ProjectsServiceFilterReq.md#offset)
- [referenceId](ProjectsServiceFilterReq.md#referenceid)
- [sortKey](ProjectsServiceFilterReq.md#sortkey)
- [sortOrder](ProjectsServiceFilterReq.md#sortorder)
- [status](ProjectsServiceFilterReq.md#status)
- [fields](ProjectsServiceFilterReq.md#fields)
- [runtime](ProjectsServiceFilterReq.md#runtime)
- [typeName](ProjectsServiceFilterReq.md#typename)

### Methods

- [clone](ProjectsServiceFilterReq.md#clone)
- [equals](ProjectsServiceFilterReq.md#equals)
- [fromBinary](ProjectsServiceFilterReq.md#frombinary)
- [fromJson](ProjectsServiceFilterReq.md#fromjson)
- [fromJsonString](ProjectsServiceFilterReq.md#fromjsonstring)
- [getType](ProjectsServiceFilterReq.md#gettype)
- [toBinary](ProjectsServiceFilterReq.md#tobinary)
- [toJSON](ProjectsServiceFilterReq.md#tojson)
- [toJson](ProjectsServiceFilterReq.md#tojson-1)
- [toJsonString](ProjectsServiceFilterReq.md#tojsonstring)
- [equals](ProjectsServiceFilterReq.md#equals-1)
- [fromBinary](ProjectsServiceFilterReq.md#frombinary-1)
- [fromJson](ProjectsServiceFilterReq.md#fromjson-1)
- [fromJsonString](ProjectsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProjectsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)\> |

#### Overrides

Message&lt;ProjectsServiceFilterReq\&gt;.constructor

#### Defined in

[src/projects_pb.ts:817](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L817)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/projects_pb.ts:773](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L773)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/projects_pb.ts:766](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L766)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/projects_pb.ts:759](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L759)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/projects_pb.ts:780](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L780)

___

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

The ID of the associated client. Returns all record if it is set to -1. 0 is a valid filter too.

**`Generated`**

from field: int64 client_id = 22;

#### Defined in

[src/projects_pb.ts:815](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L815)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/projects_pb.ts:794](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L794)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/projects_pb.ts:787](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L787)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/projects_pb.ts:703](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L703)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/projects_pb.ts:738](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L738)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/projects_pb.ts:731](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L731)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/projects_pb.ts:745](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L745)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/projects_pb.ts:808](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L808)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/projects_pb.ts:696](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L696)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/projects_pb.ts:710](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L710)

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the project

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/projects_pb.ts:801](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L801)

___

### sortKey

• **sortKey**: [`PROJECT_SORT_KEY`](../enums/PROJECT_SORT_KEY.md) = `PROJECT_SORT_KEY.PROJECT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PROJECT_SORT_KEY sort_key = 5;

#### Defined in

[src/projects_pb.ts:724](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L724)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/projects_pb.ts:717](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L717)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this project

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/projects_pb.ts:752](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L752)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/projects_pb.ts:824](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L824)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/projects_pb.ts:822](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L822)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProjectsServiceFilterReq"``

#### Defined in

[src/projects_pb.ts:823](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L823)

## Methods

### clone

▸ **clone**(): [`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md) \| `PlainMessage`<[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

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

[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md) \| `PlainMessage`<[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md) \| `PlainMessage`<[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/projects_pb.ts:857](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L857)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

#### Defined in

[src/projects_pb.ts:845](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L845)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

#### Defined in

[src/projects_pb.ts:849](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L849)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceFilterReq`](ProjectsServiceFilterReq.md)

#### Defined in

[src/projects_pb.ts:853](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/projects_pb.ts#L853)
