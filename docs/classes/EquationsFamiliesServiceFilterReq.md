[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / EquationsFamiliesServiceFilterReq

# Class: EquationsFamiliesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.EquationsFamiliesServiceFilterReq

## Hierarchy

- `Message`<[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)\>

  ↳ **`EquationsFamiliesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](EquationsFamiliesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](EquationsFamiliesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](EquationsFamiliesServiceFilterReq.md#approvedonend)
- [approvedOnStart](EquationsFamiliesServiceFilterReq.md#approvedonstart)
- [approverRoleId](EquationsFamiliesServiceFilterReq.md#approverroleid)
- [completedOnEnd](EquationsFamiliesServiceFilterReq.md#completedonend)
- [completedOnStart](EquationsFamiliesServiceFilterReq.md#completedonstart)
- [count](EquationsFamiliesServiceFilterReq.md#count)
- [creationTimestampEnd](EquationsFamiliesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](EquationsFamiliesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](EquationsFamiliesServiceFilterReq.md#entityuuid)
- [familyId](EquationsFamiliesServiceFilterReq.md#familyid)
- [isActive](EquationsFamiliesServiceFilterReq.md#isactive)
- [name](EquationsFamiliesServiceFilterReq.md#name)
- [offset](EquationsFamiliesServiceFilterReq.md#offset)
- [sortKey](EquationsFamiliesServiceFilterReq.md#sortkey)
- [sortOrder](EquationsFamiliesServiceFilterReq.md#sortorder)
- [status](EquationsFamiliesServiceFilterReq.md#status)
- [fields](EquationsFamiliesServiceFilterReq.md#fields)
- [runtime](EquationsFamiliesServiceFilterReq.md#runtime)
- [typeName](EquationsFamiliesServiceFilterReq.md#typename)

### Methods

- [clone](EquationsFamiliesServiceFilterReq.md#clone)
- [equals](EquationsFamiliesServiceFilterReq.md#equals)
- [fromBinary](EquationsFamiliesServiceFilterReq.md#frombinary)
- [fromJson](EquationsFamiliesServiceFilterReq.md#fromjson)
- [fromJsonString](EquationsFamiliesServiceFilterReq.md#fromjsonstring)
- [getType](EquationsFamiliesServiceFilterReq.md#gettype)
- [toBinary](EquationsFamiliesServiceFilterReq.md#tobinary)
- [toJSON](EquationsFamiliesServiceFilterReq.md#tojson)
- [toJson](EquationsFamiliesServiceFilterReq.md#tojson-1)
- [toJsonString](EquationsFamiliesServiceFilterReq.md#tojsonstring)
- [equals](EquationsFamiliesServiceFilterReq.md#equals-1)
- [fromBinary](EquationsFamiliesServiceFilterReq.md#frombinary-1)
- [fromJson](EquationsFamiliesServiceFilterReq.md#fromjson-1)
- [fromJsonString](EquationsFamiliesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsFamiliesServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)\> |

#### Overrides

Message&lt;EquationsFamiliesServiceFilterReq\&gt;.constructor

#### Defined in

[src/equations_families_pb.ts:1147](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1147)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/equations_families_pb.ts:1110](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1110)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/equations_families_pb.ts:1103](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1103)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/equations_families_pb.ts:1096](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1096)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/equations_families_pb.ts:1117](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1117)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/equations_families_pb.ts:1131](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1131)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/equations_families_pb.ts:1124](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1124)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/equations_families_pb.ts:1040](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1040)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/equations_families_pb.ts:1075](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1075)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/equations_families_pb.ts:1068](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1068)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/equations_families_pb.ts:1082](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1082)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family that this equation belongs to

**`Generated`**

from field: int64 family_id = 21;

#### Defined in

[src/equations_families_pb.ts:1145](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1145)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/equations_families_pb.ts:1033](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1033)

___

### name

• **name**: `string` = `""`

The name of the equation family

**`Generated`**

from field: string name = 20;

#### Defined in

[src/equations_families_pb.ts:1138](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1138)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/equations_families_pb.ts:1047](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1047)

___

### sortKey

• **sortKey**: [`EQUATION_FAMILY_SORT_KEY`](../enums/EQUATION_FAMILY_SORT_KEY.md) = `EQUATION_FAMILY_SORT_KEY.EQUATION_FAMILY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.EQUATION_FAMILY_SORT_KEY sort_key = 5;

#### Defined in

[src/equations_families_pb.ts:1061](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1061)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/equations_families_pb.ts:1054](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1054)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this equation family

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/equations_families_pb.ts:1089](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1089)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_families_pb.ts:1154](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1154)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_families_pb.ts:1152](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1152)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.EquationsFamiliesServiceFilterReq"``

#### Defined in

[src/equations_families_pb.ts:1153](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1153)

## Methods

### clone

▸ **clone**(): [`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md) \| `PlainMessage`<[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

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

[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md) \| `PlainMessage`<[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md) \| `PlainMessage`<[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_families_pb.ts:1186](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1186)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

#### Defined in

[src/equations_families_pb.ts:1174](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1174)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

#### Defined in

[src/equations_families_pb.ts:1178](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1178)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceFilterReq`](EquationsFamiliesServiceFilterReq.md)

#### Defined in

[src/equations_families_pb.ts:1182](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_families_pb.ts#L1182)
