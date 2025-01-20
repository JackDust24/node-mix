import axios from 'axios';

const API_URL = process.env.NODE_MIX_API_URL || 'http://localhost:8080';

export const ContentService = {
  async getContent() {
    try {
      const response = await axios.get(`${API_URL}/api/content/get-content`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching content:', error);
      throw error;
    }
  },
};

export const FileUploadService = {
  async postFile(formData: FormData) {
    try {
      const response = await axios.post(`${API_URL}/api/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data.message;
    } catch (error) {
      console.error('Error fetching content:', error);
      throw error;
    }
  },
};
