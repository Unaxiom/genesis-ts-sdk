[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / Int64Rules

# Class: Int64Rules

Int64Rules describes the constraints applied to `int64` values

**`Generated`**

from message genesis_validate.Int64Rules

## Hierarchy

- `Message`<[`Int64Rules`](Int64Rules.md)\>

  ↳ **`Int64Rules`**

## Table of contents

### Constructors

- [constructor](Int64Rules.md#constructor)

### Properties

- [const](Int64Rules.md#const)
- [gt](Int64Rules.md#gt)
- [gte](Int64Rules.md#gte)
- [ignoreEmpty](Int64Rules.md#ignoreempty)
- [in](Int64Rules.md#in)
- [lt](Int64Rules.md#lt)
- [lte](Int64Rules.md#lte)
- [notIn](Int64Rules.md#notin)
- [fields](Int64Rules.md#fields)
- [runtime](Int64Rules.md#runtime)
- [typeName](Int64Rules.md#typename)

### Methods

- [clone](Int64Rules.md#clone)
- [equals](Int64Rules.md#equals)
- [fromBinary](Int64Rules.md#frombinary)
- [fromJson](Int64Rules.md#fromjson)
- [fromJsonString](Int64Rules.md#fromjsonstring)
- [getType](Int64Rules.md#gettype)
- [toBinary](Int64Rules.md#tobinary)
- [toJSON](Int64Rules.md#tojson)
- [toJson](Int64Rules.md#tojson-1)
- [toJsonString](Int64Rules.md#tojsonstring)
- [equals](Int64Rules.md#equals-1)
- [fromBinary](Int64Rules.md#frombinary-1)
- [fromJson](Int64Rules.md#fromjson-1)
- [fromJsonString](Int64Rules.md#fromjsonstring-1)

## Constructors

### constructor

• **new Int64Rules**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Int64Rules`](Int64Rules.md)\> |

#### Overrides

Message&lt;Int64Rules\&gt;.constructor

#### Defined in

[src/genesis.validate_pb.ts:630](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L630)

## Properties

### const

• `Optional` **const**: `bigint`

Const specifies that this field must be exactly the specified value

**`Generated`**

from field: optional int64 const = 1;

#### Defined in

[src/genesis.validate_pb.ts:570](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L570)

___

### gt

• `Optional` **gt**: `bigint`

Gt specifies that this field must be greater than the specified value,
exclusive. If the value of Gt is larger than a specified Lt or Lte, the
range is reversed.

**`Generated`**

from field: optional int64 gt = 4;

#### Defined in

[src/genesis.validate_pb.ts:595](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L595)

___

### gte

• `Optional` **gte**: `bigint`

Gte specifies that this field must be greater than or equal to the
specified value, inclusive. If the value of Gte is larger than a
specified Lt or Lte, the range is reversed.

**`Generated`**

from field: optional int64 gte = 5;

#### Defined in

[src/genesis.validate_pb.ts:604](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L604)

___

### ignoreEmpty

• `Optional` **ignoreEmpty**: `boolean`

IgnoreEmpty specifies that the validation rules of this field should be
evaluated only if the field is not empty

**`Generated`**

from field: optional bool ignore_empty = 8;

#### Defined in

[src/genesis.validate_pb.ts:628](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L628)

___

### in

• **in**: `bigint`[] = `[]`

In specifies that this field must be equal to one of the specified
values

**`Generated`**

from field: repeated int64 in = 6;

#### Defined in

[src/genesis.validate_pb.ts:612](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L612)

___

### lt

• `Optional` **lt**: `bigint`

Lt specifies that this field must be less than the specified value,
exclusive

**`Generated`**

from field: optional int64 lt = 2;

#### Defined in

[src/genesis.validate_pb.ts:578](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L578)

___

### lte

• `Optional` **lte**: `bigint`

Lte specifies that this field must be less than or equal to the
specified value, inclusive

**`Generated`**

from field: optional int64 lte = 3;

#### Defined in

[src/genesis.validate_pb.ts:586](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L586)

___

### notIn

• **notIn**: `bigint`[] = `[]`

NotIn specifies that this field cannot be equal to one of the specified
values

**`Generated`**

from field: repeated int64 not_in = 7;

#### Defined in

[src/genesis.validate_pb.ts:620](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L620)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/genesis.validate_pb.ts:637](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L637)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

[src/genesis.validate_pb.ts:635](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L635)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.Int64Rules"``

#### Defined in

[src/genesis.validate_pb.ts:636](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L636)

## Methods

### clone

▸ **clone**(): [`Int64Rules`](Int64Rules.md)

Create a deep copy.

#### Returns

[`Int64Rules`](Int64Rules.md)

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
| `other` | `undefined` \| ``null`` \| [`Int64Rules`](Int64Rules.md) \| `PlainMessage`<[`Int64Rules`](Int64Rules.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Int64Rules`](Int64Rules.md)

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

[`Int64Rules`](Int64Rules.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Int64Rules`](Int64Rules.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Int64Rules`](Int64Rules.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Int64Rules`](Int64Rules.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Int64Rules`](Int64Rules.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Int64Rules`](Int64Rules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Int64Rules`](Int64Rules.md)\>

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
| `a` | `undefined` \| [`Int64Rules`](Int64Rules.md) \| `PlainMessage`<[`Int64Rules`](Int64Rules.md)\> |
| `b` | `undefined` \| [`Int64Rules`](Int64Rules.md) \| `PlainMessage`<[`Int64Rules`](Int64Rules.md)\> |

#### Returns

`boolean`

#### Defined in

[src/genesis.validate_pb.ts:660](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L660)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Int64Rules`](Int64Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Int64Rules`](Int64Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:648](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L648)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Int64Rules`](Int64Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Int64Rules`](Int64Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:652](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L652)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Int64Rules`](Int64Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Int64Rules`](Int64Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:656](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L656)
