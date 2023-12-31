[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentsServiceSearchAllReq

# Class: ProductionIndentsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.ProductionIndentsServiceSearchAllReq

## Hierarchy

- `Message`<[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)\>

  ↳ **`ProductionIndentsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ProductionIndentsServiceSearchAllReq.md#constructor)

### Properties

- [count](ProductionIndentsServiceSearchAllReq.md#count)
- [entityUuid](ProductionIndentsServiceSearchAllReq.md#entityuuid)
- [indentRefFor](ProductionIndentsServiceSearchAllReq.md#indentreffor)
- [indentRefId](ProductionIndentsServiceSearchAllReq.md#indentrefid)
- [isActive](ProductionIndentsServiceSearchAllReq.md#isactive)
- [locationId](ProductionIndentsServiceSearchAllReq.md#locationid)
- [offset](ProductionIndentsServiceSearchAllReq.md#offset)
- [productionRefFor](ProductionIndentsServiceSearchAllReq.md#productionreffor)
- [productionRefId](ProductionIndentsServiceSearchAllReq.md#productionrefid)
- [searchKey](ProductionIndentsServiceSearchAllReq.md#searchkey)
- [sortKey](ProductionIndentsServiceSearchAllReq.md#sortkey)
- [sortOrder](ProductionIndentsServiceSearchAllReq.md#sortorder)
- [status](ProductionIndentsServiceSearchAllReq.md#status)
- [supervisor](ProductionIndentsServiceSearchAllReq.md#supervisor)
- [fields](ProductionIndentsServiceSearchAllReq.md#fields)
- [runtime](ProductionIndentsServiceSearchAllReq.md#runtime)
- [typeName](ProductionIndentsServiceSearchAllReq.md#typename)

### Methods

- [clone](ProductionIndentsServiceSearchAllReq.md#clone)
- [equals](ProductionIndentsServiceSearchAllReq.md#equals)
- [fromBinary](ProductionIndentsServiceSearchAllReq.md#frombinary)
- [fromJson](ProductionIndentsServiceSearchAllReq.md#fromjson)
- [fromJsonString](ProductionIndentsServiceSearchAllReq.md#fromjsonstring)
- [getType](ProductionIndentsServiceSearchAllReq.md#gettype)
- [toBinary](ProductionIndentsServiceSearchAllReq.md#tobinary)
- [toJSON](ProductionIndentsServiceSearchAllReq.md#tojson)
- [toJson](ProductionIndentsServiceSearchAllReq.md#tojson-1)
- [toJsonString](ProductionIndentsServiceSearchAllReq.md#tojsonstring)
- [equals](ProductionIndentsServiceSearchAllReq.md#equals-1)
- [fromBinary](ProductionIndentsServiceSearchAllReq.md#frombinary-1)
- [fromJson](ProductionIndentsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ProductionIndentsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;ProductionIndentsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/production_indents_pb.ts:1501](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1501)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/production_indents_pb.ts:1415](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1415)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/production_indents_pb.ts:1443](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1443)

___

### indentRefFor

• **indentRefFor**: `string` = `""`

Stores if the indent should be created on the basis of a work order or a family

**`Generated`**

from field: string indent_ref_for = 28;

#### Defined in

[src/production_indents_pb.ts:1492](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1492)

___

### indentRefId

• **indentRefId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family or work order

**`Generated`**

from field: int64 indent_ref_id = 29;

#### Defined in

[src/production_indents_pb.ts:1499](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1499)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/production_indents_pb.ts:1408](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1408)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: int64 location_id = 24;

#### Defined in

[src/production_indents_pb.ts:1464](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1464)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/production_indents_pb.ts:1422](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1422)

___

### productionRefFor

• **productionRefFor**: `string` = `""`

Stores if the indent is associated to a production plan

**`Generated`**

from field: string production_ref_for = 26;

#### Defined in

[src/production_indents_pb.ts:1478](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1478)

___

### productionRefId

• **productionRefId**: `bigint` = `protoInt64.zero`

Stores the production plan ID if production_ref_for is production-plan

**`Generated`**

from field: int64 production_ref_id = 27;

#### Defined in

[src/production_indents_pb.ts:1485](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1485)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/production_indents_pb.ts:1457](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1457)

___

### sortKey

• **sortKey**: [`PRODUCTION_INDENT_SORT_KEY`](../enums/PRODUCTION_INDENT_SORT_KEY.md) = `PRODUCTION_INDENT_SORT_KEY.PRODUCTION_INDENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.PRODUCTION_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/production_indents_pb.ts:1436](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1436)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/production_indents_pb.ts:1429](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1429)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/production_indents_pb.ts:1450](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1450)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 25;

#### Defined in

[src/production_indents_pb.ts:1471](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1471)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_indents_pb.ts:1508](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1508)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_indents_pb.ts:1506](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1506)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ProductionIndentsServiceSearchAllReq"``

#### Defined in

[src/production_indents_pb.ts:1507](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1507)

## Methods

### clone

▸ **clone**(): [`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md) \| `PlainMessage`<[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

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

[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md) \| `PlainMessage`<[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md) \| `PlainMessage`<[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_indents_pb.ts:1537](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1537)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

#### Defined in

[src/production_indents_pb.ts:1525](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1525)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

#### Defined in

[src/production_indents_pb.ts:1529](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1529)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceSearchAllReq`](ProductionIndentsServiceSearchAllReq.md)

#### Defined in

[src/production_indents_pb.ts:1533](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/production_indents_pb.ts#L1533)
