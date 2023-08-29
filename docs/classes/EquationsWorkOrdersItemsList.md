[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / EquationsWorkOrdersItemsList

# Class: EquationsWorkOrdersItemsList

Describes the message consisting of the list of equation work order items

**`Generated`**

from message Genesis.EquationsWorkOrdersItemsList

## Hierarchy

- `Message`<[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)\>

  ↳ **`EquationsWorkOrdersItemsList`**

## Table of contents

### Constructors

- [constructor](EquationsWorkOrdersItemsList.md#constructor)

### Properties

- [list](EquationsWorkOrdersItemsList.md#list)
- [fields](EquationsWorkOrdersItemsList.md#fields)
- [runtime](EquationsWorkOrdersItemsList.md#runtime)
- [typeName](EquationsWorkOrdersItemsList.md#typename)

### Methods

- [clone](EquationsWorkOrdersItemsList.md#clone)
- [equals](EquationsWorkOrdersItemsList.md#equals)
- [fromBinary](EquationsWorkOrdersItemsList.md#frombinary)
- [fromJson](EquationsWorkOrdersItemsList.md#fromjson)
- [fromJsonString](EquationsWorkOrdersItemsList.md#fromjsonstring)
- [getType](EquationsWorkOrdersItemsList.md#gettype)
- [toBinary](EquationsWorkOrdersItemsList.md#tobinary)
- [toJSON](EquationsWorkOrdersItemsList.md#tojson)
- [toJson](EquationsWorkOrdersItemsList.md#tojson-1)
- [toJsonString](EquationsWorkOrdersItemsList.md#tojsonstring)
- [equals](EquationsWorkOrdersItemsList.md#equals-1)
- [fromBinary](EquationsWorkOrdersItemsList.md#frombinary-1)
- [fromJson](EquationsWorkOrdersItemsList.md#fromjson-1)
- [fromJsonString](EquationsWorkOrdersItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsWorkOrdersItemsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)\> |

#### Overrides

Message&lt;EquationsWorkOrdersItemsList\&gt;.constructor

#### Defined in

[src/equations_work_orders_pb.ts:713](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L713)

## Properties

### list

• **list**: [`EquationWorkOrderItem`](EquationWorkOrderItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.EquationWorkOrderItem list = 1;

#### Defined in

[src/equations_work_orders_pb.ts:711](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L711)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_work_orders_pb.ts:720](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L720)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_work_orders_pb.ts:718](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L718)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.EquationsWorkOrdersItemsList"``

#### Defined in

[src/equations_work_orders_pb.ts:719](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L719)

## Methods

### clone

▸ **clone**(): [`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

Create a deep copy.

#### Returns

[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md) \| `PlainMessage`<[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

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

[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)\>

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
| `a` | `undefined` \| [`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md) \| `PlainMessage`<[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)\> |
| `b` | `undefined` \| [`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md) \| `PlainMessage`<[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_work_orders_pb.ts:736](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L736)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

#### Defined in

[src/equations_work_orders_pb.ts:724](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L724)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

#### Defined in

[src/equations_work_orders_pb.ts:728](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L728)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersItemsList`](EquationsWorkOrdersItemsList.md)

#### Defined in

[src/equations_work_orders_pb.ts:732](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_work_orders_pb.ts#L732)
