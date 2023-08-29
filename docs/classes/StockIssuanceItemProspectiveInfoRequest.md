[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StockIssuanceItemProspectiveInfoRequest

# Class: StockIssuanceItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective stock issuance item

**`Generated`**

from message Genesis.StockIssuanceItemProspectiveInfoRequest

## Hierarchy

- `Message`<[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)\>

  ↳ **`StockIssuanceItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](StockIssuanceItemProspectiveInfoRequest.md#constructor)

### Properties

- [familyId](StockIssuanceItemProspectiveInfoRequest.md#familyid)
- [stockIssuanceId](StockIssuanceItemProspectiveInfoRequest.md#stockissuanceid)
- [fields](StockIssuanceItemProspectiveInfoRequest.md#fields)
- [runtime](StockIssuanceItemProspectiveInfoRequest.md#runtime)
- [typeName](StockIssuanceItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](StockIssuanceItemProspectiveInfoRequest.md#clone)
- [equals](StockIssuanceItemProspectiveInfoRequest.md#equals)
- [fromBinary](StockIssuanceItemProspectiveInfoRequest.md#frombinary)
- [fromJson](StockIssuanceItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](StockIssuanceItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](StockIssuanceItemProspectiveInfoRequest.md#gettype)
- [toBinary](StockIssuanceItemProspectiveInfoRequest.md#tobinary)
- [toJSON](StockIssuanceItemProspectiveInfoRequest.md#tojson)
- [toJson](StockIssuanceItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](StockIssuanceItemProspectiveInfoRequest.md#tojsonstring)
- [equals](StockIssuanceItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](StockIssuanceItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](StockIssuanceItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](StockIssuanceItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuanceItemProspectiveInfoRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)\> |

#### Overrides

Message&lt;StockIssuanceItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

[src/stock_issuances_pb.ts:863](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L863)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/stock_issuances_pb.ts:861](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L861)

___

### stockIssuanceId

• **stockIssuanceId**: `bigint` = `protoInt64.zero`

Stores the stock issuance ID

**`Generated`**

from field: int64 stock_issuance_id = 10;

#### Defined in

[src/stock_issuances_pb.ts:854](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L854)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_issuances_pb.ts:870](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L870)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_issuances_pb.ts:868](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L868)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.StockIssuanceItemProspectiveInfoRequest"``

#### Defined in

[src/stock_issuances_pb.ts:869](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L869)

## Methods

### clone

▸ **clone**(): [`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md) \| `PlainMessage`<[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

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

[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md) \| `PlainMessage`<[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md) \| `PlainMessage`<[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_issuances_pb.ts:887](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L887)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

#### Defined in

[src/stock_issuances_pb.ts:875](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L875)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

#### Defined in

[src/stock_issuances_pb.ts:879](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L879)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StockIssuanceItemProspectiveInfoRequest`](StockIssuanceItemProspectiveInfoRequest.md)

#### Defined in

[src/stock_issuances_pb.ts:883](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/stock_issuances_pb.ts#L883)
