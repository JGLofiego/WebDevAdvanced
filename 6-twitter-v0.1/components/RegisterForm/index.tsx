import { zodResolver } from '@hookform/resolvers/zod'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Input, ShowPassword } from '../LoginForm/styles'
import * as S from './styles'

const txt = 'Campo obrigatório'

const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: txt })
      .min(3, { message: 'Nome tem que possuir pelo menos 3 caracteres' })
      .max(30, { message: 'Nome não pode exceder 30 caracteres' }),
    email: z
      .string()
      .min(1, { message: txt })
      .email({ message: 'Email inválido' }),
    userGithub: z.string().min(1, { message: txt }),
    password: z
      .string()
      .min(1, { message: txt })
      .min(8, { message: 'Senha tem que conter mais de 8 caracteres' }),
    confirmPassword: z.string().min(1, { message: txt })
  })
  .strict({ message: 'Campo obrigatório' })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Senha e confirmar senha devem ser iguais',
    path: ['confirmPassword']
  })

type RegisterData = z.infer<typeof RegisterSchema>

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterData>({ resolver: zodResolver(RegisterSchema) })

  return (
    <S.Div>
      <S.IntroAndForm>
        <S.Intro>Crie sua conta</S.Intro>
        <S.Form
          onSubmit={handleSubmit(data =>
            fetch('http://localhost:3000/api/users', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                id: nanoid(),
                bio: 'bio',
                name: data.name,
                password: data.password,
                github: data.userGithub,
                email: data.email
              })
            })
              .then(res => res.json())
              .then(() => router.push('/'))
          )}>
          <S.InputAndError>
            <Input placeholder="Nome" type="text" {...register('name')} />
            {errors.name?.message && <S.Error>{errors.name.message}</S.Error>}
          </S.InputAndError>
          <S.InputAndError>
            <Input placeholder="Email" type="email" {...register('email')} />
            {errors.email?.message && (
              <S.Error>{errors.email?.message}</S.Error>
            )}
          </S.InputAndError>
          <S.InputAndError>
            <Input
              placeholder="Usuário do github"
              type="text"
              {...register('userGithub')}
            />
            {errors.userGithub && (
              <S.Error>{errors.userGithub.message}</S.Error>
            )}
          </S.InputAndError>
          <S.InputAndError>
            <S.PasswordDiv>
              <Input
                placeholder="Senha"
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
              />
              <ShowPassword
                type="button"
                onClick={() => setShowPassword(!showPassword)}>
                <picture>
                  <img alt="Mostrar" src="/assets/showPassword.svg" />
                </picture>
              </ShowPassword>
            </S.PasswordDiv>
            {errors.password?.message && (
              <S.Error>{errors.password?.message}</S.Error>
            )}
          </S.InputAndError>
          <S.InputAndError>
            <S.PasswordDiv>
              <Input
                placeholder="Confirmar senha"
                type={showConfirm ? 'text' : 'password'}
                {...register('confirmPassword')}
              />
              <ShowPassword
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}>
                <picture>
                  <img alt="Mostrar" src="/assets/showPassword.svg" />
                </picture>
              </ShowPassword>
            </S.PasswordDiv>
            {errors.confirmPassword && (
              <S.Error>{errors.confirmPassword?.message}</S.Error>
            )}
          </S.InputAndError>
          <S.CreateBtn>Criar conta</S.CreateBtn>
        </S.Form>
      </S.IntroAndForm>
    </S.Div>
  )
}

export default RegisterForm
