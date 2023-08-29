[@unaxiom/genesis-sdk](../README.md) / [Exports](../modules.md) / UsersServiceUpdateRequest

# Class: UsersServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Genesis.UsersServiceUpdateRequest

## Hierarchy

- `Message`<[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)\>

  ↳ **`UsersServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](UsersServiceUpdateRequest.md#constructor)

### Properties

- [address](UsersServiceUpdateRequest.md#address)
- [attendanceUomId](UsersServiceUpdateRequest.md#attendanceuomid)
- [basicPayAmount](UsersServiceUpdateRequest.md#basicpayamount)
- [basicPayUomId](UsersServiceUpdateRequest.md#basicpayuomid)
- [birthday](UsersServiceUpdateRequest.md#birthday)
- [bloodGroup](UsersServiceUpdateRequest.md#bloodgroup)
- [city](UsersServiceUpdateRequest.md#city)
- [code](UsersServiceUpdateRequest.md#code)
- [country](UsersServiceUpdateRequest.md#country)
- [departmentId](UsersServiceUpdateRequest.md#departmentid)
- [email](UsersServiceUpdateRequest.md#email)
- [formData](UsersServiceUpdateRequest.md#formdata)
- [id](UsersServiceUpdateRequest.md#id)
- [joiningDate](UsersServiceUpdateRequest.md#joiningdate)
- [mobileRoleId](UsersServiceUpdateRequest.md#mobileroleid)
- [name](UsersServiceUpdateRequest.md#name)
- [notifyUsers](UsersServiceUpdateRequest.md#notifyusers)
- [payrollCurrencyId](UsersServiceUpdateRequest.md#payrollcurrencyid)
- [payrollGroupId](UsersServiceUpdateRequest.md#payrollgroupid)
- [payrollTaxGroupId](UsersServiceUpdateRequest.md#payrolltaxgroupid)
- [phone](UsersServiceUpdateRequest.md#phone)
- [pinCode](UsersServiceUpdateRequest.md#pincode)
- [roleId](UsersServiceUpdateRequest.md#roleid)
- [shiftGroupId](UsersServiceUpdateRequest.md#shiftgroupid)
- [state](UsersServiceUpdateRequest.md#state)
- [userComment](UsersServiceUpdateRequest.md#usercomment)
- [vaultFolderId](UsersServiceUpdateRequest.md#vaultfolderid)
- [workEmail](UsersServiceUpdateRequest.md#workemail)
- [fields](UsersServiceUpdateRequest.md#fields)
- [runtime](UsersServiceUpdateRequest.md#runtime)
- [typeName](UsersServiceUpdateRequest.md#typename)

### Methods

- [clone](UsersServiceUpdateRequest.md#clone)
- [equals](UsersServiceUpdateRequest.md#equals)
- [fromBinary](UsersServiceUpdateRequest.md#frombinary)
- [fromJson](UsersServiceUpdateRequest.md#fromjson)
- [fromJsonString](UsersServiceUpdateRequest.md#fromjsonstring)
- [getType](UsersServiceUpdateRequest.md#gettype)
- [toBinary](UsersServiceUpdateRequest.md#tobinary)
- [toJSON](UsersServiceUpdateRequest.md#tojson)
- [toJson](UsersServiceUpdateRequest.md#tojson-1)
- [toJsonString](UsersServiceUpdateRequest.md#tojsonstring)
- [equals](UsersServiceUpdateRequest.md#equals-1)
- [fromBinary](UsersServiceUpdateRequest.md#frombinary-1)
- [fromJson](UsersServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](UsersServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServiceUpdateRequest**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`<[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)\> |

#### Overrides

Message&lt;UsersServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/users_pb.ts:579](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L579)

## Properties

### address

• **address**: `string` = `""`

The address of the user

**`Generated`**

from field: string address = 32;

#### Defined in

[src/users_pb.ts:479](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L479)

___

### attendanceUomId

• **attendanceUomId**: `bigint` = `protoInt64.zero`

The associated unit of material of the user's attendance record

**`Generated`**

from field: int64 attendance_uom_id = 51;

#### Defined in

[src/users_pb.ts:528](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L528)

___

### basicPayAmount

• **basicPayAmount**: `bigint` = `protoInt64.zero`

The basic pay amount of the user (in cents)

**`Generated`**

from field: int64 basic_pay_amount = 56;

#### Defined in

[src/users_pb.ts:563](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L563)

___

### basicPayUomId

• **basicPayUomId**: `bigint` = `protoInt64.zero`

The associated unit of material for storing the basic pay amount

**`Generated`**

from field: int64 basic_pay_uom_id = 57;

#### Defined in

[src/users_pb.ts:570](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L570)

___

### birthday

• **birthday**: `string` = `""`

The birthday of the user

**`Generated`**

from field: string birthday = 30;

#### Defined in

[src/users_pb.ts:465](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L465)

___

### bloodGroup

• **bloodGroup**: `string` = `""`

THe Blood Group of the user

