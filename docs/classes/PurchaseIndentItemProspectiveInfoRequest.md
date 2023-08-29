[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchaseIndentItemProspectiveInfoRequest

# Class: PurchaseIndentItemProspectiveInfoRequest

Describes the parameters that are required to retrieve the info of a prospective purchase indent item

**`Generated`**

from message Genesis.PurchaseIndentItemProspectiveInfoRequest

## Hierarchy

- `Message`<[`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md)\>

  ↳ **`PurchaseIndentItemProspectiveInfoRequest`**

## Table of contents

### Constructors

- [constructor](PurchaseIndentItemProspectiveInfoRequest.md#constructor)

### Properties

- [familyId](PurchaseIndentItemProspectiveInfoRequest.md#familyid)
- [purchaseIndentId](PurchaseIndentItemProspectiveInfoRequest.md#purchaseindentid)
- [fields](PurchaseIndentItemProspectiveInfoRequest.md#fields)
- [runtime](PurchaseIndentItemProspectiveInfoRequest.md#runtime)
- [typeName](PurchaseIndentItemProspectiveInfoRequest.md#typename)

### Methods

- [clone](PurchaseIndentItemProspectiveInfoRequest.md#clone)
- [equals](PurchaseIndentItemProspectiveInfoRequest.md#equals)
- [fromBinary](PurchaseIndentItemProspectiveInfoRequest.md#frombinary)
- [fromJson](PurchaseIndentItemProspectiveInfoRequest.md#fromjson)
- [fromJsonString](PurchaseIndentItemProspectiveInfoRequest.md#fromjsonstring)
- [getType](PurchaseIndentItemProspectiveInfoRequest.md#gettype)
- [toBinary](PurchaseIndentItemProspectiveInfoRequest.md#tobinary)
- [toJSON](PurchaseIndentItemProspectiveInfoRequest.md#tojson)
- [toJson](PurchaseIndentItemProspectiveInfoRequest.md#tojson-1)
- [toJsonString](PurchaseIndentItemProspectiveInfoRequest.md#tojsonstring)
- [equals](PurchaseIndentItemProspectiveInfoRequest.md#equals-1)
- [fromBinary](PurchaseIndentItemProspectiveInfoRequest.md#frombinary-1)
- [fromJson](PurchaseIndentItemProspectiveInfoRequest.md#fromjson-1)
- [fromJsonString](PurchaseIndentItemProspectiveInfoRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseIndentItemProspectiveInfoRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md)\> |

#### Overrides

Message&lt;PurchaseIndentItemProspectiveInfoRequest\&gt;.constructor

#### Defined in

[src/purchases_indents_pb.ts:995](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L995)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: int64 family_id = 11;

#### Defined in

[src/purchases_indents_pb.ts:993](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L993)

___

### purchaseIndentId

• **purchaseIndentId**: `bigint` = `protoInt64.zero`

Stores the purchase indent ID

**`Generated`**

from field: int64 purchase_indent_id = 10;

#### Defined in

[src/purchases_indents_pb.ts:986](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L986)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_indents_pb.ts:1002](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1002)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_indents_pb.ts:1000](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1000)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchaseIndentItemProspectiveInfoRequest"``

#### Defined in

[src/purchases_indents_pb.ts:1001](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1001)

## Methods

### clone

▸ **clone**(): [`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md)

Create a deep copy.

#### Returns

[`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md) \| `PlainMessage`<[`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md)

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

[`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md)\>

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
| `a` | `undefined` \| [`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md) \| `PlainMessage`<[`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md)\> |
| `b` | `undefined` \| [`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md) \| `PlainMessage`<[`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_indents_pb.ts:1019](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1019)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md)

#### Defined in

[src/purchases_indents_pb.ts:1007](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1007)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md)

#### Defined in

[src/purchases_indents_pb.ts:1011](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1011)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchaseIndentItemProspectiveInfoRequest`](PurchaseIndentItemProspectiveInfoRequest.md)

#### Defined in

[src/purchases_indents_pb.ts:1015](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1015)
