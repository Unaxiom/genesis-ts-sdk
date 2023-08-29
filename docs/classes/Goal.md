[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / Goal

# Class: Goal

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.Goal

## Hierarchy

- `Message`<[`Goal`](Goal.md)\>

  ↳ **`Goal`**

## Table of contents

### Constructors

- [constructor](Goal.md#constructor)

### Properties

- [approvalMetadata](Goal.md#approvalmetadata)
- [completedOn](Goal.md#completedon)
- [description](Goal.md#description)
- [endDate](Goal.md#enddate)
- [entityUuid](Goal.md#entityuuid)
- [finalRefNumber](Goal.md#finalrefnumber)
- [formData](Goal.md#formdata)
- [list](Goal.md#list)
- [logs](Goal.md#logs)
- [metadata](Goal.md#metadata)
- [referenceId](Goal.md#referenceid)
- [startDate](Goal.md#startdate)
- [status](Goal.md#status)
- [userId](Goal.md#userid)
- [vaultFolderId](Goal.md#vaultfolderid)
- [fields](Goal.md#fields)
- [runtime](Goal.md#runtime)
- [typeName](Goal.md#typename)

### Methods

- [clone](Goal.md#clone)
- [equals](Goal.md#equals)
- [fromBinary](Goal.md#frombinary)
- [fromJson](Goal.md#fromjson)
- [fromJsonString](Goal.md#fromjsonstring)
- [getType](Goal.md#gettype)
- [toBinary](Goal.md#tobinary)
- [toJSON](Goal.md#tojson)
- [toJson](Goal.md#tojson-1)
- [toJsonString](Goal.md#tojsonstring)
- [equals](Goal.md#equals-1)
- [fromBinary](Goal.md#frombinary-1)
- [fromJson](Goal.md#fromjson-1)
- [fromJsonString](Goal.md#fromjsonstring-1)

## Constructors

### constructor

• **new Goal**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Goal`](Goal.md)\> |

#### Overrides

Message&lt;Goal\&gt;.constructor

#### Defined in

[src/goals_pb.ts:461](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L461)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/goals_pb.ts:375](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L375)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this goal was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/goals_pb.ts:396](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L396)

___

### description

• **description**: `string` = `""`

The description of the goal

**`Generated`**

from field: string description = 20;

#### Defined in

[src/goals_pb.ts:445](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L445)

___

### endDate

• **endDate**: `string` = `""`

The date until which the goal remains into force

**`Generated`**

from field: string end_date = 14;

#### Defined in

[src/goals_pb.ts:438](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L438)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/goals_pb.ts:361](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L361)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/goals_pb.ts:417](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L417)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatum form_data = 40;

#### Defined in

[src/goals_pb.ts:459](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L459)

___

### list

• **list**: [`GoalItem`](GoalItem.md)[] = `[]`

The list of associated goal items

**`Generated`**

from field: repeated Genesis.GoalItem list = 30;

#### Defined in

[src/goals_pb.ts:452](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L452)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this goal

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/goals_pb.ts:389](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L389)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this goal

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/goals_pb.ts:368](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L368)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the goal

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/goals_pb.ts:410](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L410)

___

### startDate

• **startDate**: `string` = `""`

The date from which the goal comes into force

**`Generated`**

from field: string start_date = 13;

#### Defined in

[src/goals_pb.ts:431](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L431)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this goal

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/goals_pb.ts:382](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L382)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The associated user ID

**`Generated`**

from field: int64 user_id = 12;

#### Defined in

[src/goals_pb.ts:424](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L424)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/goals_pb.ts:403](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L403)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goals_pb.ts:468](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L468)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goals_pb.ts:466](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L466)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.Goal"``

#### Defined in

[src/goals_pb.ts:467](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L467)

## Methods

### clone

▸ **clone**(): [`Goal`](Goal.md)

Create a deep copy.

#### Returns

[`Goal`](Goal.md)

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
| `other` | `undefined` \| ``null`` \| [`Goal`](Goal.md) \| `PlainMessage`<[`Goal`](Goal.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Goal`](Goal.md)

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

[`Goal`](Goal.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Goal`](Goal.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Goal`](Goal.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Goal`](Goal.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Goal`](Goal.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Goal`](Goal.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Goal`](Goal.md)\>

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
| `a` | `undefined` \| [`Goal`](Goal.md) \| `PlainMessage`<[`Goal`](Goal.md)\> |
| `b` | `undefined` \| [`Goal`](Goal.md) \| `PlainMessage`<[`Goal`](Goal.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goals_pb.ts:498](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L498)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Goal`](Goal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Goal`](Goal.md)

#### Defined in

[src/goals_pb.ts:486](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L486)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Goal`](Goal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Goal`](Goal.md)

#### Defined in

[src/goals_pb.ts:490](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L490)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Goal`](Goal.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Goal`](Goal.md)

#### Defined in

[src/goals_pb.ts:494](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L494)
