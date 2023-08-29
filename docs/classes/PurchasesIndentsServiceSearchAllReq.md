[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsServiceSearchAllReq

# Class: PurchasesIndentsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.PurchasesIndentsServiceSearchAllReq

## Hierarchy

- `Message`<[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)\>

  ↳ **`PurchasesIndentsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsServiceSearchAllReq.md#constructor)

### Properties

- [consigneeLocationId](PurchasesIndentsServiceSearchAllReq.md#consigneelocationid)
- [count](PurchasesIndentsServiceSearchAllReq.md#count)
- [entityUuid](PurchasesIndentsServiceSearchAllReq.md#entityuuid)
- [isActive](PurchasesIndentsServiceSearchAllReq.md#isactive)
- [offset](PurchasesIndentsServiceSearchAllReq.md#offset)
- [searchKey](PurchasesIndentsServiceSearchAllReq.md#searchkey)
- [sortKey](PurchasesIndentsServiceSearchAllReq.md#sortkey)
- [sortOrder](PurchasesIndentsServiceSearchAllReq.md#sortorder)
- [status](PurchasesIndentsServiceSearchAllReq.md#status)
- [fields](PurchasesIndentsServiceSearchAllReq.md#fields)
- [runtime](PurchasesIndentsServiceSearchAllReq.md#runtime)
- [typeName](PurchasesIndentsServiceSearchAllReq.md#typename)

### Methods

- [clone](PurchasesIndentsServiceSearchAllReq.md#clone)
- [equals](PurchasesIndentsServiceSearchAllReq.md#equals)
- [fromBinary](PurchasesIndentsServiceSearchAllReq.md#frombinary)
- [fromJson](PurchasesIndentsServiceSearchAllReq.md#fromjson)
- [fromJsonString](PurchasesIndentsServiceSearchAllReq.md#fromjsonstring)
- [getType](PurchasesIndentsServiceSearchAllReq.md#gettype)
- [toBinary](PurchasesIndentsServiceSearchAllReq.md#tobinary)
- [toJSON](PurchasesIndentsServiceSearchAllReq.md#tojson)
- [toJson](PurchasesIndentsServiceSearchAllReq.md#tojson-1)
- [toJsonString](PurchasesIndentsServiceSearchAllReq.md#tojsonstring)
- [equals](PurchasesIndentsServiceSearchAllReq.md#equals-1)
- [fromBinary](PurchasesIndentsServiceSearchAllReq.md#frombinary-1)
- [fromJson](PurchasesIndentsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](PurchasesIndentsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;PurchasesIndentsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/purchases_indents_pb.ts:1526](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1526)

## Properties

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: int64 consignee_location_id = 20;

#### Defined in

[src/purchases_indents_pb.ts:1524](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1524)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/purchases_indents_pb.ts:1475](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1475)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/purchases_indents_pb.ts:1503](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1503)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/purchases_indents_pb.ts:1468](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1468)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/purchases_indents_pb.ts:1482](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1482)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/purchases_indents_pb.ts:1517](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1517)

___

### sortKey

• **sortKey**: [`PURCHASE_INDENT_SORT_KEY`](../enums/PURCHASE_INDENT_SORT_KEY.md) = `PURCHASE_INDENT_SORT_KEY.PURCHASE_INDENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PURCHASE_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_indents_pb.ts:1496](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1496)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/purchases_indents_pb.ts:1489](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1489)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/purchases_indents_pb.ts:1510](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1510)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_indents_pb.ts:1533](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1533)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_indents_pb.ts:1531](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1531)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesIndentsServiceSearchAllReq"``

#### Defined in

[src/purchases_indents_pb.ts:1532](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1532)

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md) \| `PlainMessage`<[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

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

[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md) \| `PlainMessage`<[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md) \| `PlainMessage`<[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_indents_pb.ts:1557](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1557)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

#### Defined in

[src/purchases_indents_pb.ts:1545](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1545)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

#### Defined in

[src/purchases_indents_pb.ts:1549](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1549)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceSearchAllReq`](PurchasesIndentsServiceSearchAllReq.md)

#### Defined in

[src/purchases_indents_pb.ts:1553](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_indents_pb.ts#L1553)
