[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentsServiceItemCreateRequest

# Class: ProductionIndentsServiceItemCreateRequest

Describes the parameters required to add an item to a production indent

**`Generated`**

from message Genesis.ProductionIndentsServiceItemCreateRequest

## Hierarchy

- `Message`<[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)\>

  ↳ **`ProductionIndentsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](ProductionIndentsServiceItemCreateRequest.md#constructor)

### Properties

- [familyId](ProductionIndentsServiceItemCreateRequest.md#familyid)
- [internalQuantity](ProductionIndentsServiceItemCreateRequest.md#internalquantity)
- [productionIndentId](ProductionIndentsServiceItemCreateRequest.md#productionindentid)
- [userComment](ProductionIndentsServiceItemCreateRequest.md#usercomment)
- [fields](ProductionIndentsServiceItemCreateRequest.md#fields)
- [runtime](ProductionIndentsServiceItemCreateRequest.md#runtime)
- [typeName](ProductionIndentsServiceItemCreateRequest.md#typename)

### Methods

- [clone](ProductionIndentsServiceItemCreateRequest.md#clone)
- [equals](ProductionIndentsServiceItemCreateRequest.md#equals)
- [fromBinary](ProductionIndentsServiceItemCreateRequest.md#frombinary)
- [fromJson](ProductionIndentsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](ProductionIndentsServiceItemCreateRequest.md#fromjsonstring)
- [getType](ProductionIndentsServiceItemCreateRequest.md#gettype)
- [toBinary](ProductionIndentsServiceItemCreateRequest.md#tobinary)
- [toJSON](ProductionIndentsServiceItemCreateRequest.md#tojson)
- [toJson](ProductionIndentsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](ProductionIndentsServiceItemCreateRequest.md#tojsonstring)
- [equals](ProductionIndentsServiceItemCreateRequest.md#equals-1)
- [fromBinary](ProductionIndentsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](ProductionIndentsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](ProductionIndentsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentsServiceItemCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)\> |

#### Overrides

Message&lt;ProductionIndentsServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/production_indents_pb.ts:577](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L577)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/production_indents_pb.ts:568](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L568)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity required

**`Generated`**

from field: int64 internal_quantity = 12;

#### Defined in

[src/production_indents_pb.ts:575](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L575)

___

### productionIndentId

• **productionIndentId**: `bigint` = `protoInt64.zero`

Stores the production indent ID

**`Generated`**

from field: int64 production_indent_id = 10;

#### Defined in

[src/production_indents_pb.ts:561](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L561)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/production_indents_pb.ts:554](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L554)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_indents_pb.ts:584](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L584)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_indents_pb.ts:582](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L582)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionIndentsServiceItemCreateRequest"``

#### Defined in

[src/production_indents_pb.ts:583](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L583)

## Methods

### clone

▸ **clone**(): [`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md) \| `PlainMessage`<[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

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

[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md) \| `PlainMessage`<[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md) \| `PlainMessage`<[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_indents_pb.ts:603](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L603)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

#### Defined in

[src/production_indents_pb.ts:591](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L591)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

#### Defined in

[src/production_indents_pb.ts:595](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L595)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceItemCreateRequest`](ProductionIndentsServiceItemCreateRequest.md)

#### Defined in

[src/production_indents_pb.ts:599](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L599)
