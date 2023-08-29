[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LeavesTypesServiceSearchAllReq

# Class: LeavesTypesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.LeavesTypesServiceSearchAllReq

## Hierarchy

- `Message`<[`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md)\>

  ↳ **`LeavesTypesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](LeavesTypesServiceSearchAllReq.md#constructor)

### Properties

- [count](LeavesTypesServiceSearchAllReq.md#count)
- [entityUuid](LeavesTypesServiceSearchAllReq.md#entityuuid)
- [isActive](LeavesTypesServiceSearchAllReq.md#isactive)
- [offset](LeavesTypesServiceSearchAllReq.md#offset)
- [searchKey](LeavesTypesServiceSearchAllReq.md#searchkey)
- [sortKey](LeavesTypesServiceSearchAllReq.md#sortkey)
- [sortOrder](LeavesTypesServiceSearchAllReq.md#sortorder)
- [status](LeavesTypesServiceSearchAllReq.md#status)
- [fields](LeavesTypesServiceSearchAllReq.md#fields)
- [runtime](LeavesTypesServiceSearchAllReq.md#runtime)
- [typeName](LeavesTypesServiceSearchAllReq.md#typename)

### Methods

- [clone](LeavesTypesServiceSearchAllReq.md#clone)
- [equals](LeavesTypesServiceSearchAllReq.md#equals)
- [fromBinary](LeavesTypesServiceSearchAllReq.md#frombinary)
- [fromJson](LeavesTypesServiceSearchAllReq.md#fromjson)
- [fromJsonString](LeavesTypesServiceSearchAllReq.md#fromjsonstring)
- [getType](LeavesTypesServiceSearchAllReq.md#gettype)
- [toBinary](LeavesTypesServiceSearchAllReq.md#tobinary)
- [toJSON](LeavesTypesServiceSearchAllReq.md#tojson)
- [toJson](LeavesTypesServiceSearchAllReq.md#tojson-1)
- [toJsonString](LeavesTypesServiceSearchAllReq.md#tojsonstring)
- [equals](LeavesTypesServiceSearchAllReq.md#equals-1)
- [fromBinary](LeavesTypesServiceSearchAllReq.md#frombinary-1)
- [fromJson](LeavesTypesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](LeavesTypesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesTypesServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;LeavesTypesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/leaves_types_pb.ts:884](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L884)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/leaves_types_pb.ts:840](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L840)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/leaves_types_pb.ts:868](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L868)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/leaves_types_pb.ts:833](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L833)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/leaves_types_pb.ts:847](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L847)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/leaves_types_pb.ts:882](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L882)

___

### sortKey

• **sortKey**: [`LEAVE_TYPE_SORT_KEY`](../enums/LEAVE_TYPE_SORT_KEY.md) = `LEAVE_TYPE_SORT_KEY.LEAVE_TYPE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.LEAVE_TYPE_SORT_KEY sort_key = 5;

#### Defined in

[src/leaves_types_pb.ts:861](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L861)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/leaves_types_pb.ts:854](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L854)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/leaves_types_pb.ts:875](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L875)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_types_pb.ts:891](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L891)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_types_pb.ts:889](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L889)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LeavesTypesServiceSearchAllReq"``

#### Defined in

[src/leaves_types_pb.ts:890](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L890)

## Methods

### clone

▸ **clone**(): [`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md) \| `PlainMessage`<[`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md)

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

[`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md) \| `PlainMessage`<[`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md) \| `PlainMessage`<[`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_types_pb.ts:914](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L914)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md)

#### Defined in

[src/leaves_types_pb.ts:902](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L902)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md)

#### Defined in

[src/leaves_types_pb.ts:906](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L906)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServiceSearchAllReq`](LeavesTypesServiceSearchAllReq.md)

#### Defined in

[src/leaves_types_pb.ts:910](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_types_pb.ts#L910)
