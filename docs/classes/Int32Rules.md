[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / Int32Rules

# Class: Int32Rules

Int32Rules describes the constraints applied to `int32` values

**`Generated`**

from message genesis_validate.Int32Rules

## Hierarchy

- `Message`<[`Int32Rules`](Int32Rules.md)\>

  ↳ **`Int32Rules`**

## Table of contents

### Constructors

- [constructor](Int32Rules.md#constructor)

### Properties

- [const](Int32Rules.md#const)
- [gt](Int32Rules.md#gt)
- [gte](Int32Rules.md#gte)
- [ignoreEmpty](Int32Rules.md#ignoreempty)
- [in](Int32Rules.md#in)
- [lt](Int32Rules.md#lt)
- [lte](Int32Rules.md#lte)
- [notIn](Int32Rules.md#notin)
- [fields](Int32Rules.md#fields)
- [runtime](Int32Rules.md#runtime)
- [typeName](Int32Rules.md#typename)

### Methods

- [clone](Int32Rules.md#clone)
- [equals](Int32Rules.md#equals)
- [fromBinary](Int32Rules.md#frombinary)
- [fromJson](Int32Rules.md#fromjson)
- [fromJsonString](Int32Rules.md#fromjsonstring)
- [getType](Int32Rules.md#gettype)
- [toBinary](Int32Rules.md#tobinary)
- [toJSON](Int32Rules.md#tojson)
- [toJson](Int32Rules.md#tojson-1)
- [toJsonString](Int32Rules.md#tojsonstring)
- [equals](Int32Rules.md#equals-1)
- [fromBinary](Int32Rules.md#frombinary-1)
- [fromJson](Int32Rules.md#fromjson-1)
- [fromJsonString](Int32Rules.md#fromjsonstring-1)

## Constructors

### constructor

• **new Int32Rules**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Int32Rules`](Int32Rules.md)\> |

#### Overrides

Message&lt;Int32Rules\&gt;.constructor

#### Defined in

[src/genesis.validate_pb.ts:524](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L524)

## Properties

### const

• `Optional` **const**: `number`

Const specifies that this field must be exactly the specified value

**`Generated`**

from field: optional int32 const = 1;

#### Defined in

[src/genesis.validate_pb.ts:464](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L464)

___

### gt

• `Optional` **gt**: `number`

Gt specifies that this field must be greater than the specified value,
exclusive. If the value of Gt is larger than a specified Lt or Lte, the
range is reversed.

**`Generated`**

from field: optional int32 gt = 4;

#### Defined in

[src/genesis.validate_pb.ts:489](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L489)

___

### gte

• `Optional` **gte**: `number`

Gte specifies that this field must be greater than or equal to the
specified value, inclusive. If the value of Gte is larger than a
specified Lt or Lte, the range is reversed.

**`Generated`**

from field: optional int32 gte = 5;

#### Defined in

[src/genesis.validate_pb.ts:498](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L498)

___

### ignoreEmpty

• `Optional` **ignoreEmpty**: `boolean`

IgnoreEmpty specifies that the validation rules of this field should be
evaluated only if the field is not empty

**`Generated`**

from field: optional bool ignore_empty = 8;

#### Defined in

[src/genesis.validate_pb.ts:522](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L522)

___

### in

• **in**: `number`[] = `[]`

In specifies that this field must be equal to one of the specified
values

**`Generated`**

from field: repeated int32 in = 6;

#### Defined in

[src/genesis.validate_pb.ts:506](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L506)

___

### lt

• `Optional` **lt**: `number`

Lt specifies that this field must be less than the specified value,
exclusive

**`Generated`**

from field: optional int32 lt = 2;

#### Defined in

[src/genesis.validate_pb.ts:472](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L472)

___

### lte

• `Optional` **lte**: `number`

Lte specifies that this field must be less than or equal to the
specified value, inclusive

**`Generated`**

from field: optional int32 lte = 3;

#### Defined in

[src/genesis.validate_pb.ts:480](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L480)

___

### notIn

• **notIn**: `number`[] = `[]`

NotIn specifies that this field cannot be equal to one of the specified
values

**`Generated`**

from field: repeated int32 not_in = 7;

#### Defined in

[src/genesis.validate_pb.ts:514](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L514)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/genesis.validate_pb.ts:531](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L531)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

[src/genesis.validate_pb.ts:529](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L529)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.Int32Rules"``

#### Defined in

[src/genesis.validate_pb.ts:530](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L530)

## Methods

### clone

▸ **clone**(): [`Int32Rules`](Int32Rules.md)

Create a deep copy.

#### Returns

[`Int32Rules`](Int32Rules.md)

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
| `other` | `undefined` \| ``null`` \| [`Int32Rules`](Int32Rules.md) \| `PlainMessage`<[`Int32Rules`](Int32Rules.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Int32Rules`](Int32Rules.md)

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

[`Int32Rules`](Int32Rules.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Int32Rules`](Int32Rules.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Int32Rules`](Int32Rules.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Int32Rules`](Int32Rules.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Int32Rules`](Int32Rules.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Int32Rules`](Int32Rules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Int32Rules`](Int32Rules.md)\>

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
| `a` | `undefined` \| [`Int32Rules`](Int32Rules.md) \| `PlainMessage`<[`Int32Rules`](Int32Rules.md)\> |
| `b` | `undefined` \| [`Int32Rules`](Int32Rules.md) \| `PlainMessage`<[`Int32Rules`](Int32Rules.md)\> |

#### Returns

`boolean`

#### Defined in

[src/genesis.validate_pb.ts:554](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L554)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Int32Rules`](Int32Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Int32Rules`](Int32Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:542](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L542)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Int32Rules`](Int32Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Int32Rules`](Int32Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:546](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L546)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Int32Rules`](Int32Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Int32Rules`](Int32Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:550](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L550)
