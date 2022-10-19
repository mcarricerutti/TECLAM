import { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, lastName });
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    };

    const handleChangeMail = (e) => {
        setMail(e.target.value);
    }

    return (
        <div className='contFormu'>
            <form onSubmit={handleSubmit} action="">
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre..."
                    onChange={handleChangeName}
                    value={name}
                />
                <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido..."
                    onChange={handleChangeLastName}
                    value={lastName}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    onChange={handleChangeMail}
                    value={mail}
                />
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Form;