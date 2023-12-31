[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / GoalItem

# Class: GoalItem

Describes the parameters that constitute an item associated to a goal

**`Generated`**

from message Genesis.GoalItem

## Hierarchy

- `Message`<[`GoalItem`](GoalItem.md)\>

  ↳ **`GoalItem`**

## Table of contents

### Constructors

- [constructor](GoalItem.md#constructor)

### Properties

- [approvalMetadata](GoalItem.md#approvalmetadata)
- [entityUuid](GoalItem.md#entityuuid)
- [goalId](GoalItem.md#goalid)
- [inputValueType](GoalItem.md#inputvaluetype)
- [labelId](GoalItem.md#labelid)
- [metadata](GoalItem.md#metadata)
- [name](GoalItem.md#name)
- [needApproval](GoalItem.md#needapproval)
- [numberAcceptableValue](GoalItem.md#numberacceptablevalue)
- [numberMaxValue](GoalItem.md#numbermaxvalue)
- [numberMinValue](GoalItem.md#numberminvalue)
- [specifications](GoalItem.md#specifications)
- [textAcceptableValue](GoalItem.md#textacceptablevalue)
- [textValues](GoalItem.md#textvalues)
- [userComment](GoalItem.md#usercomment)
- [fields](GoalItem.md#fields)
- [runtime](GoalItem.md#runtime)
- [typeName](GoalItem.md#typename)

### Methods

- [clone](GoalItem.md#clone)
- [equals](GoalItem.md#equals)
- [fromBinary](GoalItem.md#frombinary)
- [fromJson](GoalItem.md#fromjson)
- [fromJsonString](GoalItem.md#fromjsonstring)
- [getType](GoalItem.md#gettype)
- [toBinary](GoalItem.md#tobinary)
- [toJSON](GoalItem.md#tojson)
- [toJson](GoalItem.md#tojson-1)
- [toJsonString](GoalItem.md#tojsonstring)
- [equals](GoalItem.md#equals-1)
- [fromBinary](GoalItem.md#frombinary-1)
- [fromJson](GoalItem.md#fromjson-1)
- [fromJsonString](GoalItem.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoalItem**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`GoalItem`](GoalItem.md)\> |

#### Overrides

Message&lt;GoalItem\&gt;.constructor

#### Defined in

[src/goals_pb.ts:859](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L859)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/goals_pb.ts:773](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L773)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/goals_pb.ts:759](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L759)

___

### goalId

• **goalId**: `bigint` = `protoInt64.zero`

Stores the goal ID

**`Generated`**

from field: int64 goal_id = 10;

#### Defined in

[src/goals_pb.ts:794](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L794)

___

### inputValueType

• **inputValueType**: [`GOAL_ITEM_INPUT_VALUE_TYPE`](../enums/GOAL_ITEM_INPUT_VALUE_TYPE.md) = `GOAL_ITEM_INPUT_VALUE_TYPE.GOAL_ITEM_INPUT_VALUE_TYPE_NUMBER_ABSOLUTE_UNSPECIFIED`

The input value type of the item

**`Generated`**

from field: Genesis.GOAL_ITEM_INPUT_VALUE_TYPE input_value_type = 20;

#### Defined in

[src/goals_pb.ts:822](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L822)

___

### labelId

• **labelId**: `bigint` = `protoInt64.zero`

Stores an optional label

**`Generated`**

from field: int64 label_id = 12;

#### Defined in

[src/goals_pb.ts:808](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L808)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this goal

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/goals_pb.ts:766](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L766)

___

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

[src/goals_pb.ts:801](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L801)

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/goals_pb.ts:780](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L780)

___

### numberAcceptableValue

• **numberAcceptableValue**: `bigint` = `protoInt64.zero`

The acceptable value of the item in case input_value_type is of number type

**`Generated`**

from field: int64 number_acceptable_value = 23;

#### Defined in

[src/goals_pb.ts:843](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L843)

___

### numberMaxValue

• **numberMaxValue**: `bigint` = `protoInt64.zero`

The maximum value (in cents) in case the input value type is number-absolute or number-percentage

**`Generated`**

from field: int64 number_max_value = 22;

#### Defined in

[src/goals_pb.ts:836](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L836)

___

### numberMinValue

• **numberMinValue**: `bigint` = `protoInt64.zero`

The minimum value (in cents) in case the input value type is number-absolute or number-percentage

**`Generated`**

from field: int64 number_min_value = 21;

#### Defined in

[src/goals_pb.ts:829](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L829)

___

### specifications

• **specifications**: `string` = `""`

The specifications of the item

**`Generated`**

from field: string specifications = 13;

#### Defined in

[src/goals_pb.ts:815](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L815)

___

### textAcceptableValue

• **textAcceptableValue**: `string` = `""`

The acceptable value of the item in case input_value_type is of text type

**`Generated`**

from field: string text_acceptable_value = 31;

#### Defined in

[src/goals_pb.ts:857](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L857)

___

### textValues

• **textValues**: `string`[] = `[]`

The possible values from which a user can choose in case the input type is text-dropdown

**`Generated`**

from field: repeated string text_values = 30;

#### Defined in

[src/goals_pb.ts:850](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L850)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/goals_pb.ts:787](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L787)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goals_pb.ts:866](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L866)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goals_pb.ts:864](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L864)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.GoalItem"``

#### Defined in

[src/goals_pb.ts:865](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L865)

## Methods

### clone

▸ **clone**(): [`GoalItem`](GoalItem.md)

Create a deep copy.

#### Returns

[`GoalItem`](GoalItem.md)

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
| `other` | `undefined` \| ``null`` \| [`GoalItem`](GoalItem.md) \| `PlainMessage`<[`GoalItem`](GoalItem.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoalItem`](GoalItem.md)

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

[`GoalItem`](GoalItem.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoalItem`](GoalItem.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalItem`](GoalItem.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoalItem`](GoalItem.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalItem`](GoalItem.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`GoalItem`](GoalItem.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`GoalItem`](GoalItem.md)\>

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
| `a` | `undefined` \| [`GoalItem`](GoalItem.md) \| `PlainMessage`<[`GoalItem`](GoalItem.md)\> |
| `b` | `undefined` \| [`GoalItem`](GoalItem.md) \| `PlainMessage`<[`GoalItem`](GoalItem.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goals_pb.ts:896](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L896)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`GoalItem`](GoalItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`GoalItem`](GoalItem.md)

#### Defined in

[src/goals_pb.ts:884](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L884)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`GoalItem`](GoalItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalItem`](GoalItem.md)

#### Defined in

[src/goals_pb.ts:888](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L888)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`GoalItem`](GoalItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`GoalItem`](GoalItem.md)

#### Defined in

[src/goals_pb.ts:892](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/goals_pb.ts#L892)
