[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ShiftsServicePaginationResponse

# Class: ShiftsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Genesis.ShiftsServicePaginationResponse

## Hierarchy

- `Message`<[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)\>

  ↳ **`ShiftsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](ShiftsServicePaginationResponse.md#constructor)

### Properties

- [count](ShiftsServicePaginationResponse.md#count)
- [offset](ShiftsServicePaginationResponse.md#offset)
- [payload](ShiftsServicePaginationResponse.md#payload)
- [total](ShiftsServicePaginationResponse.md#total)
- [fields](ShiftsServicePaginationResponse.md#fields)
- [runtime](ShiftsServicePaginationResponse.md#runtime)
- [typeName](ShiftsServicePaginationResponse.md#typename)

### Methods

- [clone](ShiftsServicePaginationResponse.md#clone)
- [equals](ShiftsServicePaginationResponse.md#equals)
- [fromBinary](ShiftsServicePaginationResponse.md#frombinary)
- [fromJson](ShiftsServicePaginationResponse.md#fromjson)
- [fromJsonString](ShiftsServicePaginationResponse.md#fromjsonstring)
- [getType](ShiftsServicePaginationResponse.md#gettype)
- [toBinary](ShiftsServicePaginationResponse.md#tobinary)
- [toJSON](ShiftsServicePaginationResponse.md#tojson)
- [toJson](ShiftsServicePaginationResponse.md#tojson-1)
- [toJsonString](ShiftsServicePaginationResponse.md#tojsonstring)
- [equals](ShiftsServicePaginationResponse.md#equals-1)
- [fromBinary](ShiftsServicePaginationResponse.md#frombinary-1)
- [fromJson](ShiftsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](ShiftsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsServicePaginationResponse**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)\> |

#### Overrides

Message&lt;ShiftsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/shifts_pb.ts:650](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L650)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: int64 count = 1;

#### Defined in

[src/shifts_pb.ts:627](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L627)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

[src/shifts_pb.ts:634](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L634)

___

### payload

• **payload**: [`Shift`](Shift.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Genesis.Shift payload = 4;

#### Defined in

[src/shifts_pb.ts:648](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L648)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

[src/shifts_pb.ts:641](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L641)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts_pb.ts:657](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L657)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts_pb.ts:655](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L655)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ShiftsServicePaginationResponse"``

#### Defined in

[src/shifts_pb.ts:656](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L656)

## Methods

### clone

▸ **clone**(): [`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md) \| `PlainMessage`<[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

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

[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md) \| `PlainMessage`<[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md) \| `PlainMessage`<[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts_pb.ts:676](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L676)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

#### Defined in

[src/shifts_pb.ts:664](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L664)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

#### Defined in

[src/shifts_pb.ts:668](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L668)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

#### Defined in

[src/shifts_pb.ts:672](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/shifts_pb.ts#L672)
