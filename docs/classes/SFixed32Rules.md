[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SFixed32Rules

# Class: SFixed32Rules

SFixed32Rules describes the constraints applied to `sfixed32` values

**`Generated`**

from message genesis_validate.SFixed32Rules

## Hierarchy

- `Message`<[`SFixed32Rules`](SFixed32Rules.md)\>

  ↳ **`SFixed32Rules`**

## Table of contents

### Constructors

- [constructor](SFixed32Rules.md#constructor)

### Properties

- [const](SFixed32Rules.md#const)
- [gt](SFixed32Rules.md#gt)
- [gte](SFixed32Rules.md#gte)
- [ignoreEmpty](SFixed32Rules.md#ignoreempty)
- [in](SFixed32Rules.md#in)
- [lt](SFixed32Rules.md#lt)
- [lte](SFixed32Rules.md#lte)
- [notIn](SFixed32Rules.md#notin)
- [fields](SFixed32Rules.md#fields)
- [runtime](SFixed32Rules.md#runtime)
- [typeName](SFixed32Rules.md#typename)

### Methods

- [clone](SFixed32Rules.md#clone)
- [equals](SFixed32Rules.md#equals)
- [fromBinary](SFixed32Rules.md#frombinary)
- [fromJson](SFixed32Rules.md#fromjson)
- [fromJsonString](SFixed32Rules.md#fromjsonstring)
- [getType](SFixed32Rules.md#gettype)
- [toBinary](SFixed32Rules.md#tobinary)
- [toJSON](SFixed32Rules.md#tojson)
- [toJson](SFixed32Rules.md#tojson-1)
- [toJsonString](SFixed32Rules.md#tojsonstring)
- [equals](SFixed32Rules.md#equals-1)
- [fromBinary](SFixed32Rules.md#frombinary-1)
- [fromJson](SFixed32Rules.md#fromjson-1)
- [fromJsonString](SFixed32Rules.md#fromjsonstring-1)

## Constructors

### constructor

• **new SFixed32Rules**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SFixed32Rules`](SFixed32Rules.md)\> |

#### Overrides

Message&lt;SFixed32Rules\&gt;.constructor

#### Defined in

[src/genesis.validate_pb.ts:1372](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1372)

## Properties

### const

• `Optional` **const**: `number`

Const specifies that this field must be exactly the specified value

**`Generated`**

from field: optional sfixed32 const = 1;

#### Defined in

[src/genesis.validate_pb.ts:1312](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1312)

___

### gt

• `Optional` **gt**: `number`

Gt specifies that this field must be greater than the specified value,
exclusive. If the value of Gt is larger than a specified Lt or Lte, the
range is reversed.

**`Generated`**

from field: optional sfixed32 gt = 4;

#### Defined in

[src/genesis.validate_pb.ts:1337](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1337)

___

### gte

• `Optional` **gte**: `number`

Gte specifies that this field must be greater than or equal to the
specified value, inclusive. If the value of Gte is larger than a
specified Lt or Lte, the range is reversed.

**`Generated`**

from field: optional sfixed32 gte = 5;

#### Defined in

[src/genesis.validate_pb.ts:1346](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1346)

___

### ignoreEmpty

• `Optional` **ignoreEmpty**: `boolean`

IgnoreEmpty specifies that the validation rules of this field should be
evaluated only if the field is not empty

**`Generated`**

from field: optional bool ignore_empty = 8;

#### Defined in

[src/genesis.validate_pb.ts:1370](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1370)

___

### in

• **in**: `number`[] = `[]`

In specifies that this field must be equal to one of the specified
values

**`Generated`**

from field: repeated sfixed32 in = 6;

#### Defined in

[src/genesis.validate_pb.ts:1354](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1354)

___

### lt

• `Optional` **lt**: `number`

Lt specifies that this field must be less than the specified value,
exclusive

**`Generated`**

from field: optional sfixed32 lt = 2;

#### Defined in

[src/genesis.validate_pb.ts:1320](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1320)

___

### lte

• `Optional` **lte**: `number`

Lte specifies that this field must be less than or equal to the
specified value, inclusive

**`Generated`**

from field: optional sfixed32 lte = 3;

#### Defined in

[src/genesis.validate_pb.ts:1328](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1328)

___

### notIn

• **notIn**: `number`[] = `[]`

NotIn specifies that this field cannot be equal to one of the specified
values

**`Generated`**

from field: repeated sfixed32 not_in = 7;

#### Defined in

[src/genesis.validate_pb.ts:1362](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1362)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/genesis.validate_pb.ts:1379](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1379)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

[src/genesis.validate_pb.ts:1377](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1377)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.SFixed32Rules"``

#### Defined in

[src/genesis.validate_pb.ts:1378](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1378)

## Methods

### clone

▸ **clone**(): [`SFixed32Rules`](SFixed32Rules.md)

Create a deep copy.

#### Returns

[`SFixed32Rules`](SFixed32Rules.md)

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
| `other` | `undefined` \| ``null`` \| [`SFixed32Rules`](SFixed32Rules.md) \| `PlainMessage`<[`SFixed32Rules`](SFixed32Rules.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SFixed32Rules`](SFixed32Rules.md)

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

[`SFixed32Rules`](SFixed32Rules.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SFixed32Rules`](SFixed32Rules.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SFixed32Rules`](SFixed32Rules.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SFixed32Rules`](SFixed32Rules.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SFixed32Rules`](SFixed32Rules.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SFixed32Rules`](SFixed32Rules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SFixed32Rules`](SFixed32Rules.md)\>

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
| `a` | `undefined` \| [`SFixed32Rules`](SFixed32Rules.md) \| `PlainMessage`<[`SFixed32Rules`](SFixed32Rules.md)\> |
| `b` | `undefined` \| [`SFixed32Rules`](SFixed32Rules.md) \| `PlainMessage`<[`SFixed32Rules`](SFixed32Rules.md)\> |

#### Returns

`boolean`

#### Defined in

[src/genesis.validate_pb.ts:1402](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1402)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SFixed32Rules`](SFixed32Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SFixed32Rules`](SFixed32Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:1390](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1390)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SFixed32Rules`](SFixed32Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SFixed32Rules`](SFixed32Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:1394](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1394)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SFixed32Rules`](SFixed32Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SFixed32Rules`](SFixed32Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:1398](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1398)
