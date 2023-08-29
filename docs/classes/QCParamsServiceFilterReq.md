[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QCParamsServiceFilterReq

# Class: QCParamsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.QCParamsServiceFilterReq

## Hierarchy

- `Message`<[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)\>

  ↳ **`QCParamsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](QCParamsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](QCParamsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](QCParamsServiceFilterReq.md#approvedonend)
- [approvedOnStart](QCParamsServiceFilterReq.md#approvedonstart)
- [approverRoleId](QCParamsServiceFilterReq.md#approverroleid)
- [code](QCParamsServiceFilterReq.md#code)
- [completedOnEnd](QCParamsServiceFilterReq.md#completedonend)
- [completedOnStart](QCParamsServiceFilterReq.md#completedonstart)
- [count](QCParamsServiceFilterReq.md#count)
- [creationTimestampEnd](QCParamsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](QCParamsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](QCParamsServiceFilterReq.md#entityuuid)
- [isActive](QCParamsServiceFilterReq.md#isactive)
- [name](QCParamsServiceFilterReq.md#name)
- [offset](QCParamsServiceFilterReq.md#offset)
- [sortKey](QCParamsServiceFilterReq.md#sortkey)
- [sortOrder](QCParamsServiceFilterReq.md#sortorder)
- [status](QCParamsServiceFilterReq.md#status)
- [fields](QCParamsServiceFilterReq.md#fields)
- [runtime](QCParamsServiceFilterReq.md#runtime)
- [typeName](QCParamsServiceFilterReq.md#typename)

### Methods

- [clone](QCParamsServiceFilterReq.md#clone)
- [equals](QCParamsServiceFilterReq.md#equals)
- [fromBinary](QCParamsServiceFilterReq.md#frombinary)
- [fromJson](QCParamsServiceFilterReq.md#fromjson)
- [fromJsonString](QCParamsServiceFilterReq.md#fromjsonstring)
- [getType](QCParamsServiceFilterReq.md#gettype)
- [toBinary](QCParamsServiceFilterReq.md#tobinary)
- [toJSON](QCParamsServiceFilterReq.md#tojson)
- [toJson](QCParamsServiceFilterReq.md#tojson-1)
- [toJsonString](QCParamsServiceFilterReq.md#tojsonstring)
- [equals](QCParamsServiceFilterReq.md#equals-1)
- [fromBinary](QCParamsServiceFilterReq.md#frombinary-1)
- [fromJson](QCParamsServiceFilterReq.md#fromjson-1)
- [fromJsonString](QCParamsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCParamsServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)\> |

#### Overrides

Message&lt;QCParamsServiceFilterReq\&gt;.constructor

#### Defined in

[src/qc_params_pb.ts:753](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L753)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/qc_params_pb.ts:716](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L716)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/qc_params_pb.ts:709](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L709)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/qc_params_pb.ts:702](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L702)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/qc_params_pb.ts:723](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L723)

___

### code

• **code**: `string` = `""`

The qc param code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/qc_params_pb.ts:751](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L751)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/qc_params_pb.ts:737](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L737)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/qc_params_pb.ts:730](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L730)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/qc_params_pb.ts:646](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L646)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/qc_params_pb.ts:681](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L681)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/qc_params_pb.ts:674](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L674)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/qc_params_pb.ts:688](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L688)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/qc_params_pb.ts:639](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L639)

___

### name

• **name**: `string` = `""`

The name of the qc param

**`Generated`**

from field: string name = 20;

#### Defined in

[src/qc_params_pb.ts:744](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L744)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/qc_params_pb.ts:653](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L653)

___

### sortKey

• **sortKey**: [`QC_PARAM_SORT_KEY`](../enums/QC_PARAM_SORT_KEY.md) = `QC_PARAM_SORT_KEY.QC_PARAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.QC_PARAM_SORT_KEY sort_key = 5;

#### Defined in

[src/qc_params_pb.ts:667](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L667)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/qc_params_pb.ts:660](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L660)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this qc param

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/qc_params_pb.ts:695](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L695)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_params_pb.ts:760](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L760)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_params_pb.ts:758](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L758)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QCParamsServiceFilterReq"``

#### Defined in

[src/qc_params_pb.ts:759](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L759)

## Methods

### clone

▸ **clone**(): [`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md) \| `PlainMessage`<[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

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

[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md) \| `PlainMessage`<[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md) \| `PlainMessage`<[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_params_pb.ts:792](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L792)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

#### Defined in

[src/qc_params_pb.ts:780](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L780)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

#### Defined in

[src/qc_params_pb.ts:784](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L784)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

#### Defined in

[src/qc_params_pb.ts:788](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_params_pb.ts#L788)
