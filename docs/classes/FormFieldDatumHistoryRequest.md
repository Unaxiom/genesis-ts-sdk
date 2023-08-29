[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / FormFieldDatumHistoryRequest

# Class: FormFieldDatumHistoryRequest

Describes the data required to fetch history of the given form field and the specified resource

**`Generated`**

from message Genesis.FormFieldDatumHistoryRequest

## Hierarchy

- `Message`<[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)\>

  ↳ **`FormFieldDatumHistoryRequest`**

## Table of contents

### Constructors

- [constructor](FormFieldDatumHistoryRequest.md#constructor)

### Properties

- [formFieldId](FormFieldDatumHistoryRequest.md#formfieldid)
- [refUuid](FormFieldDatumHistoryRequest.md#refuuid)
- [fields](FormFieldDatumHistoryRequest.md#fields)
- [runtime](FormFieldDatumHistoryRequest.md#runtime)
- [typeName](FormFieldDatumHistoryRequest.md#typename)

### Methods

- [clone](FormFieldDatumHistoryRequest.md#clone)
- [equals](FormFieldDatumHistoryRequest.md#equals)
- [fromBinary](FormFieldDatumHistoryRequest.md#frombinary)
- [fromJson](FormFieldDatumHistoryRequest.md#fromjson)
- [fromJsonString](FormFieldDatumHistoryRequest.md#fromjsonstring)
- [getType](FormFieldDatumHistoryRequest.md#gettype)
- [toBinary](FormFieldDatumHistoryRequest.md#tobinary)
- [toJSON](FormFieldDatumHistoryRequest.md#tojson)
- [toJson](FormFieldDatumHistoryRequest.md#tojson-1)
- [toJsonString](FormFieldDatumHistoryRequest.md#tojsonstring)
- [equals](FormFieldDatumHistoryRequest.md#equals-1)
- [fromBinary](FormFieldDatumHistoryRequest.md#frombinary-1)
- [fromJson](FormFieldDatumHistoryRequest.md#fromjson-1)
- [fromJsonString](FormFieldDatumHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormFieldDatumHistoryRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)\> |

#### Overrides

Message&lt;FormFieldDatumHistoryRequest\&gt;.constructor

#### Defined in

[src/forms_pb.ts:374](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L374)

## Properties

### formFieldId

• **formFieldId**: `bigint` = `protoInt64.zero`

The ID of the corresponding form field

**`Generated`**

from field: int64 form_field_id = 1;

#### Defined in

[src/forms_pb.ts:365](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L365)

___

### refUuid

• **refUuid**: `string` = `""`

The UUID of the corresponding resource

**`Generated`**

from field: string ref_uuid = 2;

#### Defined in

[src/forms_pb.ts:372](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L372)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/forms_pb.ts:381](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L381)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/forms_pb.ts:379](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L379)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.FormFieldDatumHistoryRequest"``

#### Defined in

[src/forms_pb.ts:380](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L380)

## Methods

### clone

▸ **clone**(): [`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

Create a deep copy.

#### Returns

[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md) \| `PlainMessage`<[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

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

[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)\>

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
| `a` | `undefined` \| [`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md) \| `PlainMessage`<[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)\> |
| `b` | `undefined` \| [`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md) \| `PlainMessage`<[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/forms_pb.ts:398](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L398)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

#### Defined in

[src/forms_pb.ts:386](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L386)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

#### Defined in

[src/forms_pb.ts:390](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L390)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

#### Defined in

[src/forms_pb.ts:394](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/forms_pb.ts#L394)
