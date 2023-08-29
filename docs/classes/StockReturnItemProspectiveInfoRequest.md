[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StockReturnItemProspectiveInfoRequest

# Class: StockReturnItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective stock return item

**`Generated`**

from message Genesis.StockReturnItemProspectiveInfoRequest

## Hierarchy

- `Message`<[`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md)\>

  ↳ **`StockReturnItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](StockReturnItemProspectiveInfoRequest.md#constructor)

### Properties

- [familyId](StockReturnItemProspectiveInfoRequest.md#familyid)
- [stockReturnId](StockReturnItemProspectiveInfoRequest.md#stockreturnid)
- [fields](StockReturnItemProspectiveInfoRequest.md#fields)
- [runtime](StockReturnItemProspectiveInfoRequest.md#runtime)
- [typeName](StockReturnItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](StockReturnItemProspectiveInfoRequest.md#clone)
- [equals](StockReturnItemProspectiveInfoRequest.md#equals)
- [fromBinary](StockReturnItemProspectiveInfoRequest.md#frombinary)
- [fromJson](StockReturnItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](StockReturnItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](StockReturnItemProspectiveInfoRequest.md#gettype)
- [toBinary](StockReturnItemProspectiveInfoRequest.md#tobinary)
- [toJSON](StockReturnItemProspectiveInfoRequest.md#tojson)
- [toJson](StockReturnItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](StockReturnItemProspectiveInfoRequest.md#tojsonstring)
- [equals](StockReturnItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](StockReturnItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](StockReturnItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](StockReturnItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockReturnItemProspectiveInfoRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md)\> |

#### Overrides

Message&lt;StockReturnItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

[src/stock_returns_pb.ts:829](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L829)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/stock_returns_pb.ts:827](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L827)

___

### stockReturnId

• **stockReturnId**: `bigint` = `protoInt64.zero`

Stores the stock return ID

**`Generated`**

from field: int64 stock_return_id = 10;

#### Defined in

[src/stock_returns_pb.ts:820](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L820)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_returns_pb.ts:836](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L836)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_returns_pb.ts:834](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L834)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.StockReturnItemProspectiveInfoRequest"``

#### Defined in

[src/stock_returns_pb.ts:835](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L835)

## Methods

### clone

▸ **clone**(): [`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md) \| `PlainMessage`<[`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md)

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

[`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md) \| `PlainMessage`<[`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md) \| `PlainMessage`<[`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_returns_pb.ts:853](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L853)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md)

#### Defined in

[src/stock_returns_pb.ts:841](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L841)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md)

#### Defined in

[src/stock_returns_pb.ts:845](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L845)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockReturnItemProspectiveInfoRequest`](StockReturnItemProspectiveInfoRequest.md)

#### Defined in

[src/stock_returns_pb.ts:849](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_returns_pb.ts#L849)
