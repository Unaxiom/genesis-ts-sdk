[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / Associate

# Class: Associate

Describes the data structure of each associate on the platform

**`Generated`**

from message Genesis.Associate

## Hierarchy

- `Message`<[`Associate`](Associate.md)\>

  ↳ **`Associate`**

## Table of contents

### Constructors

- [constructor](Associate.md#constructor)

### Properties

- [anniversary](Associate.md#anniversary)
- [birthday](Associate.md#birthday)
- [department](Associate.md#department)
- [description](Associate.md#description)
- [entityUuid](Associate.md#entityuuid)
- [firstName](Associate.md#firstname)
- [jobTitle](Associate.md#jobtitle)
- [lastName](Associate.md#lastname)
- [metadata](Associate.md#metadata)
- [middleName](Associate.md#middlename)
- [orgName](Associate.md#orgname)
- [orgRefFrom](Associate.md#orgreffrom)
- [orgRefId](Associate.md#orgrefid)
- [personalEmail](Associate.md#personalemail)
- [personalPhone](Associate.md#personalphone)
- [vaultFolderId](Associate.md#vaultfolderid)
- [workEmail](Associate.md#workemail)
- [workPhone](Associate.md#workphone)
- [fields](Associate.md#fields)
- [runtime](Associate.md#runtime)
- [typeName](Associate.md#typename)

### Methods

- [clone](Associate.md#clone)
- [equals](Associate.md#equals)
- [fromBinary](Associate.md#frombinary)
- [fromJson](Associate.md#fromjson)
- [fromJsonString](Associate.md#fromjsonstring)
- [getType](Associate.md#gettype)
- [toBinary](Associate.md#tobinary)
- [toJSON](Associate.md#tojson)
- [toJson](Associate.md#tojson-1)
- [toJsonString](Associate.md#tojsonstring)
- [equals](Associate.md#equals-1)
- [fromBinary](Associate.md#frombinary-1)
- [fromJson](Associate.md#fromjson-1)
- [fromJsonString](Associate.md#fromjsonstring-1)

## Constructors

### constructor

• **new Associate**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`Associate`](Associate.md)\> |

#### Overrides

Message&lt;Associate\&gt;.constructor

#### Defined in

[src/associates_pb.ts:253](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L253)

## Properties

### anniversary

• **anniversary**: `string` = `""`

The associate's anniversary

**`Generated`**

from field: string anniversary = 23;

#### Defined in

[src/associates_pb.ts:244](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L244)

___

### birthday

• **birthday**: `string` = `""`

The associate's birthday

**`Generated`**

from field: string birthday = 22;

#### Defined in

[src/associates_pb.ts:237](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L237)

___

### department

• **department**: `string` = `""`

The department that the associates works in

**`Generated`**

from field: string department = 17;

#### Defined in

[src/associates_pb.ts:202](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L202)

___

### description

• **description**: `string` = `""`

A short description of the associate

**`Generated`**

from field: string description = 24;

#### Defined in

[src/associates_pb.ts:251](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L251)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/associates_pb.ts:132](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L132)

___

### firstName

• **firstName**: `string` = `""`

The first name of the associate

**`Generated`**

from field: string first_name = 10;

#### Defined in

[src/associates_pb.ts:153](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L153)

___

### jobTitle

• **jobTitle**: `string` = `""`

The job title of the associate

**`Generated`**

from field: string job_title = 16;

#### Defined in

[src/associates_pb.ts:195](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L195)

___

### lastName

• **lastName**: `string` = `""`

The last name of the associate

**`Generated`**

from field: string last_name = 12;

#### Defined in

[src/associates_pb.ts:167](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L167)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this resource

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/associates_pb.ts:139](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L139)

___

### middleName

• **middleName**: `string` = `""`

The middle name of the associate

**`Generated`**

from field: string middle_name = 11;

#### Defined in

[src/associates_pb.ts:160](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L160)

___

### orgName

• **orgName**: `string` = `""`

The name of the organization that the associate works in. Will be autofilled if the associate is associated with either a client or a vendor

**`Generated`**

from field: string org_name = 15;

#### Defined in

[src/associates_pb.ts:188](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L188)

___

### orgRefFrom

• **orgRefFrom**: [`ASSOCIATE_ORG_REF_FROM`](../enums/ASSOCIATE_ORG_REF_FROM.md) = `ASSOCIATE_ORG_REF_FROM.ASSOCIATE_ORG_REF_FROM_UNSPECIFIED`

The association with a vendor or a client

**`Generated`**

from field: Genesis.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;

#### Defined in

[src/associates_pb.ts:174](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L174)

___

### orgRefId

• **orgRefId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor or client

**`Generated`**

from field: int64 org_ref_id = 14;

#### Defined in

[src/associates_pb.ts:181](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L181)

___

### personalEmail

• **personalEmail**: `string` = `""`

The personal email address of the associate

**`Generated`**

from field: string personal_email = 21;

#### Defined in

[src/associates_pb.ts:230](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L230)

___

### personalPhone

• **personalPhone**: `string` = `""`

The personal phone number of the associate

**`Generated`**

from field: string personal_phone = 20;

#### Defined in

[src/associates_pb.ts:223](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L223)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/associates_pb.ts:146](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L146)

___

### workEmail

• **workEmail**: `string` = `""`

The work email address of the associate

**`Generated`**

from field: string work_email = 19;

#### Defined in

[src/associates_pb.ts:216](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L216)

___

### workPhone

• **workPhone**: `string` = `""`

The work phone number of the associate

**`Generated`**

from field: string work_phone = 18;

#### Defined in

[src/associates_pb.ts:209](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L209)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/associates_pb.ts:260](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L260)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/associates_pb.ts:258](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L258)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.Associate"``

#### Defined in

[src/associates_pb.ts:259](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L259)

## Methods

### clone

▸ **clone**(): [`Associate`](Associate.md)

Create a deep copy.

#### Returns

[`Associate`](Associate.md)

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
| `other` | `undefined` \| ``null`` \| [`Associate`](Associate.md) \| `PlainMessage`<[`Associate`](Associate.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Associate`](Associate.md)

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

[`Associate`](Associate.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Associate`](Associate.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Associate`](Associate.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Associate`](Associate.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Associate`](Associate.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`Associate`](Associate.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`Associate`](Associate.md)\>

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
| `a` | `undefined` \| [`Associate`](Associate.md) \| `PlainMessage`<[`Associate`](Associate.md)\> |
| `b` | `undefined` \| [`Associate`](Associate.md) \| `PlainMessage`<[`Associate`](Associate.md)\> |

#### Returns

`boolean`

#### Defined in

[src/associates_pb.ts:293](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L293)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`Associate`](Associate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Associate`](Associate.md)

#### Defined in

[src/associates_pb.ts:281](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L281)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`Associate`](Associate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Associate`](Associate.md)

#### Defined in

[src/associates_pb.ts:285](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L285)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`Associate`](Associate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Associate`](Associate.md)

#### Defined in

[src/associates_pb.ts:289](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/associates_pb.ts#L289)
