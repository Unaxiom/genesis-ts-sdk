[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionPlanItemHistoryRequest

# Class: ProductionPlanItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Genesis.ProductionPlanItemHistoryRequest

## Hierarchy

- `Message`<[`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md)\>

  ↳ **`ProductionPlanItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](ProductionPlanItemHistoryRequest.md#constructor)

### Properties

- [familyId](ProductionPlanItemHistoryRequest.md#familyid)
- [productionPlanId](ProductionPlanItemHistoryRequest.md#productionplanid)
- [fields](ProductionPlanItemHistoryRequest.md#fields)
- [runtime](ProductionPlanItemHistoryRequest.md#runtime)
- [typeName](ProductionPlanItemHistoryRequest.md#typename)

### Methods

- [clone](ProductionPlanItemHistoryRequest.md#clone)
- [equals](ProductionPlanItemHistoryRequest.md#equals)
- [fromBinary](ProductionPlanItemHistoryRequest.md#frombinary)
- [fromJson](ProductionPlanItemHistoryRequest.md#fromjson)
- [fromJsonString](ProductionPlanItemHistoryRequest.md#fromjsonstring)
- [getType](ProductionPlanItemHistoryRequest.md#gettype)
- [toBinary](ProductionPlanItemHistoryRequest.md#tobinary)
- [toJSON](ProductionPlanItemHistoryRequest.md#tojson)
- [toJson](ProductionPlanItemHistoryRequest.md#tojson-1)
- [toJsonString](ProductionPlanItemHistoryRequest.md#tojsonstring)
- [equals](ProductionPlanItemHistoryRequest.md#equals-1)
- [fromBinary](ProductionPlanItemHistoryRequest.md#frombinary-1)
- [fromJson](ProductionPlanItemHistoryRequest.md#fromjson-1)
- [fromJsonString](ProductionPlanItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlanItemHistoryRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md)\> |

#### Overrides

Message&lt;ProductionPlanItemHistoryRequest\&gt;.constructor

#### Defined in

[src/production_plans_pb.ts:973](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L973)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/production_plans_pb.ts:971](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L971)

___

### productionPlanId

• **productionPlanId**: `bigint` = `protoInt64.zero`

Stores the production plan ID

**`Generated`**

from field: int64 production_plan_id = 10;

#### Defined in

[src/production_plans_pb.ts:964](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L964)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_plans_pb.ts:980](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L980)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_plans_pb.ts:978](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L978)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionPlanItemHistoryRequest"``

#### Defined in

[src/production_plans_pb.ts:979](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L979)

## Methods

### clone

▸ **clone**(): [`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md) \| `PlainMessage`<[`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md)

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

[`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md) \| `PlainMessage`<[`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md) \| `PlainMessage`<[`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_plans_pb.ts:997](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L997)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md)

#### Defined in

[src/production_plans_pb.ts:985](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L985)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md)

#### Defined in

[src/production_plans_pb.ts:989](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L989)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionPlanItemHistoryRequest`](ProductionPlanItemHistoryRequest.md)

#### Defined in

[src/production_plans_pb.ts:993](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_plans_pb.ts#L993)
