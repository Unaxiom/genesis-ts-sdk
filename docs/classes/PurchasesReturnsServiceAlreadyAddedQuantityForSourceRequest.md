[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest

# Class: PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest

Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id

**`Generated`**

from message Genesis.PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest

## Hierarchy

- `Message`<[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\>

  ↳ **`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#constructor)

### Properties

- [familyId](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#familyid)
- [refFrom](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#reffrom)
- [refId](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#refid)
- [fields](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fields)
- [runtime](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#runtime)
- [typeName](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#typename)

### Methods

- [clone](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#clone)
- [equals](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#equals)
- [fromBinary](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#frombinary)
- [fromJson](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fromjson)
- [fromJsonString](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring)
- [getType](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#gettype)
- [toBinary](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#tobinary)
- [toJSON](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#tojson)
- [toJson](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#tojson-1)
- [toJsonString](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#tojsonstring)
- [equals](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#equals-1)
- [fromBinary](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#frombinary-1)
- [fromJson](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fromjson-1)
- [fromJsonString](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Overrides

Message&lt;PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest\&gt;.constructor

#### Defined in

[src/purchases_returns_pb.ts:945](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L945)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The associated family ID

**`Generated`**

from field: int64 family_id = 3;

#### Defined in

[src/purchases_returns_pb.ts:943](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L943)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 1;

#### Defined in

[src/purchases_returns_pb.ts:929](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L929)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 2;

#### Defined in

[src/purchases_returns_pb.ts:936](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L936)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_returns_pb.ts:952](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L952)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_returns_pb.ts:950](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L950)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest"``

#### Defined in

[src/purchases_returns_pb.ts:951](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L951)

## Methods

### clone

▸ **clone**(): [`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

Create a deep copy.

#### Returns

[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`<[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

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

[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`<[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\> |
| `b` | `undefined` \| [`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`<[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_returns_pb.ts:970](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L970)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

[src/purchases_returns_pb.ts:958](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L958)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

[src/purchases_returns_pb.ts:962](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L962)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest`](PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

[src/purchases_returns_pb.ts:966](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_returns_pb.ts#L966)
