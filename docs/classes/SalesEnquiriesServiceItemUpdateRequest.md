[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServiceItemUpdateRequest

# Class: SalesEnquiriesServiceItemUpdateRequest

Describes the parameters required to update an item in a sales enquiry

**`Generated`**

from message Genesis.SalesEnquiriesServiceItemUpdateRequest

## Hierarchy

- `Message`<[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)\>

  ↳ **`SalesEnquiriesServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServiceItemUpdateRequest.md#constructor)

### Properties

- [deliveryDate](SalesEnquiriesServiceItemUpdateRequest.md#deliverydate)
- [discount](SalesEnquiriesServiceItemUpdateRequest.md#discount)
- [id](SalesEnquiriesServiceItemUpdateRequest.md#id)
- [internalQuantity](SalesEnquiriesServiceItemUpdateRequest.md#internalquantity)
- [name](SalesEnquiriesServiceItemUpdateRequest.md#name)
- [roundOff](SalesEnquiriesServiceItemUpdateRequest.md#roundoff)
- [specifications](SalesEnquiriesServiceItemUpdateRequest.md#specifications)
- [taxGroupId](SalesEnquiriesServiceItemUpdateRequest.md#taxgroupid)
- [unitPrice](SalesEnquiriesServiceItemUpdateRequest.md#unitprice)
- [uomId](SalesEnquiriesServiceItemUpdateRequest.md#uomid)
- [userComment](SalesEnquiriesServiceItemUpdateRequest.md#usercomment)
- [fields](SalesEnquiriesServiceItemUpdateRequest.md#fields)
- [runtime](SalesEnquiriesServiceItemUpdateRequest.md#runtime)
- [typeName](SalesEnquiriesServiceItemUpdateRequest.md#typename)

### Methods

- [clone](SalesEnquiriesServiceItemUpdateRequest.md#clone)
- [equals](SalesEnquiriesServiceItemUpdateRequest.md#equals)
- [fromBinary](SalesEnquiriesServiceItemUpdateRequest.md#frombinary)
- [fromJson](SalesEnquiriesServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](SalesEnquiriesServiceItemUpdateRequest.md#fromjsonstring)
- [getType](SalesEnquiriesServiceItemUpdateRequest.md#gettype)
- [toBinary](SalesEnquiriesServiceItemUpdateRequest.md#tobinary)
- [toJSON](SalesEnquiriesServiceItemUpdateRequest.md#tojson)
- [toJson](SalesEnquiriesServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](SalesEnquiriesServiceItemUpdateRequest.md#tojsonstring)
- [equals](SalesEnquiriesServiceItemUpdateRequest.md#equals-1)
- [fromBinary](SalesEnquiriesServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](SalesEnquiriesServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServiceItemUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)\> |

#### Overrides

Message&lt;SalesEnquiriesServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_enquiries_pb.ts:802](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L802)

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date

**`Generated`**

from field: string delivery_date = 18;

#### Defined in

[src/sales_enquiries_pb.ts:793](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L793)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The discount percentage (in cents)

**`Generated`**

from field: int64 discount = 15;

#### Defined in

[src/sales_enquiries_pb.ts:772](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L772)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/sales_enquiries_pb.ts:737](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L737)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity being offered (in cents)

**`Generated`**

from field: int64 internal_quantity = 12;

#### Defined in

[src/sales_enquiries_pb.ts:751](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L751)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

[src/sales_enquiries_pb.ts:744](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L744)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The round off (in cents) (both positive and negative values are allowed)

**`Generated`**

from field: int64 round_off = 17;

#### Defined in

[src/sales_enquiries_pb.ts:786](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L786)

___

### specifications

• **specifications**: `string` = `""`

The specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

[src/sales_enquiries_pb.ts:800](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L800)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: int64 tax_group_id = 16;

#### Defined in

[src/sales_enquiries_pb.ts:779](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L779)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price

**`Generated`**

from field: int64 unit_price = 14;

#### Defined in

[src/sales_enquiries_pb.ts:765](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L765)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the associated unit of material

**`Generated`**

from field: int64 uom_id = 13;

#### Defined in

[src/sales_enquiries_pb.ts:758](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L758)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/sales_enquiries_pb.ts:730](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L730)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries_pb.ts:809](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L809)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries_pb.ts:807](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L807)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesEnquiriesServiceItemUpdateRequest"``

#### Defined in

[src/sales_enquiries_pb.ts:808](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L808)

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md) \| `PlainMessage`<[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

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

[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md) \| `PlainMessage`<[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md) \| `PlainMessage`<[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries_pb.ts:835](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L835)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Defined in

[src/sales_enquiries_pb.ts:823](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L823)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Defined in

[src/sales_enquiries_pb.ts:827](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L827)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceItemUpdateRequest`](SalesEnquiriesServiceItemUpdateRequest.md)

#### Defined in

[src/sales_enquiries_pb.ts:831](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L831)
