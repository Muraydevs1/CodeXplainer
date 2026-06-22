import { useActionState } from 'react'
import { explain } from '../../actions'
import Error from '../Error'
import CodeExplanation from '../CodeExplanation'

const CodeXplainForm = () => {
  const[formState, formAction, isPending] = useActionState(explain, null)
  return (
    <div className='w-full max-w-4xl bg-white p-6 rounded-2xl shadow-lg text-gray-700 body'>
        <form action={formAction}> 
            <label className='block mb-2 font-semibold'>Language:</label>
            <select name="language" className='border rounded-lg p-2 w-full mb-4 bg-transparent'>
                 <option value="Javascript">Javascript</option>
                 <option value="Java">Java</option>
                 <option value="Python">Python</option>
                 <option value="Golang">Golang</option>
                 <option value="Rust">Rust</option>
                 <option value="Php">PhP</option>
                 <option value="Rugby">Rugby</option>
            </select>
            <label className='block mb-2 font-semibold'>Your Code:</label>
            <textarea name="code" placeholder="Paste Your Code..." className='border rounded-lg w-full p-3 font-mono text-sm bg-transparent min-h-[150px]'></textarea>
            <button type='submit' disabled={isPending} className='mt-4 px-6 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:cursor-pointer transition disabled:opacity-50'>
              {isPending? "Explaining":"Explain Code"}</button>
        </form>
        {
          isPending? (<p className='bg-gray-300 my-3 w-64 p-2 rounded-sm'>Thinking...</p>):formState?.success?(<CodeExplanation explanation={formState?.data?.explanation || formState?.data?.explaination}/>): (
            formState?.success === false && (
              <Error error={formState?.error}/>
            ))}
    </div>
  )
}

export default CodeXplainForm
