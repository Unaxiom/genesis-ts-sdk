[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / HolidaysServiceShiftGroupCreateRequest

# Class: HolidaysServiceShiftGroupCreateRequest

Describes the parameters required to add a shift to a shift group

**`Generated`**

from message Genesis.HolidaysServiceShiftGroupCreateRequest

## Hierarchy

- `Message`<[`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md)\>

  ↳ **`HolidaysServiceShiftGroupCreateRequest`**

## Table of contents

### Constructors

- [constructor](HolidaysServiceShiftGroupCreateRequest.md#constructor)

### Properties

- [holidayId](HolidaysServiceShiftGroupCreateRequest.md#holidayid)
- [shiftGroupId](HolidaysServiceShiftGroupCreateRequest.md#shiftgroupid)
- [userComment](HolidaysServiceShiftGroupCreateRequest.md#usercomment)
- [fields](HolidaysServiceShiftGroupCreateRequest.md#fields)
- [runtime](HolidaysServiceShiftGroupCreateRequest.md#runtime)
- [typeName](HolidaysServiceShiftGroupCreateRequest.md#typename)

### Methods

- [clone](HolidaysServiceShiftGroupCreateRequest.md#clone)
- [equals](HolidaysServiceShiftGroupCreateRequest.md#equals)
- [fromBinary](HolidaysServiceShiftGroupCreateRequest.md#frombinary)
- [fromJson](HolidaysServiceShiftGroupCreateRequest.md#fromjson)
- [fromJsonString](HolidaysServiceShiftGroupCreateRequest.md#fromjsonstring)
- [getType](HolidaysServiceShiftGroupCreateRequest.md#gettype)
- [toBinary](HolidaysServiceShiftGroupCreateRequest.md#tobinary)
- [toJSON](HolidaysServiceShiftGroupCreateRequest.md#tojson)
- [toJson](HolidaysServiceShiftGroupCreateRequest.md#tojson-1)
- [toJsonString](HolidaysServiceShiftGroupCreateRequest.md#tojsonstring)
- [equals](HolidaysServiceShiftGroupCreateRequest.md#equals-1)
- [fromBinary](HolidaysServiceShiftGroupCreateRequest.md#frombinary-1)
- [fromJson](HolidaysServiceShiftGroupCreateRequest.md#fromjson-1)
- [fromJsonString](HolidaysServiceShiftGroupCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new HolidaysServiceShiftGroupCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md)\> |

#### Overrides

Message&lt;HolidaysServiceShiftGroupCreateRequest\&gt;.constructor

#### Defined in

[src/holidays_pb.ts:461](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L461)

## Properties

### holidayId

• **holidayId**: `bigint` = `protoInt64.zero`

Stores the holiday ID

**`Generated`**

from field: int64 holiday_id = 10;

#### Defined in

[src/holidays_pb.ts:452](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L452)

___

### shiftGroupId

• **shiftGroupId**: `bigint` = `protoInt64.zero`

Stores the shift group ID

**`Generated`**

from field: int64 shift_group_id = 11;

#### Defined in

[src/holidays_pb.ts:459](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L459)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/holidays_pb.ts:445](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L445)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/holidays_pb.ts:468](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L468)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/holidays_pb.ts:466](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L466)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.HolidaysServiceShiftGroupCreateRequest"``

#### Defined in

[src/holidays_pb.ts:467](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L467)

## Methods

### clone

▸ **clone**(): [`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md)

Create a deep copy.

#### Returns

[`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md) \| `PlainMessage`<[`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md)

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

[`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md)\>

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
| `a` | `undefined` \| [`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md) \| `PlainMessage`<[`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md)\> |
| `b` | `undefined` \| [`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md) \| `PlainMessage`<[`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/holidays_pb.ts:486](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L486)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md)

#### Defined in

[src/holidays_pb.ts:474](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L474)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md)

#### Defined in

[src/holidays_pb.ts:478](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L478)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceShiftGroupCreateRequest`](HolidaysServiceShiftGroupCreateRequest.md)

#### Defined in

[src/holidays_pb.ts:482](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/holidays_pb.ts#L482)
