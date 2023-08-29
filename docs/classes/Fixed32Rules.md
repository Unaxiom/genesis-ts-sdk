[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / Fixed32Rules

# Class: Fixed32Rules

Fixed32Rules describes the constraints applied to `fixed32` values

**`Generated`**

from message genesis_validate.Fixed32Rules

## Hierarchy

- `Message`<[`Fixed32Rules`](Fixed32Rules.md)\>

  ↳ **`Fixed32Rules`**

## Table of contents

### Constructors

- [constructor](Fixed32Rules.md#constructor)

### Properties

- [const](Fixed32Rules.md#const)
- [gt](Fixed32Rules.md#gt)
- [gte](Fixed32Rules.md#gte)
- [ignoreEmpty](Fixed32Rules.md#ignoreempty)
- [in](Fixed32Rules.md#in)
- [lt](Fixed32Rules.md#lt)
- [lte](Fixed32Rules.md#lte)
- [notIn](Fixed32Rules.md#notin)
- [fields](Fixed32Rules.md#fields)
- [runtime](Fixed32Rules.md#runtime)
- [typeName](Fixed32Rules.md#typename)

### Methods

- [clone](Fixed32Rules.md#clone)
- [equals](Fixed32Rules.md#equals)
- [fromBinary](Fixed32Rules.md#frombinary)
- [fromJson](Fixed32Rules.md#fromjson)
- [fromJsonString](Fixed32Rules.md#fromjsonstring)
- [getType](Fixed32Rules.md#gettype)
- [toBinary](Fixed32Rules.md#tobinary)
- [toJSON](Fixed32Rules.md#tojson)
- [toJson](Fixed32Rules.md#tojson-1)
- [toJsonString](Fixed32Rules.md#tojsonstring)
- [equals](Fixed32Rules.md#equals-1)
- [fromBinary](Fixed32Rules.md#frombinary-1)
- [fromJson](Fixed32Rules.md#fromjson-1)
- [fromJsonString](Fixed32Rules.md#fromjsonstring-1)

## Constructors

### constructor

• **new Fixed32Rules**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Fixed32Rules`](Fixed32Rules.md)\> |

#### Overrides

Message&lt;Fixed32Rules\&gt;.constructor

#### Defined in

[src/genesis.validate_pb.ts:1160](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1160)

## Properties

### const

• `Optional` **const**: `number`

Const specifies that this field must be exactly the specified value

**`Generated`**

from field: optional fixed32 const = 1;

#### Defined in

[src/genesis.validate_pb.ts:1100](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1100)

___

### gt

• `Optional` **gt**: `number`

Gt specifies that this field must be greater than the specified value,
exclusive. If the value of Gt is larger than a specified Lt or Lte, the
range is reversed.

**`Generated`**

from field: optional fixed32 gt = 4;

#### Defined in

[src/genesis.validate_pb.ts:1125](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1125)

___

### gte

• `Optional` **gte**: `number`

Gte specifies that this field must be greater than or equal to the
specified value, inclusive. If the value of Gte is larger than a
specified Lt or Lte, the range is reversed.

**`Generated`**

from field: optional fixed32 gte = 5;

#### Defined in

[src/genesis.validate_pb.ts:1134](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1134)

___

### ignoreEmpty

• `Optional` **ignoreEmpty**: `boolean`

IgnoreEmpty specifies that the validation rules of this field should be
evaluated only if the field is not empty

**`Generated`**

from field: optional bool ignore_empty = 8;

#### Defined in

[src/genesis.validate_pb.ts:1158](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1158)

___

### in

• **in**: `number`[] = `[]`

In specifies that this field must be equal to one of the specified
values

**`Generated`**

from field: repeated fixed32 in = 6;

#### Defined in

[src/genesis.validate_pb.ts:1142](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1142)

___

### lt

• `Optional` **lt**: `number`

Lt specifies that this field must be less than the specified value,
exclusive

**`Generated`**

from field: optional fixed32 lt = 2;

#### Defined in

[src/genesis.validate_pb.ts:1108](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1108)

___

### lte

• `Optional` **lte**: `number`

Lte specifies that this field must be less than or equal to the
specified value, inclusive

**`Generated`**

from field: optional fixed32 lte = 3;

#### Defined in

[src/genesis.validate_pb.ts:1116](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1116)

___

### notIn

• **notIn**: `number`[] = `[]`

NotIn specifies that this field cannot be equal to one of the specified
values

**`Generated`**

from field: repeated fixed32 not_in = 7;

#### Defined in

[src/genesis.validate_pb.ts:1150](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1150)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/genesis.validate_pb.ts:1167](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1167)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

[src/genesis.validate_pb.ts:1165](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1165)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.Fixed32Rules"``

#### Defined in

[src/genesis.validate_pb.ts:1166](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1166)

## Methods

### clone

▸ **clone**(): [`Fixed32Rules`](Fixed32Rules.md)

Create a deep copy.

#### Returns

[`Fixed32Rules`](Fixed32Rules.md)

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
| `other` | `undefined` \| ``null`` \| [`Fixed32Rules`](Fixed32Rules.md) \| `PlainMessage`<[`Fixed32Rules`](Fixed32Rules.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Fixed32Rules`](Fixed32Rules.md)

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

[`Fixed32Rules`](Fixed32Rules.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Fixed32Rules`](Fixed32Rules.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Fixed32Rules`](Fixed32Rules.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Fixed32Rules`](Fixed32Rules.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Fixed32Rules`](Fixed32Rules.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Fixed32Rules`](Fixed32Rules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Fixed32Rules`](Fixed32Rules.md)\>

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
| `a` | `undefined` \| [`Fixed32Rules`](Fixed32Rules.md) \| `PlainMessage`<[`Fixed32Rules`](Fixed32Rules.md)\> |
| `b` | `undefined` \| [`Fixed32Rules`](Fixed32Rules.md) \| `PlainMessage`<[`Fixed32Rules`](Fixed32Rules.md)\> |

#### Returns

`boolean`

#### Defined in

[src/genesis.validate_pb.ts:1190](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1190)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Fixed32Rules`](Fixed32Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Fixed32Rules`](Fixed32Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:1178](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1178)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Fixed32Rules`](Fixed32Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Fixed32Rules`](Fixed32Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:1182](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1182)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Fixed32Rules`](Fixed32Rules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Fixed32Rules`](Fixed32Rules.md)

#### Defined in

[src/genesis.validate_pb.ts:1186](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1186)
