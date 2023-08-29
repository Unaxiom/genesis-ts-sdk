[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / WorkOrdersItemsList

# Class: WorkOrdersItemsList

Describes the message consisting of the list of work order items

**`Generated`**

from message Genesis.WorkOrdersItemsList

## Hierarchy

- `Message`<[`WorkOrdersItemsList`](WorkOrdersItemsList.md)\>

  ↳ **`WorkOrdersItemsList`**

## Table of contents

### Constructors

- [constructor](WorkOrdersItemsList.md#constructor)

### Properties

- [list](WorkOrdersItemsList.md#list)
- [fields](WorkOrdersItemsList.md#fields)
- [runtime](WorkOrdersItemsList.md#runtime)
- [typeName](WorkOrdersItemsList.md#typename)

### Methods

- [clone](WorkOrdersItemsList.md#clone)
- [equals](WorkOrdersItemsList.md#equals)
- [fromBinary](WorkOrdersItemsList.md#frombinary)
- [fromJson](WorkOrdersItemsList.md#fromjson)
- [fromJsonString](WorkOrdersItemsList.md#fromjsonstring)
- [getType](WorkOrdersItemsList.md#gettype)
- [toBinary](WorkOrdersItemsList.md#tobinary)
- [toJSON](WorkOrdersItemsList.md#tojson)
- [toJson](WorkOrdersItemsList.md#tojson-1)
- [toJsonString](WorkOrdersItemsList.md#tojsonstring)
- [equals](WorkOrdersItemsList.md#equals-1)
- [fromBinary](WorkOrdersItemsList.md#frombinary-1)
- [fromJson](WorkOrdersItemsList.md#fromjson-1)
- [fromJsonString](WorkOrdersItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrdersItemsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`WorkOrdersItemsList`](WorkOrdersItemsList.md)\> |

#### Overrides

Message&lt;WorkOrdersItemsList\&gt;.constructor

#### Defined in

[src/work_orders_pb.ts:788](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L788)

## Properties

### list

• **list**: [`WorkOrderItem`](WorkOrderItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.WorkOrderItem list = 1;

#### Defined in

[src/work_orders_pb.ts:786](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L786)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/work_orders_pb.ts:795](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L795)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/work_orders_pb.ts:793](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L793)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.WorkOrdersItemsList"``

#### Defined in

[src/work_orders_pb.ts:794](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L794)

## Methods

### clone

▸ **clone**(): [`WorkOrdersItemsList`](WorkOrdersItemsList.md)

Create a deep copy.

#### Returns

[`WorkOrdersItemsList`](WorkOrdersItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrdersItemsList`](WorkOrdersItemsList.md) \| `PlainMessage`<[`WorkOrdersItemsList`](WorkOrdersItemsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrdersItemsList`](WorkOrdersItemsList.md)

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

[`WorkOrdersItemsList`](WorkOrdersItemsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrdersItemsList`](WorkOrdersItemsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersItemsList`](WorkOrdersItemsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrdersItemsList`](WorkOrdersItemsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersItemsList`](WorkOrdersItemsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`WorkOrdersItemsList`](WorkOrdersItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`WorkOrdersItemsList`](WorkOrdersItemsList.md)\>

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
| `a` | `undefined` \| [`WorkOrdersItemsList`](WorkOrdersItemsList.md) \| `PlainMessage`<[`WorkOrdersItemsList`](WorkOrdersItemsList.md)\> |
| `b` | `undefined` \| [`WorkOrdersItemsList`](WorkOrdersItemsList.md) \| `PlainMessage`<[`WorkOrdersItemsList`](WorkOrdersItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/work_orders_pb.ts:811](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L811)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`WorkOrdersItemsList`](WorkOrdersItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`WorkOrdersItemsList`](WorkOrdersItemsList.md)

#### Defined in

[src/work_orders_pb.ts:799](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L799)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`WorkOrdersItemsList`](WorkOrdersItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersItemsList`](WorkOrdersItemsList.md)

#### Defined in

[src/work_orders_pb.ts:803](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L803)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`WorkOrdersItemsList`](WorkOrdersItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersItemsList`](WorkOrdersItemsList.md)

#### Defined in

[src/work_orders_pb.ts:807](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/work_orders_pb.ts#L807)
