[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiryItem

# Class: SalesEnquiryItem

Describes the parameters that constitute an item associated to a sales enquiry

**`Generated`**

from message Genesis.SalesEnquiryItem

## Hierarchy

- `Message`<[`SalesEnquiryItem`](SalesEnquiryItem.md)\>

  ↳ **`SalesEnquiryItem`**

## Table of contents

### Constructors

- [constructor](SalesEnquiryItem.md#constructor)

### Properties

- [approvalMetadata](SalesEnquiryItem.md#approvalmetadata)
- [deliveryDate](SalesEnquiryItem.md#deliverydate)
- [discount](SalesEnquiryItem.md#discount)
- [entityUuid](SalesEnquiryItem.md#entityuuid)
- [internalQuantity](SalesEnquiryItem.md#internalquantity)
- [metadata](SalesEnquiryItem.md#metadata)
- [name](SalesEnquiryItem.md#name)
- [needApproval](SalesEnquiryItem.md#needapproval)
- [roundOff](SalesEnquiryItem.md#roundoff)
- [salesEnquiryId](SalesEnquiryItem.md#salesenquiryid)
- [specifications](SalesEnquiryItem.md#specifications)
- [taxGroupId](SalesEnquiryItem.md#taxgroupid)
- [unitPrice](SalesEnquiryItem.md#unitprice)
- [uomId](SalesEnquiryItem.md#uomid)
- [userComment](SalesEnquiryItem.md#usercomment)
- [fields](SalesEnquiryItem.md#fields)
- [runtime](SalesEnquiryItem.md#runtime)
- [typeName](SalesEnquiryItem.md#typename)

### Methods

- [clone](SalesEnquiryItem.md#clone)
- [equals](SalesEnquiryItem.md#equals)
- [fromBinary](SalesEnquiryItem.md#frombinary)
- [fromJson](SalesEnquiryItem.md#fromjson)
- [fromJsonString](SalesEnquiryItem.md#fromjsonstring)
- [getType](SalesEnquiryItem.md#gettype)
- [toBinary](SalesEnquiryItem.md#tobinary)
- [toJSON](SalesEnquiryItem.md#tojson)
- [toJson](SalesEnquiryItem.md#tojson-1)
- [toJsonString](SalesEnquiryItem.md#tojsonstring)
- [equals](SalesEnquiryItem.md#equals-1)
- [fromBinary](SalesEnquiryItem.md#frombinary-1)
- [fromJson](SalesEnquiryItem.md#fromjson-1)
- [fromJsonString](SalesEnquiryItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiryItem**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`SalesEnquiryItem`](SalesEnquiryItem.md)\> |

#### Overrides

Message&lt;SalesEnquiryItem\&gt;.constructor

#### Defined in

[src/sales_enquiries_pb.ts:952](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L952)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_enquiries_pb.ts:866](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L866)

___

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date

**`Generated`**

from field: string delivery_date = 18;

#### Defined in

[src/sales_enquiries_pb.ts:943](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L943)

___

### discount

• **discount**: `bigint` = `protoInt64.zero`

The discount percentage (in cents)

**`Generated`**

from field: int64 discount = 15;

#### Defined in

[src/sales_enquiries_pb.ts:922](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L922)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/sales_enquiries_pb.ts:852](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L852)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity being offered (in cents)

**`Generated`**

from field: int64 internal_quantity = 12;

#### Defined in

[src/sales_enquiries_pb.ts:901](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L901)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this sales enquiry

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_enquiries_pb.ts:859](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L859)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

[src/sales_enquiries_pb.ts:894](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L894)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/sales_enquiries_pb.ts:873](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L873)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The round off (in cents)

**`Generated`**

from field: int64 round_off = 17;

#### Defined in

[src/sales_enquiries_pb.ts:936](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L936)

___

### salesEnquiryId

• **salesEnquiryId**: `bigint` = `protoInt64.zero`

Stores the sales enquiry ID

**`Generated`**

from field: int64 sales_enquiry_id = 10;

#### Defined in

[src/sales_enquiries_pb.ts:887](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L887)

___

### specifications

• **specifications**: `string` = `""`

The specifications

**`Generated`**

from field: string specifications = 19;

#### Defined in

[src/sales_enquiries_pb.ts:950](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L950)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: int64 tax_group_id = 16;

#### Defined in

[src/sales_enquiries_pb.ts:929](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L929)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The unit price

**`Generated`**

from field: int64 unit_price = 14;

#### Defined in

[src/sales_enquiries_pb.ts:915](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L915)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the associated unit of material

**`Generated`**

from field: int64 uom_id = 13;

#### Defined in

[src/sales_enquiries_pb.ts:908](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L908)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/sales_enquiries_pb.ts:880](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L880)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries_pb.ts:959](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L959)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries_pb.ts:957](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L957)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.SalesEnquiryItem"``

#### Defined in

[src/sales_enquiries_pb.ts:958](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L958)

## Methods

### clone

▸ **clone**(): [`SalesEnquiryItem`](SalesEnquiryItem.md)

Create a deep copy.

#### Returns

[`SalesEnquiryItem`](SalesEnquiryItem.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiryItem`](SalesEnquiryItem.md) \| `PlainMessage`<[`SalesEnquiryItem`](SalesEnquiryItem.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiryItem`](SalesEnquiryItem.md)

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

[`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiryItem`](SalesEnquiryItem.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiryItem`](SalesEnquiryItem.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`SalesEnquiryItem`](SalesEnquiryItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`SalesEnquiryItem`](SalesEnquiryItem.md)\>

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
| `a` | `undefined` \| [`SalesEnquiryItem`](SalesEnquiryItem.md) \| `PlainMessage`<[`SalesEnquiryItem`](SalesEnquiryItem.md)\> |
| `b` | `undefined` \| [`SalesEnquiryItem`](SalesEnquiryItem.md) \| `PlainMessage`<[`SalesEnquiryItem`](SalesEnquiryItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries_pb.ts:989](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L989)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Defined in

[src/sales_enquiries_pb.ts:977](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L977)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Defined in

[src/sales_enquiries_pb.ts:981](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L981)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiryItem`](SalesEnquiryItem.md)

#### Defined in

[src/sales_enquiries_pb.ts:985](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/sales_enquiries_pb.ts#L985)
