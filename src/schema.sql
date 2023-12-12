# ------------------------------------------------------
# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
# ------------------------------------------------------

type UserSetting {
  userId: Int!
  recieveEmails: Boolean!
  recieveNotifications: Boolean!
}

type User {
  id: Int!
  username: String!
  displayName: String
  settings: UserSetting
  getUserSettings: UserSetting!
}

type Query {
  getUserById(id: Int!): User
  getUsers: [User!]!
}

type Mutation {
  createUser(createUserData: createUserData!): User!
  createUserSettings(createUserSettingsData: CreateUserSettingInput!): UserSetting!
}

input createUserData {
  username: String!
  displayName: String!
}

input CreateUserSettingInput {
  userId: Int!
  recieveEmails: Boolean = false
  recieveNotifications: Boolean = false
}