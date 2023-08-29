[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsServiceItemUpdateRequest

# Class: QuotationsRequestsServiceItemUpdateRequest

Describes the parameters required to update an item in a quotation request

**`Generated`**

from message Genesis.QuotationsRequestsServiceItemUpdateRequest

## Hierarchy

- `Message`<[`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md)\>

  ↳ **`QuotationsRequestsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](QuotationsRequestsServiceItemUpdateRequest.md#constructor)

### Properties

- [baselinePrice](QuotationsRequestsServiceItemUpdateRequest.md#baselineprice)
- [deliveryDate](QuotationsRequestsServiceItemUpdateRequest.md#deliverydate)
- [hsnSacCode](QuotationsRequestsServiceItemUpdateRequest.md#hsnsaccode)
- [id](QuotationsRequestsServiceItemUpdateRequest.md#id)
- [name](QuotationsRequestsServiceItemUpdateRequest.md#name)
- [quantity](QuotationsRequestsServiceItemUpdateRequest.md#quantity)
- [specifications](QuotationsRequestsServiceItemUpdateRequest.md#specifications)
- [uomId](QuotationsRequestsServiceItemUpdateRequest.md#uomid)
- [userComment](QuotationsRequestsServiceItemUpdateRequest.md#usercomment)
- [vaultFolderId](QuotationsRequestsServiceItemUpdateRequest.md#vaultfolderid)
- [fields](QuotationsRequestsServiceItemUpdateRequest.md#fields)
- [runtime](QuotationsRequestsServiceItemUpdateRequest.md#runtime)
- [typeName](QuotationsRequestsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](QuotationsRequestsServiceItemUpdateRequest.md#clone)
- [equals](QuotationsRequestsServiceItemUpdateRequest.md#equals)
- [fromBinary](QuotationsRequestsServiceItemUpdateRequest.md#frombinary)
- [fromJson](QuotationsRequestsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](QuotationsRequestsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](QuotationsRequestsServiceItemUpdateRequest.md#gettype)
- [toBinary](QuotationsRequestsServiceItemUpdateRequest.md#tobinary)
- [toJSON](QuotationsRequestsServiceItemUpdateRequest.md#tojson)
- [toJson](QuotationsRequestsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](QuotationsRequestsServiceItemUpdateRequest.md#tojsonstring)
- [equals](QuotationsRequestsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](QuotationsRequestsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](QuotationsRequestsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](QuotationsRequestsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsRequestsServiceItemUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md)\> |

#### Overrides

Message&lt;QuotationsRequestsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/quotations_requests_pb.ts:757](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L757)

## Properties

### baselinePrice

• **baselinePrice**: `bigint` = `protoInt64.zero`

The min price (in cents)

**`Generated`**

from field: int64 baseline_price = 13;

#### Defined in

[src/quotations_requests_pb.ts:727](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L727)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date

**`Generated`**

from field: string delivery_date = 16;

#### Defined in

[src/quotations_requests_pb.ts:748](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L748)

___

### hsnSacCode

• **hsnSacCode**: `string` = `""`

Stores the HSN/SAC code of the item

**`Generated`**

from field: string hsn_sac_code = 12;

#### Defined in

[src/quotations_requests_pb.ts:720](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L720)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/quotations_requests_pb.ts:699](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L699)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

[src/quotations_requests_pb.ts:713](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L713)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity required (in cents)

**`Generated`**

from field: int64 quantity = 14;

#### Defined in

[src/quotations_requests_pb.ts:734](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L734)

___

### specifications

• **specifications**: `string` = `""`

The specifications of the item

**`Generated`**

from field: string specifications = 17;

#### Defined in

[src/quotations_requests_pb.ts:755](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L755)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the associated unit of material

**`Generated`**

from field: int64 uom_id = 15;

#### Defined in

[src/quotations_requests_pb.ts:741](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L741)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/quotations_requests_pb.ts:692](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L692)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/quotations_requests_pb.ts:706](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L706)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_requests_pb.ts:764](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L764)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_requests_pb.ts:762](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L762)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationsRequestsServiceItemUpdateRequest"``

#### Defined in

[src/quotations_requests_pb.ts:763](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L763)

## Methods

### clone

▸ **clone**(): [`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md) \| `PlainMessage`<[`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md)

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

[`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md) \| `PlainMessage`<[`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md) \| `PlainMessage`<[`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_requests_pb.ts:789](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L789)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md)

#### Defined in

[src/quotations_requests_pb.ts:777](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L777)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md)

#### Defined in

[src/quotations_requests_pb.ts:781](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L781)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceItemUpdateRequest`](QuotationsRequestsServiceItemUpdateRequest.md)

#### Defined in

[src/quotations_requests_pb.ts:785](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L785)
