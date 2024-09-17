import React from 'react';
import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md';
import { IoAccessibility } from "react-icons/io5";

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { useForm } from "react-hook-form";
import { Container, Title, Column, SubtitleCadastro, EsqueciText, CriarText, Row, Wrapper, TitleCadastro } from './styles';

const Cadastro = () => {
  const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        
    };
  return (
  <>
   <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleCadastro>Faça seu cadastro</TitleCadastro>
                <SubtitleCadastro>Faça seu login e make the change._</SubtitleCadastro>
                <form >

                    <Input placeholder="Nome Completo" leftIcon={<IoAccessibility />} name="nome"  control={control} />
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    <Input type="password" placeholder="Passaword" leftIcon={<MdLock />}  name="senha" control={control} />
                  
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <CriarText>
                      Ao clicar....
                    </CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
  </>
  )
}

export { Cadastro }
