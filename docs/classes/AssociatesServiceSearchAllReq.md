[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / AssociatesServiceSearchAllReq

# Class: AssociatesServiceSearchAllReq

Describes the request payload for performing a generic search operation on associates

**`Generated`**

from message Genesis.AssociatesServiceSearchAllReq

## Hierarchy

- `Message`<[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)\>

  ↳ **`AssociatesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](AssociatesServiceSearchAllReq.md#constructor)

### Properties

- [entityUuid](AssociatesServiceSearchAllReq.md#entityuuid)
- [searchKey](AssociatesServiceSearchAllReq.md#searchkey)
- [sortKey](AssociatesServiceSearchAllReq.md#sortkey)
- [sortOrder](AssociatesServiceSearchAllReq.md#sortorder)
- [fields](AssociatesServiceSearchAllReq.md#fields)
- [runtime](AssociatesServiceSearchAllReq.md#runtime)
- [typeName](AssociatesServiceSearchAllReq.md#typename)

### Methods

- [clone](AssociatesServiceSearchAllReq.md#clone)
- [equals](AssociatesServiceSearchAllReq.md#equals)
- [fromBinary](AssociatesServiceSearchAllReq.md#frombinary)
- [fromJson](AssociatesServiceSearchAllReq.md#fromjson)
- [fromJsonString](AssociatesServiceSearchAllReq.md#fromjsonstring)
- [getType](AssociatesServiceSearchAllReq.md#gettype)
- [toBinary](AssociatesServiceSearchAllReq.md#tobinary)
- [toJSON](AssociatesServiceSearchAllReq.md#tojson)
- [toJson](AssociatesServiceSearchAllReq.md#tojson-1)
- [toJsonString](AssociatesServiceSearchAllReq.md#tojsonstring)
- [equals](AssociatesServiceSearchAllReq.md#equals-1)
- [fromBinary](AssociatesServiceSearchAllReq.md#frombinary-1)
- [fromJson](AssociatesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](AssociatesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssociatesServiceSearchAllReq**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)\> |

#### Overrides

Message&lt;AssociatesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/associates_pb.ts:961](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L961)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter associates

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/associates_pb.ts:952](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L952)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 10;

#### Defined in

[src/associates_pb.ts:959](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L959)

___

### sortKey

• **sortKey**: [`ASSOCIATE_SORT_KEY`](../enums/ASSOCIATE_SORT_KEY.md) = `ASSOCIATE_SORT_KEY.ASSOCIATE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the response

**`Generated`**

from field: Genesis.ASSOCIATE_SORT_KEY sort_key = 5;

#### Defined in

[src/associates_pb.ts:945](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L945)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the response

**`Generated`**

from field: Genesis.SORT_ORDER sort_order = 4;

#### Defined in

[src/associates_pb.ts:938](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L938)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/associates_pb.ts:968](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L968)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/associates_pb.ts:966](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L966)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.AssociatesServiceSearchAllReq"``

#### Defined in

[src/associates_pb.ts:967](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L967)

## Methods

### clone

▸ **clone**(): [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md) \| `PlainMessage`<[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

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

[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md) \| `PlainMessage`<[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md) \| `PlainMessage`<[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/associates_pb.ts:987](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L987)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Defined in

[src/associates_pb.ts:975](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L975)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Defined in

[src/associates_pb.ts:979](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L979)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceSearchAllReq`](AssociatesServiceSearchAllReq.md)

#### Defined in

[src/associates_pb.ts:983](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L983)
