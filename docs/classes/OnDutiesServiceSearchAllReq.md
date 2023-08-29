[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / OnDutiesServiceSearchAllReq

# Class: OnDutiesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Genesis.OnDutiesServiceSearchAllReq

## Hierarchy

- `Message`<[`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md)\>

  ↳ **`OnDutiesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](OnDutiesServiceSearchAllReq.md#constructor)

### Properties

- [count](OnDutiesServiceSearchAllReq.md#count)
- [entityUuid](OnDutiesServiceSearchAllReq.md#entityuuid)
- [isActive](OnDutiesServiceSearchAllReq.md#isactive)
- [offset](OnDutiesServiceSearchAllReq.md#offset)
- [searchKey](OnDutiesServiceSearchAllReq.md#searchkey)
- [sortKey](OnDutiesServiceSearchAllReq.md#sortkey)
- [sortOrder](OnDutiesServiceSearchAllReq.md#sortorder)
- [status](OnDutiesServiceSearchAllReq.md#status)
- [userId](OnDutiesServiceSearchAllReq.md#userid)
- [fields](OnDutiesServiceSearchAllReq.md#fields)
- [runtime](OnDutiesServiceSearchAllReq.md#runtime)
- [typeName](OnDutiesServiceSearchAllReq.md#typename)

### Methods

- [clone](OnDutiesServiceSearchAllReq.md#clone)
- [equals](OnDutiesServiceSearchAllReq.md#equals)
- [fromBinary](OnDutiesServiceSearchAllReq.md#frombinary)
- [fromJson](OnDutiesServiceSearchAllReq.md#fromjson)
- [fromJsonString](OnDutiesServiceSearchAllReq.md#fromjsonstring)
- [getType](OnDutiesServiceSearchAllReq.md#gettype)
- [toBinary](OnDutiesServiceSearchAllReq.md#tobinary)
- [toJSON](OnDutiesServiceSearchAllReq.md#tojson)
- [toJson](OnDutiesServiceSearchAllReq.md#tojson-1)
- [toJsonString](OnDutiesServiceSearchAllReq.md#tojsonstring)
- [equals](OnDutiesServiceSearchAllReq.md#equals-1)
- [fromBinary](OnDutiesServiceSearchAllReq.md#frombinary-1)
- [fromJson](OnDutiesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](OnDutiesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OnDutiesServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;OnDutiesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/on_duties_pb.ts:1188](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L1188)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/on_duties_pb.ts:1137](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L1137)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/on_duties_pb.ts:1165](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L1165)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/on_duties_pb.ts:1130](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L1130)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/on_duties_pb.ts:1144](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L1144)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/on_duties_pb.ts:1179](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L1179)

___

### sortKey

• **sortKey**: [`ON_DUTY_SORT_KEY`](../enums/ON_DUTY_SORT_KEY.md) = `ON_DUTY_SORT_KEY.ON_DUTY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.ON_DUTY_SORT_KEY sort_key = 5;

#### Defined in

[src/on_duties_pb.ts:1158](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L1158)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/on_duties_pb.ts:1151](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L1151)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/on_duties_pb.ts:1172](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L1172)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for onduty

**`Generated`**

from field: int64 user_id = 22;

#### Defined in

[src/on_duties_pb.ts:1186](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L1186)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/on_duties_pb.ts:1195](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L1195)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/on_duties_pb.ts:1193](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L1193)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.OnDutiesServiceSearchAllReq"``

#### Defined in

[src/on_duties_pb.ts:1194](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L1194)

## Methods

### clone

▸ **clone**(): [`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md) \| `PlainMessage`<[`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md)

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

[`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md) \| `PlainMessage`<[`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md) \| `PlainMessage`<[`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/on_duties_pb.ts:1219](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L1219)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md)

#### Defined in

[src/on_duties_pb.ts:1207](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L1207)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md)

#### Defined in

[src/on_duties_pb.ts:1211](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L1211)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServiceSearchAllReq`](OnDutiesServiceSearchAllReq.md)

#### Defined in

[src/on_duties_pb.ts:1215](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L1215)
