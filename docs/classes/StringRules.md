[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / StringRules

# Class: StringRules

StringRules describe the constraints applied to `string` values

**`Generated`**

from message genesis_validate.StringRules

## Hierarchy

- `Message`<[`StringRules`](StringRules.md)\>

  ↳ **`StringRules`**

## Table of contents

### Constructors

- [constructor](StringRules.md#constructor)

### Properties

- [const](StringRules.md#const)
- [contains](StringRules.md#contains)
- [ignoreEmpty](StringRules.md#ignoreempty)
- [in](StringRules.md#in)
- [len](StringRules.md#len)
- [lenBytes](StringRules.md#lenbytes)
- [maxBytes](StringRules.md#maxbytes)
- [maxLen](StringRules.md#maxlen)
- [minBytes](StringRules.md#minbytes)
- [minLen](StringRules.md#minlen)
- [notContains](StringRules.md#notcontains)
- [notIn](StringRules.md#notin)
- [pattern](StringRules.md#pattern)
- [prefix](StringRules.md#prefix)
- [strict](StringRules.md#strict)
- [suffix](StringRules.md#suffix)
- [wellKnown](StringRules.md#wellknown)
- [fields](StringRules.md#fields)
- [runtime](StringRules.md#runtime)
- [typeName](StringRules.md#typename)

### Methods

- [clone](StringRules.md#clone)
- [equals](StringRules.md#equals)
- [fromBinary](StringRules.md#frombinary)
- [fromJson](StringRules.md#fromjson)
- [fromJsonString](StringRules.md#fromjsonstring)
- [getType](StringRules.md#gettype)
- [toBinary](StringRules.md#tobinary)
- [toJSON](StringRules.md#tojson)
- [toJson](StringRules.md#tojson-1)
- [toJsonString](StringRules.md#tojsonstring)
- [equals](StringRules.md#equals-1)
- [fromBinary](StringRules.md#frombinary-1)
- [fromJson](StringRules.md#fromjson-1)
- [fromJsonString](StringRules.md#fromjsonstring-1)

## Constructors

### constructor

• **new StringRules**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`StringRules`](StringRules.md)\> |

#### Overrides

Message&lt;StringRules\&gt;.constructor

#### Defined in

[src/genesis.validate_pb.ts:1791](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1791)

## Properties

### const

• `Optional` **const**: `string`

Const specifies that this field must be exactly the specified value

**`Generated`**

from field: optional string const = 1;

#### Defined in

[src/genesis.validate_pb.ts:1565](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1565)

___

### contains

• `Optional` **contains**: `string`

Contains specifies that this field must have the specified substring
anywhere in the string.

**`Generated`**

from field: optional string contains = 9;

#### Defined in

[src/genesis.validate_pb.ts:1648](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1648)

___

### ignoreEmpty

• `Optional` **ignoreEmpty**: `boolean`

IgnoreEmpty specifies that the validation rules of this field should be
evaluated only if the field is not empty

**`Generated`**

from field: optional bool ignore_empty = 26;

#### Defined in

[src/genesis.validate_pb.ts:1789](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1789)

___

### in

• **in**: `string`[] = `[]`

In specifies that this field must be equal to one of the specified
values

**`Generated`**

from field: repeated string in = 10;

#### Defined in

[src/genesis.validate_pb.ts:1664](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1664)

___

### len

• `Optional` **len**: `bigint`

Len specifies that this field must be the specified number of
characters (Unicode code points). Note that the number of
characters may differ from the number of bytes in the string.

**`Generated`**

from field: optional uint64 len = 19;

#### Defined in

[src/genesis.validate_pb.ts:1574](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1574)

___

### lenBytes

• `Optional` **lenBytes**: `bigint`

LenBytes specifies that this field must be the specified number of bytes

**`Generated`**

from field: optional uint64 len_bytes = 20;

#### Defined in

[src/genesis.validate_pb.ts:1599](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1599)

___

### maxBytes

• `Optional` **maxBytes**: `bigint`

MaxBytes specifies that this field must be the specified number of bytes
at a maximum

**`Generated`**

from field: optional uint64 max_bytes = 5;

#### Defined in

[src/genesis.validate_pb.ts:1615](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1615)

___

### maxLen

• `Optional` **maxLen**: `bigint`

MaxLen specifies that this field must be the specified number of
characters (Unicode code points) at a maximum. Note that the number of
characters may differ from the number of bytes in the string.

**`Generated`**

from field: optional uint64 max_len = 3;

#### Defined in

[src/genesis.validate_pb.ts:1592](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1592)

___

### minBytes

• `Optional` **minBytes**: `bigint`

MinBytes specifies that this field must be the specified number of bytes
at a minimum

**`Generated`**

from field: optional uint64 min_bytes = 4;

#### Defined in

[src/genesis.validate_pb.ts:1607](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1607)

___

### minLen

• `Optional` **minLen**: `bigint`

MinLen specifies that this field must be the specified number of
characters (Unicode code points) at a minimum. Note that the number of
characters may differ from the number of bytes in the string.

**`Generated`**

from field: optional uint64 min_len = 2;

#### Defined in

[src/genesis.validate_pb.ts:1583](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1583)

___

### notContains

• `Optional` **notContains**: `string`

NotContains specifies that this field cannot have the specified substring
anywhere in the string.

**`Generated`**

from field: optional string not_contains = 23;

#### Defined in

[src/genesis.validate_pb.ts:1656](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1656)

___

### notIn

• **notIn**: `string`[] = `[]`

NotIn specifies that this field cannot be equal to one of the specified
values

**`Generated`**

from field: repeated string not_in = 11;

#### Defined in

[src/genesis.validate_pb.ts:1672](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1672)

___

### pattern

• `Optional` **pattern**: `string`

Pattern specifes that this field must match against the specified
regular expression (RE2 syntax). The included expression should elide
any delimiters.

**`Generated`**

from field: optional string pattern = 6;

#### Defined in

[src/genesis.validate_pb.ts:1624](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1624)

___

### prefix

• `Optional` **prefix**: `string`

Prefix specifies that this field must have the specified substring at
the beginning of the string.

**`Generated`**

from field: optional string prefix = 7;

#### Defined in

[src/genesis.validate_pb.ts:1632](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1632)

___

### strict

• `Optional` **strict**: `boolean`

This applies to regexes HTTP_HEADER_NAME and HTTP_HEADER_VALUE to enable
strict header validation.
By default, this is true, and HTTP header validations are RFC-compliant.
Setting to false will enable a looser validations that only disallows
\r\n\0 characters, which can be used to bypass header matching rules.

**`Generated`**

from field: optional bool strict = 25 [default = true];

#### Defined in

[src/genesis.validate_pb.ts:1781](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1781)

___

### suffix

• `Optional` **suffix**: `string`

Suffix specifies that this field must have the specified substring at
the end of the string.

**`Generated`**

from field: optional string suffix = 8;

#### Defined in

[src/genesis.validate_pb.ts:1640](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1640)

___

### wellKnown

• **wellKnown**: { `case`: ``"email"`` ; `value`: `boolean`  } \| { `case`: ``"hostname"`` ; `value`: `boolean`  } \| { `case`: ``"ip"`` ; `value`: `boolean`  } \| { `case`: ``"ipv4"`` ; `value`: `boolean`  } \| { `case`: ``"ipv6"`` ; `value`: `boolean`  } \| { `case`: ``"uri"`` ; `value`: `boolean`  } \| { `case`: ``"uriRef"`` ; `value`: `boolean`  } \| { `case`: ``"address"`` ; `value`: `boolean`  } \| { `case`: ``"uuid"`` ; `value`: `boolean`  } \| { `case`: ``"wellKnownRegex"`` ; `value`: [`KnownRegex`](../enums/KnownRegex.md)  } \| { `case`: `undefined` ; `value?`: `undefined`  }

WellKnown rules provide advanced constraints against common string
patterns

**`Generated`**

from oneof genesis_validate.StringRules.well_known

#### Defined in

[src/genesis.validate_pb.ts:1680](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1680)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/genesis.validate_pb.ts:1798](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1798)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto2`

#### Defined in

[src/genesis.validate_pb.ts:1796](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1796)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"genesis_validate.StringRules"``

#### Defined in

[src/genesis.validate_pb.ts:1797](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1797)

## Methods

### clone

▸ **clone**(): [`StringRules`](StringRules.md)

Create a deep copy.

#### Returns

[`StringRules`](StringRules.md)

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
| `other` | `undefined` \| ``null`` \| [`StringRules`](StringRules.md) \| `PlainMessage`<[`StringRules`](StringRules.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StringRules`](StringRules.md)

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

[`StringRules`](StringRules.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StringRules`](StringRules.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StringRules`](StringRules.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StringRules`](StringRules.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StringRules`](StringRules.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`StringRules`](StringRules.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`StringRules`](StringRules.md)\>

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
| `a` | `undefined` \| [`StringRules`](StringRules.md) \| `PlainMessage`<[`StringRules`](StringRules.md)\> |
| `b` | `undefined` \| [`StringRules`](StringRules.md) \| `PlainMessage`<[`StringRules`](StringRules.md)\> |

#### Returns

`boolean`

#### Defined in

[src/genesis.validate_pb.ts:1839](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1839)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`StringRules`](StringRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`StringRules`](StringRules.md)

#### Defined in

[src/genesis.validate_pb.ts:1827](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1827)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`StringRules`](StringRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StringRules`](StringRules.md)

#### Defined in

[src/genesis.validate_pb.ts:1831](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1831)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`StringRules`](StringRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`StringRules`](StringRules.md)

#### Defined in

[src/genesis.validate_pb.ts:1835](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/genesis.validate_pb.ts#L1835)
