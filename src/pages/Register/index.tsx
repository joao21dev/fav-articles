import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase-config'
import { useAuth } from '../../context/AuthContext'

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setError('')
    try {
      setLoading(true)
      setTimeout(async () => {
        await register(registerEmail, registerPassword)
        navigate('/')
        setLoading(false)
      }, 1000)
    } catch (e: any) {
      setError(e.message)
      console.log(e.message)
    }
  }
  return (
    <section className='vh-100'>
      <div className='container py-5 h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
            <div className='card shadow-2-strong' style={{ borderRadius: '1rem' }}>
              <div className='card-body p-5 text-center'>
                <h3 className='mb-5'>Acessar Fav-Articles</h3>
                <div className='form-outline mb-4'>
                  <label className='form-label' htmlFor='email'>
                    Email
                  </label>
                  <input
                    onChange={(event) => {
                      setRegisterEmail(event.target.value)
                    }}
                    type='email'
                    id='email'
                    className='form-control form-control-lg'
                  />
                </div>

                <div className='form-outline mb-4'>
                  <label className='form-label' htmlFor='password'>
                    Senha
                  </label>
                  <input
                    onChange={(event) => {
                      setRegisterPassword(event.target.value)
                    }}
                    type='password'
                    id='password'
                    className='form-control form-control-lg'
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className='btn btn-primary btn-lg btn-block mb-4'
                  type='submit'
                >
                  {!loading && 'Criar Conta'}
                  {loading && (
                    <span className='indicator-progress' style={{ display: 'block' }}>
                      Carregando...{' '}
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  )}
                </button>
                <Link to='/login'>
                  <div className='link-primary'>Já tem uma conta? Entre</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
