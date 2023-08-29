[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchaseIndentItemHistoryRequest

# Class: PurchaseIndentItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Genesis.PurchaseIndentItemHistoryRequest

## Hierarchy

- `Message`<[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)\>

  ↳ **`PurchaseIndentItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](PurchaseIndentItemHistoryRequest.md#constructor)

### Properties

- [familyId](PurchaseIndentItemHistoryRequest.md#familyid)
- [purchaseIndentId](PurchaseIndentItemHistoryRequest.md#purchaseindentid)
- [fields](PurchaseIndentItemHistoryRequest.md#fields)
- [runtime](PurchaseIndentItemHistoryRequest.md#runtime)
- [typeName](PurchaseIndentItemHistoryRequest.md#typename)

### Methods

- [clone](PurchaseIndentItemHistoryRequest.md#clone)
- [equals](PurchaseIndentItemHistoryRequest.md#equals)
- [fromBinary](PurchaseIndentItemHistoryRequest.md#frombinary)
- [fromJson](PurchaseIndentItemHistoryRequest.md#fromjson)
- [fromJsonString](PurchaseIndentItemHistoryRequest.md#fromjsonstring)
- [getType](PurchaseIndentItemHistoryRequest.md#gettype)
- [toBinary](PurchaseIndentItemHistoryRequest.md#tobinary)
- [toJSON](PurchaseIndentItemHistoryRequest.md#tojson)
- [toJson](PurchaseIndentItemHistoryRequest.md#tojson-1)
- [toJsonString](PurchaseIndentItemHistoryRequest.md#tojsonstring)
- [equals](PurchaseIndentItemHistoryRequest.md#equals-1)
- [fromBinary](PurchaseIndentItemHistoryRequest.md#frombinary-1)
- [fromJson](PurchaseIndentItemHistoryRequest.md#fromjson-1)
- [fromJsonString](PurchaseIndentItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseIndentItemHistoryRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)\> |

#### Overrides

Message&lt;PurchaseIndentItemHistoryRequest\&gt;.constructor

#### Defined in

[src/purchases_indents_pb.ts:945](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L945)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/purchases_indents_pb.ts:943](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L943)

___

### purchaseIndentId

• **purchaseIndentId**: `bigint` = `protoInt64.zero`

Stores the purchase indent ID

**`Generated`**

from field: int64 purchase_indent_id = 10;

#### Defined in

[src/purchases_indents_pb.ts:936](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L936)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_indents_pb.ts:952](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L952)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_indents_pb.ts:950](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L950)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchaseIndentItemHistoryRequest"``

#### Defined in

[src/purchases_indents_pb.ts:951](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L951)

## Methods

### clone

▸ **clone**(): [`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md) \| `PlainMessage`<[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

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

[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md) \| `PlainMessage`<[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md) \| `PlainMessage`<[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_indents_pb.ts:969](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L969)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

#### Defined in

[src/purchases_indents_pb.ts:957](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L957)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

#### Defined in

[src/purchases_indents_pb.ts:961](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L961)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchaseIndentItemHistoryRequest`](PurchaseIndentItemHistoryRequest.md)

#### Defined in

[src/purchases_indents_pb.ts:965](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L965)
