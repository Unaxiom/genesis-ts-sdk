[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / EquationsReplaceablesServiceSearchAllReq

# Class: EquationsReplaceablesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.EquationsReplaceablesServiceSearchAllReq

## Hierarchy

- `Message`<[`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md)\>

  ↳ **`EquationsReplaceablesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](EquationsReplaceablesServiceSearchAllReq.md#constructor)

### Properties

- [count](EquationsReplaceablesServiceSearchAllReq.md#count)
- [entityUuid](EquationsReplaceablesServiceSearchAllReq.md#entityuuid)
- [isActive](EquationsReplaceablesServiceSearchAllReq.md#isactive)
- [offset](EquationsReplaceablesServiceSearchAllReq.md#offset)
- [searchKey](EquationsReplaceablesServiceSearchAllReq.md#searchkey)
- [sortKey](EquationsReplaceablesServiceSearchAllReq.md#sortkey)
- [sortOrder](EquationsReplaceablesServiceSearchAllReq.md#sortorder)
- [status](EquationsReplaceablesServiceSearchAllReq.md#status)
- [fields](EquationsReplaceablesServiceSearchAllReq.md#fields)
- [runtime](EquationsReplaceablesServiceSearchAllReq.md#runtime)
- [typeName](EquationsReplaceablesServiceSearchAllReq.md#typename)

### Methods

- [clone](EquationsReplaceablesServiceSearchAllReq.md#clone)
- [equals](EquationsReplaceablesServiceSearchAllReq.md#equals)
- [fromBinary](EquationsReplaceablesServiceSearchAllReq.md#frombinary)
- [fromJson](EquationsReplaceablesServiceSearchAllReq.md#fromjson)
- [fromJsonString](EquationsReplaceablesServiceSearchAllReq.md#fromjsonstring)
- [getType](EquationsReplaceablesServiceSearchAllReq.md#gettype)
- [toBinary](EquationsReplaceablesServiceSearchAllReq.md#tobinary)
- [toJSON](EquationsReplaceablesServiceSearchAllReq.md#tojson)
- [toJson](EquationsReplaceablesServiceSearchAllReq.md#tojson-1)
- [toJsonString](EquationsReplaceablesServiceSearchAllReq.md#tojsonstring)
- [equals](EquationsReplaceablesServiceSearchAllReq.md#equals-1)
- [fromBinary](EquationsReplaceablesServiceSearchAllReq.md#frombinary-1)
- [fromJson](EquationsReplaceablesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](EquationsReplaceablesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsReplaceablesServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;EquationsReplaceablesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/equations_replaceables_pb.ts:1254](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L1254)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/equations_replaceables_pb.ts:1210](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L1210)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/equations_replaceables_pb.ts:1238](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L1238)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/equations_replaceables_pb.ts:1203](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L1203)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/equations_replaceables_pb.ts:1217](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L1217)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/equations_replaceables_pb.ts:1252](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L1252)

___

### sortKey

• **sortKey**: [`EQUATION_REPLACEABLE_SORT_KEY`](../enums/EQUATION_REPLACEABLE_SORT_KEY.md) = `EQUATION_REPLACEABLE_SORT_KEY.EQUATION_REPLACEABLE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.EQUATION_REPLACEABLE_SORT_KEY sort_key = 5;

#### Defined in

[src/equations_replaceables_pb.ts:1231](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L1231)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/equations_replaceables_pb.ts:1224](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L1224)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/equations_replaceables_pb.ts:1245](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L1245)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_replaceables_pb.ts:1261](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L1261)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_replaceables_pb.ts:1259](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L1259)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.EquationsReplaceablesServiceSearchAllReq"``

#### Defined in

[src/equations_replaceables_pb.ts:1260](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L1260)

## Methods

### clone

▸ **clone**(): [`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md) \| `PlainMessage`<[`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md)

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

[`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md) \| `PlainMessage`<[`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md) \| `PlainMessage`<[`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_replaceables_pb.ts:1284](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L1284)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md)

#### Defined in

[src/equations_replaceables_pb.ts:1272](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L1272)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md)

#### Defined in

[src/equations_replaceables_pb.ts:1276](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L1276)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceSearchAllReq`](EquationsReplaceablesServiceSearchAllReq.md)

#### Defined in

[src/equations_replaceables_pb.ts:1280](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/equations_replaceables_pb.ts#L1280)
