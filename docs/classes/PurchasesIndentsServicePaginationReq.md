[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsServicePaginationReq

# Class: PurchasesIndentsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.PurchasesIndentsServicePaginationReq

## Hierarchy

- `Message`<[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)\>

  ↳ **`PurchasesIndentsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsServicePaginationReq.md#constructor)

### Properties

- [count](PurchasesIndentsServicePaginationReq.md#count)
- [isActive](PurchasesIndentsServicePaginationReq.md#isactive)
- [offset](PurchasesIndentsServicePaginationReq.md#offset)
- [sortKey](PurchasesIndentsServicePaginationReq.md#sortkey)
- [sortOrder](PurchasesIndentsServicePaginationReq.md#sortorder)
- [status](PurchasesIndentsServicePaginationReq.md#status)
- [fields](PurchasesIndentsServicePaginationReq.md#fields)
- [runtime](PurchasesIndentsServicePaginationReq.md#runtime)
- [typeName](PurchasesIndentsServicePaginationReq.md#typename)

### Methods

- [clone](PurchasesIndentsServicePaginationReq.md#clone)
- [equals](PurchasesIndentsServicePaginationReq.md#equals)
- [fromBinary](PurchasesIndentsServicePaginationReq.md#frombinary)
- [fromJson](PurchasesIndentsServicePaginationReq.md#fromjson)
- [fromJsonString](PurchasesIndentsServicePaginationReq.md#fromjsonstring)
- [getType](PurchasesIndentsServicePaginationReq.md#gettype)
- [toBinary](PurchasesIndentsServicePaginationReq.md#tobinary)
- [toJSON](PurchasesIndentsServicePaginationReq.md#tojson)
- [toJson](PurchasesIndentsServicePaginationReq.md#tojson-1)
- [toJsonString](PurchasesIndentsServicePaginationReq.md#tojsonstring)
- [equals](PurchasesIndentsServicePaginationReq.md#equals-1)
- [fromBinary](PurchasesIndentsServicePaginationReq.md#frombinary-1)
- [fromJson](PurchasesIndentsServicePaginationReq.md#fromjson-1)
- [fromJsonString](PurchasesIndentsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)\> |

#### Overrides

Message&lt;PurchasesIndentsServicePaginationReq\&gt;.constructor

#### Defined in

[src/purchases_indents_pb.ts:1073](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1073)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/purchases_indents_pb.ts:1043](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1043)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/purchases_indents_pb.ts:1036](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1036)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/purchases_indents_pb.ts:1050](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1050)

___

### sortKey

• **sortKey**: [`PURCHASE_INDENT_SORT_KEY`](../enums/PURCHASE_INDENT_SORT_KEY.md) = `PURCHASE_INDENT_SORT_KEY.PURCHASE_INDENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PURCHASE_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_indents_pb.ts:1064](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1064)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/purchases_indents_pb.ts:1057](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1057)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this purchase indent

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/purchases_indents_pb.ts:1071](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1071)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_indents_pb.ts:1080](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1080)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_indents_pb.ts:1078](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1078)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesIndentsServicePaginationReq"``

#### Defined in

[src/purchases_indents_pb.ts:1079](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1079)

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md) \| `PlainMessage`<[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

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

[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md) \| `PlainMessage`<[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md) \| `PlainMessage`<[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_indents_pb.ts:1101](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1101)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

#### Defined in

[src/purchases_indents_pb.ts:1089](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1089)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

#### Defined in

[src/purchases_indents_pb.ts:1093](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1093)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServicePaginationReq`](PurchasesIndentsServicePaginationReq.md)

#### Defined in

[src/purchases_indents_pb.ts:1097](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1097)
