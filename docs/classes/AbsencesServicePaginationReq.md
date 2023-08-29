[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AbsencesServicePaginationReq

# Class: AbsencesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.AbsencesServicePaginationReq

## Hierarchy

- `Message`<[`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md)\>

  ↳ **`AbsencesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](AbsencesServicePaginationReq.md#constructor)

### Properties

- [count](AbsencesServicePaginationReq.md#count)
- [isActive](AbsencesServicePaginationReq.md#isactive)
- [offset](AbsencesServicePaginationReq.md#offset)
- [sortKey](AbsencesServicePaginationReq.md#sortkey)
- [sortOrder](AbsencesServicePaginationReq.md#sortorder)
- [status](AbsencesServicePaginationReq.md#status)
- [fields](AbsencesServicePaginationReq.md#fields)
- [runtime](AbsencesServicePaginationReq.md#runtime)
- [typeName](AbsencesServicePaginationReq.md#typename)

### Methods

- [clone](AbsencesServicePaginationReq.md#clone)
- [equals](AbsencesServicePaginationReq.md#equals)
- [fromBinary](AbsencesServicePaginationReq.md#frombinary)
- [fromJson](AbsencesServicePaginationReq.md#fromjson)
- [fromJsonString](AbsencesServicePaginationReq.md#fromjsonstring)
- [getType](AbsencesServicePaginationReq.md#gettype)
- [toBinary](AbsencesServicePaginationReq.md#tobinary)
- [toJSON](AbsencesServicePaginationReq.md#tojson)
- [toJson](AbsencesServicePaginationReq.md#tojson-1)
- [toJsonString](AbsencesServicePaginationReq.md#tojsonstring)
- [equals](AbsencesServicePaginationReq.md#equals-1)
- [fromBinary](AbsencesServicePaginationReq.md#frombinary-1)
- [fromJson](AbsencesServicePaginationReq.md#fromjson-1)
- [fromJsonString](AbsencesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AbsencesServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md)\> |

#### Overrides

Message&lt;AbsencesServicePaginationReq\&gt;.constructor

#### Defined in

[src/absences_pb.ts:641](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L641)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/absences_pb.ts:611](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L611)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/absences_pb.ts:604](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L604)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/absences_pb.ts:618](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L618)

___

### sortKey

• **sortKey**: [`ABSENCE_SORT_KEY`](../enums/ABSENCE_SORT_KEY.md) = `ABSENCE_SORT_KEY.ABSENCE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.ABSENCE_SORT_KEY sort_key = 5;

#### Defined in

[src/absences_pb.ts:632](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L632)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/absences_pb.ts:625](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L625)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this absence

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/absences_pb.ts:639](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L639)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/absences_pb.ts:648](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L648)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/absences_pb.ts:646](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L646)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AbsencesServicePaginationReq"``

#### Defined in

[src/absences_pb.ts:647](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L647)

## Methods

### clone

▸ **clone**(): [`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md) \| `PlainMessage`<[`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md)

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

[`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md) \| `PlainMessage`<[`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md) \| `PlainMessage`<[`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/absences_pb.ts:669](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L669)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md)

#### Defined in

[src/absences_pb.ts:657](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L657)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md)

#### Defined in

[src/absences_pb.ts:661](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L661)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AbsencesServicePaginationReq`](AbsencesServicePaginationReq.md)

#### Defined in

[src/absences_pb.ts:665](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/absences_pb.ts#L665)
