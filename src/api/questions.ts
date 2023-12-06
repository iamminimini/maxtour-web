import { axiosPublic } from '.';
import { questionContentsType } from './questionsType';

// const fetchData = async ({ pageParam = 0 }) => {
//   return await fetch(`.../?page=${pageParam}`).then((res) => res.json()); //Should be of type Page
// };

// 문의 등록 - 인증 필요 없음
const fetchPublicAddQuestions = async (
  questionsContentsData: questionContentsType
) => {
  const { data } = await axiosPublic.post(
    '/maxtour-question',
    questionsContentsData
  );
  return data;
};

export { fetchPublicAddQuestions };
