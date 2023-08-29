[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / UInt64Rules

# Class: UInt64Rules

UInt64Rules describes the constraints applied to `uint64` values

**`Generated`**

from message genesis_validate.UInt64Rules

## Hierarchy

- `Message`<[`UInt64Rules`](UInt64Rules.md)\>

  ↳ **`UInt64Rules`**

## Table of contents

### Constructors

- [constructor](UInt64Rules.md#constructor)

### Properties

- [const](UInt64Rules.md#const)
- [gt](UInt64Rules.md#gt)
- [gte](UInt64Rules.md#gte)
- [ignoreEmpty](UInt64Rules.md#ignoreempty)
- [in](UInt64Rules.md#in)
- [lt](UInt64Rules.md#lt)
- [lte](UInt64Rules.md#lte)
- [notIn](UInt64Rules.md#notin)
- [fields](UInt64Rules.md#fields)
- [runtime](UInt64Rules.md#runtime)
- [typeName](UInt64Rules.md#typename)

### Methods

- [clone](UInt64Rules.md#clone)
- [equals](UInt64Rules.md#equals)
- [fromBinary](UInt64Rules.md#frombinary)
- [fromJson](UInt64Rules.md#fromjson)
- [fromJsonString](UInt64Rules.md#fromjsonstring)
- [getType](UInt64Rules.md#gettype)
- [toBinary](UInt64Rules.md#tobinary)
- [toJSON](UInt64Rules.md#tojson)
- [toJson](UInt64Rules.md#tojson-1)
- [toJsonString](UInt64Rules.md#tojsonstring)
- [equals](UInt64Rules.md#equals-1)
- [fromBinary](UInt64Rules.md#frombinary-1)
- [fromJson](UInt64Rules.md#fromjson-1)
- [fromJsonString](UInt64Rules.md#fromjsonstring-1)

## Constructors

### constructor

• **new UInt64Rules**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UInt64Rules`](UInt64Rules.md)\> |

#### Overrides

Message&lt;UInt64Rules\&gt;.constructor

#### Defined in

[src/genesis.validate_pb.ts:842](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L842)

## Properties

### const

• `Optional` **const**: `bigint`

Const specifies that this field must be exactly the specified value

**`Generated`**

from field: optional uint64 const = 1;

#### Defined in

[src/genesis.validate_pb.ts:782](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L782)

___

### gt

• `Optional` **gt**: `bigint`

Gt specifies that this field must be greater than the specified value,
exclusive. If the value of Gt is larger than a specified Lt or Lte, the
range is reversed.

**`Generated`**

from field: optional uint64 gt = 4;

#### Defined in

[src/genesis.validate_pb.ts:807](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L807)

___

### gte

• `Optional` **gte**: `bigint`

Gte specifies that this field must be greater than or equal to the
specified value, inclusive. If the value of Gte is larger than a
specified Lt or Lte, the range is reversed.

**`Generated`**

from field: optional uint64 gte = 5;

#### Defined in

[src/genesis.validate_pb.ts:816](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L816)

___

### ignoreEmpty

• `Optional` **ignoreEmpty**: `boolean`

IgnoreEmpty specifies that the validation rules of this field should be
evaluated only if the field is not empty

**`Generated`**

from field: optional bool ignore_empty = 8;

#### Defined in

[src/genesis.validate_pb.ts:840](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L840)

___

### in

• **in**: `bigint`[] = `[]`

In specifies that this field must be equal to one of the specified
values

**`Generated`**

from field: repeated uint64 in = 6;

#### Defined in

[src/genesis.validate_pb.ts:824](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L824)

___

### lt

• `Optional` **lt**: `bigint`

Lt specifies that this field must be less than the specified value,
exclusive

**`Generated`**

from field: optional uint64 lt = 2;

#### Defined in

[src/genesis.validate_pb.ts:790](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L790)

___

### lte

• `Optional` **lte**: `bigint`

Lte specifies that this field must be less than or equal to the
specified value, inclusive

**`Generated`**

from field: optional uint64 lte = 3;

#### Defined in

[src/genesis.validate_pb.ts:798](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L798)

___

### notIn

• **notIn**: `bigint`[] = `[]`

NotIn specifies that this field cannot be equal to one of the specified
values

**`Generated`**

from field: repeated uint64 not_in = 7;

#### Defined in

[src/genesis.validate_pb.ts:832](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L832)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/genesis.validate_pb.ts:849](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L849)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

[src/genesis.validate_pb.ts:847](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L847)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.UInt64Rules"``

#### Defined in

[src/genesis.validate_pb.ts:848](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L848)

## Methods

### clone

▸ **clone**(): [`UInt64Rules`](UInt64Rules.md)

Create a deep copy.

#### Returns

[`UInt64Rules`](UInt64Rules.md)

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
| `other` | `undefined` \| ``null`` \| [`UInt64Rules`](UInt64Rules.md) \| `PlainMessage`<[`UInt64Rules`](UInt64Rules.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UInt64Rules`](UInt64Rules.md)

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

[`UInt64Rules`](UInt64Rules.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UInt64Rules`](UInt64Rules.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UInt64Rules`](UInt64Rules.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UInt64Rules`](UInt64Rules.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UInt64Rules`](UInt64Rules.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UInt64Rules`](UInt64Rules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UInt64Rules`](UInt64Rules.md)\>

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
| `a` | `undefined` \| [`UInt64Rules`](UInt64Rules.md) \| `PlainMessage`<[`UInt64Rules`](UInt64Rules.md)\> |
| `b` | `undefined` \| [`UInt64Rules`](UInt64Rules.md) \| `PlainMessage`<[`UInt64Rules`](UInt64Rules.md)\> |

#### Returns

`boolean`

#### Defined in

[src/genesis.validate_pb.ts:872](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L872)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UInt64Rules`](UInt64Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UInt64Rules`](UInt64Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:860](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L860)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UInt64Rules`](UInt64Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UInt64Rules`](UInt64Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:864](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L864)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UInt64Rules`](UInt64Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UInt64Rules`](UInt64Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:868](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L868)
