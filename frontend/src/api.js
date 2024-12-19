import { useMutation, gql } from '@apollo/client';

// GraphQL mutations
const GENERATE_VIDEO_CHAT_TOKEN = gql`
 mutation GenerateVideoChatToken {
  generateVideoChatToken {
    token
    error
  }
}

`;

const CREATE_MEETING = gql`
  mutation CreateMeeting($token: String!) {
    createMeeting(token: $token) {
      meetingId
      error
    }
  }
`;

const VALIDATE_ROOM = gql`
  mutation ValidateRoom($roomId: String!, $token: String!) {
    validateRoom(roomId: $roomId, token: $token)
  }
`;

// Custom hook to handle all mutations
export const useVideoChatMutations = () => {
  const [getToken, { data: tokenData, error: tokenError, loading: tokenLoading }] = useMutation(GENERATE_VIDEO_CHAT_TOKEN);
  const [createMeeting, { data: meetingData, error: meetingError, loading: meetingLoading }] = useMutation(CREATE_MEETING);
  const [validateMeeting, { data: validateData, error: validateError, loading: validateLoading }] = useMutation(VALIDATE_ROOM);

  // Function to generate token
  const handleGenerateToken = async () => {
    try {
      const response = await getToken(); // No variables needed
      return response?.data?.generateVideoChatToken?.token || 'Fallback Token'; // Provide a fallback token if necessary
    } catch (error) {
      console.error("Error generating token:", tokenError || error);
      return null;
    }
  };

  // Function to create meeting
  const handleCreateMeeting = async (token) => {
    try {
      const response = await createMeeting({ variables: token }); // Correct way to pass token
      return response?.data?.createMeeting?.meetingId || null; // Return meetingId or null if error
    } catch (error) {
      console.error("Error creating meeting:", meetingError || error);
      return null;
    }
  };

  // Function to validate room
  const handleValidateRoom = async (params) => {
    try {
      const response = await validateMeeting({ variables: params });
      return response?.data?.validateRoom || false; // Return validation result or false if error
    } catch (error) {
      console.error("Error validating room:", validateError || error);
      return false;
    }
  };

  return {
    getToken: handleGenerateToken,
    createMeeting: handleCreateMeeting,
    validateMeeting: handleValidateRoom,
    loading: tokenLoading || meetingLoading || validateLoading,
    errors: {
      tokenError,
      meetingError,
      validateError,
    },
    tokenData,
    meetingData,
    validateData,
  };
};
