[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QCGroupsServiceItemUpdateRequest

# Class: QCGroupsServiceItemUpdateRequest

Describes the parameters required to update a param in a qc group

**`Generated`**

from message Genesis.QCGroupsServiceItemUpdateRequest

## Hierarchy

- `Message`<[`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md)\>

  ↳ **`QCGroupsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](QCGroupsServiceItemUpdateRequest.md#constructor)

### Properties

- [acceptableValueType](QCGroupsServiceItemUpdateRequest.md#acceptablevaluetype)
- [description](QCGroupsServiceItemUpdateRequest.md#description)
- [id](QCGroupsServiceItemUpdateRequest.md#id)
- [numberAcceptableValue](QCGroupsServiceItemUpdateRequest.md#numberacceptablevalue)
- [numberRelativeLowerBound](QCGroupsServiceItemUpdateRequest.md#numberrelativelowerbound)
- [numberRelativeUpperBound](QCGroupsServiceItemUpdateRequest.md#numberrelativeupperbound)
- [textAcceptableValues](QCGroupsServiceItemUpdateRequest.md#textacceptablevalues)
- [textAcceptableValuesWithDeviation](QCGroupsServiceItemUpdateRequest.md#textacceptablevalueswithdeviation)
- [textUnacceptableValues](QCGroupsServiceItemUpdateRequest.md#textunacceptablevalues)
- [userComment](QCGroupsServiceItemUpdateRequest.md#usercomment)
- [fields](QCGroupsServiceItemUpdateRequest.md#fields)
- [runtime](QCGroupsServiceItemUpdateRequest.md#runtime)
- [typeName](QCGroupsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](QCGroupsServiceItemUpdateRequest.md#clone)
- [equals](QCGroupsServiceItemUpdateRequest.md#equals)
- [fromBinary](QCGroupsServiceItemUpdateRequest.md#frombinary)
- [fromJson](QCGroupsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](QCGroupsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](QCGroupsServiceItemUpdateRequest.md#gettype)
- [toBinary](QCGroupsServiceItemUpdateRequest.md#tobinary)
- [toJSON](QCGroupsServiceItemUpdateRequest.md#tojson)
- [toJson](QCGroupsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](QCGroupsServiceItemUpdateRequest.md#tojsonstring)
- [equals](QCGroupsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](QCGroupsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](QCGroupsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](QCGroupsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroupsServiceItemUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md)\> |

#### Overrides

Message&lt;QCGroupsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/qc_groups_pb.ts:654](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L654)

## Properties

### acceptableValueType

• **acceptableValueType**: [`QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE`](../enums/QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE.md) = `QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE.QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE_NUMBER_ABSOLUTE_UNSPECIFIED`

The acceptable value type of the item

**`Generated`**

from field: Genesis.QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE acceptable_value_type = 20;

#### Defined in

[src/qc_groups_pb.ts:603](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L603)

___

### description

• **description**: `string` = `""`

An optional description

**`Generated`**

from field: string description = 40;

#### Defined in

[src/qc_groups_pb.ts:652](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L652)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/qc_groups_pb.ts:596](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L596)

___

### numberAcceptableValue

• **numberAcceptableValue**: `bigint` = `protoInt64.zero`

The acceptable value (in cents) in case the acceptable value type is number-absolute or number-percentage

**`Generated`**

from field: int64 number_acceptable_value = 21;

#### Defined in

[src/qc_groups_pb.ts:610](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L610)

___

### numberRelativeLowerBound

• **numberRelativeLowerBound**: `bigint` = `protoInt64.zero`

The relative lower bound (in cents) of the number_acceptable_value that serves as a reference point for the test

**`Generated`**

from field: int64 number_relative_lower_bound = 22;

#### Defined in

[src/qc_groups_pb.ts:617](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L617)

___

### numberRelativeUpperBound

• **numberRelativeUpperBound**: `bigint` = `protoInt64.zero`

The relative upper bound (in cents) of the number_acceptable_value that serves as a reference point for the test

**`Generated`**

from field: int64 number_relative_upper_bound = 23;

#### Defined in

[src/qc_groups_pb.ts:624](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L624)

___

### textAcceptableValues

• **textAcceptableValues**: `string`[] = `[]`

The list of values that are acceptable in case the acceptable value type is text-input or text-dropdown

**`Generated`**

from field: repeated string text_acceptable_values = 30;

#### Defined in

[src/qc_groups_pb.ts:631](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L631)

___

### textAcceptableValuesWithDeviation

• **textAcceptableValuesWithDeviation**: `string`[] = `[]`

The list of values that are acceptable (but with deviation) in case the acceptable value type is text-input or text-dropdown

**`Generated`**

from field: repeated string text_acceptable_values_with_deviation = 31;

#### Defined in

[src/qc_groups_pb.ts:638](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L638)

___

### textUnacceptableValues

• **textUnacceptableValues**: `string`[] = `[]`

The list of unacceptable values in case the acceptable value type is text-input or text-dropdown

**`Generated`**

from field: repeated string text_unacceptable_values = 32;

#### Defined in

[src/qc_groups_pb.ts:645](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L645)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/qc_groups_pb.ts:589](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L589)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_groups_pb.ts:661](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L661)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_groups_pb.ts:659](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L659)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QCGroupsServiceItemUpdateRequest"``

#### Defined in

[src/qc_groups_pb.ts:660](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L660)

## Methods

### clone

▸ **clone**(): [`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md) \| `PlainMessage`<[`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md)

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

[`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md) \| `PlainMessage`<[`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md) \| `PlainMessage`<[`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_groups_pb.ts:686](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L686)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md)

#### Defined in

[src/qc_groups_pb.ts:674](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L674)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md)

#### Defined in

[src/qc_groups_pb.ts:678](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L678)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceItemUpdateRequest`](QCGroupsServiceItemUpdateRequest.md)

#### Defined in

[src/qc_groups_pb.ts:682](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L682)
