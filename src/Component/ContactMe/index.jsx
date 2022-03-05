import { useState } from 'react';
import styles from './Contact.module.css';

function ContactMe() {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [noHp, setNoHp] = useState('');
    const [pesan, setPesan] = useState('');
    const [error, setError] = useState([]);

    const validation = () => {
        let messageErrors = [];

        if(nama.length === 0) {
            messageErrors = [...messageErrors, 'Nama tidak boleh kosong'];
        } else if(nama.length < 4) {
            messageErrors = [...messageErrors, 'Nama terlalu pendek'];
        }

        if(email.length === 0) {
            messageErrors = [...messageErrors, 'Email tidak boleh kosong'];
        } else {
            const re = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i;
            if(!re.test(String(email).toLowerCase())) {
                messageErrors = [...messageErrors, 'Email tidak valid'];
            }
        }

        if(noHp.length === 0) {
            messageErrors = [...messageErrors, 'No HP tidak boleh kosong'];
        } else {
            const re = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
            if(!re.test(noHp)) {
                messageErrors = [...messageErrors, 'No HP tidak  valid'];
            }
        }

        if(pesan.length === 0) {
            messageErrors = [...messageErrors, 'Pesan tidak boleh kosong'];
        }

        if(messageErrors.length > 0) {
            setError(messageErrors)
        } else {
            setError([]);
        }
    }

    const showErrors = (errors) => {
        return (
            <ul style={{color: 'red', textAlign: 'left'}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
            </ul>
        )
    }

    const submitForm = (e) => {
        e.preventDefault();
        validation();
        if(!error.length && nama && email && noHp && pesan) {
            const scriptURL = 'https://script.google.com/macros/s/AKfycby7VxgI5u9P2vOYjGeCN10x11hFHYgRIuDycwjA1799bbg6EPmNeV4ilodFyLZh58Q/exec';
            const formData = e.target;
            return fetch(scriptURL, {method: "POST",body: new FormData(formData)})
                .then(res => {
                    console.log('Success!', res);
                    alert('Pesan berhasil dikirim');
                    setNama('');
                    setEmail('');
                    setNoHp('');
                    setPesan('');
                })
                .catch(err => console.log('Error!', err.message))
        }
    }

    return(
        <div className={styles.form}>
            <fieldset className={styles.fieldForm}>
                <legend className={styles.headerForm}>Contact Me</legend>
                <form method="post" onSubmit={submitForm}>
                    <table className={styles.table} cellSpacing='0'>
                        <tbody className={styles.bodyForm}>
                            <tr>
                                <td width="60px">Nama</td>
                                <td><input type="text" name="nama" placeholder="Nama Lengkap" value={nama} onChange={e => setNama(e.target.value)}/></td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td><input type="text" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/></td>
                            </tr>
                            <tr>
                                <td>No Hp</td>
                                <td><input type="text" name="noHp" placeholder="No HP" value={noHp} onChange={e => setNoHp(e.target.value)}/></td>
                            </tr>
                            <tr>
                                <td>Pesan</td>
                                <td><textarea name="pesan" value={pesan} onChange={e => setPesan(e.target.value)}/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input type="submit" value="kirim"/></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                {
                    error.length ? showErrors(error) : ''
                }
            </fieldset>
        </div>
    )
}

export default ContactMe;