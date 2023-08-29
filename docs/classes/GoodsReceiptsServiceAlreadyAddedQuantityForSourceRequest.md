[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest

# Class: GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest

Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id

**`Generated`**

from message Genesis.GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest

## Hierarchy

- `Message`<[`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md)\>

  ↳ **`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md#constructor)

### Properties

- [familyId](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md#familyid)
- [refFrom](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md#reffrom)
- [refId](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md#refid)
- [fields](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md#fields)
- [runtime](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md#runtime)
- [typeName](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md#typename)

### Methods

- [clone](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md#clone)
- [equals](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md#equals)
- [fromBinary](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md#frombinary)
- [fromJson](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md#fromjson)
- [fromJsonString](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring)
- [getType](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md#gettype)
- [toBinary](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md#tobinary)
- [toJSON](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md#tojson)
- [toJson](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md#tojson-1)
- [toJsonString](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md#tojsonstring)
- [equals](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md#equals-1)
- [fromBinary](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md#frombinary-1)
- [fromJson](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md#fromjson-1)
- [fromJsonString](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Overrides

Message&lt;GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest\&gt;.constructor

#### Defined in

[src/goods_receipts_pb.ts:1035](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1035)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The associated family ID

**`Generated`**

from field: int64 family_id = 3;

#### Defined in

[src/goods_receipts_pb.ts:1033](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1033)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 1;

#### Defined in

[src/goods_receipts_pb.ts:1019](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1019)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 2;

#### Defined in

[src/goods_receipts_pb.ts:1026](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1026)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts_pb.ts:1042](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1042)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts_pb.ts:1040](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1040)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest"``

#### Defined in

[src/goods_receipts_pb.ts:1041](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1041)

## Methods

### clone

▸ **clone**(): [`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md)

Create a deep copy.

#### Returns

[`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`<[`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md)

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

[`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`<[`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md)\> |
| `b` | `undefined` \| [`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md) \| `PlainMessage`<[`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_receipts_pb.ts:1060](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1060)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

[src/goods_receipts_pb.ts:1048](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1048)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

[src/goods_receipts_pb.ts:1052](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1052)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest`](GoodsReceiptsServiceAlreadyAddedQuantityForSourceRequest.md)

#### Defined in

[src/goods_receipts_pb.ts:1056](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goods_receipts_pb.ts#L1056)
