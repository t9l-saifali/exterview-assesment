const { VM } = require('vm2');
const fetch = require('node-fetch');
const jwt = require('jsonwebtoken');
const API_KEY = 'bacd3095-fcc5-4667-b61d-c4bf378e43d8'; 
const SECRET = 'd3449aa9fad2639792f2d05319218ec39d1b0d89bdfcb76b68759f6d5a5bcec1'; 


const resolvers = {
  Query: {
    hello: async () => {
      return { hello: "Hello from Serverless GraphQL!" };
    },
  },
  
  Mutation: {
    executeCode: async (_, { code }) => {
      const outputLogs = [];

      const sandbox = {
        console: {
          log: (...args) => {
            outputLogs.push(args.join(' ')); // Capture console.log output
          },
        },
        setTimeout, 
      };

      const vm = new VM({
        timeout: 1000, 
        sandbox: sandbox,   
      });

      try {
        vm.run(code);
        const output = outputLogs.length > 0 ? outputLogs.join('\n') : 'No output or undefined result';

        return { output, error: null };
      } catch (err) {
        return { output: null, error: err.message };
      }
    },

    generateVideoChatToken: async () => {
      const payload = {
        apikey: API_KEY,
        permissions: ["allow_join", "allow_mod"], 
      };

      const options = { 
        expiresIn: '120m', 
        algorithm: 'HS256' 
      };

      const token = jwt.sign(payload, SECRET, options);
      console.log(token,"tooooooooooo")
      return {
        token,
        error: null
      };
    },

    createMeeting: async (_, { token }) => {
      const url = 'https://api.videosdk.live/v2/rooms';
      const roomOptions = {
        method: 'POST',
        headers: {
          'Authorization': token,  
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      };

      try {
        const response = await fetch(url, roomOptions);
        const data = await response.json();
        if (data && data.roomId) {
          return {
            meetingId: data.roomId,
            error: null,
          };
        } else {
          return {
            meetingId: null,
            error: 'Failed to create meeting',
          };
        }
      } catch (error) {
        console.error('Error creating meeting:', error);
        return {
          meetingId: null,
          error: error.message,
        };
      }
    },

    validateRoom: async (_, { roomId, token }) => {
      const url = `https://api.videosdk.live/v2/rooms/validate/${roomId}`;

      const options = {
        method: 'GET',
        headers: { 
          Authorization: token, 
          'Content-Type': 'application/json' 
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.roomId === roomId ;
      } catch (error) {
        console.error('Error validating room:', error);
        return false ;
      }
    },
  },
};

module.exports = { resolvers };
