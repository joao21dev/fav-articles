import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase-config'

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      setLoading(true)
      setTimeout(async () => {
        await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        navigate('/')
        setLoading(false)
      }, 1000)
    } catch (error: any) {
      console.log(error.message)
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
                      setLoginEmail(event.target.value)
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
                      setLoginPassword(event.target.value)
                    }}
                    type='password'
                    id='password'
                    className='form-control form-control-lg'
                  />
                </div>

                <button
                  onClick={handleLogin}
                  className='btn btn-primary btn-lg btn-block mb-4'
                  type='submit'
                >
                  {!loading && 'Entrar'}
                  {loading && (
                    <span className='indicator-progress' style={{ display: 'block' }}>
                      Carregando...{' '}
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  )}
                </button>

                <Link to='/register'>
                  <div className='link-primary'>Ainda não tem uma conta? Criar</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
