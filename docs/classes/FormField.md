[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / FormField

# Class: FormField

Describes the parameters that are part of each form field

**`Generated`**

from message Genesis.FormField

## Hierarchy

- `Message`<[`FormField`](FormField.md)\>

  ↳ **`FormField`**

## Table of contents

### Constructors

- [constructor](FormField.md#constructor)

### Properties

- [active](FormField.md#active)
- [definedValues](FormField.md#definedvalues)
- [element](FormField.md#element)
- [highlightable](FormField.md#highlightable)
- [id](FormField.md#id)
- [name](FormField.md#name)
- [placeholder](FormField.md#placeholder)
- [printable](FormField.md#printable)
- [regex](FormField.md#regex)
- [sectionId](FormField.md#sectionid)
- [timestamp](FormField.md#timestamp)
- [type](FormField.md#type)
- [width](FormField.md#width)
- [fields](FormField.md#fields)
- [runtime](FormField.md#runtime)
- [typeName](FormField.md#typename)

### Methods

- [clone](FormField.md#clone)
- [equals](FormField.md#equals)
- [fromBinary](FormField.md#frombinary)
- [fromJson](FormField.md#fromjson)
- [fromJsonString](FormField.md#fromjsonstring)
- [getType](FormField.md#gettype)
- [toBinary](FormField.md#tobinary)
- [toJSON](FormField.md#tojson)
- [toJson](FormField.md#tojson-1)
- [toJsonString](FormField.md#tojsonstring)
- [equals](FormField.md#equals-1)
- [fromBinary](FormField.md#frombinary-1)
- [fromJson](FormField.md#fromjson-1)
- [fromJsonString](FormField.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormField**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`FormField`](FormField.md)\> |

#### Overrides

Message&lt;FormField\&gt;.constructor

#### Defined in

[src/forms_pb.ts:107](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L107)

## Properties

### active

• **active**: `boolean` = `false`

Denotes if this field is active

**`Generated`**

from field: bool active = 12;

#### Defined in

[src/forms_pb.ts:98](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L98)

___

### definedValues

• **definedValues**: `string`[] = `[]`

The predefined list of values that can be chosen from

**`Generated`**

from field: repeated string defined_values = 9;

#### Defined in

[src/forms_pb.ts:77](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L77)

___

### element

• **element**: `string` = `""`

The name of the element

**`Generated`**

from field: string element = 6;

#### Defined in

[src/forms_pb.ts:56](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L56)

___

### highlightable

• **highlightable**: `boolean` = `false`

Denotes if this field is highlighted on the UI (will be deprecated)

**`Generated`**

from field: bool highlightable = 11;

#### Defined in

[src/forms_pb.ts:91](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L91)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the form field

**`Generated`**

from field: int64 id = 1;

#### Defined in

[src/forms_pb.ts:21](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L21)

___

### name

• **name**: `string` = `""`

The name of the field

**`Generated`**

from field: string name = 4;

#### Defined in

[src/forms_pb.ts:42](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L42)

___

### placeholder

• **placeholder**: `string` = `""`

The placeholder that needs to be displayed when the field is empty

**`Generated`**

from field: string placeholder = 7;

#### Defined in

[src/forms_pb.ts:63](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L63)

___

### printable

• **printable**: `boolean` = `false`

Denotes if this field is printable (will be deprecated)

**`Generated`**

from field: bool printable = 10;

#### Defined in

[src/forms_pb.ts:84](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L84)

___

### regex

• **regex**: `string` = `""`

The regular expression that is used to validate this field before submission

**`Generated`**

from field: string regex = 8;

#### Defined in

[src/forms_pb.ts:70](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L70)

___

### sectionId

• **sectionId**: `bigint` = `protoInt64.zero`

The ID of the section that this field belongs to

**`Generated`**

from field: int64 section_id = 2;

#### Defined in

[src/forms_pb.ts:28](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L28)

___

### timestamp

• **timestamp**: `bigint` = `protoInt64.zero`

Denotes the timestamp of creation

**`Generated`**

from field: int64 timestamp = 13;

#### Defined in

[src/forms_pb.ts:105](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L105)

___

### type

• **type**: `string` = `""`

The type of the field

**`Generated`**

from field: string type = 3;

#### Defined in

[src/forms_pb.ts:35](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L35)

___

### width

• **width**: `string` = `""`

The width of the field

**`Generated`**

from field: string width = 5;

#### Defined in

[src/forms_pb.ts:49](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L49)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/forms_pb.ts:114](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L114)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/forms_pb.ts:112](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L112)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.FormField"``

#### Defined in

[src/forms_pb.ts:113](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L113)

## Methods

### clone

▸ **clone**(): [`FormField`](FormField.md)

Create a deep copy.

#### Returns

[`FormField`](FormField.md)

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
| `other` | `undefined` \| ``null`` \| [`FormField`](FormField.md) \| `PlainMessage`<[`FormField`](FormField.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormField`](FormField.md)

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

[`FormField`](FormField.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormField`](FormField.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FormField`](FormField.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormField`](FormField.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FormField`](FormField.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`FormField`](FormField.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`FormField`](FormField.md)\>

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
| `a` | `undefined` \| [`FormField`](FormField.md) \| `PlainMessage`<[`FormField`](FormField.md)\> |
| `b` | `undefined` \| [`FormField`](FormField.md) \| `PlainMessage`<[`FormField`](FormField.md)\> |

#### Returns

`boolean`

#### Defined in

[src/forms_pb.ts:142](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L142)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`FormField`](FormField.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`FormField`](FormField.md)

#### Defined in

[src/forms_pb.ts:130](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L130)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`FormField`](FormField.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FormField`](FormField.md)

#### Defined in

[src/forms_pb.ts:134](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L134)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`FormField`](FormField.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FormField`](FormField.md)

#### Defined in

[src/forms_pb.ts:138](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L138)
