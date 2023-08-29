[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / WorkOrderItemHistoryRequest

# Class: WorkOrderItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Genesis.WorkOrderItemHistoryRequest

## Hierarchy

- `Message`<[`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md)\>

  ↳ **`WorkOrderItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](WorkOrderItemHistoryRequest.md#constructor)

### Properties

- [familyId](WorkOrderItemHistoryRequest.md#familyid)
- [workOrderId](WorkOrderItemHistoryRequest.md#workorderid)
- [fields](WorkOrderItemHistoryRequest.md#fields)
- [runtime](WorkOrderItemHistoryRequest.md#runtime)
- [typeName](WorkOrderItemHistoryRequest.md#typename)

### Methods

- [clone](WorkOrderItemHistoryRequest.md#clone)
- [equals](WorkOrderItemHistoryRequest.md#equals)
- [fromBinary](WorkOrderItemHistoryRequest.md#frombinary)
- [fromJson](WorkOrderItemHistoryRequest.md#fromjson)
- [fromJsonString](WorkOrderItemHistoryRequest.md#fromjsonstring)
- [getType](WorkOrderItemHistoryRequest.md#gettype)
- [toBinary](WorkOrderItemHistoryRequest.md#tobinary)
- [toJSON](WorkOrderItemHistoryRequest.md#tojson)
- [toJson](WorkOrderItemHistoryRequest.md#tojson-1)
- [toJsonString](WorkOrderItemHistoryRequest.md#tojsonstring)
- [equals](WorkOrderItemHistoryRequest.md#equals-1)
- [fromBinary](WorkOrderItemHistoryRequest.md#frombinary-1)
- [fromJson](WorkOrderItemHistoryRequest.md#fromjson-1)
- [fromJsonString](WorkOrderItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrderItemHistoryRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md)\> |

#### Overrides

Message&lt;WorkOrderItemHistoryRequest\&gt;.constructor

#### Defined in

[src/work_orders_pb.ts:837](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L837)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/work_orders_pb.ts:835](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L835)

___

### workOrderId

• **workOrderId**: `bigint` = `protoInt64.zero`

Stores the work order ID

**`Generated`**

from field: int64 work_order_id = 10;

#### Defined in

[src/work_orders_pb.ts:828](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L828)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/work_orders_pb.ts:844](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L844)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/work_orders_pb.ts:842](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L842)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.WorkOrderItemHistoryRequest"``

#### Defined in

[src/work_orders_pb.ts:843](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L843)

## Methods

### clone

▸ **clone**(): [`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md) \| `PlainMessage`<[`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md)

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

[`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md) \| `PlainMessage`<[`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md) \| `PlainMessage`<[`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/work_orders_pb.ts:861](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L861)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md)

#### Defined in

[src/work_orders_pb.ts:849](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L849)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md)

#### Defined in

[src/work_orders_pb.ts:853](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L853)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrderItemHistoryRequest`](WorkOrderItemHistoryRequest.md)

#### Defined in

[src/work_orders_pb.ts:857](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L857)
