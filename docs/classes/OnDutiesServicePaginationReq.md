[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / OnDutiesServicePaginationReq

# Class: OnDutiesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Genesis.OnDutiesServicePaginationReq

## Hierarchy

- `Message`<[`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md)\>

  ↳ **`OnDutiesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](OnDutiesServicePaginationReq.md#constructor)

### Properties

- [count](OnDutiesServicePaginationReq.md#count)
- [isActive](OnDutiesServicePaginationReq.md#isactive)
- [offset](OnDutiesServicePaginationReq.md#offset)
- [sortKey](OnDutiesServicePaginationReq.md#sortkey)
- [sortOrder](OnDutiesServicePaginationReq.md#sortorder)
- [status](OnDutiesServicePaginationReq.md#status)
- [fields](OnDutiesServicePaginationReq.md#fields)
- [runtime](OnDutiesServicePaginationReq.md#runtime)
- [typeName](OnDutiesServicePaginationReq.md#typename)

### Methods

- [clone](OnDutiesServicePaginationReq.md#clone)
- [equals](OnDutiesServicePaginationReq.md#equals)
- [fromBinary](OnDutiesServicePaginationReq.md#frombinary)
- [fromJson](OnDutiesServicePaginationReq.md#fromjson)
- [fromJsonString](OnDutiesServicePaginationReq.md#fromjsonstring)
- [getType](OnDutiesServicePaginationReq.md#gettype)
- [toBinary](OnDutiesServicePaginationReq.md#tobinary)
- [toJSON](OnDutiesServicePaginationReq.md#tojson)
- [toJson](OnDutiesServicePaginationReq.md#tojson-1)
- [toJsonString](OnDutiesServicePaginationReq.md#tojsonstring)
- [equals](OnDutiesServicePaginationReq.md#equals-1)
- [fromBinary](OnDutiesServicePaginationReq.md#frombinary-1)
- [fromJson](OnDutiesServicePaginationReq.md#fromjson-1)
- [fromJsonString](OnDutiesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OnDutiesServicePaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md)\> |

#### Overrides

Message&lt;OnDutiesServicePaginationReq\&gt;.constructor

#### Defined in

[src/on_duties_pb.ts:727](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L727)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/on_duties_pb.ts:697](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L697)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/on_duties_pb.ts:690](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L690)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/on_duties_pb.ts:704](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L704)

___

### sortKey

• **sortKey**: [`ON_DUTY_SORT_KEY`](../enums/ON_DUTY_SORT_KEY.md) = `ON_DUTY_SORT_KEY.ON_DUTY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.ON_DUTY_SORT_KEY sort_key = 5;

#### Defined in

[src/on_duties_pb.ts:718](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L718)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/on_duties_pb.ts:711](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L711)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this onduty

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/on_duties_pb.ts:725](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L725)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/on_duties_pb.ts:734](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L734)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/on_duties_pb.ts:732](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L732)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.OnDutiesServicePaginationReq"``

#### Defined in

[src/on_duties_pb.ts:733](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L733)

## Methods

### clone

▸ **clone**(): [`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md) \| `PlainMessage`<[`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md)

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

[`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md) \| `PlainMessage`<[`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md) \| `PlainMessage`<[`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/on_duties_pb.ts:755](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L755)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md)

#### Defined in

[src/on_duties_pb.ts:743](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L743)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md)

#### Defined in

[src/on_duties_pb.ts:747](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L747)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServicePaginationReq`](OnDutiesServicePaginationReq.md)

#### Defined in

[src/on_duties_pb.ts:751](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L751)
