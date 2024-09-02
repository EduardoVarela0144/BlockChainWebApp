import { useQuery } from 'react-query';
import StudentsRepository from '@repositories/StudentsRepository';

function useGetStudents(){
    return useQuery(["useGetStudents"], () => StudentsRepository.getStudents());
}

export { useGetStudents };