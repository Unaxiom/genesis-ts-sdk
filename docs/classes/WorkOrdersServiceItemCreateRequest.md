[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / WorkOrdersServiceItemCreateRequest

# Class: WorkOrdersServiceItemCreateRequest

Describes the parameters required to add an item to a work order

**`Generated`**

from message Genesis.WorkOrdersServiceItemCreateRequest

## Hierarchy

- `Message`<[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)\>

  ↳ **`WorkOrdersServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](WorkOrdersServiceItemCreateRequest.md#constructor)

### Properties

- [deliveryDate](WorkOrdersServiceItemCreateRequest.md#deliverydate)
- [familyId](WorkOrdersServiceItemCreateRequest.md#familyid)
- [quantity](WorkOrdersServiceItemCreateRequest.md#quantity)
- [userComment](WorkOrdersServiceItemCreateRequest.md#usercomment)
- [workOrderId](WorkOrdersServiceItemCreateRequest.md#workorderid)
- [fields](WorkOrdersServiceItemCreateRequest.md#fields)
- [runtime](WorkOrdersServiceItemCreateRequest.md#runtime)
- [typeName](WorkOrdersServiceItemCreateRequest.md#typename)

### Methods

- [clone](WorkOrdersServiceItemCreateRequest.md#clone)
- [equals](WorkOrdersServiceItemCreateRequest.md#equals)
- [fromBinary](WorkOrdersServiceItemCreateRequest.md#frombinary)
- [fromJson](WorkOrdersServiceItemCreateRequest.md#fromjson)
- [fromJsonString](WorkOrdersServiceItemCreateRequest.md#fromjsonstring)
- [getType](WorkOrdersServiceItemCreateRequest.md#gettype)
- [toBinary](WorkOrdersServiceItemCreateRequest.md#tobinary)
- [toJSON](WorkOrdersServiceItemCreateRequest.md#tojson)
- [toJson](WorkOrdersServiceItemCreateRequest.md#tojson-1)
- [toJsonString](WorkOrdersServiceItemCreateRequest.md#tojsonstring)
- [equals](WorkOrdersServiceItemCreateRequest.md#equals-1)
- [fromBinary](WorkOrdersServiceItemCreateRequest.md#frombinary-1)
- [fromJson](WorkOrdersServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](WorkOrdersServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrdersServiceItemCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)\> |

#### Overrides

Message&lt;WorkOrdersServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/work_orders_pb.ts:528](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L528)

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 13;

#### Defined in

[src/work_orders_pb.ts:526](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L526)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/work_orders_pb.ts:512](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L512)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity of the item

**`Generated`**

from field: int64 quantity = 12;

#### Defined in

[src/work_orders_pb.ts:519](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L519)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/work_orders_pb.ts:498](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L498)

___

### workOrderId

• **workOrderId**: `bigint` = `protoInt64.zero`

Stores the work order ID

**`Generated`**

from field: int64 work_order_id = 10;

#### Defined in

[src/work_orders_pb.ts:505](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L505)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/work_orders_pb.ts:535](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L535)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/work_orders_pb.ts:533](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L533)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.WorkOrdersServiceItemCreateRequest"``

#### Defined in

[src/work_orders_pb.ts:534](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L534)

## Methods

### clone

▸ **clone**(): [`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md) \| `PlainMessage`<[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

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

[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md) \| `PlainMessage`<[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md) \| `PlainMessage`<[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/work_orders_pb.ts:555](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L555)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

#### Defined in

[src/work_orders_pb.ts:543](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L543)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

#### Defined in

[src/work_orders_pb.ts:547](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L547)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceItemCreateRequest`](WorkOrdersServiceItemCreateRequest.md)

#### Defined in

[src/work_orders_pb.ts:551](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L551)
