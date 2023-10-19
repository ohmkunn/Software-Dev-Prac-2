import Form from '@/components/Form'
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import getUserProfile from '@/libs/getUserProfile';
import React from 'react'

export default async function booking() {
  const session = await getServerSession(authOptions)
  if(!session || !session.user.token) return null
  const profile = await getUserProfile(session.user.token)
  var createdAt = new Date(profile.data.createdAt) ;
  return (
    <main>
  <div className='bg-slate-100 m-5 p-5'>
    <div className='text-2xl font-bold'>User Profile</div>
    <table className='table-auto border-separate border-spacing-3'>
      <tbody>
        <tr>
          <td className='font-semibold'>Name</td><td>{profile.data.name}</td>
        </tr>
        <tr>
          <td className='font-semibold'>Email</td><td>{profile.data.email}</td>
        </tr>
        <tr>
          <td className='font-semibold'>Tel</td><td>{profile.data.tel}</td>
        </tr>
        <tr>
          <td className='font-semibold'>Member Since</td><td>{createdAt.toString()}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <Form />
</main>


  )
}
