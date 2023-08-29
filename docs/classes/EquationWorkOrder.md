[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / EquationWorkOrder

# Class: EquationWorkOrder

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.EquationWorkOrder

## Hierarchy

- `Message`<[`EquationWorkOrder`](EquationWorkOrder.md)\>

  ↳ **`EquationWorkOrder`**

## Table of contents

### Constructors

- [constructor](EquationWorkOrder.md#constructor)

### Properties

- [approvalMetadata](EquationWorkOrder.md#approvalmetadata)
- [completedOn](EquationWorkOrder.md#completedon)
- [description](EquationWorkOrder.md#description)
- [entityUuid](EquationWorkOrder.md#entityuuid)
- [list](EquationWorkOrder.md#list)
- [logs](EquationWorkOrder.md#logs)
- [metadata](EquationWorkOrder.md#metadata)
- [name](EquationWorkOrder.md#name)
- [status](EquationWorkOrder.md#status)
- [totalPrice](EquationWorkOrder.md#totalprice)
- [vaultFolderId](EquationWorkOrder.md#vaultfolderid)
- [workOrderId](EquationWorkOrder.md#workorderid)
- [fields](EquationWorkOrder.md#fields)
- [runtime](EquationWorkOrder.md#runtime)
- [typeName](EquationWorkOrder.md#typename)

### Methods

- [clone](EquationWorkOrder.md#clone)
- [equals](EquationWorkOrder.md#equals)
- [fromBinary](EquationWorkOrder.md#frombinary)
- [fromJson](EquationWorkOrder.md#fromjson)
- [fromJsonString](EquationWorkOrder.md#fromjsonstring)
- [getType](EquationWorkOrder.md#gettype)
- [toBinary](EquationWorkOrder.md#tobinary)
- [toJSON](EquationWorkOrder.md#tojson)
- [toJson](EquationWorkOrder.md#tojson-1)
- [toJsonString](EquationWorkOrder.md#tojsonstring)
- [equals](EquationWorkOrder.md#equals-1)
- [fromBinary](EquationWorkOrder.md#frombinary-1)
- [fromJson](EquationWorkOrder.md#fromjson-1)
- [fromJsonString](EquationWorkOrder.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationWorkOrder**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EquationWorkOrder`](EquationWorkOrder.md)\> |

#### Overrides

Message&lt;EquationWorkOrder\&gt;.constructor

#### Defined in

[src/equations_work_orders_pb.ts:348](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L348)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/equations_work_orders_pb.ts:283](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L283)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this equation work order was marked as completed

**`Generated`**

from field: int64 completed_on = 6;

#### Defined in

[src/equations_work_orders_pb.ts:304](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L304)

___

### description

• **description**: `string` = `""`

The description of the equation work order

**`Generated`**

from field: string description = 13;

#### Defined in

[src/equations_work_orders_pb.ts:332](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L332)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/equations_work_orders_pb.ts:269](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L269)

___

### list

• **list**: [`EquationWorkOrderItem`](EquationWorkOrderItem.md)[] = `[]`

The list of associated equation work order items

**`Generated`**

from field: repeated Genesis.EquationWorkOrderItem list = 20;

#### Defined in

[src/equations_work_orders_pb.ts:339](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L339)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this equation work order

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/equations_work_orders_pb.ts:297](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L297)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this equation work order

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/equations_work_orders_pb.ts:276](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L276)

___

### name

• **name**: `string` = `""`

The name of the equation work order

**`Generated`**

from field: string name = 10;

#### Defined in

[src/equations_work_orders_pb.ts:318](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L318)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this equation work order

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/equations_work_orders_pb.ts:290](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L290)

___

### totalPrice

• **totalPrice**: `number` = `0`

The total price of the equation work order

**`Generated`**

from field: double total_price = 40;

#### Defined in

[src/equations_work_orders_pb.ts:346](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L346)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/equations_work_orders_pb.ts:311](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L311)

___

### workOrderId

• **workOrderId**: `bigint` = `protoInt64.zero`

The ID of the work order that this equation belongs to

**`Generated`**

from field: int64 work_order_id = 12;

#### Defined in

[src/equations_work_orders_pb.ts:325](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L325)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_work_orders_pb.ts:355](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L355)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_work_orders_pb.ts:353](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L353)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.EquationWorkOrder"``

#### Defined in

[src/equations_work_orders_pb.ts:354](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L354)

## Methods

### clone

▸ **clone**(): [`EquationWorkOrder`](EquationWorkOrder.md)

Create a deep copy.

#### Returns

[`EquationWorkOrder`](EquationWorkOrder.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationWorkOrder`](EquationWorkOrder.md) \| `PlainMessage`<[`EquationWorkOrder`](EquationWorkOrder.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationWorkOrder`](EquationWorkOrder.md)

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

[`EquationWorkOrder`](EquationWorkOrder.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationWorkOrder`](EquationWorkOrder.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationWorkOrder`](EquationWorkOrder.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationWorkOrder`](EquationWorkOrder.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationWorkOrder`](EquationWorkOrder.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EquationWorkOrder`](EquationWorkOrder.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EquationWorkOrder`](EquationWorkOrder.md)\>

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
| `a` | `undefined` \| [`EquationWorkOrder`](EquationWorkOrder.md) \| `PlainMessage`<[`EquationWorkOrder`](EquationWorkOrder.md)\> |
| `b` | `undefined` \| [`EquationWorkOrder`](EquationWorkOrder.md) \| `PlainMessage`<[`EquationWorkOrder`](EquationWorkOrder.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_work_orders_pb.ts:382](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L382)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EquationWorkOrder`](EquationWorkOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EquationWorkOrder`](EquationWorkOrder.md)

#### Defined in

[src/equations_work_orders_pb.ts:370](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L370)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EquationWorkOrder`](EquationWorkOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationWorkOrder`](EquationWorkOrder.md)

#### Defined in

[src/equations_work_orders_pb.ts:374](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L374)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EquationWorkOrder`](EquationWorkOrder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationWorkOrder`](EquationWorkOrder.md)

#### Defined in

[src/equations_work_orders_pb.ts:378](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L378)
