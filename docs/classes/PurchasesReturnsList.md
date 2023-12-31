[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesReturnsList

# Class: PurchasesReturnsList

Describes the message consisting of the list of purchases returns

**`Generated`**

from message Genesis.PurchasesReturnsList

## Hierarchy

- `Message`<[`PurchasesReturnsList`](PurchasesReturnsList.md)\>

  ↳ **`PurchasesReturnsList`**

## Table of contents

### Constructors

- [constructor](PurchasesReturnsList.md#constructor)

### Properties

- [list](PurchasesReturnsList.md#list)
- [fields](PurchasesReturnsList.md#fields)
- [runtime](PurchasesReturnsList.md#runtime)
- [typeName](PurchasesReturnsList.md#typename)

### Methods

- [clone](PurchasesReturnsList.md#clone)
- [equals](PurchasesReturnsList.md#equals)
- [fromBinary](PurchasesReturnsList.md#frombinary)
- [fromJson](PurchasesReturnsList.md#fromjson)
- [fromJsonString](PurchasesReturnsList.md#fromjsonstring)
- [getType](PurchasesReturnsList.md#gettype)
- [toBinary](PurchasesReturnsList.md#tobinary)
- [toJSON](PurchasesReturnsList.md#tojson)
- [toJson](PurchasesReturnsList.md#tojson-1)
- [toJsonString](PurchasesReturnsList.md#tojsonstring)
- [equals](PurchasesReturnsList.md#equals-1)
- [fromBinary](PurchasesReturnsList.md#frombinary-1)
- [fromJson](PurchasesReturnsList.md#fromjson-1)
- [fromJsonString](PurchasesReturnsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesReturnsList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesReturnsList`](PurchasesReturnsList.md)\> |

#### Overrides

Message&lt;PurchasesReturnsList\&gt;.constructor

#### Defined in

[src/purchases_returns_pb.ts:747](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L747)

## Properties

### list

• **list**: [`PurchaseReturn`](PurchaseReturn.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.PurchaseReturn list = 1;

#### Defined in

[src/purchases_returns_pb.ts:745](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L745)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_returns_pb.ts:754](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L754)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_returns_pb.ts:752](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L752)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesReturnsList"``

#### Defined in

[src/purchases_returns_pb.ts:753](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L753)

## Methods

### clone

▸ **clone**(): [`PurchasesReturnsList`](PurchasesReturnsList.md)

Create a deep copy.

#### Returns

[`PurchasesReturnsList`](PurchasesReturnsList.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesReturnsList`](PurchasesReturnsList.md) \| `PlainMessage`<[`PurchasesReturnsList`](PurchasesReturnsList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesReturnsList`](PurchasesReturnsList.md)

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

[`PurchasesReturnsList`](PurchasesReturnsList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesReturnsList`](PurchasesReturnsList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsList`](PurchasesReturnsList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesReturnsList`](PurchasesReturnsList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsList`](PurchasesReturnsList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesReturnsList`](PurchasesReturnsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesReturnsList`](PurchasesReturnsList.md)\>

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
| `a` | `undefined` \| [`PurchasesReturnsList`](PurchasesReturnsList.md) \| `PlainMessage`<[`PurchasesReturnsList`](PurchasesReturnsList.md)\> |
| `b` | `undefined` \| [`PurchasesReturnsList`](PurchasesReturnsList.md) \| `PlainMessage`<[`PurchasesReturnsList`](PurchasesReturnsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_returns_pb.ts:770](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L770)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesReturnsList`](PurchasesReturnsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesReturnsList`](PurchasesReturnsList.md)

#### Defined in

[src/purchases_returns_pb.ts:758](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L758)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesReturnsList`](PurchasesReturnsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsList`](PurchasesReturnsList.md)

#### Defined in

[src/purchases_returns_pb.ts:762](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L762)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesReturnsList`](PurchasesReturnsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsList`](PurchasesReturnsList.md)

#### Defined in

[src/purchases_returns_pb.ts:766](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L766)
