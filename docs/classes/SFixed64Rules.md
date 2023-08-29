[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SFixed64Rules

# Class: SFixed64Rules

SFixed64Rules describes the constraints applied to `sfixed64` values

**`Generated`**

from message genesis_validate.SFixed64Rules

## Hierarchy

- `Message`<[`SFixed64Rules`](SFixed64Rules.md)\>

  ↳ **`SFixed64Rules`**

## Table of contents

### Constructors

- [constructor](SFixed64Rules.md#constructor)

### Properties

- [const](SFixed64Rules.md#const)
- [gt](SFixed64Rules.md#gt)
- [gte](SFixed64Rules.md#gte)
- [ignoreEmpty](SFixed64Rules.md#ignoreempty)
- [in](SFixed64Rules.md#in)
- [lt](SFixed64Rules.md#lt)
- [lte](SFixed64Rules.md#lte)
- [notIn](SFixed64Rules.md#notin)
- [fields](SFixed64Rules.md#fields)
- [runtime](SFixed64Rules.md#runtime)
- [typeName](SFixed64Rules.md#typename)

### Methods

- [clone](SFixed64Rules.md#clone)
- [equals](SFixed64Rules.md#equals)
- [fromBinary](SFixed64Rules.md#frombinary)
- [fromJson](SFixed64Rules.md#fromjson)
- [fromJsonString](SFixed64Rules.md#fromjsonstring)
- [getType](SFixed64Rules.md#gettype)
- [toBinary](SFixed64Rules.md#tobinary)
- [toJSON](SFixed64Rules.md#tojson)
- [toJson](SFixed64Rules.md#tojson-1)
- [toJsonString](SFixed64Rules.md#tojsonstring)
- [equals](SFixed64Rules.md#equals-1)
- [fromBinary](SFixed64Rules.md#frombinary-1)
- [fromJson](SFixed64Rules.md#fromjson-1)
- [fromJsonString](SFixed64Rules.md#fromjsonstring-1)

## Constructors

### constructor

• **new SFixed64Rules**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SFixed64Rules`](SFixed64Rules.md)\> |

#### Overrides

Message&lt;SFixed64Rules\&gt;.constructor

#### Defined in

[src/genesis.validate_pb.ts:1478](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1478)

## Properties

### const

• `Optional` **const**: `bigint`

Const specifies that this field must be exactly the specified value

**`Generated`**

from field: optional sfixed64 const = 1;

#### Defined in

[src/genesis.validate_pb.ts:1418](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1418)

___

### gt

• `Optional` **gt**: `bigint`

Gt specifies that this field must be greater than the specified value,
exclusive. If the value of Gt is larger than a specified Lt or Lte, the
range is reversed.

**`Generated`**

from field: optional sfixed64 gt = 4;

#### Defined in

[src/genesis.validate_pb.ts:1443](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1443)

___

### gte

• `Optional` **gte**: `bigint`

Gte specifies that this field must be greater than or equal to the
specified value, inclusive. If the value of Gte is larger than a
specified Lt or Lte, the range is reversed.

**`Generated`**

from field: optional sfixed64 gte = 5;

#### Defined in

[src/genesis.validate_pb.ts:1452](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1452)

___

### ignoreEmpty

• `Optional` **ignoreEmpty**: `boolean`

IgnoreEmpty specifies that the validation rules of this field should be
evaluated only if the field is not empty

**`Generated`**

from field: optional bool ignore_empty = 8;

#### Defined in

[src/genesis.validate_pb.ts:1476](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1476)

___

### in

• **in**: `bigint`[] = `[]`

In specifies that this field must be equal to one of the specified
values

**`Generated`**

from field: repeated sfixed64 in = 6;

#### Defined in

[src/genesis.validate_pb.ts:1460](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1460)

___

### lt

• `Optional` **lt**: `bigint`

Lt specifies that this field must be less than the specified value,
exclusive

**`Generated`**

from field: optional sfixed64 lt = 2;

#### Defined in

[src/genesis.validate_pb.ts:1426](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1426)

___

### lte

• `Optional` **lte**: `bigint`

Lte specifies that this field must be less than or equal to the
specified value, inclusive

**`Generated`**

from field: optional sfixed64 lte = 3;

#### Defined in

[src/genesis.validate_pb.ts:1434](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1434)

___

### notIn

• **notIn**: `bigint`[] = `[]`

NotIn specifies that this field cannot be equal to one of the specified
values

**`Generated`**

from field: repeated sfixed64 not_in = 7;

#### Defined in

[src/genesis.validate_pb.ts:1468](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1468)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/genesis.validate_pb.ts:1485](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1485)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

[src/genesis.validate_pb.ts:1483](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1483)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.SFixed64Rules"``

#### Defined in

[src/genesis.validate_pb.ts:1484](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1484)

## Methods

### clone

▸ **clone**(): [`SFixed64Rules`](SFixed64Rules.md)

Create a deep copy.

#### Returns

[`SFixed64Rules`](SFixed64Rules.md)

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
| `other` | `undefined` \| ``null`` \| [`SFixed64Rules`](SFixed64Rules.md) \| `PlainMessage`<[`SFixed64Rules`](SFixed64Rules.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SFixed64Rules`](SFixed64Rules.md)

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

[`SFixed64Rules`](SFixed64Rules.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SFixed64Rules`](SFixed64Rules.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SFixed64Rules`](SFixed64Rules.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SFixed64Rules`](SFixed64Rules.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SFixed64Rules`](SFixed64Rules.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SFixed64Rules`](SFixed64Rules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SFixed64Rules`](SFixed64Rules.md)\>

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
| `a` | `undefined` \| [`SFixed64Rules`](SFixed64Rules.md) \| `PlainMessage`<[`SFixed64Rules`](SFixed64Rules.md)\> |
| `b` | `undefined` \| [`SFixed64Rules`](SFixed64Rules.md) \| `PlainMessage`<[`SFixed64Rules`](SFixed64Rules.md)\> |

#### Returns

`boolean`

#### Defined in

[src/genesis.validate_pb.ts:1508](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1508)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SFixed64Rules`](SFixed64Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SFixed64Rules`](SFixed64Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:1496](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1496)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SFixed64Rules`](SFixed64Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SFixed64Rules`](SFixed64Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:1500](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1500)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SFixed64Rules`](SFixed64Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SFixed64Rules`](SFixed64Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:1504](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1504)
