import { useMutation } from 'react-query';
import StudentsRepository from '@repositories/StudentsRepository';
import { notification } from 'antd';

function usePostStudent() {
  const mutation = useMutation(StudentsRepository.postStudent);

  const postStudent = async (student) => {
    try {
      const response = mutation.mutateAsync(student);

      notification.success({ message: 'Estudiante agregado' });
      return response
    } catch (error) {
      notification.error({ message: 'Ocurrió un error al agregar el estudiante' });
      return null;
    }
  };

  return { postStudent, isLoading: mutation.isLoading };

}

export { usePostStudent }