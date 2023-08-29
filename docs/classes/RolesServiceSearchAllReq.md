[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / RolesServiceSearchAllReq

# Class: RolesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.RolesServiceSearchAllReq

## Hierarchy

- `Message`<[`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md)\>

  ↳ **`RolesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](RolesServiceSearchAllReq.md#constructor)

### Properties

- [count](RolesServiceSearchAllReq.md#count)
- [entityUuid](RolesServiceSearchAllReq.md#entityuuid)
- [isActive](RolesServiceSearchAllReq.md#isactive)
- [offset](RolesServiceSearchAllReq.md#offset)
- [searchKey](RolesServiceSearchAllReq.md#searchkey)
- [sortKey](RolesServiceSearchAllReq.md#sortkey)
- [sortOrder](RolesServiceSearchAllReq.md#sortorder)
- [status](RolesServiceSearchAllReq.md#status)
- [fields](RolesServiceSearchAllReq.md#fields)
- [runtime](RolesServiceSearchAllReq.md#runtime)
- [typeName](RolesServiceSearchAllReq.md#typename)

### Methods

- [clone](RolesServiceSearchAllReq.md#clone)
- [equals](RolesServiceSearchAllReq.md#equals)
- [fromBinary](RolesServiceSearchAllReq.md#frombinary)
- [fromJson](RolesServiceSearchAllReq.md#fromjson)
- [fromJsonString](RolesServiceSearchAllReq.md#fromjsonstring)
- [getType](RolesServiceSearchAllReq.md#gettype)
- [toBinary](RolesServiceSearchAllReq.md#tobinary)
- [toJSON](RolesServiceSearchAllReq.md#tojson)
- [toJson](RolesServiceSearchAllReq.md#tojson-1)
- [toJsonString](RolesServiceSearchAllReq.md#tojsonstring)
- [equals](RolesServiceSearchAllReq.md#equals-1)
- [fromBinary](RolesServiceSearchAllReq.md#frombinary-1)
- [fromJson](RolesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](RolesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new RolesServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;RolesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/roles_pb.ts:1120](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1120)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/roles_pb.ts:1076](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1076)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/roles_pb.ts:1104](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1104)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/roles_pb.ts:1069](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1069)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/roles_pb.ts:1083](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1083)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/roles_pb.ts:1118](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1118)

___

### sortKey

• **sortKey**: [`ROLE_SORT_KEY`](../enums/ROLE_SORT_KEY.md) = `ROLE_SORT_KEY.ROLE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.ROLE_SORT_KEY sort_key = 5;

#### Defined in

[src/roles_pb.ts:1097](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1097)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/roles_pb.ts:1090](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1090)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/roles_pb.ts:1111](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1111)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/roles_pb.ts:1127](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1127)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/roles_pb.ts:1125](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1125)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.RolesServiceSearchAllReq"``

#### Defined in

[src/roles_pb.ts:1126](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1126)

## Methods

### clone

▸ **clone**(): [`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md) \| `PlainMessage`<[`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md)

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

[`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md) \| `PlainMessage`<[`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md) \| `PlainMessage`<[`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/roles_pb.ts:1150](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1150)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md)

#### Defined in

[src/roles_pb.ts:1138](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1138)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md)

#### Defined in

[src/roles_pb.ts:1142](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1142)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`RolesServiceSearchAllReq`](RolesServiceSearchAllReq.md)

#### Defined in

[src/roles_pb.ts:1146](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/roles_pb.ts#L1146)
