[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / DepartmentsServiceSearchAllReq

# Class: DepartmentsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.DepartmentsServiceSearchAllReq

## Hierarchy

- `Message`<[`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md)\>

  ↳ **`DepartmentsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](DepartmentsServiceSearchAllReq.md#constructor)

### Properties

- [count](DepartmentsServiceSearchAllReq.md#count)
- [entityUuid](DepartmentsServiceSearchAllReq.md#entityuuid)
- [isActive](DepartmentsServiceSearchAllReq.md#isactive)
- [offset](DepartmentsServiceSearchAllReq.md#offset)
- [searchKey](DepartmentsServiceSearchAllReq.md#searchkey)
- [sortKey](DepartmentsServiceSearchAllReq.md#sortkey)
- [sortOrder](DepartmentsServiceSearchAllReq.md#sortorder)
- [status](DepartmentsServiceSearchAllReq.md#status)
- [fields](DepartmentsServiceSearchAllReq.md#fields)
- [runtime](DepartmentsServiceSearchAllReq.md#runtime)
- [typeName](DepartmentsServiceSearchAllReq.md#typename)

### Methods

- [clone](DepartmentsServiceSearchAllReq.md#clone)
- [equals](DepartmentsServiceSearchAllReq.md#equals)
- [fromBinary](DepartmentsServiceSearchAllReq.md#frombinary)
- [fromJson](DepartmentsServiceSearchAllReq.md#fromjson)
- [fromJsonString](DepartmentsServiceSearchAllReq.md#fromjsonstring)
- [getType](DepartmentsServiceSearchAllReq.md#gettype)
- [toBinary](DepartmentsServiceSearchAllReq.md#tobinary)
- [toJSON](DepartmentsServiceSearchAllReq.md#tojson)
- [toJson](DepartmentsServiceSearchAllReq.md#tojson-1)
- [toJsonString](DepartmentsServiceSearchAllReq.md#tojsonstring)
- [equals](DepartmentsServiceSearchAllReq.md#equals-1)
- [fromBinary](DepartmentsServiceSearchAllReq.md#frombinary-1)
- [fromJson](DepartmentsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](DepartmentsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new DepartmentsServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;DepartmentsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/departments_pb.ts:924](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L924)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/departments_pb.ts:880](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L880)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/departments_pb.ts:908](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L908)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/departments_pb.ts:873](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L873)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/departments_pb.ts:887](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L887)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/departments_pb.ts:922](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L922)

___

### sortKey

• **sortKey**: [`DEPARTMENT_SORT_KEY`](../enums/DEPARTMENT_SORT_KEY.md) = `DEPARTMENT_SORT_KEY.DEPARTMENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.DEPARTMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/departments_pb.ts:901](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L901)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/departments_pb.ts:894](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L894)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/departments_pb.ts:915](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L915)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/departments_pb.ts:931](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L931)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/departments_pb.ts:929](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L929)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.DepartmentsServiceSearchAllReq"``

#### Defined in

[src/departments_pb.ts:930](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L930)

## Methods

### clone

▸ **clone**(): [`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md) \| `PlainMessage`<[`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md)

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

[`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md) \| `PlainMessage`<[`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md) \| `PlainMessage`<[`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/departments_pb.ts:954](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L954)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md)

#### Defined in

[src/departments_pb.ts:942](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L942)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md)

#### Defined in

[src/departments_pb.ts:946](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L946)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceSearchAllReq`](DepartmentsServiceSearchAllReq.md)

#### Defined in

[src/departments_pb.ts:950](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/departments_pb.ts#L950)
