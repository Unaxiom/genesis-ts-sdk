[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / ExpensesServiceCreateRequest

# Class: ExpensesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.ExpensesServiceCreateRequest

## Hierarchy

- `Message`<[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)\>

  ↳ **`ExpensesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ExpensesServiceCreateRequest.md#constructor)

### Properties

- [currencyId](ExpensesServiceCreateRequest.md#currencyid)
- [entityUuid](ExpensesServiceCreateRequest.md#entityuuid)
- [formData](ExpensesServiceCreateRequest.md#formdata)
- [paidByUserId](ExpensesServiceCreateRequest.md#paidbyuserid)
- [projectId](ExpensesServiceCreateRequest.md#projectid)
- [refFrom](ExpensesServiceCreateRequest.md#reffrom)
- [refId](ExpensesServiceCreateRequest.md#refid)
- [referenceId](ExpensesServiceCreateRequest.md#referenceid)
- [userComment](ExpensesServiceCreateRequest.md#usercomment)
- [vaultFolderId](ExpensesServiceCreateRequest.md#vaultfolderid)
- [fields](ExpensesServiceCreateRequest.md#fields)
- [runtime](ExpensesServiceCreateRequest.md#runtime)
- [typeName](ExpensesServiceCreateRequest.md#typename)

### Methods

- [clone](ExpensesServiceCreateRequest.md#clone)
- [equals](ExpensesServiceCreateRequest.md#equals)
- [fromBinary](ExpensesServiceCreateRequest.md#frombinary)
- [fromJson](ExpensesServiceCreateRequest.md#fromjson)
- [fromJsonString](ExpensesServiceCreateRequest.md#fromjsonstring)
- [getType](ExpensesServiceCreateRequest.md#gettype)
- [toBinary](ExpensesServiceCreateRequest.md#tobinary)
- [toJSON](ExpensesServiceCreateRequest.md#tojson)
- [toJson](ExpensesServiceCreateRequest.md#tojson-1)
- [toJsonString](ExpensesServiceCreateRequest.md#tojsonstring)
- [equals](ExpensesServiceCreateRequest.md#equals-1)
- [fromBinary](ExpensesServiceCreateRequest.md#frombinary-1)
- [fromJson](ExpensesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ExpensesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ExpensesServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)\> |

#### Overrides

Message&lt;ExpensesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/expenses_pb.ts:187](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L187)

## Properties

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: int64 currency_id = 14;

#### Defined in

[src/expenses_pb.ts:171](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L171)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/expenses_pb.ts:122](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L122)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/expenses_pb.ts:185](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L185)

___

### paidByUserId

• **paidByUserId**: `bigint` = `protoInt64.zero`

The ID of the user who paid for this expense (if paid by organization, then this will be 0)

**`Generated`**

from field: int64 paid_by_user_id = 15;

#### Defined in

[src/expenses_pb.ts:178](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L178)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: int64 project_id = 8;

#### Defined in

[src/expenses_pb.ts:136](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L136)

___

### refFrom

• **refFrom**: `string` = `""`

The reference on which the expense has been created

**`Generated`**

from field: string ref_from = 12;

#### Defined in

[src/expenses_pb.ts:157](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L157)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The ID of the associated reference (can be 0 in case ref_from is "not-applicable")

**`Generated`**

from field: int64 ref_id = 13;

#### Defined in

[src/expenses_pb.ts:164](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L164)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the expense

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/expenses_pb.ts:150](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L150)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/expenses_pb.ts:129](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L129)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/expenses_pb.ts:143](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L143)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/expenses_pb.ts:194](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L194)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/expenses_pb.ts:192](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L192)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.ExpensesServiceCreateRequest"``

#### Defined in

[src/expenses_pb.ts:193](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L193)

## Methods

### clone

▸ **clone**(): [`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md) \| `PlainMessage`<[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

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

[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md) \| `PlainMessage`<[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md) \| `PlainMessage`<[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/expenses_pb.ts:219](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L219)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

#### Defined in

[src/expenses_pb.ts:207](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L207)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

#### Defined in

[src/expenses_pb.ts:211](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L211)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`ExpensesServiceCreateRequest`](ExpensesServiceCreateRequest.md)

#### Defined in

[src/expenses_pb.ts:215](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/expenses_pb.ts#L215)
