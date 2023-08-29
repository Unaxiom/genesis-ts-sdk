[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / LeavesAdjustmentsServicePaginationResponse

# Class: LeavesAdjustmentsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.LeavesAdjustmentsServicePaginationResponse

## Hierarchy

- `Message`<[`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md)\>

  ↳ **`LeavesAdjustmentsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](LeavesAdjustmentsServicePaginationResponse.md#constructor)

### Properties

- [count](LeavesAdjustmentsServicePaginationResponse.md#count)
- [offset](LeavesAdjustmentsServicePaginationResponse.md#offset)
- [payload](LeavesAdjustmentsServicePaginationResponse.md#payload)
- [total](LeavesAdjustmentsServicePaginationResponse.md#total)
- [fields](LeavesAdjustmentsServicePaginationResponse.md#fields)
- [runtime](LeavesAdjustmentsServicePaginationResponse.md#runtime)
- [typeName](LeavesAdjustmentsServicePaginationResponse.md#typename)

### Methods

- [clone](LeavesAdjustmentsServicePaginationResponse.md#clone)
- [equals](LeavesAdjustmentsServicePaginationResponse.md#equals)
- [fromBinary](LeavesAdjustmentsServicePaginationResponse.md#frombinary)
- [fromJson](LeavesAdjustmentsServicePaginationResponse.md#fromjson)
- [fromJsonString](LeavesAdjustmentsServicePaginationResponse.md#fromjsonstring)
- [getType](LeavesAdjustmentsServicePaginationResponse.md#gettype)
- [toBinary](LeavesAdjustmentsServicePaginationResponse.md#tobinary)
- [toJSON](LeavesAdjustmentsServicePaginationResponse.md#tojson)
- [toJson](LeavesAdjustmentsServicePaginationResponse.md#tojson-1)
- [toJsonString](LeavesAdjustmentsServicePaginationResponse.md#tojsonstring)
- [equals](LeavesAdjustmentsServicePaginationResponse.md#equals-1)
- [fromBinary](LeavesAdjustmentsServicePaginationResponse.md#frombinary-1)
- [fromJson](LeavesAdjustmentsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](LeavesAdjustmentsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesAdjustmentsServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md)\> |

#### Overrides

Message&lt;LeavesAdjustmentsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/leaves_adjustments_pb.ts:914](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L914)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/leaves_adjustments_pb.ts:891](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L891)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/leaves_adjustments_pb.ts:898](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L898)

___

### payload

• **payload**: [`LeaveAdjustment`](LeaveAdjustment.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.LeaveAdjustment payload = 4;

#### Defined in

[src/leaves_adjustments_pb.ts:912](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L912)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/leaves_adjustments_pb.ts:905](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L905)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_adjustments_pb.ts:921](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L921)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_adjustments_pb.ts:919](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L919)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.LeavesAdjustmentsServicePaginationResponse"``

#### Defined in

[src/leaves_adjustments_pb.ts:920](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L920)

## Methods

### clone

▸ **clone**(): [`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md) \| `PlainMessage`<[`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md)

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

[`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md) \| `PlainMessage`<[`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md) \| `PlainMessage`<[`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_adjustments_pb.ts:940](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L940)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md)

#### Defined in

[src/leaves_adjustments_pb.ts:928](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L928)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md)

#### Defined in

[src/leaves_adjustments_pb.ts:932](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L932)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServicePaginationResponse`](LeavesAdjustmentsServicePaginationResponse.md)

#### Defined in

[src/leaves_adjustments_pb.ts:936](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/leaves_adjustments_pb.ts#L936)
