[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / User

# Class: User

Describes the parameters that are part of a standard response

**`Generated`**

from message Genesis.User

## Hierarchy

- `Message`<[`User`](User.md)\>

  ↳ **`User`**

## Table of contents

### Constructors

- [constructor](User.md#constructor)

### Properties

- [address](User.md#address)
- [approvalMetadata](User.md#approvalmetadata)
- [attendanceUomId](User.md#attendanceuomid)
- [basicPayAmount](User.md#basicpayamount)
- [basicPayUomId](User.md#basicpayuomid)
- [birthday](User.md#birthday)
- [bloodGroup](User.md#bloodgroup)
- [city](User.md#city)
- [code](User.md#code)
- [country](User.md#country)
- [departmentId](User.md#departmentid)
- [email](User.md#email)
- [entityUuid](User.md#entityuuid)
- [formData](User.md#formdata)
- [joiningDate](User.md#joiningdate)
- [logs](User.md#logs)
- [metadata](User.md#metadata)
- [mfaStatus](User.md#mfastatus)
- [mobileRoleId](User.md#mobileroleid)
- [name](User.md#name)
- [payrollCurrencyId](User.md#payrollcurrencyid)
- [payrollGroupId](User.md#payrollgroupid)
- [payrollTaxGroupId](User.md#payrolltaxgroupid)
- [phone](User.md#phone)
- [pinCode](User.md#pincode)
- [roleId](User.md#roleid)
- [shiftGroupId](User.md#shiftgroupid)
- [state](User.md#state)
- [status](User.md#status)
- [username](User.md#username)
- [vaultFolderId](User.md#vaultfolderid)
- [workEmail](User.md#workemail)
- [fields](User.md#fields)
- [runtime](User.md#runtime)
- [typeName](User.md#typename)

### Methods

- [clone](User.md#clone)
- [equals](User.md#equals)
- [fromBinary](User.md#frombinary)
- [fromJson](User.md#fromjson)
- [fromJsonString](User.md#fromjsonstring)
- [getType](User.md#gettype)
- [toBinary](User.md#tobinary)
- [toJSON](User.md#tojson)
- [toJson](User.md#tojson-1)
- [toJsonString](User.md#tojsonstring)
- [equals](User.md#equals-1)
- [fromBinary](User.md#frombinary-1)
- [fromJson](User.md#fromjson-1)
- [fromJsonString](User.md#fromjsonstring-1)

## Constructors

### constructor

• **new User**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`User`](User.md)\> |

#### Overrides

Message&lt;User\&gt;.constructor

#### Defined in

[src/users_pb.ts:865](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L865)

## Properties

### address

• **address**: `string` = `""`

The address of the user

**`Generated`**

from field: string address = 32;

#### Defined in

[src/users_pb.ts:758](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L758)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Genesis.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/users_pb.ts:660](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L660)

___

### attendanceUomId

• **attendanceUomId**: `bigint` = `protoInt64.zero`

The associated unit of material of the user's attendance record

**`Generated`**

from field: int64 attendance_uom_id = 51;

#### Defined in

[src/users_pb.ts:807](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L807)

___

### basicPayAmount

• **basicPayAmount**: `bigint` = `protoInt64.zero`

The basic pay amount of the user (in cents)

**`Generated`**

from field: int64 basic_pay_amount = 56;

#### Defined in

[src/users_pb.ts:842](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L842)

___

### basicPayUomId

• **basicPayUomId**: `bigint` = `protoInt64.zero`

The associated unit of material for storing the basic pay amount

**`Generated`**

from field: int64 basic_pay_uom_id = 57;

#### Defined in

[src/users_pb.ts:849](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L849)

___

### birthday

• **birthday**: `string` = `""`

The birthday of the user

**`Generated`**

from field: string birthday = 30;

#### Defined in

[src/users_pb.ts:744](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L744)

___

### bloodGroup

• **bloodGroup**: `string` = `""`

THe Blood Group of the user

**`Generated`**

from field: string blood_group = 37;

#### Defined in

[src/users_pb.ts:793](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L793)

___

### city

• **city**: `string` = `""`

The city of residence

**`Generated`**

from field: string city = 33;

#### Defined in

[src/users_pb.ts:765](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L765)

___

### code

• **code**: `string` = `""`

The unique employee code by which the user is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/users_pb.ts:695](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L695)

___

### country

• **country**: `string` = `""`

The country of residence

**`Generated`**

from field: string country = 35;

#### Defined in

[src/users_pb.ts:779](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L779)

___

### departmentId

• **departmentId**: `bigint` = `protoInt64.zero`

The associated department

**`Generated`**

from field: int64 department_id = 52;

#### Defined in

[src/users_pb.ts:814](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L814)

___

### email

• **email**: `string` = `""`

The primary email of the user

**`Generated`**

from field: string email = 16;

#### Defined in

[src/users_pb.ts:723](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L723)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/users_pb.ts:646](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L646)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatum form_data = 70;

#### Defined in

[src/users_pb.ts:863](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L863)

___

### joiningDate

• **joiningDate**: `string` = `""`

The joining date of the user

**`Generated`**

from field: string joining_date = 31;

#### Defined in

[src/users_pb.ts:751](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L751)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this user

**`Generated`**

from field: repeated Genesis.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/users_pb.ts:674](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L674)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this user

**`Generated`**

from field: Genesis.EmployeeMetadata metadata = 2;

#### Defined in

[src/users_pb.ts:653](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L653)

___

### mfaStatus

• **mfaStatus**: `boolean` = `false`

Stores if MFA has been enabled by the user

**`Generated`**

from field: bool mfa_status = 60;

#### Defined in

[src/users_pb.ts:856](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L856)

___

### mobileRoleId

• **mobileRoleId**: `bigint` = `protoInt64.zero`

The associated mobile role ID

**`Generated`**

from field: int64 mobile_role_id = 15;

#### Defined in

[src/users_pb.ts:716](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L716)

___

### name

• **name**: `string` = `""`

The name of the user

**`Generated`**

from field: string name = 12;

#### Defined in

[src/users_pb.ts:702](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L702)

___

### payrollCurrencyId

• **payrollCurrencyId**: `bigint` = `protoInt64.zero`

The associated currency ID of the user's payroll

**`Generated`**

from field: int64 payroll_currency_id = 55;

#### Defined in

[src/users_pb.ts:835](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L835)

___

### payrollGroupId

• **payrollGroupId**: `bigint` = `protoInt64.zero`

The associated payroll group ID of the user

**`Generated`**

from field: int64 payroll_group_id = 53;

#### Defined in

[src/users_pb.ts:821](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L821)

___

### payrollTaxGroupId

• **payrollTaxGroupId**: `bigint` = `protoInt64.zero`

The associated tax group ID using which the user's payroll needs to be calculated

**`Generated`**

from field: int64 payroll_tax_group_id = 54;

#### Defined in

[src/users_pb.ts:828](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L828)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the user

**`Generated`**

from field: string phone = 18;

#### Defined in

[src/users_pb.ts:737](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L737)

___

### pinCode

• **pinCode**: `string` = `""`

THe PIN Code of residence

**`Generated`**

from field: string pin_code = 36;

#### Defined in

[src/users_pb.ts:786](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L786)

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

The associated role ID

**`Generated`**

from field: int64 role_id = 14;

#### Defined in

[src/users_pb.ts:709](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L709)

___

### shiftGroupId

• **shiftGroupId**: `bigint` = `protoInt64.zero`

The associated shift group ID

**`Generated`**

from field: int64 shift_group_id = 50;

#### Defined in

[src/users_pb.ts:800](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L800)

___

### state

• **state**: `string` = `""`

The state of residence

**`Generated`**

from field: string state = 34;

#### Defined in

[src/users_pb.ts:772](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L772)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.PREVERIFY_UNSPECIFIED`

The status of this user

**`Generated`**

from field: Genesis.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/users_pb.ts:667](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L667)

___

### username

• **username**: `string` = `""`

The username of the user

**`Generated`**

from field: string username = 10;

#### Defined in

[src/users_pb.ts:688](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L688)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/users_pb.ts:681](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L681)

___

### workEmail

• **workEmail**: `string` = `""`

The optional work email of the user

**`Generated`**

from field: string work_email = 17;

#### Defined in

[src/users_pb.ts:730](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L730)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users_pb.ts:872](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L872)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users_pb.ts:870](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L870)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.User"``

#### Defined in

[src/users_pb.ts:871](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L871)

## Methods

### clone

▸ **clone**(): [`User`](User.md)

Create a deep copy.

#### Returns

[`User`](User.md)

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
| `other` | `undefined` \| ``null`` \| [`User`](User.md) \| `PlainMessage`<[`User`](User.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`User`](User.md)

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

[`User`](User.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`User`](User.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`User`](User.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`User`](User.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`User`](User.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`User`](User.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`User`](User.md)\>

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
| `a` | `undefined` \| [`User`](User.md) \| `PlainMessage`<[`User`](User.md)\> |
| `b` | `undefined` \| [`User`](User.md) \| `PlainMessage`<[`User`](User.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users_pb.ts:919](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L919)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`User`](User.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`User`](User.md)

#### Defined in

[src/users_pb.ts:907](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L907)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`User`](User.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`User`](User.md)

#### Defined in

[src/users_pb.ts:911](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L911)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`User`](User.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`User`](User.md)

#### Defined in

[src/users_pb.ts:915](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L915)
