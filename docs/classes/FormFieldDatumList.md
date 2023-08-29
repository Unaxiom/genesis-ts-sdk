[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / FormFieldDatumList

# Class: FormFieldDatumList

Describes the message consisting of the list of records

**`Generated`**

from message Genesis.FormFieldDatumList

## Hierarchy

- `Message`<[`FormFieldDatumList`](FormFieldDatumList.md)\>

  ↳ **`FormFieldDatumList`**

## Table of contents

### Constructors

- [constructor](FormFieldDatumList.md#constructor)

### Properties

- [list](FormFieldDatumList.md#list)
- [fields](FormFieldDatumList.md#fields)
- [runtime](FormFieldDatumList.md#runtime)
- [typeName](FormFieldDatumList.md#typename)

### Methods

- [clone](FormFieldDatumList.md#clone)
- [equals](FormFieldDatumList.md#equals)
- [fromBinary](FormFieldDatumList.md#frombinary)
- [fromJson](FormFieldDatumList.md#fromjson)
- [fromJsonString](FormFieldDatumList.md#fromjsonstring)
- [getType](FormFieldDatumList.md#gettype)
- [toBinary](FormFieldDatumList.md#tobinary)
- [toJSON](FormFieldDatumList.md#tojson)
- [toJson](FormFieldDatumList.md#tojson-1)
- [toJsonString](FormFieldDatumList.md#tojsonstring)
- [equals](FormFieldDatumList.md#equals-1)
- [fromBinary](FormFieldDatumList.md#frombinary-1)
- [fromJson](FormFieldDatumList.md#fromjson-1)
- [fromJsonString](FormFieldDatumList.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormFieldDatumList**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`FormFieldDatumList`](FormFieldDatumList.md)\> |

#### Overrides

Message&lt;FormFieldDatumList\&gt;.constructor

#### Defined in

[src/forms_pb.ts:325](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L325)

## Properties

### list

• **list**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Genesis.FormFieldDatum list = 1;

#### Defined in

[src/forms_pb.ts:323](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L323)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/forms_pb.ts:332](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L332)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/forms_pb.ts:330](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L330)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.FormFieldDatumList"``

#### Defined in

[src/forms_pb.ts:331](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L331)

## Methods

### clone

▸ **clone**(): [`FormFieldDatumList`](FormFieldDatumList.md)

Create a deep copy.

#### Returns

[`FormFieldDatumList`](FormFieldDatumList.md)

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
| `other` | `undefined` \| ``null`` \| [`FormFieldDatumList`](FormFieldDatumList.md) \| `PlainMessage`<[`FormFieldDatumList`](FormFieldDatumList.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormFieldDatumList`](FormFieldDatumList.md)

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

[`FormFieldDatumList`](FormFieldDatumList.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormFieldDatumList`](FormFieldDatumList.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatumList`](FormFieldDatumList.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormFieldDatumList`](FormFieldDatumList.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatumList`](FormFieldDatumList.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`FormFieldDatumList`](FormFieldDatumList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`FormFieldDatumList`](FormFieldDatumList.md)\>

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
| `a` | `undefined` \| [`FormFieldDatumList`](FormFieldDatumList.md) \| `PlainMessage`<[`FormFieldDatumList`](FormFieldDatumList.md)\> |
| `b` | `undefined` \| [`FormFieldDatumList`](FormFieldDatumList.md) \| `PlainMessage`<[`FormFieldDatumList`](FormFieldDatumList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/forms_pb.ts:348](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L348)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`FormFieldDatumList`](FormFieldDatumList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`FormFieldDatumList`](FormFieldDatumList.md)

#### Defined in

[src/forms_pb.ts:336](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L336)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`FormFieldDatumList`](FormFieldDatumList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatumList`](FormFieldDatumList.md)

#### Defined in

[src/forms_pb.ts:340](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L340)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`FormFieldDatumList`](FormFieldDatumList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatumList`](FormFieldDatumList.md)

#### Defined in

[src/forms_pb.ts:344](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L344)
