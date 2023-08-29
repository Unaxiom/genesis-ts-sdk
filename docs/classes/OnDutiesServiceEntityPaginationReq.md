[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / OnDutiesServiceEntityPaginationReq

# Class: OnDutiesServiceEntityPaginationReq

Describes a pagination request to retrieve records associated with an entity UUID

**`Generated`**

from message Genesis.OnDutiesServiceEntityPaginationReq

## Hierarchy

- `Message`<[`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md)\>

  ↳ **`OnDutiesServiceEntityPaginationReq`**

## Table of contents

### Constructors

- [constructor](OnDutiesServiceEntityPaginationReq.md#constructor)

### Properties

- [count](OnDutiesServiceEntityPaginationReq.md#count)
- [entityUuid](OnDutiesServiceEntityPaginationReq.md#entityuuid)
- [isActive](OnDutiesServiceEntityPaginationReq.md#isactive)
- [offset](OnDutiesServiceEntityPaginationReq.md#offset)
- [sortKey](OnDutiesServiceEntityPaginationReq.md#sortkey)
- [sortOrder](OnDutiesServiceEntityPaginationReq.md#sortorder)
- [fields](OnDutiesServiceEntityPaginationReq.md#fields)
- [runtime](OnDutiesServiceEntityPaginationReq.md#runtime)
- [typeName](OnDutiesServiceEntityPaginationReq.md#typename)

### Methods

- [clone](OnDutiesServiceEntityPaginationReq.md#clone)
- [equals](OnDutiesServiceEntityPaginationReq.md#equals)
- [fromBinary](OnDutiesServiceEntityPaginationReq.md#frombinary)
- [fromJson](OnDutiesServiceEntityPaginationReq.md#fromjson)
- [fromJsonString](OnDutiesServiceEntityPaginationReq.md#fromjsonstring)
- [getType](OnDutiesServiceEntityPaginationReq.md#gettype)
- [toBinary](OnDutiesServiceEntityPaginationReq.md#tobinary)
- [toJSON](OnDutiesServiceEntityPaginationReq.md#tojson)
- [toJson](OnDutiesServiceEntityPaginationReq.md#tojson-1)
- [toJsonString](OnDutiesServiceEntityPaginationReq.md#tojsonstring)
- [equals](OnDutiesServiceEntityPaginationReq.md#equals-1)
- [fromBinary](OnDutiesServiceEntityPaginationReq.md#frombinary-1)
- [fromJson](OnDutiesServiceEntityPaginationReq.md#fromjson-1)
- [fromJsonString](OnDutiesServiceEntityPaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new OnDutiesServiceEntityPaginationReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md)\> |

#### Overrides

Message&lt;OnDutiesServiceEntityPaginationReq\&gt;.constructor

#### Defined in

[src/on_duties_pb.ts:875](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L875)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/on_duties_pb.ts:845](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L845)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/on_duties_pb.ts:873](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L873)

___

### isActive

• **isActive**: `boolean` = `false`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: bool is_active = 1;

#### Defined in

[src/on_duties_pb.ts:838](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L838)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: int64 offset = 3;

#### Defined in

[src/on_duties_pb.ts:852](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L852)

___

### sortKey

• **sortKey**: [`ON_DUTY_SORT_KEY`](../enums/ON_DUTY_SORT_KEY.md) = `ON_DUTY_SORT_KEY.ON_DUTY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.ON_DUTY_SORT_KEY sort_key = 5;

#### Defined in

[src/on_duties_pb.ts:866](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L866)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/on_duties_pb.ts:859](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L859)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/on_duties_pb.ts:882](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L882)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/on_duties_pb.ts:880](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L880)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.OnDutiesServiceEntityPaginationReq"``

#### Defined in

[src/on_duties_pb.ts:881](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L881)

## Methods

### clone

▸ **clone**(): [`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md)

Create a deep copy.

#### Returns

[`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md) \| `PlainMessage`<[`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md)

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

[`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md)\>

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
| `a` | `undefined` \| [`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md) \| `PlainMessage`<[`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md)\> |
| `b` | `undefined` \| [`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md) \| `PlainMessage`<[`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/on_duties_pb.ts:903](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L903)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md)

#### Defined in

[src/on_duties_pb.ts:891](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L891)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md)

#### Defined in

[src/on_duties_pb.ts:895](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L895)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`OnDutiesServiceEntityPaginationReq`](OnDutiesServiceEntityPaginationReq.md)

#### Defined in

[src/on_duties_pb.ts:899](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/on_duties_pb.ts#L899)
