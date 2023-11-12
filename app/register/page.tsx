import { registerApi } from '@/apis/authAPI'
import { RegisterContainer } from '@/register/RegisterContainer'

const Page = () => {
  const submitAction = async () => {
    'use server'
    await registerApi('test01@gmail.com', 'password')
  }
  return (
    <button type="submit" onClick={submitAction}>
      新規登録ss
    </button>
  )
}

export default Page
