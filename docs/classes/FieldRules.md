[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / FieldRules

# Class: FieldRules

FieldRules encapsulates the rules for each type of field. Depending on the
field, the correct set should be used to ensure proper validations.

**`Generated`**

from message genesis_validate.FieldRules

## Hierarchy

- `Message`<[`FieldRules`](FieldRules.md)\>

  ↳ **`FieldRules`**

## Table of contents

### Constructors

- [constructor](FieldRules.md#constructor)

### Properties

- [message](FieldRules.md#message)
- [type](FieldRules.md#type)
- [fields](FieldRules.md#fields)
- [runtime](FieldRules.md#runtime)
- [typeName](FieldRules.md#typename)

### Methods

- [clone](FieldRules.md#clone)
- [equals](FieldRules.md#equals)
- [fromBinary](FieldRules.md#frombinary)
- [fromJson](FieldRules.md#fromjson)
- [fromJsonString](FieldRules.md#fromjsonstring)
- [getType](FieldRules.md#gettype)
- [toBinary](FieldRules.md#tobinary)
- [toJSON](FieldRules.md#tojson)
- [toJson](FieldRules.md#tojson-1)
- [toJsonString](FieldRules.md#tojsonstring)
- [equals](FieldRules.md#equals-1)
- [fromBinary](FieldRules.md#frombinary-1)
- [fromJson](FieldRules.md#fromjson-1)
- [fromJsonString](FieldRules.md#fromjsonstring-1)

## Constructors

### constructor

• **new FieldRules**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`FieldRules`](FieldRules.md)\> |

#### Overrides

Message&lt;FieldRules\&gt;.constructor

#### Defined in

[src/genesis.validate_pb.ts:192](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L192)

## Properties

### message

• `Optional` **message**: [`MessageRules`](MessageRules.md)

**`Generated`**

from field: optional genesis_validate.MessageRules message = 17;

#### Defined in

[src/genesis.validate_pb.ts:53](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L53)

___

### type

• **type**: { `case`: ``"float"`` ; `value`: [`FloatRules`](FloatRules.md)  } \| { `case`: ``"double"`` ; `value`: [`DoubleRules`](DoubleRules.md)  } \| { `case`: ``"int32"`` ; `value`: [`Int32Rules`](Int32Rules.md)  } \| { `case`: ``"int64"`` ; `value`: [`Int64Rules`](Int64Rules.md)  } \| { `case`: ``"uint32"`` ; `value`: [`UInt32Rules`](UInt32Rules.md)  } \| { `case`: ``"uint64"`` ; `value`: [`UInt64Rules`](UInt64Rules.md)  } \| { `case`: ``"sint32"`` ; `value`: [`SInt32Rules`](SInt32Rules.md)  } \| { `case`: ``"sint64"`` ; `value`: [`SInt64Rules`](SInt64Rules.md)  } \| { `case`: ``"fixed32"`` ; `value`: [`Fixed32Rules`](Fixed32Rules.md)  } \| { `case`: ``"fixed64"`` ; `value`: [`Fixed64Rules`](Fixed64Rules.md)  } \| { `case`: ``"sfixed32"`` ; `value`: [`SFixed32Rules`](SFixed32Rules.md)  } \| { `case`: ``"sfixed64"`` ; `value`: [`SFixed64Rules`](SFixed64Rules.md)  } \| { `case`: ``"bool"`` ; `value`: [`BoolRules`](BoolRules.md)  } \| { `case`: ``"string"`` ; `value`: [`StringRules`](StringRules.md)  } \| { `case`: ``"bytes"`` ; `value`: [`BytesRules`](BytesRules.md)  } \| { `case`: ``"enum"`` ; `value`: [`EnumRules`](EnumRules.md)  } \| { `case`: ``"repeated"`` ; `value`: [`RepeatedRules`](RepeatedRules.md)  } \| { `case`: ``"map"`` ; `value`: [`MapRules`](MapRules.md)  } \| { `case`: ``"any"`` ; `value`: [`AnyRules`](AnyRules.md)  } \| { `case`: ``"duration"`` ; `value`: [`DurationRules`](DurationRules.md)  } \| { `case`: ``"timestamp"`` ; `value`: [`TimestampRules`](TimestampRules.md)  } \| { `case`: `undefined` ; `value?`: `undefined`  }

**`Generated`**

from oneof genesis_validate.FieldRules.type

#### Defined in

[src/genesis.validate_pb.ts:58](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L58)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/genesis.validate_pb.ts:199](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L199)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

[src/genesis.validate_pb.ts:197](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L197)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.FieldRules"``

#### Defined in

[src/genesis.validate_pb.ts:198](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L198)

## Methods

### clone

▸ **clone**(): [`FieldRules`](FieldRules.md)

Create a deep copy.

#### Returns

[`FieldRules`](FieldRules.md)

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
| `other` | `undefined` \| ``null`` \| [`FieldRules`](FieldRules.md) \| `PlainMessage`<[`FieldRules`](FieldRules.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FieldRules`](FieldRules.md)

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

[`FieldRules`](FieldRules.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FieldRules`](FieldRules.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FieldRules`](FieldRules.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FieldRules`](FieldRules.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FieldRules`](FieldRules.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`FieldRules`](FieldRules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`FieldRules`](FieldRules.md)\>

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
| `a` | `undefined` \| [`FieldRules`](FieldRules.md) \| `PlainMessage`<[`FieldRules`](FieldRules.md)\> |
| `b` | `undefined` \| [`FieldRules`](FieldRules.md) \| `PlainMessage`<[`FieldRules`](FieldRules.md)\> |

#### Returns

`boolean`

#### Defined in

[src/genesis.validate_pb.ts:236](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L236)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`FieldRules`](FieldRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`FieldRules`](FieldRules.md)

#### Defined in

[src/genesis.validate_pb.ts:224](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L224)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`FieldRules`](FieldRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FieldRules`](FieldRules.md)

#### Defined in

[src/genesis.validate_pb.ts:228](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L228)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`FieldRules`](FieldRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FieldRules`](FieldRules.md)

#### Defined in

[src/genesis.validate_pb.ts:232](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L232)
