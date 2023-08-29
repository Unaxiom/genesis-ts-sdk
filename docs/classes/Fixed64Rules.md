[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / Fixed64Rules

# Class: Fixed64Rules

Fixed64Rules describes the constraints applied to `fixed64` values

**`Generated`**

from message genesis_validate.Fixed64Rules

## Hierarchy

- `Message`<[`Fixed64Rules`](Fixed64Rules.md)\>

  ↳ **`Fixed64Rules`**

## Table of contents

### Constructors

- [constructor](Fixed64Rules.md#constructor)

### Properties

- [const](Fixed64Rules.md#const)
- [gt](Fixed64Rules.md#gt)
- [gte](Fixed64Rules.md#gte)
- [ignoreEmpty](Fixed64Rules.md#ignoreempty)
- [in](Fixed64Rules.md#in)
- [lt](Fixed64Rules.md#lt)
- [lte](Fixed64Rules.md#lte)
- [notIn](Fixed64Rules.md#notin)
- [fields](Fixed64Rules.md#fields)
- [runtime](Fixed64Rules.md#runtime)
- [typeName](Fixed64Rules.md#typename)

### Methods

- [clone](Fixed64Rules.md#clone)
- [equals](Fixed64Rules.md#equals)
- [fromBinary](Fixed64Rules.md#frombinary)
- [fromJson](Fixed64Rules.md#fromjson)
- [fromJsonString](Fixed64Rules.md#fromjsonstring)
- [getType](Fixed64Rules.md#gettype)
- [toBinary](Fixed64Rules.md#tobinary)
- [toJSON](Fixed64Rules.md#tojson)
- [toJson](Fixed64Rules.md#tojson-1)
- [toJsonString](Fixed64Rules.md#tojsonstring)
- [equals](Fixed64Rules.md#equals-1)
- [fromBinary](Fixed64Rules.md#frombinary-1)
- [fromJson](Fixed64Rules.md#fromjson-1)
- [fromJsonString](Fixed64Rules.md#fromjsonstring-1)

## Constructors

### constructor

• **new Fixed64Rules**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Fixed64Rules`](Fixed64Rules.md)\> |

#### Overrides

Message&lt;Fixed64Rules\&gt;.constructor

#### Defined in

[src/genesis.validate_pb.ts:1266](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1266)

## Properties

### const

• `Optional` **const**: `bigint`

Const specifies that this field must be exactly the specified value

**`Generated`**

from field: optional fixed64 const = 1;

#### Defined in

[src/genesis.validate_pb.ts:1206](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1206)

___

### gt

• `Optional` **gt**: `bigint`

Gt specifies that this field must be greater than the specified value,
exclusive. If the value of Gt is larger than a specified Lt or Lte, the
range is reversed.

**`Generated`**

from field: optional fixed64 gt = 4;

#### Defined in

[src/genesis.validate_pb.ts:1231](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1231)

___

### gte

• `Optional` **gte**: `bigint`

Gte specifies that this field must be greater than or equal to the
specified value, inclusive. If the value of Gte is larger than a
specified Lt or Lte, the range is reversed.

**`Generated`**

from field: optional fixed64 gte = 5;

#### Defined in

[src/genesis.validate_pb.ts:1240](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1240)

___

### ignoreEmpty

• `Optional` **ignoreEmpty**: `boolean`

IgnoreEmpty specifies that the validation rules of this field should be
evaluated only if the field is not empty

**`Generated`**

from field: optional bool ignore_empty = 8;

#### Defined in

[src/genesis.validate_pb.ts:1264](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1264)

___

### in

• **in**: `bigint`[] = `[]`

In specifies that this field must be equal to one of the specified
values

**`Generated`**

from field: repeated fixed64 in = 6;

#### Defined in

[src/genesis.validate_pb.ts:1248](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1248)

___

### lt

• `Optional` **lt**: `bigint`

Lt specifies that this field must be less than the specified value,
exclusive

**`Generated`**

from field: optional fixed64 lt = 2;

#### Defined in

[src/genesis.validate_pb.ts:1214](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1214)

___

### lte

• `Optional` **lte**: `bigint`

Lte specifies that this field must be less than or equal to the
specified value, inclusive

**`Generated`**

from field: optional fixed64 lte = 3;

#### Defined in

[src/genesis.validate_pb.ts:1222](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1222)

___

### notIn

• **notIn**: `bigint`[] = `[]`

NotIn specifies that this field cannot be equal to one of the specified
values

**`Generated`**

from field: repeated fixed64 not_in = 7;

#### Defined in

[src/genesis.validate_pb.ts:1256](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1256)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/genesis.validate_pb.ts:1273](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1273)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

[src/genesis.validate_pb.ts:1271](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1271)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.Fixed64Rules"``

#### Defined in

[src/genesis.validate_pb.ts:1272](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1272)

## Methods

### clone

▸ **clone**(): [`Fixed64Rules`](Fixed64Rules.md)

Create a deep copy.

#### Returns

[`Fixed64Rules`](Fixed64Rules.md)

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
| `other` | `undefined` \| ``null`` \| [`Fixed64Rules`](Fixed64Rules.md) \| `PlainMessage`<[`Fixed64Rules`](Fixed64Rules.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Fixed64Rules`](Fixed64Rules.md)

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

[`Fixed64Rules`](Fixed64Rules.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Fixed64Rules`](Fixed64Rules.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Fixed64Rules`](Fixed64Rules.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Fixed64Rules`](Fixed64Rules.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Fixed64Rules`](Fixed64Rules.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Fixed64Rules`](Fixed64Rules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Fixed64Rules`](Fixed64Rules.md)\>

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
| `a` | `undefined` \| [`Fixed64Rules`](Fixed64Rules.md) \| `PlainMessage`<[`Fixed64Rules`](Fixed64Rules.md)\> |
| `b` | `undefined` \| [`Fixed64Rules`](Fixed64Rules.md) \| `PlainMessage`<[`Fixed64Rules`](Fixed64Rules.md)\> |

#### Returns

`boolean`

#### Defined in

[src/genesis.validate_pb.ts:1296](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1296)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Fixed64Rules`](Fixed64Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Fixed64Rules`](Fixed64Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:1284](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1284)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Fixed64Rules`](Fixed64Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Fixed64Rules`](Fixed64Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:1288](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1288)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Fixed64Rules`](Fixed64Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Fixed64Rules`](Fixed64Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:1292](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1292)
