[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoalsServiceItemUpdateRequest

# Class: GoalsServiceItemUpdateRequest

Describes the parameters required to update an item in a goal

**`Generated`**

from message Genesis.GoalsServiceItemUpdateRequest

## Hierarchy

- `Message`<[`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md)\>

  ↳ **`GoalsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](GoalsServiceItemUpdateRequest.md#constructor)

### Properties

- [id](GoalsServiceItemUpdateRequest.md#id)
- [inputValueType](GoalsServiceItemUpdateRequest.md#inputvaluetype)
- [labelId](GoalsServiceItemUpdateRequest.md#labelid)
- [name](GoalsServiceItemUpdateRequest.md#name)
- [numberAcceptableValue](GoalsServiceItemUpdateRequest.md#numberacceptablevalue)
- [numberMaxValue](GoalsServiceItemUpdateRequest.md#numbermaxvalue)
- [numberMinValue](GoalsServiceItemUpdateRequest.md#numberminvalue)
- [specifications](GoalsServiceItemUpdateRequest.md#specifications)
- [textAcceptableValue](GoalsServiceItemUpdateRequest.md#textacceptablevalue)
- [textValues](GoalsServiceItemUpdateRequest.md#textvalues)
- [userComment](GoalsServiceItemUpdateRequest.md#usercomment)
- [fields](GoalsServiceItemUpdateRequest.md#fields)
- [runtime](GoalsServiceItemUpdateRequest.md#runtime)
- [typeName](GoalsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](GoalsServiceItemUpdateRequest.md#clone)
- [equals](GoalsServiceItemUpdateRequest.md#equals)
- [fromBinary](GoalsServiceItemUpdateRequest.md#frombinary)
- [fromJson](GoalsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](GoalsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](GoalsServiceItemUpdateRequest.md#gettype)
- [toBinary](GoalsServiceItemUpdateRequest.md#tobinary)
- [toJSON](GoalsServiceItemUpdateRequest.md#tojson)
- [toJson](GoalsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](GoalsServiceItemUpdateRequest.md#tojsonstring)
- [equals](GoalsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](GoalsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](GoalsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](GoalsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoalsServiceItemUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md)\> |

#### Overrides

Message&lt;GoalsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/goals_pb.ts:709](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L709)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/goals_pb.ts:644](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L644)

___

### inputValueType

• **inputValueType**: [`GOAL_ITEM_INPUT_VALUE_TYPE`](../enums/GOAL_ITEM_INPUT_VALUE_TYPE.md) = `GOAL_ITEM_INPUT_VALUE_TYPE.GOAL_ITEM_INPUT_VALUE_TYPE_NUMBER_ABSOLUTE_UNSPECIFIED`

The input value type of the item

**`Generated`**

from field: Genesis.GOAL_ITEM_INPUT_VALUE_TYPE input_value_type = 20;

#### Defined in

[src/goals_pb.ts:672](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L672)

___

### labelId

• **labelId**: `bigint` = `protoInt64.zero`

Stores an optional label

**`Generated`**

from field: int64 label_id = 12;

#### Defined in

[src/goals_pb.ts:658](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L658)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

[src/goals_pb.ts:651](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L651)

___

### numberAcceptableValue

• **numberAcceptableValue**: `bigint` = `protoInt64.zero`

The acceptable value of the item in case input_value_type is of number type

**`Generated`**

from field: int64 number_acceptable_value = 23;

#### Defined in

[src/goals_pb.ts:693](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L693)

___

### numberMaxValue

• **numberMaxValue**: `bigint` = `protoInt64.zero`

The maximum value (in cents) in case the input value type is number-absolute or number-percentage

**`Generated`**

from field: int64 number_max_value = 22;

#### Defined in

[src/goals_pb.ts:686](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L686)

___

### numberMinValue

• **numberMinValue**: `bigint` = `protoInt64.zero`

The minimum value (in cents) in case the input value type is number-absolute or number-percentage

**`Generated`**

from field: int64 number_min_value = 21;

#### Defined in

[src/goals_pb.ts:679](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L679)

___

### specifications

• **specifications**: `string` = `""`

The specifications of the item

**`Generated`**

from field: string specifications = 13;

#### Defined in

[src/goals_pb.ts:665](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L665)

___

### textAcceptableValue

• **textAcceptableValue**: `string` = `""`

The acceptable value of the item in case input_value_type is of text type

**`Generated`**

from field: string text_acceptable_value = 31;

#### Defined in

[src/goals_pb.ts:707](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L707)

___

### textValues

• **textValues**: `string`[] = `[]`

The possible values from which a user can choose in case the input type is text-dropdown

**`Generated`**

from field: repeated string text_values = 30;

#### Defined in

[src/goals_pb.ts:700](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L700)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/goals_pb.ts:637](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L637)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goals_pb.ts:716](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L716)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goals_pb.ts:714](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L714)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoalsServiceItemUpdateRequest"``

#### Defined in

[src/goals_pb.ts:715](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L715)

## Methods

### clone

▸ **clone**(): [`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md) \| `PlainMessage`<[`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md)

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

[`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md) \| `PlainMessage`<[`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md) \| `PlainMessage`<[`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goals_pb.ts:742](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L742)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md)

#### Defined in

[src/goals_pb.ts:730](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L730)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md)

#### Defined in

[src/goals_pb.ts:734](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L734)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceItemUpdateRequest`](GoalsServiceItemUpdateRequest.md)

#### Defined in

[src/goals_pb.ts:738](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L738)
