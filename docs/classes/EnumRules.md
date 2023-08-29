[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / EnumRules

# Class: EnumRules

EnumRules describe the constraints applied to enum values

**`Generated`**

from message genesis_validate.EnumRules

## Hierarchy

- `Message`<[`EnumRules`](EnumRules.md)\>

  ↳ **`EnumRules`**

## Table of contents

### Constructors

- [constructor](EnumRules.md#constructor)

### Properties

- [const](EnumRules.md#const)
- [definedOnly](EnumRules.md#definedonly)
- [in](EnumRules.md#in)
- [notIn](EnumRules.md#notin)
- [fields](EnumRules.md#fields)
- [runtime](EnumRules.md#runtime)
- [typeName](EnumRules.md#typename)

### Methods

- [clone](EnumRules.md#clone)
- [equals](EnumRules.md#equals)
- [fromBinary](EnumRules.md#frombinary)
- [fromJson](EnumRules.md#fromjson)
- [fromJsonString](EnumRules.md#fromjsonstring)
- [getType](EnumRules.md#gettype)
- [toBinary](EnumRules.md#tobinary)
- [toJSON](EnumRules.md#tojson)
- [toJson](EnumRules.md#tojson-1)
- [toJsonString](EnumRules.md#tojsonstring)
- [equals](EnumRules.md#equals-1)
- [fromBinary](EnumRules.md#frombinary-1)
- [fromJson](EnumRules.md#fromjson-1)
- [fromJsonString](EnumRules.md#fromjsonstring-1)

## Constructors

### constructor

• **new EnumRules**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`EnumRules`](EnumRules.md)\> |

#### Overrides

Message&lt;EnumRules\&gt;.constructor

#### Defined in

[src/genesis.validate_pb.ts:2050](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2050)

## Properties

### const

• `Optional` **const**: `number`

Const specifies that this field must be exactly the specified value

**`Generated`**

from field: optional int32 const = 1;

#### Defined in

[src/genesis.validate_pb.ts:2024](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2024)

___

### definedOnly

• `Optional` **definedOnly**: `boolean`

DefinedOnly specifies that this field must be only one of the defined
values for this enum, failing on any undefined value.

**`Generated`**

from field: optional bool defined_only = 2;

#### Defined in

[src/genesis.validate_pb.ts:2032](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2032)

___

### in

• **in**: `number`[] = `[]`

In specifies that this field must be equal to one of the specified
values

**`Generated`**

from field: repeated int32 in = 3;

#### Defined in

[src/genesis.validate_pb.ts:2040](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2040)

___

### notIn

• **notIn**: `number`[] = `[]`

NotIn specifies that this field cannot be equal to one of the specified
values

**`Generated`**

from field: repeated int32 not_in = 4;

#### Defined in

[src/genesis.validate_pb.ts:2048](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2048)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/genesis.validate_pb.ts:2057](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2057)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

[src/genesis.validate_pb.ts:2055](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2055)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.EnumRules"``

#### Defined in

[src/genesis.validate_pb.ts:2056](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2056)

## Methods

### clone

▸ **clone**(): [`EnumRules`](EnumRules.md)

Create a deep copy.

#### Returns

[`EnumRules`](EnumRules.md)

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
| `other` | `undefined` \| ``null`` \| [`EnumRules`](EnumRules.md) \| `PlainMessage`<[`EnumRules`](EnumRules.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EnumRules`](EnumRules.md)

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

[`EnumRules`](EnumRules.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EnumRules`](EnumRules.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EnumRules`](EnumRules.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EnumRules`](EnumRules.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EnumRules`](EnumRules.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`EnumRules`](EnumRules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`EnumRules`](EnumRules.md)\>

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
| `a` | `undefined` \| [`EnumRules`](EnumRules.md) \| `PlainMessage`<[`EnumRules`](EnumRules.md)\> |
| `b` | `undefined` \| [`EnumRules`](EnumRules.md) \| `PlainMessage`<[`EnumRules`](EnumRules.md)\> |

#### Returns

`boolean`

#### Defined in

[src/genesis.validate_pb.ts:2076](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2076)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`EnumRules`](EnumRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`EnumRules`](EnumRules.md)

#### Defined in

[src/genesis.validate_pb.ts:2064](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2064)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`EnumRules`](EnumRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EnumRules`](EnumRules.md)

#### Defined in

[src/genesis.validate_pb.ts:2068](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2068)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`EnumRules`](EnumRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`EnumRules`](EnumRules.md)

#### Defined in

[src/genesis.validate_pb.ts:2072](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L2072)
