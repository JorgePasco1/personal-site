import axios from 'axios';
import { baseS3BucketUrl } from '../utils/constants';

export const getImageLink = async (
  projectName: string
): Promise<string | null> => {
  try {
    const img_url = `${baseS3BucketUrl}/img/projects/${projectName}.png`;
    await axios.get(img_url);
    return img_url;
  } catch (error) {
    return null;
  }
};
