[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsServiceItemCreateRequest

# Class: QuotationsRequestsServiceItemCreateRequest

Describes the parameters required to add an item to a quotation request

**`Generated`**

from message Genesis.QuotationsRequestsServiceItemCreateRequest

## Hierarchy

- `Message`<[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)\>

  ↳ **`QuotationsRequestsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](QuotationsRequestsServiceItemCreateRequest.md#constructor)

### Properties

- [baselinePrice](QuotationsRequestsServiceItemCreateRequest.md#baselineprice)
- [deliveryDate](QuotationsRequestsServiceItemCreateRequest.md#deliverydate)
- [hsnSacCode](QuotationsRequestsServiceItemCreateRequest.md#hsnsaccode)
- [name](QuotationsRequestsServiceItemCreateRequest.md#name)
- [quantity](QuotationsRequestsServiceItemCreateRequest.md#quantity)
- [quotationRequestId](QuotationsRequestsServiceItemCreateRequest.md#quotationrequestid)
- [specifications](QuotationsRequestsServiceItemCreateRequest.md#specifications)
- [uomId](QuotationsRequestsServiceItemCreateRequest.md#uomid)
- [userComment](QuotationsRequestsServiceItemCreateRequest.md#usercomment)
- [vaultFolderId](QuotationsRequestsServiceItemCreateRequest.md#vaultfolderid)
- [fields](QuotationsRequestsServiceItemCreateRequest.md#fields)
- [runtime](QuotationsRequestsServiceItemCreateRequest.md#runtime)
- [typeName](QuotationsRequestsServiceItemCreateRequest.md#typename)

### Methods

- [clone](QuotationsRequestsServiceItemCreateRequest.md#clone)
- [equals](QuotationsRequestsServiceItemCreateRequest.md#equals)
- [fromBinary](QuotationsRequestsServiceItemCreateRequest.md#frombinary)
- [fromJson](QuotationsRequestsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](QuotationsRequestsServiceItemCreateRequest.md#fromjsonstring)
- [getType](QuotationsRequestsServiceItemCreateRequest.md#gettype)
- [toBinary](QuotationsRequestsServiceItemCreateRequest.md#tobinary)
- [toJSON](QuotationsRequestsServiceItemCreateRequest.md#tojson)
- [toJson](QuotationsRequestsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](QuotationsRequestsServiceItemCreateRequest.md#tojsonstring)
- [equals](QuotationsRequestsServiceItemCreateRequest.md#equals-1)
- [fromBinary](QuotationsRequestsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](QuotationsRequestsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](QuotationsRequestsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsRequestsServiceItemCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)\> |

#### Overrides

Message&lt;QuotationsRequestsServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/quotations_requests_pb.ts:643](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L643)

## Properties

### baselinePrice

• **baselinePrice**: `bigint` = `protoInt64.zero`

The min price (in cents)

**`Generated`**

from field: int64 baseline_price = 13;

#### Defined in

[src/quotations_requests_pb.ts:613](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L613)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date

**`Generated`**

from field: string delivery_date = 16;

#### Defined in

[src/quotations_requests_pb.ts:634](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L634)

___

### hsnSacCode

• **hsnSacCode**: `string` = `""`

Stores the HSN/SAC code of the item

**`Generated`**

from field: string hsn_sac_code = 12;

#### Defined in

[src/quotations_requests_pb.ts:606](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L606)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

[src/quotations_requests_pb.ts:599](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L599)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity required (in cents)

**`Generated`**

from field: int64 quantity = 14;

#### Defined in

[src/quotations_requests_pb.ts:620](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L620)

___

### quotationRequestId

• **quotationRequestId**: `bigint` = `protoInt64.zero`

Stores the quotation request ID

**`Generated`**

from field: int64 quotation_request_id = 10;

#### Defined in

[src/quotations_requests_pb.ts:592](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L592)

___

### specifications

• **specifications**: `string` = `""`

The specifications of the item

**`Generated`**

from field: string specifications = 17;

#### Defined in

[src/quotations_requests_pb.ts:641](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L641)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the associated unit of material

**`Generated`**

from field: int64 uom_id = 15;

#### Defined in

[src/quotations_requests_pb.ts:627](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L627)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/quotations_requests_pb.ts:578](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L578)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/quotations_requests_pb.ts:585](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L585)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/quotations_requests_pb.ts:650](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L650)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/quotations_requests_pb.ts:648](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L648)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QuotationsRequestsServiceItemCreateRequest"``

#### Defined in

[src/quotations_requests_pb.ts:649](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L649)

## Methods

### clone

▸ **clone**(): [`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md) \| `PlainMessage`<[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

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

[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md) \| `PlainMessage`<[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md) \| `PlainMessage`<[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/quotations_requests_pb.ts:675](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L675)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

#### Defined in

[src/quotations_requests_pb.ts:663](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L663)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

#### Defined in

[src/quotations_requests_pb.ts:667](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L667)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServiceItemCreateRequest`](QuotationsRequestsServiceItemCreateRequest.md)

#### Defined in

[src/quotations_requests_pb.ts:671](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/quotations_requests_pb.ts#L671)
