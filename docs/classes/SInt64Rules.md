[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SInt64Rules

# Class: SInt64Rules

SInt64Rules describes the constraints applied to `sint64` values

**`Generated`**

from message genesis_validate.SInt64Rules

## Hierarchy

- `Message`<[`SInt64Rules`](SInt64Rules.md)\>

  ↳ **`SInt64Rules`**

## Table of contents

### Constructors

- [constructor](SInt64Rules.md#constructor)

### Properties

- [const](SInt64Rules.md#const)
- [gt](SInt64Rules.md#gt)
- [gte](SInt64Rules.md#gte)
- [ignoreEmpty](SInt64Rules.md#ignoreempty)
- [in](SInt64Rules.md#in)
- [lt](SInt64Rules.md#lt)
- [lte](SInt64Rules.md#lte)
- [notIn](SInt64Rules.md#notin)
- [fields](SInt64Rules.md#fields)
- [runtime](SInt64Rules.md#runtime)
- [typeName](SInt64Rules.md#typename)

### Methods

- [clone](SInt64Rules.md#clone)
- [equals](SInt64Rules.md#equals)
- [fromBinary](SInt64Rules.md#frombinary)
- [fromJson](SInt64Rules.md#fromjson)
- [fromJsonString](SInt64Rules.md#fromjsonstring)
- [getType](SInt64Rules.md#gettype)
- [toBinary](SInt64Rules.md#tobinary)
- [toJSON](SInt64Rules.md#tojson)
- [toJson](SInt64Rules.md#tojson-1)
- [toJsonString](SInt64Rules.md#tojsonstring)
- [equals](SInt64Rules.md#equals-1)
- [fromBinary](SInt64Rules.md#frombinary-1)
- [fromJson](SInt64Rules.md#fromjson-1)
- [fromJsonString](SInt64Rules.md#fromjsonstring-1)

## Constructors

### constructor

• **new SInt64Rules**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SInt64Rules`](SInt64Rules.md)\> |

#### Overrides

Message&lt;SInt64Rules\&gt;.constructor

#### Defined in

[src/genesis.validate_pb.ts:1054](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1054)

## Properties

### const

• `Optional` **const**: `bigint`

Const specifies that this field must be exactly the specified value

**`Generated`**

from field: optional sint64 const = 1;

#### Defined in

[src/genesis.validate_pb.ts:994](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L994)

___

### gt

• `Optional` **gt**: `bigint`

Gt specifies that this field must be greater than the specified value,
exclusive. If the value of Gt is larger than a specified Lt or Lte, the
range is reversed.

**`Generated`**

from field: optional sint64 gt = 4;

#### Defined in

[src/genesis.validate_pb.ts:1019](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1019)

___

### gte

• `Optional` **gte**: `bigint`

Gte specifies that this field must be greater than or equal to the
specified value, inclusive. If the value of Gte is larger than a
specified Lt or Lte, the range is reversed.

**`Generated`**

from field: optional sint64 gte = 5;

#### Defined in

[src/genesis.validate_pb.ts:1028](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1028)

___

### ignoreEmpty

• `Optional` **ignoreEmpty**: `boolean`

IgnoreEmpty specifies that the validation rules of this field should be
evaluated only if the field is not empty

**`Generated`**

from field: optional bool ignore_empty = 8;

#### Defined in

[src/genesis.validate_pb.ts:1052](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1052)

___

### in

• **in**: `bigint`[] = `[]`

In specifies that this field must be equal to one of the specified
values

**`Generated`**

from field: repeated sint64 in = 6;

#### Defined in

[src/genesis.validate_pb.ts:1036](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1036)

___

### lt

• `Optional` **lt**: `bigint`

Lt specifies that this field must be less than the specified value,
exclusive

**`Generated`**

from field: optional sint64 lt = 2;

#### Defined in

[src/genesis.validate_pb.ts:1002](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1002)

___

### lte

• `Optional` **lte**: `bigint`

Lte specifies that this field must be less than or equal to the
specified value, inclusive

**`Generated`**

from field: optional sint64 lte = 3;

#### Defined in

[src/genesis.validate_pb.ts:1010](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1010)

___

### notIn

• **notIn**: `bigint`[] = `[]`

NotIn specifies that this field cannot be equal to one of the specified
values

**`Generated`**

from field: repeated sint64 not_in = 7;

#### Defined in

[src/genesis.validate_pb.ts:1044](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1044)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/genesis.validate_pb.ts:1061](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1061)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

[src/genesis.validate_pb.ts:1059](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1059)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.SInt64Rules"``

#### Defined in

[src/genesis.validate_pb.ts:1060](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1060)

## Methods

### clone

▸ **clone**(): [`SInt64Rules`](SInt64Rules.md)

Create a deep copy.

#### Returns

[`SInt64Rules`](SInt64Rules.md)

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
| `other` | `undefined` \| ``null`` \| [`SInt64Rules`](SInt64Rules.md) \| `PlainMessage`<[`SInt64Rules`](SInt64Rules.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SInt64Rules`](SInt64Rules.md)

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

[`SInt64Rules`](SInt64Rules.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SInt64Rules`](SInt64Rules.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SInt64Rules`](SInt64Rules.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SInt64Rules`](SInt64Rules.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SInt64Rules`](SInt64Rules.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SInt64Rules`](SInt64Rules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SInt64Rules`](SInt64Rules.md)\>

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
| `a` | `undefined` \| [`SInt64Rules`](SInt64Rules.md) \| `PlainMessage`<[`SInt64Rules`](SInt64Rules.md)\> |
| `b` | `undefined` \| [`SInt64Rules`](SInt64Rules.md) \| `PlainMessage`<[`SInt64Rules`](SInt64Rules.md)\> |

#### Returns

`boolean`

#### Defined in

[src/genesis.validate_pb.ts:1084](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1084)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SInt64Rules`](SInt64Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SInt64Rules`](SInt64Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:1072](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1072)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SInt64Rules`](SInt64Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SInt64Rules`](SInt64Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:1076](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1076)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SInt64Rules`](SInt64Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SInt64Rules`](SInt64Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:1080](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1080)
