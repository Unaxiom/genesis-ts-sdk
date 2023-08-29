[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / PurchasesEnquiriesServiceUpdateRequest

# Class: PurchasesEnquiriesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Genesis.PurchasesEnquiriesServiceUpdateRequest

## Hierarchy

- `Message`<[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)\>

  ↳ **`PurchasesEnquiriesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesEnquiriesServiceUpdateRequest.md#constructor)

### Properties

- [description](PurchasesEnquiriesServiceUpdateRequest.md#description)
- [formData](PurchasesEnquiriesServiceUpdateRequest.md#formdata)
- [id](PurchasesEnquiriesServiceUpdateRequest.md#id)
- [notifyUsers](PurchasesEnquiriesServiceUpdateRequest.md#notifyusers)
- [priority](PurchasesEnquiriesServiceUpdateRequest.md#priority)
- [referenceId](PurchasesEnquiriesServiceUpdateRequest.md#referenceid)
- [userComment](PurchasesEnquiriesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](PurchasesEnquiriesServiceUpdateRequest.md#vaultfolderid)
- [fields](PurchasesEnquiriesServiceUpdateRequest.md#fields)
- [runtime](PurchasesEnquiriesServiceUpdateRequest.md#runtime)
- [typeName](PurchasesEnquiriesServiceUpdateRequest.md#typename)

### Methods

- [clone](PurchasesEnquiriesServiceUpdateRequest.md#clone)
- [equals](PurchasesEnquiriesServiceUpdateRequest.md#equals)
- [fromBinary](PurchasesEnquiriesServiceUpdateRequest.md#frombinary)
- [fromJson](PurchasesEnquiriesServiceUpdateRequest.md#fromjson)
- [fromJsonString](PurchasesEnquiriesServiceUpdateRequest.md#fromjsonstring)
- [getType](PurchasesEnquiriesServiceUpdateRequest.md#gettype)
- [toBinary](PurchasesEnquiriesServiceUpdateRequest.md#tobinary)
- [toJSON](PurchasesEnquiriesServiceUpdateRequest.md#tojson)
- [toJson](PurchasesEnquiriesServiceUpdateRequest.md#tojson-1)
- [toJsonString](PurchasesEnquiriesServiceUpdateRequest.md#tojsonstring)
- [equals](PurchasesEnquiriesServiceUpdateRequest.md#equals-1)
- [fromBinary](PurchasesEnquiriesServiceUpdateRequest.md#frombinary-1)
- [fromJson](PurchasesEnquiriesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](PurchasesEnquiriesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesEnquiriesServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;PurchasesEnquiriesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/purchases_enquiries_pb.ts:255](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L255)

## Properties

### description

• **description**: `string` = `""`

The description of the purchase enquiry

**`Generated`**

from field: string description = 16;

#### Defined in

[src/purchases_enquiries_pb.ts:246](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L246)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/purchases_enquiries_pb.ts:253](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L253)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/purchases_enquiries_pb.ts:211](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L211)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/purchases_enquiries_pb.ts:218](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L218)

___

### priority

• **priority**: `string` = `""`

The priority of the purchase enquiry. Possible values are "low", "medium", "high".

**`Generated`**

from field: string priority = 14;

#### Defined in

[src/purchases_enquiries_pb.ts:239](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L239)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase enquiry

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/purchases_enquiries_pb.ts:232](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L232)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/purchases_enquiries_pb.ts:204](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L204)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/purchases_enquiries_pb.ts:225](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L225)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_enquiries_pb.ts:262](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L262)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_enquiries_pb.ts:260](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L260)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.PurchasesEnquiriesServiceUpdateRequest"``

#### Defined in

[src/purchases_enquiries_pb.ts:261](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L261)

## Methods

### clone

▸ **clone**(): [`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md) \| `PlainMessage`<[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

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

[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md) \| `PlainMessage`<[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md) \| `PlainMessage`<[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_enquiries_pb.ts:285](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L285)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

#### Defined in

[src/purchases_enquiries_pb.ts:273](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L273)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

#### Defined in

[src/purchases_enquiries_pb.ts:277](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L277)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`PurchasesEnquiriesServiceUpdateRequest`](PurchasesEnquiriesServiceUpdateRequest.md)

#### Defined in

[src/purchases_enquiries_pb.ts:281](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/purchases_enquiries_pb.ts#L281)
