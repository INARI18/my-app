import React, { useState } from 'react';
import Header from '../../components/header/header';
import styles from './form.module.css';
import Footer from '../../components/footer/footer'

export default function Form() {
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [cpf, setCpf] = useState('');
    const [image, setImage] = useState('');
    const [output, setOutput] = useState('');

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
        <main className={styles.container}>
            <Header />
            <div className={styles.formOutputContainer}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h1 className={styles.title}>FORM</h1>

                    {/* NAME */}
                    <div className={styles.fieldContainer}>
                        <label htmlFor="name" className={styles.label}>Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            placeholder="Full Name here"
                            onChange={(e) => setName(e.target.value)}
                            className={styles.input}
                        />
                    </div>

                    {/* BIRTHDAY */}
                    <div className={styles.fieldContainer}>
                        <label htmlFor="birthday" className={styles.label}>Birthday:</label>
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
                        <label htmlFor="cpf" className={styles.label}>CPF:</label>
                        <input
                            type="text"
                            id="cpf" name="cpf"
                            value={cpf}
                            placeholder="XXX.XXX.XXX-XX"
                            onChange={(e) => setCpf(e.target.value)}
                            className={styles.input}
                        />
                    </div>

                    {/* IMAGE UPLOAD */}
                    <div className={styles.fieldContainer}>
                        <label htmlFor="image" className={styles.label}>Image:</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>

                    {/* BUTTON */}
                    <button className={styles.button} type="submit">Submit</button>
                </form>

                {/* HIDE STYLE WHILE EMPTY */}
                {output && (
                    <pre className={styles.output}>{output}</pre>
                )}
            </div>
            <Footer />
        </main>
    );
}