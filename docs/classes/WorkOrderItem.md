[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / WorkOrderItem

# Class: WorkOrderItem

Describes the parameters that constitute an item associated to a work order

**`Generated`**

from message Genesis.WorkOrderItem

## Hierarchy

- `Message`<[`WorkOrderItem`](WorkOrderItem.md)\>

  ↳ **`WorkOrderItem`**

## Table of contents

### Constructors

- [constructor](WorkOrderItem.md#constructor)

### Properties

- [approvalMetadata](WorkOrderItem.md#approvalmetadata)
- [deliveryDate](WorkOrderItem.md#deliverydate)
- [entityUuid](WorkOrderItem.md#entityuuid)
- [familyId](WorkOrderItem.md#familyid)
- [metadata](WorkOrderItem.md#metadata)
- [needApproval](WorkOrderItem.md#needapproval)
- [quantity](WorkOrderItem.md#quantity)
- [userComment](WorkOrderItem.md#usercomment)
- [workOrderId](WorkOrderItem.md#workorderid)
- [fields](WorkOrderItem.md#fields)
- [runtime](WorkOrderItem.md#runtime)
- [typeName](WorkOrderItem.md#typename)

### Methods

- [clone](WorkOrderItem.md#clone)
- [equals](WorkOrderItem.md#equals)
- [fromBinary](WorkOrderItem.md#frombinary)
- [fromJson](WorkOrderItem.md#fromjson)
- [fromJsonString](WorkOrderItem.md#fromjsonstring)
- [getType](WorkOrderItem.md#gettype)
- [toBinary](WorkOrderItem.md#tobinary)
- [toJSON](WorkOrderItem.md#tojson)
- [toJson](WorkOrderItem.md#tojson-1)
- [toJsonString](WorkOrderItem.md#tojsonstring)
- [equals](WorkOrderItem.md#equals-1)
- [fromBinary](WorkOrderItem.md#frombinary-1)
- [fromJson](WorkOrderItem.md#fromjson-1)
- [fromJsonString](WorkOrderItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrderItem**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`WorkOrderItem`](WorkOrderItem.md)\> |

#### Overrides

Message&lt;WorkOrderItem\&gt;.constructor

#### Defined in

[src/work_orders_pb.ts:696](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L696)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/work_orders_pb.ts:652](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L652)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 13;

#### Defined in

[src/work_orders_pb.ts:694](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L694)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/work_orders_pb.ts:638](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L638)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/work_orders_pb.ts:680](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L680)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this work order

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/work_orders_pb.ts:645](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L645)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/work_orders_pb.ts:659](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L659)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity of the item

**`Generated`**

from field: int64 quantity = 12;

#### Defined in

[src/work_orders_pb.ts:687](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L687)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/work_orders_pb.ts:666](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L666)

___

### workOrderId

• **workOrderId**: `bigint` = `protoInt64.zero`

Stores the work order ID

**`Generated`**

from field: int64 work_order_id = 10;

#### Defined in

[src/work_orders_pb.ts:673](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L673)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/work_orders_pb.ts:703](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L703)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/work_orders_pb.ts:701](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L701)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.WorkOrderItem"``

#### Defined in

[src/work_orders_pb.ts:702](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L702)

## Methods

### clone

▸ **clone**(): [`WorkOrderItem`](WorkOrderItem.md)

Create a deep copy.

#### Returns

[`WorkOrderItem`](WorkOrderItem.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrderItem`](WorkOrderItem.md) \| `PlainMessage`<[`WorkOrderItem`](WorkOrderItem.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrderItem`](WorkOrderItem.md)

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

[`WorkOrderItem`](WorkOrderItem.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrderItem`](WorkOrderItem.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrderItem`](WorkOrderItem.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrderItem`](WorkOrderItem.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrderItem`](WorkOrderItem.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`WorkOrderItem`](WorkOrderItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`WorkOrderItem`](WorkOrderItem.md)\>

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
| `a` | `undefined` \| [`WorkOrderItem`](WorkOrderItem.md) \| `PlainMessage`<[`WorkOrderItem`](WorkOrderItem.md)\> |
| `b` | `undefined` \| [`WorkOrderItem`](WorkOrderItem.md) \| `PlainMessage`<[`WorkOrderItem`](WorkOrderItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/work_orders_pb.ts:727](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L727)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`WorkOrderItem`](WorkOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`WorkOrderItem`](WorkOrderItem.md)

#### Defined in

[src/work_orders_pb.ts:715](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L715)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`WorkOrderItem`](WorkOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrderItem`](WorkOrderItem.md)

#### Defined in

[src/work_orders_pb.ts:719](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L719)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`WorkOrderItem`](WorkOrderItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrderItem`](WorkOrderItem.md)

#### Defined in

[src/work_orders_pb.ts:723](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L723)
