[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionPlansItemsList

# Class: ProductionPlansItemsList

Describes the message consisting of the list of production plan items

**`Generated`**

from message Genesis.ProductionPlansItemsList

## Hierarchy

- `Message`<[`ProductionPlansItemsList`](ProductionPlansItemsList.md)\>

  ↳ **`ProductionPlansItemsList`**

## Table of contents

### Constructors

- [constructor](ProductionPlansItemsList.md#constructor)

### Properties

- [list](ProductionPlansItemsList.md#list)
- [fields](ProductionPlansItemsList.md#fields)
- [runtime](ProductionPlansItemsList.md#runtime)
- [typeName](ProductionPlansItemsList.md#typename)

### Methods

- [clone](ProductionPlansItemsList.md#clone)
- [equals](ProductionPlansItemsList.md#equals)
- [fromBinary](ProductionPlansItemsList.md#frombinary)
- [fromJson](ProductionPlansItemsList.md#fromjson)
- [fromJsonString](ProductionPlansItemsList.md#fromjsonstring)
- [getType](ProductionPlansItemsList.md#gettype)
- [toBinary](ProductionPlansItemsList.md#tobinary)
- [toJSON](ProductionPlansItemsList.md#tojson)
- [toJson](ProductionPlansItemsList.md#tojson-1)
- [toJsonString](ProductionPlansItemsList.md#tojsonstring)
- [equals](ProductionPlansItemsList.md#equals-1)
- [fromBinary](ProductionPlansItemsList.md#frombinary-1)
- [fromJson](ProductionPlansItemsList.md#fromjson-1)
- [fromJsonString](ProductionPlansItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlansItemsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionPlansItemsList`](ProductionPlansItemsList.md)\> |

#### Overrides

Message&lt;ProductionPlansItemsList\&gt;.constructor

#### Defined in

[src/production_plans_pb.ts:924](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L924)

## Properties

### list

• **list**: [`ProductionPlanItem`](ProductionPlanItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.ProductionPlanItem list = 1;

#### Defined in

[src/production_plans_pb.ts:922](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L922)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans_pb.ts:931](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L931)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans_pb.ts:929](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L929)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionPlansItemsList"``

#### Defined in

[src/production_plans_pb.ts:930](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L930)

## Methods

### clone

▸ **clone**(): [`ProductionPlansItemsList`](ProductionPlansItemsList.md)

Create a deep copy.

#### Returns

[`ProductionPlansItemsList`](ProductionPlansItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlansItemsList`](ProductionPlansItemsList.md) \| `PlainMessage`<[`ProductionPlansItemsList`](ProductionPlansItemsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlansItemsList`](ProductionPlansItemsList.md)

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

[`ProductionPlansItemsList`](ProductionPlansItemsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlansItemsList`](ProductionPlansItemsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansItemsList`](ProductionPlansItemsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansItemsList`](ProductionPlansItemsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansItemsList`](ProductionPlansItemsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionPlansItemsList`](ProductionPlansItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionPlansItemsList`](ProductionPlansItemsList.md)\>

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
| `a` | `undefined` \| [`ProductionPlansItemsList`](ProductionPlansItemsList.md) \| `PlainMessage`<[`ProductionPlansItemsList`](ProductionPlansItemsList.md)\> |
| `b` | `undefined` \| [`ProductionPlansItemsList`](ProductionPlansItemsList.md) \| `PlainMessage`<[`ProductionPlansItemsList`](ProductionPlansItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_plans_pb.ts:947](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L947)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionPlansItemsList`](ProductionPlansItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlansItemsList`](ProductionPlansItemsList.md)

#### Defined in

[src/production_plans_pb.ts:935](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L935)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionPlansItemsList`](ProductionPlansItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansItemsList`](ProductionPlansItemsList.md)

#### Defined in

[src/production_plans_pb.ts:939](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L939)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionPlansItemsList`](ProductionPlansItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlansItemsList`](ProductionPlansItemsList.md)

#### Defined in

[src/production_plans_pb.ts:943](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L943)
