[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / QCGroupsServiceItemCreateRequest

# Class: QCGroupsServiceItemCreateRequest

Describes the parameters required to add a param to a qc group

**`Generated`**

from message Genesis.QCGroupsServiceItemCreateRequest

## Hierarchy

- `Message`<[`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md)\>

  ↳ **`QCGroupsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](QCGroupsServiceItemCreateRequest.md#constructor)

### Properties

- [acceptableValueType](QCGroupsServiceItemCreateRequest.md#acceptablevaluetype)
- [description](QCGroupsServiceItemCreateRequest.md#description)
- [numberAcceptableValue](QCGroupsServiceItemCreateRequest.md#numberacceptablevalue)
- [numberRelativeLowerBound](QCGroupsServiceItemCreateRequest.md#numberrelativelowerbound)
- [numberRelativeUpperBound](QCGroupsServiceItemCreateRequest.md#numberrelativeupperbound)
- [qcGroupId](QCGroupsServiceItemCreateRequest.md#qcgroupid)
- [qcParamId](QCGroupsServiceItemCreateRequest.md#qcparamid)
- [textAcceptableValues](QCGroupsServiceItemCreateRequest.md#textacceptablevalues)
- [textAcceptableValuesWithDeviation](QCGroupsServiceItemCreateRequest.md#textacceptablevalueswithdeviation)
- [textUnacceptableValues](QCGroupsServiceItemCreateRequest.md#textunacceptablevalues)
- [uomId](QCGroupsServiceItemCreateRequest.md#uomid)
- [userComment](QCGroupsServiceItemCreateRequest.md#usercomment)
- [fields](QCGroupsServiceItemCreateRequest.md#fields)
- [runtime](QCGroupsServiceItemCreateRequest.md#runtime)
- [typeName](QCGroupsServiceItemCreateRequest.md#typename)

### Methods

- [clone](QCGroupsServiceItemCreateRequest.md#clone)
- [equals](QCGroupsServiceItemCreateRequest.md#equals)
- [fromBinary](QCGroupsServiceItemCreateRequest.md#frombinary)
- [fromJson](QCGroupsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](QCGroupsServiceItemCreateRequest.md#fromjsonstring)
- [getType](QCGroupsServiceItemCreateRequest.md#gettype)
- [toBinary](QCGroupsServiceItemCreateRequest.md#tobinary)
- [toJSON](QCGroupsServiceItemCreateRequest.md#tojson)
- [toJson](QCGroupsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](QCGroupsServiceItemCreateRequest.md#tojsonstring)
- [equals](QCGroupsServiceItemCreateRequest.md#equals-1)
- [fromBinary](QCGroupsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](QCGroupsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](QCGroupsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroupsServiceItemCreateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md)\> |

#### Overrides

Message&lt;QCGroupsServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/qc_groups_pb.ts:538](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L538)

## Properties

### acceptableValueType

• **acceptableValueType**: [`QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE`](../enums/QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE.md) = `QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE.QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE_NUMBER_ABSOLUTE_UNSPECIFIED`

The acceptable value type of the item

**`Generated`**

from field: Genesis.QC_GROUP_ITEM_ACCEPTABLE_VALUE_TYPE acceptable_value_type = 20;

#### Defined in

[src/qc_groups_pb.ts:487](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L487)

___

### description

• **description**: `string` = `""`

An optional description

**`Generated`**

from field: string description = 40;

#### Defined in

[src/qc_groups_pb.ts:536](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L536)

___

### numberAcceptableValue

• **numberAcceptableValue**: `bigint` = `protoInt64.zero`

The acceptable value (in cents) in case the acceptable value type is number-absolute or number-percentage

**`Generated`**

from field: int64 number_acceptable_value = 21;

#### Defined in

[src/qc_groups_pb.ts:494](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L494)

___

### numberRelativeLowerBound

• **numberRelativeLowerBound**: `bigint` = `protoInt64.zero`

The relative lower bound (in cents) of the number_acceptable_value that serves as a reference point for the test

**`Generated`**

from field: int64 number_relative_lower_bound = 22;

#### Defined in

[src/qc_groups_pb.ts:501](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L501)

___

### numberRelativeUpperBound

• **numberRelativeUpperBound**: `bigint` = `protoInt64.zero`

The relative upper bound (in cents) of the number_acceptable_value that serves as a reference point for the test

**`Generated`**

from field: int64 number_relative_upper_bound = 23;

#### Defined in

[src/qc_groups_pb.ts:508](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L508)

___

### qcGroupId

• **qcGroupId**: `bigint` = `protoInt64.zero`

Stores the ID of the qc group

**`Generated`**

from field: int64 qc_group_id = 10;

#### Defined in

[src/qc_groups_pb.ts:466](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L466)

___

### qcParamId

• **qcParamId**: `bigint` = `protoInt64.zero`

The ID of the qc param that is a part of the qc group

**`Generated`**

from field: int64 qc_param_id = 11;

#### Defined in

[src/qc_groups_pb.ts:473](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L473)

___

### textAcceptableValues

• **textAcceptableValues**: `string`[] = `[]`

The list of values that are acceptable in case the acceptable value type is text-input or text-dropdown

**`Generated`**

from field: repeated string text_acceptable_values = 30;

#### Defined in

[src/qc_groups_pb.ts:515](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L515)

___

### textAcceptableValuesWithDeviation

• **textAcceptableValuesWithDeviation**: `string`[] = `[]`

The list of values that are acceptable (but with deviation) in case the acceptable value type is text-input or text-dropdown

**`Generated`**

from field: repeated string text_acceptable_values_with_deviation = 31;

#### Defined in

[src/qc_groups_pb.ts:522](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L522)

___

### textUnacceptableValues

• **textUnacceptableValues**: `string`[] = `[]`

The list of unacceptable values in case the acceptable value type is text-input or text-dropdown

**`Generated`**

from field: repeated string text_unacceptable_values = 32;

#### Defined in

[src/qc_groups_pb.ts:529](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L529)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the associated unit of material

**`Generated`**

from field: int64 uom_id = 12;

#### Defined in

[src/qc_groups_pb.ts:480](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L480)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/qc_groups_pb.ts:459](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L459)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_groups_pb.ts:545](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L545)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_groups_pb.ts:543](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L543)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.QCGroupsServiceItemCreateRequest"``

#### Defined in

[src/qc_groups_pb.ts:544](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L544)

## Methods

### clone

▸ **clone**(): [`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md) \| `PlainMessage`<[`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md)

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

[`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md) \| `PlainMessage`<[`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md) \| `PlainMessage`<[`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_groups_pb.ts:572](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L572)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md)

#### Defined in

[src/qc_groups_pb.ts:560](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L560)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md)

#### Defined in

[src/qc_groups_pb.ts:564](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L564)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServiceItemCreateRequest`](QCGroupsServiceItemCreateRequest.md)

#### Defined in

[src/qc_groups_pb.ts:568](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/qc_groups_pb.ts#L568)
