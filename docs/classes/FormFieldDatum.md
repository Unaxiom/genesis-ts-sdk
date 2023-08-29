[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / FormFieldDatum

# Class: FormFieldDatum

Describes the data stored in an individual form field data row of each dynamic form

**`Generated`**

from message Genesis.FormFieldDatum

## Hierarchy

- `Message`<[`FormFieldDatum`](FormFieldDatum.md)\>

  ↳ **`FormFieldDatum`**

## Table of contents

### Constructors

- [constructor](FormFieldDatum.md#constructor)

### Properties

- [active](FormFieldDatum.md#active)
- [addedBy](FormFieldDatum.md#addedby)
- [formField](FormFieldDatum.md#formfield)
- [id](FormFieldDatum.md#id)
- [needApproval](FormFieldDatum.md#needapproval)
- [refUuid](FormFieldDatum.md#refuuid)
- [selectedValues](FormFieldDatum.md#selectedvalues)
- [timestamp](FormFieldDatum.md#timestamp)
- [value](FormFieldDatum.md#value)
- [fields](FormFieldDatum.md#fields)
- [runtime](FormFieldDatum.md#runtime)
- [typeName](FormFieldDatum.md#typename)

### Methods

- [clone](FormFieldDatum.md#clone)
- [equals](FormFieldDatum.md#equals)
- [fromBinary](FormFieldDatum.md#frombinary)
- [fromJson](FormFieldDatum.md#fromjson)
- [fromJsonString](FormFieldDatum.md#fromjsonstring)
- [getType](FormFieldDatum.md#gettype)
- [toBinary](FormFieldDatum.md#tobinary)
- [toJSON](FormFieldDatum.md#tojson)
- [toJson](FormFieldDatum.md#tojson-1)
- [toJsonString](FormFieldDatum.md#tojsonstring)
- [equals](FormFieldDatum.md#equals-1)
- [fromBinary](FormFieldDatum.md#frombinary-1)
- [fromJson](FormFieldDatum.md#fromjson-1)
- [fromJsonString](FormFieldDatum.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormFieldDatum**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`FormFieldDatum`](FormFieldDatum.md)\> |

#### Overrides

Message&lt;FormFieldDatum\&gt;.constructor

#### Defined in

[src/forms_pb.ts:217](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L217)

## Properties

### active

• **active**: `boolean` = `false`

Denotes if this field is active

**`Generated`**

from field: bool active = 8;

#### Defined in

[src/forms_pb.ts:208](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L208)

___

### addedBy

• **addedBy**: `string` = `""`

The username of the person who added this record

**`Generated`**

from field: string added_by = 4;

#### Defined in

[src/forms_pb.ts:180](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L180)

___

### formField

• `Optional` **formField**: [`FormField`](FormField.md)

The underlying form field

**`Generated`**

from field: Genesis.FormField form_field = 2;

#### Defined in

[src/forms_pb.ts:166](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L166)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: int64 id = 1;

#### Defined in

[src/forms_pb.ts:159](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L159)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this field requires approval by a competent authority

**`Generated`**

from field: bool need_approval = 7;

#### Defined in

[src/forms_pb.ts:201](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L201)

___

### refUuid

• **refUuid**: `string` = `""`

The UUID that this field belongs to

**`Generated`**

from field: string ref_uuid = 3;

#### Defined in

[src/forms_pb.ts:173](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L173)

___

### selectedValues

• **selectedValues**: `string`[] = `[]`

The list of values that have been selected by the user (in case of a checkbox or a dropdown)

**`Generated`**

from field: repeated string selected_values = 6;

#### Defined in

[src/forms_pb.ts:194](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L194)

___

### timestamp

• **timestamp**: `bigint` = `protoInt64.zero`

Denotes the timestamp of creation

**`Generated`**

from field: int64 timestamp = 9;

#### Defined in

[src/forms_pb.ts:215](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L215)

___

### value

• **value**: `string` = `""`

The value entered by the user

**`Generated`**

from field: string value = 5;

#### Defined in

[src/forms_pb.ts:187](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L187)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/forms_pb.ts:224](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L224)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/forms_pb.ts:222](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L222)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.FormFieldDatum"``

#### Defined in

[src/forms_pb.ts:223](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L223)

## Methods

### clone

▸ **clone**(): [`FormFieldDatum`](FormFieldDatum.md)

Create a deep copy.

#### Returns

[`FormFieldDatum`](FormFieldDatum.md)

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
| `other` | `undefined` \| ``null`` \| [`FormFieldDatum`](FormFieldDatum.md) \| `PlainMessage`<[`FormFieldDatum`](FormFieldDatum.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormFieldDatum`](FormFieldDatum.md)

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

[`FormFieldDatum`](FormFieldDatum.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormFieldDatum`](FormFieldDatum.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatum`](FormFieldDatum.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormFieldDatum`](FormFieldDatum.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatum`](FormFieldDatum.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`FormFieldDatum`](FormFieldDatum.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`FormFieldDatum`](FormFieldDatum.md)\>

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
| `a` | `undefined` \| [`FormFieldDatum`](FormFieldDatum.md) \| `PlainMessage`<[`FormFieldDatum`](FormFieldDatum.md)\> |
| `b` | `undefined` \| [`FormFieldDatum`](FormFieldDatum.md) \| `PlainMessage`<[`FormFieldDatum`](FormFieldDatum.md)\> |

#### Returns

`boolean`

#### Defined in

[src/forms_pb.ts:248](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L248)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`FormFieldDatum`](FormFieldDatum.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`FormFieldDatum`](FormFieldDatum.md)

#### Defined in

[src/forms_pb.ts:236](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L236)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`FormFieldDatum`](FormFieldDatum.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatum`](FormFieldDatum.md)

#### Defined in

[src/forms_pb.ts:240](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L240)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`FormFieldDatum`](FormFieldDatum.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatum`](FormFieldDatum.md)

#### Defined in

[src/forms_pb.ts:244](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L244)
