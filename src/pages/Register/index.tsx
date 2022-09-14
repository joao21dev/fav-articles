import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section className='vh-100'>
      <div className='container py-5 h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-12 col-md-8 col-lg-6 col-xl-5'>
            <div className='card shadow-2-strong' style={{ borderRadius: '1rem' }}>
              <div className='card-body p-5 text-center'>
                <h3 className='mb-5'>Acessar Fav-Articles</h3>

                <div className='form-outline mb-4'>
                  <label className='form-label' htmlFor='name'>
                    Nome
                  </label>
                  <input type='text' id='name' className='form-control form-control-lg' />
                </div>
                <div className='form-outline mb-4'>
                  <label className='form-label' htmlFor='email'>
                    Email
                  </label>
                  <input type='email' id='email' className='form-control form-control-lg' />
                </div>

                <div className='form-outline mb-4'>
                  <label className='form-label' htmlFor='password'>
                    Senha
                  </label>
                  <input type='password' id='password' className='form-control form-control-lg' />
                </div>

                <button className='btn btn-primary btn-lg btn-block mb-4' type='submit'>
                  Criar Conta
                </button>
                <Link to='/'>
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
