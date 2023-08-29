[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / EquationsWorkOrdersServiceFilterReq

# Class: EquationsWorkOrdersServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Genesis.EquationsWorkOrdersServiceFilterReq

## Hierarchy

- `Message`<[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)\>

  ↳ **`EquationsWorkOrdersServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](EquationsWorkOrdersServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](EquationsWorkOrdersServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](EquationsWorkOrdersServiceFilterReq.md#approvedonend)
- [approvedOnStart](EquationsWorkOrdersServiceFilterReq.md#approvedonstart)
- [approverRoleId](EquationsWorkOrdersServiceFilterReq.md#approverroleid)
- [completedOnEnd](EquationsWorkOrdersServiceFilterReq.md#completedonend)
- [completedOnStart](EquationsWorkOrdersServiceFilterReq.md#completedonstart)
- [count](EquationsWorkOrdersServiceFilterReq.md#count)
- [creationTimestampEnd](EquationsWorkOrdersServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](EquationsWorkOrdersServiceFilterReq.md#creationtimestampstart)
- [entityUuid](EquationsWorkOrdersServiceFilterReq.md#entityuuid)
- [isActive](EquationsWorkOrdersServiceFilterReq.md#isactive)
- [name](EquationsWorkOrdersServiceFilterReq.md#name)
- [offset](EquationsWorkOrdersServiceFilterReq.md#offset)
- [sortKey](EquationsWorkOrdersServiceFilterReq.md#sortkey)
- [sortOrder](EquationsWorkOrdersServiceFilterReq.md#sortorder)
- [status](EquationsWorkOrdersServiceFilterReq.md#status)
- [workOrderId](EquationsWorkOrdersServiceFilterReq.md#workorderid)
- [fields](EquationsWorkOrdersServiceFilterReq.md#fields)
- [runtime](EquationsWorkOrdersServiceFilterReq.md#runtime)
- [typeName](EquationsWorkOrdersServiceFilterReq.md#typename)

### Methods

- [clone](EquationsWorkOrdersServiceFilterReq.md#clone)
- [equals](EquationsWorkOrdersServiceFilterReq.md#equals)
- [fromBinary](EquationsWorkOrdersServiceFilterReq.md#frombinary)
- [fromJson](EquationsWorkOrdersServiceFilterReq.md#fromjson)
- [fromJsonString](EquationsWorkOrdersServiceFilterReq.md#fromjsonstring)
- [getType](EquationsWorkOrdersServiceFilterReq.md#gettype)
- [toBinary](EquationsWorkOrdersServiceFilterReq.md#tobinary)
- [toJSON](EquationsWorkOrdersServiceFilterReq.md#tojson)
- [toJson](EquationsWorkOrdersServiceFilterReq.md#tojson-1)
- [toJsonString](EquationsWorkOrdersServiceFilterReq.md#tojsonstring)
- [equals](EquationsWorkOrdersServiceFilterReq.md#equals-1)
- [fromBinary](EquationsWorkOrdersServiceFilterReq.md#frombinary-1)
- [fromJson](EquationsWorkOrdersServiceFilterReq.md#fromjson-1)
- [fromJsonString](EquationsWorkOrdersServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsWorkOrdersServiceFilterReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)\> |

#### Overrides

Message&lt;EquationsWorkOrdersServiceFilterReq\&gt;.constructor

#### Defined in

[src/equations_work_orders_pb.ts:1147](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1147)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: int64 approved_by_user_id = 13;

#### Defined in

[src/equations_work_orders_pb.ts:1110](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1110)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: int64 approved_on_end = 12;

#### Defined in

[src/equations_work_orders_pb.ts:1103](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1103)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: int64 approved_on_start = 11;

#### Defined in

[src/equations_work_orders_pb.ts:1096](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1096)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: int64 approver_role_id = 14;

#### Defined in

[src/equations_work_orders_pb.ts:1117](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1117)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: int64 completed_on_end = 16;

#### Defined in

[src/equations_work_orders_pb.ts:1131](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1131)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: int64 completed_on_start = 15;

#### Defined in

[src/equations_work_orders_pb.ts:1124](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1124)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/equations_work_orders_pb.ts:1040](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1040)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_end = 7;

#### Defined in

[src/equations_work_orders_pb.ts:1075](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1075)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: int64 creation_timestamp_start = 6;

#### Defined in

[src/equations_work_orders_pb.ts:1068](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1068)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/equations_work_orders_pb.ts:1082](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1082)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/equations_work_orders_pb.ts:1033](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1033)

___

### name

• **name**: `string` = `""`

The name of the equation work order

**`Generated`**

from field: string name = 20;

#### Defined in

[src/equations_work_orders_pb.ts:1138](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1138)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/equations_work_orders_pb.ts:1047](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1047)

___

### sortKey

• **sortKey**: [`EQUATION_WORK_ORDER_SORT_KEY`](../enums/EQUATION_WORK_ORDER_SORT_KEY.md) = `EQUATION_WORK_ORDER_SORT_KEY.EQUATION_WORK_ORDER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.EQUATION_WORK_ORDER_SORT_KEY sort_key = 5;

#### Defined in

[src/equations_work_orders_pb.ts:1061](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1061)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/equations_work_orders_pb.ts:1054](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1054)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this equation work order

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/equations_work_orders_pb.ts:1089](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1089)

___

### workOrderId

• **workOrderId**: `bigint` = `protoInt64.zero`

The ID of the work order that this equation belongs to

**`Generated`**

from field: int64 work_order_id = 21;

#### Defined in

[src/equations_work_orders_pb.ts:1145](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1145)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_work_orders_pb.ts:1154](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1154)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_work_orders_pb.ts:1152](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1152)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.EquationsWorkOrdersServiceFilterReq"``

#### Defined in

[src/equations_work_orders_pb.ts:1153](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1153)

## Methods

### clone

▸ **clone**(): [`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

Create a deep copy.

#### Returns

[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md) \| `PlainMessage`<[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

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

[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md) \| `PlainMessage`<[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)\> |
| `b` | `undefined` \| [`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md) \| `PlainMessage`<[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_work_orders_pb.ts:1186](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1186)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

#### Defined in

[src/equations_work_orders_pb.ts:1174](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1174)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

#### Defined in

[src/equations_work_orders_pb.ts:1178](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1178)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

#### Defined in

[src/equations_work_orders_pb.ts:1182](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L1182)
