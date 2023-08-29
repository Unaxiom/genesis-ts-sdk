[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesEnquiriesServiceCreateRequest

# Class: PurchasesEnquiriesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Genesis.PurchasesEnquiriesServiceCreateRequest

## Hierarchy

- `Message`<[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)\>

  ↳ **`PurchasesEnquiriesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesEnquiriesServiceCreateRequest.md#constructor)

### Properties

- [description](PurchasesEnquiriesServiceCreateRequest.md#description)
- [entityUuid](PurchasesEnquiriesServiceCreateRequest.md#entityuuid)
- [formData](PurchasesEnquiriesServiceCreateRequest.md#formdata)
- [priority](PurchasesEnquiriesServiceCreateRequest.md#priority)
- [referenceId](PurchasesEnquiriesServiceCreateRequest.md#referenceid)
- [userComment](PurchasesEnquiriesServiceCreateRequest.md#usercomment)
- [vaultFolderId](PurchasesEnquiriesServiceCreateRequest.md#vaultfolderid)
- [fields](PurchasesEnquiriesServiceCreateRequest.md#fields)
- [runtime](PurchasesEnquiriesServiceCreateRequest.md#runtime)
- [typeName](PurchasesEnquiriesServiceCreateRequest.md#typename)

### Methods

- [clone](PurchasesEnquiriesServiceCreateRequest.md#clone)
- [equals](PurchasesEnquiriesServiceCreateRequest.md#equals)
- [fromBinary](PurchasesEnquiriesServiceCreateRequest.md#frombinary)
- [fromJson](PurchasesEnquiriesServiceCreateRequest.md#fromjson)
- [fromJsonString](PurchasesEnquiriesServiceCreateRequest.md#fromjsonstring)
- [getType](PurchasesEnquiriesServiceCreateRequest.md#gettype)
- [toBinary](PurchasesEnquiriesServiceCreateRequest.md#tobinary)
- [toJSON](PurchasesEnquiriesServiceCreateRequest.md#tojson)
- [toJson](PurchasesEnquiriesServiceCreateRequest.md#tojson-1)
- [toJsonString](PurchasesEnquiriesServiceCreateRequest.md#tojsonstring)
- [equals](PurchasesEnquiriesServiceCreateRequest.md#equals-1)
- [fromBinary](PurchasesEnquiriesServiceCreateRequest.md#frombinary-1)
- [fromJson](PurchasesEnquiriesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](PurchasesEnquiriesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesEnquiriesServiceCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)\> |

#### Overrides

Message&lt;PurchasesEnquiriesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/purchases_enquiries_pb.ts:158](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L158)

## Properties

### description

• **description**: `string` = `""`

The description of the purchase enquiry

**`Generated`**

from field: string description = 16;

#### Defined in

[src/purchases_enquiries_pb.ts:149](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L149)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/purchases_enquiries_pb.ts:114](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L114)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/purchases_enquiries_pb.ts:156](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L156)

___

### priority

• **priority**: `string` = `""`

The priority of the purchase enquiry. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 14;

#### Defined in

[src/purchases_enquiries_pb.ts:142](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L142)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase enquiry

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/purchases_enquiries_pb.ts:135](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L135)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/purchases_enquiries_pb.ts:121](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L121)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/purchases_enquiries_pb.ts:128](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L128)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_enquiries_pb.ts:165](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L165)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_enquiries_pb.ts:163](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L163)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesEnquiriesServiceCreateRequest"``

#### Defined in

[src/purchases_enquiries_pb.ts:164](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L164)

## Methods

### clone

▸ **clone**(): [`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md) \| `PlainMessage`<[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

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

[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md) \| `PlainMessage`<[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md) \| `PlainMessage`<[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_enquiries_pb.ts:187](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L187)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

#### Defined in

[src/purchases_enquiries_pb.ts:175](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L175)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

#### Defined in

[src/purchases_enquiries_pb.ts:179](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L179)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceCreateRequest`](PurchasesEnquiriesServiceCreateRequest.md)

#### Defined in

[src/purchases_enquiries_pb.ts:183](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L183)
