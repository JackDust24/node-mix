import axios from 'axios';

const API_URL = process.env.NODE_MIX_API_URL || 'http://localhost:8080';

export const ContentService = {
  async getContent() {
    try {
      const response = await axios.get(`${API_URL}/streams/get-content`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching content:', error);
      throw error;
    }
  },
};
