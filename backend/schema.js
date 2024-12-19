const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type Query {
    hello: String
  }

  type Mutation {
    executeCode(code: String!): ExecutionResult
    generateVideoChatToken: VideoChatToken
    createMeeting(token: String!): CreateMeetingResponse
    validateRoom(roomId: String!, token: String!): Boolean  }

  type ExecutionResult {
    output: String
    error: String
  }

   type VideoChatToken {
    token: String
    error: String
  }

  type CreateMeetingResponse {
    meetingId: String
    error: String
  }
`;

module.exports = { typeDefs };
