import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from './Contacts_Styles';
import emailjs from '@emailjs/browser';


export const Contacts: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);


    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) {
            return;
        }

        emailjs
            .sendForm('service_e3cyg0v', 'template_bs3iy0k', form.current, {
                publicKey: 'mntFu8zVAbnhy_cvY',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

        e.target.reset()
    };

    return (
        <S.Contacts id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={"name"} name={'user_name'}/>
                    <S.Field required placeholder={"email"} name={'user_email'}/>
                    <S.Field required placeholder={"subject"} name={'subject'}/>
                    <S.Field required placeholder={"message"} as={"textarea"} name={'message'}/>
                    <Button type={'submit'}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};

