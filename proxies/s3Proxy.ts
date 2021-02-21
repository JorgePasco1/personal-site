import axios from 'axios';
import { BASE_S3_BUCKET_URL } from '../utils/constants';

export const getImageLink = async (projectName: string): Promise<string> => {
  const img_url = `${BASE_S3_BUCKET_URL}/img/projects/${projectName}.webp`;
  await axios.get(img_url);
  return img_url;
};
