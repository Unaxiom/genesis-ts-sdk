[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServiceItemCreateRequest

# Class: SalesEnquiriesServiceItemCreateRequest

Describes the parameters required to add an item to a sales enquiry

**`Generated`**

from message Genesis.SalesEnquiriesServiceItemCreateRequest

## Hierarchy

- `Message`<[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)\>

  ↳ **`SalesEnquiriesServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServiceItemCreateRequest.md#constructor)

### Properties

- [deliveryDate](SalesEnquiriesServiceItemCreateRequest.md#deliverydate)
- [discount](SalesEnquiriesServiceItemCreateRequest.md#discount)
- [internalQuantity](SalesEnquiriesServiceItemCreateRequest.md#internalquantity)
- [name](SalesEnquiriesServiceItemCreateRequest.md#name)
- [roundOff](SalesEnquiriesServiceItemCreateRequest.md#roundoff)
- [salesEnquiryId](SalesEnquiriesServiceItemCreateRequest.md#salesenquiryid)
- [specifications](SalesEnquiriesServiceItemCreateRequest.md#specifications)
- [taxGroupId](SalesEnquiriesServiceItemCreateRequest.md#taxgroupid)
- [unitPrice](SalesEnquiriesServiceItemCreateRequest.md#unitprice)
- [uomId](SalesEnquiriesServiceItemCreateRequest.md#uomid)
- [userComment](SalesEnquiriesServiceItemCreateRequest.md#usercomment)
- [fields](SalesEnquiriesServiceItemCreateRequest.md#fields)
- [runtime](SalesEnquiriesServiceItemCreateRequest.md#runtime)
- [typeName](SalesEnquiriesServiceItemCreateRequest.md#typename)

### Methods

- [clone](SalesEnquiriesServiceItemCreateRequest.md#clone)
- [equals](SalesEnquiriesServiceItemCreateRequest.md#equals)
- [fromBinary](SalesEnquiriesServiceItemCreateRequest.md#frombinary)
- [fromJson](SalesEnquiriesServiceItemCreateRequest.md#fromjson)
- [fromJsonString](SalesEnquiriesServiceItemCreateRequest.md#fromjsonstring)
- [getType](SalesEnquiriesServiceItemCreateRequest.md#gettype)
- [toBinary](SalesEnquiriesServiceItemCreateRequest.md#tobinary)
- [toJSON](SalesEnquiriesServiceItemCreateRequest.md#tojson)
- [toJson](SalesEnquiriesServiceItemCreateRequest.md#tojson-1)
- [toJsonString](SalesEnquiriesServiceItemCreateRequest.md#tojsonstring)
- [equals](SalesEnquiriesServiceItemCreateRequest.md#equals-1)
- [fromBinary](SalesEnquiriesServiceItemCreateRequest.md#frombinary-1)
- [fromJson](SalesEnquiriesServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServiceItemCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)\> |

#### Overrides

Message&lt;SalesEnquiriesServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/sales_enquiries_pb.ts:680](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L680)

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date

**`Generated`**

from field: string delivery_date = 18;

#### Defined in

[src/sales_enquiries_pb.ts:671](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L671)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The discount percentage (in cents)

**`Generated`**

from field: int64 discount = 15;

#### Defined in

[src/sales_enquiries_pb.ts:650](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L650)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity being offered (in cents)

**`Generated`**

from field: int64 internal_quantity = 12;

#### Defined in

[src/sales_enquiries_pb.ts:629](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L629)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

[src/sales_enquiries_pb.ts:622](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L622)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The round off (in cents) (both positive and negative values are allowed)

**`Generated`**

from field: int64 round_off = 17;

#### Defined in

[src/sales_enquiries_pb.ts:664](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L664)

___

### salesEnquiryId

• **salesEnquiryId**: `bigint` = `protoInt64.zero`

Stores the sales enquiry ID

**`Generated`**

from field: int64 sales_enquiry_id = 10;

#### Defined in

[src/sales_enquiries_pb.ts:615](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L615)

___

### specifications

• **specifications**: `string` = `""`

The specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

[src/sales_enquiries_pb.ts:678](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L678)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: int64 tax_group_id = 16;

#### Defined in

[src/sales_enquiries_pb.ts:657](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L657)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price

**`Generated`**

from field: int64 unit_price = 14;

#### Defined in

[src/sales_enquiries_pb.ts:643](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L643)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the associated unit of material

**`Generated`**

from field: int64 uom_id = 13;

#### Defined in

[src/sales_enquiries_pb.ts:636](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L636)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/sales_enquiries_pb.ts:608](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L608)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries_pb.ts:687](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L687)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries_pb.ts:685](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L685)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesEnquiriesServiceItemCreateRequest"``

#### Defined in

[src/sales_enquiries_pb.ts:686](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L686)

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md) \| `PlainMessage`<[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

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

[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md) \| `PlainMessage`<[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md) \| `PlainMessage`<[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries_pb.ts:713](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L713)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

#### Defined in

[src/sales_enquiries_pb.ts:701](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L701)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

#### Defined in

[src/sales_enquiries_pb.ts:705](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L705)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceItemCreateRequest`](SalesEnquiriesServiceItemCreateRequest.md)

#### Defined in

[src/sales_enquiries_pb.ts:709](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L709)
