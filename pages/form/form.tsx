import React, { useState } from 'react';
import Layout from '../../components/layout/layout';
import styles from './form.module.css';
import { useTranslation } from 'react-i18next';

export default function Form() {
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [cpf, setCpf] = useState('');
    const [image, setImage] = useState('');
    const [output, setOutput] = useState('');
    const { t } = useTranslation();

    function createUser(data: any) {
        setOutput(JSON.stringify(data, null, 2));
    }

    function validateBirthday(birthday: string): boolean {
        const validate = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/;
        return validate.test(birthday);
    }

    function validateCpf(cpf: string): boolean {
        const validate = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        return validate.test(cpf);
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0].name);
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!name || !birthday || !cpf) {
            alert('Empty fields!');
            return;
        }

        else if (!validateBirthday(birthday)) {
            alert('Invalid Birthday!');
            return;
        }

        else if (!validateCpf(cpf)) {
            alert('Invalid CPF!');
            return;
        }

        const userData = {
            name: name,
            birthday: birthday,
            cpf: cpf,
            image: image,
        };

        createUser(userData);

        alert(`Form submitted!`);
        setName('');
        setBirthday('');
        setCpf('');
        setImage('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.formOutputContainer}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h1 className={styles.title}>{t('form.title_form')}</h1>

                    {/* NAME */}
                    <div className={styles.fieldContainer}>
                        <label htmlFor="name" className={styles.label}>{t('form.name')}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            placeholder={t('placeholder.full_name')}
                            onChange={(e) => setName(e.target.value)}
                            className={styles.input}
                        />
                    </div>

                    {/* BIRTHDAY */}
                    <div className={styles.fieldContainer}>
                        <label htmlFor="birthday" className={styles.label}>{t('form.birthday')}</label>
                        <input
                            type="text"
                            id="birthday"
                            name="birthday"
                            value={birthday}
                            placeholder="DD/MM/YYYY"
                            onChange={(e) => setBirthday(e.target.value)}
                            className={styles.input}
                        />
                    </div>

                    {/* CPF */}
                    <div className={styles.fieldContainer}>
                        <label htmlFor="cpf" className={styles.label}>{t('form.cpf')}</label>
                        <input
                            type="text"
                            id="cpf" name="cpf"
                            value={cpf}
                            placeholder="000.000.000-00"
                            onChange={(e) => setCpf(e.target.value)}
                            className={styles.input}
                        />
                    </div>

                    {/* IMAGE UPLOAD */}
                    <div className={styles.fieldContainer}>
                        <label htmlFor="image" className={styles.label}>{t('form.avatar')}</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>

                    {/* BUTTON */}
                    <button className={styles.button} type="submit">{t('form.submit')}</button>
                </form>

                {/* HIDE STYLE WHILE EMPTY */}
                {output && (
                    <pre className={styles.output}>{output}</pre>
                )}
            </div>
        </div >
    );
}