**`Generated`**

from field: string blood_group = 37;

#### Defined in

[src/users_pb.ts:514](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L514)

___

### city

• **city**: `string` = `""`

The city of residence

**`Generated`**

from field: string city = 33;

#### Defined in

[src/users_pb.ts:486](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L486)

___

### code

• **code**: `string` = `""`

The unique employee code by which the user is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/users_pb.ts:416](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L416)

___

### country

• **country**: `string` = `""`

The country of residence

**`Generated`**

from field: string country = 35;

#### Defined in

[src/users_pb.ts:500](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L500)

___

### departmentId

• **departmentId**: `bigint` = `protoInt64.zero`

The associated department (can be 0 to allow seamless transition)

**`Generated`**

from field: int64 department_id = 52;

#### Defined in

[src/users_pb.ts:535](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L535)

___

### email

• **email**: `string` = `""`

The primary email of the user

**`Generated`**

from field: string email = 16;

#### Defined in

[src/users_pb.ts:444](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L444)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Genesis.FormFieldDatumCreateRequest form_data = 70;

#### Defined in

[src/users_pb.ts:577](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L577)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: int64 id = 2;

#### Defined in

[src/users_pb.ts:395](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L395)

___

### joiningDate

• **joiningDate**: `string` = `""`

The joining date of the user

**`Generated`**

from field: string joining_date = 31;

#### Defined in

[src/users_pb.ts:472](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L472)

___

### mobileRoleId

• **mobileRoleId**: `bigint` = `protoInt64.zero`

The associated mobile role ID

**`Generated`**

from field: int64 mobile_role_id = 15;

#### Defined in

[src/users_pb.ts:437](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L437)

___

### name

• **name**: `string` = `""`

The name of the user

**`Generated`**

from field: string name = 12;

#### Defined in

[src/users_pb.ts:423](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L423)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/users_pb.ts:402](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L402)

___

### payrollCurrencyId

• **payrollCurrencyId**: `bigint` = `protoInt64.zero`

The associated currency ID of the user's payroll

**`Generated`**

from field: int64 payroll_currency_id = 55;

#### Defined in

[src/users_pb.ts:556](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L556)

___

### payrollGroupId

• **payrollGroupId**: `bigint` = `protoInt64.zero`

The associated payroll group ID of the user

**`Generated`**

from field: int64 payroll_group_id = 53;

#### Defined in

[src/users_pb.ts:542](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L542)

___

### payrollTaxGroupId

• **payrollTaxGroupId**: `bigint` = `protoInt64.zero`

The associated tax group ID using which the user's payroll needs to be calculated

**`Generated`**

from field: int64 payroll_tax_group_id = 54;

#### Defined in

[src/users_pb.ts:549](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L549)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the user

**`Generated`**

from field: string phone = 18;

#### Defined in

[src/users_pb.ts:458](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L458)

___

### pinCode

• **pinCode**: `string` = `""`

THe PIN Code of residence

**`Generated`**

from field: string pin_code = 36;

#### Defined in

[src/users_pb.ts:507](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L507)

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

The associated role ID

**`Generated`**

from field: int64 role_id = 14;

#### Defined in

[src/users_pb.ts:430](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L430)

___

### shiftGroupId

• **shiftGroupId**: `bigint` = `protoInt64.zero`

The associated shift group ID

**`Generated`**

from field: int64 shift_group_id = 50;

#### Defined in

[src/users_pb.ts:521](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L521)

___

### state

• **state**: `string` = `""`

The state of residence

**`Generated`**

from field: string state = 34;

#### Defined in

[src/users_pb.ts:493](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L493)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/users_pb.ts:388](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L388)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: int64 vault_folder_id = 9;

#### Defined in

[src/users_pb.ts:409](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L409)

___

### workEmail

• **workEmail**: `string` = `""`

The optional work email of the user

**`Generated`**

from field: string work_email = 17;

#### Defined in

[src/users_pb.ts:451](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L451)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/users_pb.ts:586](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L586)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/users_pb.ts:584](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L584)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Genesis.UsersServiceUpdateRequest"``

#### Defined in

[src/users_pb.ts:585](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L585)

## Methods

### clone

▸ **clone**(): [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md) \| `PlainMessage`<[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

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

[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md) \| `PlainMessage`<[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md) \| `PlainMessage`<[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/users_pb.ts:629](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L629)

___

### fromBinary

▸ `Static` **fromBinary**(`bytes`, `options?`): [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Defined in

[src/users_pb.ts:617](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L617)

___

### fromJson

▸ `Static` **fromJson**(`jsonValue`, `options?`): [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Defined in

[src/users_pb.ts:621](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L621)

___

### fromJsonString

▸ `Static` **fromJsonString**(`jsonString`, `options?`): [`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`UsersServiceUpdateRequest`](UsersServiceUpdateRequest.md)

#### Defined in

[src/users_pb.ts:625](https://github.com/Unaxiom/genesis-ts-sdk/blob/a265138/src/users_pb.ts#L625)
