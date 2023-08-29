[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesReturnsServiceSearchAllReq

# Class: SalesReturnsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.SalesReturnsServiceSearchAllReq

## Hierarchy

- `Message`<[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)\>

  ↳ **`SalesReturnsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](SalesReturnsServiceSearchAllReq.md#constructor)

### Properties

- [billingStatus](SalesReturnsServiceSearchAllReq.md#billingstatus)
- [count](SalesReturnsServiceSearchAllReq.md#count)
- [entityUuid](SalesReturnsServiceSearchAllReq.md#entityuuid)
- [isActive](SalesReturnsServiceSearchAllReq.md#isactive)
- [offset](SalesReturnsServiceSearchAllReq.md#offset)
- [refFrom](SalesReturnsServiceSearchAllReq.md#reffrom)
- [refId](SalesReturnsServiceSearchAllReq.md#refid)
- [searchKey](SalesReturnsServiceSearchAllReq.md#searchkey)
- [sortKey](SalesReturnsServiceSearchAllReq.md#sortkey)
- [sortOrder](SalesReturnsServiceSearchAllReq.md#sortorder)
- [status](SalesReturnsServiceSearchAllReq.md#status)
- [fields](SalesReturnsServiceSearchAllReq.md#fields)
- [runtime](SalesReturnsServiceSearchAllReq.md#runtime)
- [typeName](SalesReturnsServiceSearchAllReq.md#typename)

### Methods

- [clone](SalesReturnsServiceSearchAllReq.md#clone)
- [equals](SalesReturnsServiceSearchAllReq.md#equals)
- [fromBinary](SalesReturnsServiceSearchAllReq.md#frombinary)
- [fromJson](SalesReturnsServiceSearchAllReq.md#fromjson)
- [fromJsonString](SalesReturnsServiceSearchAllReq.md#fromjsonstring)
- [getType](SalesReturnsServiceSearchAllReq.md#gettype)
- [toBinary](SalesReturnsServiceSearchAllReq.md#tobinary)
- [toJSON](SalesReturnsServiceSearchAllReq.md#tojson)
- [toJson](SalesReturnsServiceSearchAllReq.md#tojson-1)
- [toJsonString](SalesReturnsServiceSearchAllReq.md#tojsonstring)
- [equals](SalesReturnsServiceSearchAllReq.md#equals-1)
- [fromBinary](SalesReturnsServiceSearchAllReq.md#frombinary-1)
- [fromJson](SalesReturnsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](SalesReturnsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;SalesReturnsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/sales_returns_pb.ts:1483](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1483)

## Properties

### billingStatus

• **billingStatus**: [`SALES_RETURN_BILLING_STATUS`](../enums/SALES_RETURN_BILLING_STATUS.md) = `SALES_RETURN_BILLING_STATUS.SALES_RETURN_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the sales return bill

**`Generated`**

from field: Genesis.SALES_RETURN_BILLING_STATUS billing_status = 40;

#### Defined in

[src/sales_returns_pb.ts:1481](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1481)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/sales_returns_pb.ts:1418](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1418)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/sales_returns_pb.ts:1446](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1446)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/sales_returns_pb.ts:1411](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1411)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/sales_returns_pb.ts:1425](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1425)

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

[src/sales_returns_pb.ts:1467](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1467)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 23;

#### Defined in

[src/sales_returns_pb.ts:1474](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1474)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/sales_returns_pb.ts:1460](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1460)

___

### sortKey

• **sortKey**: [`SALES_RETURN_SORT_KEY`](../enums/SALES_RETURN_SORT_KEY.md) = `SALES_RETURN_SORT_KEY.SALES_RETURN_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SALES_RETURN_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_returns_pb.ts:1439](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1439)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/sales_returns_pb.ts:1432](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1432)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/sales_returns_pb.ts:1453](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1453)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_returns_pb.ts:1490](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1490)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_returns_pb.ts:1488](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1488)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesReturnsServiceSearchAllReq"``

#### Defined in

[src/sales_returns_pb.ts:1489](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1489)

## Methods

### clone

▸ **clone**(): [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md) \| `PlainMessage`<[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

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

[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md) \| `PlainMessage`<[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md) \| `PlainMessage`<[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_returns_pb.ts:1516](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1516)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Defined in

[src/sales_returns_pb.ts:1504](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1504)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Defined in

[src/sales_returns_pb.ts:1508](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1508)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServiceSearchAllReq`](SalesReturnsServiceSearchAllReq.md)

#### Defined in

[src/sales_returns_pb.ts:1512](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_returns_pb.ts#L1512)
