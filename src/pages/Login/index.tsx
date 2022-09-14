import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section className='vh-100'>
      <div className='container py-5 h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
            <div className='card shadow-2-strong' style={{ borderRadius: '1rem' }}>
              <div className='card-body p-5 text-center'>
                <h3 className='mb-5'>Acessar Fav-Articles</h3>

                <div className='form-outline mb-4'>
                  <label className='form-label' htmlFor='typeEmailX-2'>
                    Email
                  </label>
                  <input type='email' id='typeEmailX-2' className='form-control form-control-lg' />
                </div>

                <div className='form-outline mb-4'>
                  <label className='form-label' htmlFor='typePasswordX-2'>
                    Senha
                  </label>
                  <input
                    type='password'
                    id='typePasswordX-2'
                    className='form-control form-control-lg'
                  />
                </div>

                <button className='btn btn-primary btn-lg btn-block mb-4' type='submit'>
                  Entrar
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
