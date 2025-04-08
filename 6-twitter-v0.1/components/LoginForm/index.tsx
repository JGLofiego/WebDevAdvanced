import { zodResolver } from '@hookform/resolvers/zod'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import * as S from './styles'

const LoginSchema = z.object({
  login: z
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .email({ message: 'Email Inválido' }),
  password: z
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .min(8, { message: 'Mínimo 8 caracteres' })
})

type LoginData = z.infer<typeof LoginSchema>

function LoginForm() {
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema)
  })

  return (
    <S.Div>
      <S.IntroForm>
        <S.Intro>Entre ou crie uma conta para fofocar</S.Intro>
        <S.Form
          onSubmit={handleSubmit(data =>
            fetch('http://localhost:3000/api/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                login: data.login,
                password: data.password
              })
            })
              .then(res => {
                if (res.status === 200) {
                  router.push('/home')
                }
                return res.json()
              })
              .then((res: { message: string; token: string }) => {
                if (res.message === 'Email e/ou senha incorretos') {
                  setError(res.message)
                } else {
                  setCookie('token', res.token)
                }
              })
          )}>
          <S.DivInputError>
            <S.Input {...register('login')} placeholder="Email" type="email" />
            {errors.login?.message && (
              <S.ErrorMsg>{errors.login.message}</S.ErrorMsg>
            )}
            {error === '' ? '' : <S.ErrorMsg>{error}</S.ErrorMsg>}
          </S.DivInputError>
          <S.DivInputError>
            <S.DivPassword>
              <S.Input
                {...register('password')}
                placeholder="Senha"
                type={show ? 'text' : 'password'}
              />
              <S.ShowPassword type="button" onClick={() => setShow(!show)}>
                <picture>
                  <img alt="Mostrar" src="/assets/showPassword.svg" />
                </picture>
              </S.ShowPassword>
            </S.DivPassword>
            {errors.password?.message && (
              <S.ErrorMsg>{errors.password.message}</S.ErrorMsg>
            )}
          </S.DivInputError>
          <S.LoginBtn>Entrar</S.LoginBtn>
          <S.HR />
          <S.NewAccountBtn
            type="button"
            onClick={() => router.push('/register')}>
            Criar nova conta
          </S.NewAccountBtn>
        </S.Form>
      </S.IntroForm>
    </S.Div>
  )
}

export default LoginForm
