[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SInt32Rules

# Class: SInt32Rules

SInt32Rules describes the constraints applied to `sint32` values

**`Generated`**

from message genesis_validate.SInt32Rules

## Hierarchy

- `Message`<[`SInt32Rules`](SInt32Rules.md)\>

  ↳ **`SInt32Rules`**

## Table of contents

### Constructors

- [constructor](SInt32Rules.md#constructor)

### Properties

- [const](SInt32Rules.md#const)
- [gt](SInt32Rules.md#gt)
- [gte](SInt32Rules.md#gte)
- [ignoreEmpty](SInt32Rules.md#ignoreempty)
- [in](SInt32Rules.md#in)
- [lt](SInt32Rules.md#lt)
- [lte](SInt32Rules.md#lte)
- [notIn](SInt32Rules.md#notin)
- [fields](SInt32Rules.md#fields)
- [runtime](SInt32Rules.md#runtime)
- [typeName](SInt32Rules.md#typename)

### Methods

- [clone](SInt32Rules.md#clone)
- [equals](SInt32Rules.md#equals)
- [fromBinary](SInt32Rules.md#frombinary)
- [fromJson](SInt32Rules.md#fromjson)
- [fromJsonString](SInt32Rules.md#fromjsonstring)
- [getType](SInt32Rules.md#gettype)
- [toBinary](SInt32Rules.md#tobinary)
- [toJSON](SInt32Rules.md#tojson)
- [toJson](SInt32Rules.md#tojson-1)
- [toJsonString](SInt32Rules.md#tojsonstring)
- [equals](SInt32Rules.md#equals-1)
- [fromBinary](SInt32Rules.md#frombinary-1)
- [fromJson](SInt32Rules.md#fromjson-1)
- [fromJsonString](SInt32Rules.md#fromjsonstring-1)

## Constructors

### constructor

• **new SInt32Rules**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SInt32Rules`](SInt32Rules.md)\> |

#### Overrides

Message&lt;SInt32Rules\&gt;.constructor

#### Defined in

[src/genesis.validate_pb.ts:948](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L948)

## Properties

### const

• `Optional` **const**: `number`

Const specifies that this field must be exactly the specified value

**`Generated`**

from field: optional sint32 const = 1;

#### Defined in

[src/genesis.validate_pb.ts:888](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L888)

___

### gt

• `Optional` **gt**: `number`

Gt specifies that this field must be greater than the specified value,
exclusive. If the value of Gt is larger than a specified Lt or Lte, the
range is reversed.

**`Generated`**

from field: optional sint32 gt = 4;

#### Defined in

[src/genesis.validate_pb.ts:913](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L913)

___

### gte

• `Optional` **gte**: `number`

Gte specifies that this field must be greater than or equal to the
specified value, inclusive. If the value of Gte is larger than a
specified Lt or Lte, the range is reversed.

**`Generated`**

from field: optional sint32 gte = 5;

#### Defined in

[src/genesis.validate_pb.ts:922](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L922)

___

### ignoreEmpty

• `Optional` **ignoreEmpty**: `boolean`

IgnoreEmpty specifies that the validation rules of this field should be
evaluated only if the field is not empty

**`Generated`**

from field: optional bool ignore_empty = 8;

#### Defined in

[src/genesis.validate_pb.ts:946](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L946)

___

### in

• **in**: `number`[] = `[]`

In specifies that this field must be equal to one of the specified
values

**`Generated`**

from field: repeated sint32 in = 6;

#### Defined in

[src/genesis.validate_pb.ts:930](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L930)

___

### lt

• `Optional` **lt**: `number`

Lt specifies that this field must be less than the specified value,
exclusive

**`Generated`**

from field: optional sint32 lt = 2;

#### Defined in

[src/genesis.validate_pb.ts:896](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L896)

___

### lte

• `Optional` **lte**: `number`

Lte specifies that this field must be less than or equal to the
specified value, inclusive

**`Generated`**

from field: optional sint32 lte = 3;

#### Defined in

[src/genesis.validate_pb.ts:904](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L904)

___

### notIn

• **notIn**: `number`[] = `[]`

NotIn specifies that this field cannot be equal to one of the specified
values

**`Generated`**

from field: repeated sint32 not_in = 7;

#### Defined in

[src/genesis.validate_pb.ts:938](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L938)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/genesis.validate_pb.ts:955](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L955)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

[src/genesis.validate_pb.ts:953](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L953)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.SInt32Rules"``

#### Defined in

[src/genesis.validate_pb.ts:954](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L954)

## Methods

### clone

▸ **clone**(): [`SInt32Rules`](SInt32Rules.md)

Create a deep copy.

#### Returns

[`SInt32Rules`](SInt32Rules.md)

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
| `other` | `undefined` \| ``null`` \| [`SInt32Rules`](SInt32Rules.md) \| `PlainMessage`<[`SInt32Rules`](SInt32Rules.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SInt32Rules`](SInt32Rules.md)

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

[`SInt32Rules`](SInt32Rules.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SInt32Rules`](SInt32Rules.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SInt32Rules`](SInt32Rules.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SInt32Rules`](SInt32Rules.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SInt32Rules`](SInt32Rules.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SInt32Rules`](SInt32Rules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SInt32Rules`](SInt32Rules.md)\>

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
| `a` | `undefined` \| [`SInt32Rules`](SInt32Rules.md) \| `PlainMessage`<[`SInt32Rules`](SInt32Rules.md)\> |
| `b` | `undefined` \| [`SInt32Rules`](SInt32Rules.md) \| `PlainMessage`<[`SInt32Rules`](SInt32Rules.md)\> |

#### Returns

`boolean`

#### Defined in

[src/genesis.validate_pb.ts:978](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L978)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SInt32Rules`](SInt32Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SInt32Rules`](SInt32Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:966](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L966)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SInt32Rules`](SInt32Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SInt32Rules`](SInt32Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:970](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L970)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SInt32Rules`](SInt32Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SInt32Rules`](SInt32Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:974](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L974)
