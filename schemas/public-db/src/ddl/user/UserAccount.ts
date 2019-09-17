import {
	Column,
	Entity,
	GeneratedValue,
	Id,
	Table
} from '@airport/air-control'

export type UserAccount_Id = number
export type UserAccount_UserName = string
export type UserAccount_FirstName = string
export type UserAccount_MiddleName = string
export type UserAccount_LastName = string
export type UserAccount_BirthDate = Date

@Entity()
@Table({name: 'USER_ACCOUNTS'})
export class UserAccount {

	@Id()
	@GeneratedValue()
	@Column({name: 'USER_ACCOUNT_ID'})
	id: UserAccount_Id

	@Column({name: 'USER_NAME', nullable: false})
	userName: UserAccount_UserName

	@Column({name: 'FIRST_NAME', nullable: false})
	firstName: UserAccount_FirstName

	@Column({name: 'MIDDLE_NAME'})
	middleName: UserAccount_MiddleName

	@Column({name: 'LAST_NAME', nullable: false})
	lastName: UserAccount_LastName

	@Column({name: 'BIRTH_DATE'})
	birthDate: UserAccount_BirthDate

	/**
	 * "prefix_last_name_id"     Bigint, -- NOT NULL,
	 * "name_after_last_name_id" Bigint, -- NOT NULL,
	 */

}
