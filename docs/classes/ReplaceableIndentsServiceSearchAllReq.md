[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsServiceSearchAllReq

# Class: ReplaceableIndentsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.ReplaceableIndentsServiceSearchAllReq

## Hierarchy

- `Message`<[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)\>

  ↳ **`ReplaceableIndentsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsServiceSearchAllReq.md#constructor)

### Properties

- [count](ReplaceableIndentsServiceSearchAllReq.md#count)
- [entityUuid](ReplaceableIndentsServiceSearchAllReq.md#entityuuid)
- [familyId](ReplaceableIndentsServiceSearchAllReq.md#familyid)
- [isActive](ReplaceableIndentsServiceSearchAllReq.md#isactive)
- [itemHash](ReplaceableIndentsServiceSearchAllReq.md#itemhash)
- [locationId](ReplaceableIndentsServiceSearchAllReq.md#locationid)
- [offset](ReplaceableIndentsServiceSearchAllReq.md#offset)
- [searchKey](ReplaceableIndentsServiceSearchAllReq.md#searchkey)
- [sortKey](ReplaceableIndentsServiceSearchAllReq.md#sortkey)
- [sortOrder](ReplaceableIndentsServiceSearchAllReq.md#sortorder)
- [status](ReplaceableIndentsServiceSearchAllReq.md#status)
- [supervisor](ReplaceableIndentsServiceSearchAllReq.md#supervisor)
- [fields](ReplaceableIndentsServiceSearchAllReq.md#fields)
- [runtime](ReplaceableIndentsServiceSearchAllReq.md#runtime)
- [typeName](ReplaceableIndentsServiceSearchAllReq.md#typename)

### Methods

- [clone](ReplaceableIndentsServiceSearchAllReq.md#clone)
- [equals](ReplaceableIndentsServiceSearchAllReq.md#equals)
- [fromBinary](ReplaceableIndentsServiceSearchAllReq.md#frombinary)
- [fromJson](ReplaceableIndentsServiceSearchAllReq.md#fromjson)
- [fromJsonString](ReplaceableIndentsServiceSearchAllReq.md#fromjsonstring)
- [getType](ReplaceableIndentsServiceSearchAllReq.md#gettype)
- [toBinary](ReplaceableIndentsServiceSearchAllReq.md#tobinary)
- [toJSON](ReplaceableIndentsServiceSearchAllReq.md#tojson)
- [toJson](ReplaceableIndentsServiceSearchAllReq.md#tojson-1)
- [toJsonString](ReplaceableIndentsServiceSearchAllReq.md#tojsonstring)
- [equals](ReplaceableIndentsServiceSearchAllReq.md#equals-1)
- [fromBinary](ReplaceableIndentsServiceSearchAllReq.md#frombinary-1)
- [fromJson](ReplaceableIndentsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;ReplaceableIndentsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/replaceable_indents_pb.ts:1463](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1463)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/replaceable_indents_pb.ts:1391](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1391)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/replaceable_indents_pb.ts:1419](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1419)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: int64 family_id = 25;

#### Defined in

[src/replaceable_indents_pb.ts:1454](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1454)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/replaceable_indents_pb.ts:1384](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1384)

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 26;

#### Defined in

[src/replaceable_indents_pb.ts:1461](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1461)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: int64 location_id = 23;

#### Defined in

[src/replaceable_indents_pb.ts:1440](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1440)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/replaceable_indents_pb.ts:1398](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1398)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/replaceable_indents_pb.ts:1433](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1433)

___

### sortKey

• **sortKey**: [`REPLACEABLE_INDENT_SORT_KEY`](../enums/REPLACEABLE_INDENT_SORT_KEY.md) = `REPLACEABLE_INDENT_SORT_KEY.REPLACEABLE_INDENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.REPLACEABLE_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/replaceable_indents_pb.ts:1412](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1412)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/replaceable_indents_pb.ts:1405](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1405)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/replaceable_indents_pb.ts:1426](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1426)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 24;

#### Defined in

[src/replaceable_indents_pb.ts:1447](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1447)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents_pb.ts:1470](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1470)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents_pb.ts:1468](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1468)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ReplaceableIndentsServiceSearchAllReq"``

#### Defined in

[src/replaceable_indents_pb.ts:1469](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1469)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md) \| `PlainMessage`<[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

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

[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md) \| `PlainMessage`<[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md) \| `PlainMessage`<[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents_pb.ts:1497](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1497)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Defined in

[src/replaceable_indents_pb.ts:1485](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1485)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Defined in

[src/replaceable_indents_pb.ts:1489](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1489)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceSearchAllReq`](ReplaceableIndentsServiceSearchAllReq.md)

#### Defined in

[src/replaceable_indents_pb.ts:1493](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/replaceable_indents_pb.ts#L1493)
