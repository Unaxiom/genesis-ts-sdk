[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / TimestampRules

# Class: TimestampRules

TimestampRules describe the constraints applied exclusively to the
`google.protobuf.Timestamp` well-known type

**`Generated`**

from message genesis_validate.TimestampRules

## Hierarchy

- `Message`<[`TimestampRules`](TimestampRules.md)\>

  ↳ **`TimestampRules`**

## Table of contents

### Constructors

- [constructor](TimestampRules.md#constructor)

### Properties

- [const](TimestampRules.md#const)
- [gt](TimestampRules.md#gt)
- [gtNow](TimestampRules.md#gtnow)
- [gte](TimestampRules.md#gte)
- [lt](TimestampRules.md#lt)
- [ltNow](TimestampRules.md#ltnow)
- [lte](TimestampRules.md#lte)
- [required](TimestampRules.md#required)
- [within](TimestampRules.md#within)
- [fields](TimestampRules.md#fields)
- [runtime](TimestampRules.md#runtime)
- [typeName](TimestampRules.md#typename)

### Methods

- [clone](TimestampRules.md#clone)
- [equals](TimestampRules.md#equals)
- [fromBinary](TimestampRules.md#frombinary)
- [fromJson](TimestampRules.md#fromjson)
- [fromJsonString](TimestampRules.md#fromjsonstring)
- [getType](TimestampRules.md#gettype)
- [toBinary](TimestampRules.md#tobinary)
- [toJSON](TimestampRules.md#tojson)
- [toJson](TimestampRules.md#tojson-1)
- [toJsonString](TimestampRules.md#tojsonstring)
- [equals](TimestampRules.md#equals-1)
- [fromBinary](TimestampRules.md#frombinary-1)
- [fromJson](TimestampRules.md#fromjson-1)
- [fromJsonString](TimestampRules.md#fromjsonstring-1)

## Constructors

### constructor

• **new TimestampRules**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`TimestampRules`](TimestampRules.md)\> |

#### Overrides

Message&lt;TimestampRules\&gt;.constructor

#### Defined in

[src/genesis.validate_pb.ts:2541](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2541)

## Properties

### const

• `Optional` **const**: `Timestamp`

Const specifies that this field must be exactly the specified value

**`Generated`**

from field: optional google.protobuf.Timestamp const = 2;

#### Defined in

[src/genesis.validate_pb.ts:2482](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2482)

___

### gt

• `Optional` **gt**: `Timestamp`

Gt specifies that this field must be greater than the specified value,
exclusive

**`Generated`**

from field: optional google.protobuf.Timestamp gt = 5;

#### Defined in

[src/genesis.validate_pb.ts:2506](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2506)

___

### gtNow

• `Optional` **gtNow**: `boolean`

GtNow specifies that this must be greater than the current time. GtNow
can only be used with the Within rule.

**`Generated`**

from field: optional bool gt_now = 8;

#### Defined in

[src/genesis.validate_pb.ts:2530](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2530)

___

### gte

• `Optional` **gte**: `Timestamp`

Gte specifies that this field must be greater than the specified value,
inclusive

**`Generated`**

from field: optional google.protobuf.Timestamp gte = 6;

#### Defined in

[src/genesis.validate_pb.ts:2514](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2514)

___

### lt

• `Optional` **lt**: `Timestamp`

Lt specifies that this field must be less than the specified value,
exclusive

**`Generated`**

from field: optional google.protobuf.Timestamp lt = 3;

#### Defined in

[src/genesis.validate_pb.ts:2490](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2490)

___

### ltNow

• `Optional` **ltNow**: `boolean`

LtNow specifies that this must be less than the current time. LtNow
can only be used with the Within rule.

**`Generated`**

from field: optional bool lt_now = 7;

#### Defined in

[src/genesis.validate_pb.ts:2522](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2522)

___

### lte

• `Optional` **lte**: `Timestamp`

Lte specifies that this field must be less than the specified value,
inclusive

**`Generated`**

from field: optional google.protobuf.Timestamp lte = 4;

#### Defined in

[src/genesis.validate_pb.ts:2498](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2498)

___

### required

• `Optional` **required**: `boolean`

Required specifies that this field must be set

**`Generated`**

from field: optional bool required = 1;

#### Defined in

[src/genesis.validate_pb.ts:2475](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2475)

___

### within

• `Optional` **within**: `Duration`

Within specifies that this field must be within this duration of the
current time. This constraint can be used alone or with the LtNow and
GtNow rules.

**`Generated`**

from field: optional google.protobuf.Duration within = 9;

#### Defined in

[src/genesis.validate_pb.ts:2539](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2539)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/genesis.validate_pb.ts:2548](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2548)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

[src/genesis.validate_pb.ts:2546](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2546)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.TimestampRules"``

#### Defined in

[src/genesis.validate_pb.ts:2547](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2547)

## Methods

### clone

▸ **clone**(): [`TimestampRules`](TimestampRules.md)

Create a deep copy.

#### Returns

[`TimestampRules`](TimestampRules.md)

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
| `other` | `undefined` \| ``null`` \| [`TimestampRules`](TimestampRules.md) \| `PlainMessage`<[`TimestampRules`](TimestampRules.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TimestampRules`](TimestampRules.md)

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

[`TimestampRules`](TimestampRules.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TimestampRules`](TimestampRules.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TimestampRules`](TimestampRules.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TimestampRules`](TimestampRules.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TimestampRules`](TimestampRules.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`TimestampRules`](TimestampRules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`TimestampRules`](TimestampRules.md)\>

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
| `a` | `undefined` \| [`TimestampRules`](TimestampRules.md) \| `PlainMessage`<[`TimestampRules`](TimestampRules.md)\> |
| `b` | `undefined` \| [`TimestampRules`](TimestampRules.md) \| `PlainMessage`<[`TimestampRules`](TimestampRules.md)\> |

#### Returns

`boolean`

#### Defined in

[src/genesis.validate_pb.ts:2572](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2572)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`TimestampRules`](TimestampRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`TimestampRules`](TimestampRules.md)

#### Defined in

[src/genesis.validate_pb.ts:2560](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2560)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`TimestampRules`](TimestampRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TimestampRules`](TimestampRules.md)

#### Defined in

[src/genesis.validate_pb.ts:2564](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2564)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`TimestampRules`](TimestampRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`TimestampRules`](TimestampRules.md)

#### Defined in

[src/genesis.validate_pb.ts:2568](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2568)
