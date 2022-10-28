import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/firebaseConfig';
import { Link } from 'react-router-dom';
import DetailCompra from '../DetailCompra/DetailCompra';

const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [mail1, setMail1] = useState('');
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [fallo, setFallo] = useState(false);
    const [error, setError] = useState('');

    const { cart, totalPrice, deleteAll} = useContext(CartContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name.trim()){
            setFallo(true)
            setError("Introduce los datos faltantes")
            return
        }
        if(!lastName.trim()){
            setFallo(true)
            setError("Introduce los datos faltantes")
            return
        }
        if(!phone.trim()){
            setFallo(true)
            setError("Introduce los datos faltantes")
            return
        }
        if(!mail.trim()){
            setFallo(true)
            setError("Introduce los datos faltantes")
            return
        }
        if(!mail1.trim()){
            setFallo(true)
            setError("Introduce los datos faltantes")
            return
        }

        setLoading(true);
        setFallo(false);

        const order = {
            buyer: {name, lastName, phone, mail, mail1},
            items: cart,
            total: totalPrice(),
            date: serverTimestamp(),
        };

        const ordersCollection = collection (db, 'orders');
        addDoc(ordersCollection, order)
            .then((res) => {
                setOrderId(res.id);
                deleteAll();
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => setLoading(false));
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    };

    const handleChangePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleChangeMail = (e) => {
        setMail(e.target.value);
    }
    const handleChangeMail1 = (e) => {
        setMail1(e.target.value);
    }


    if(orderId){
        return(
            <>
            <div className='contCheckout'>
                <h3 className='titleCheckout'>Checkout</h3>
                <p className='textCheckout'>Gracias por tu compra!</p>
                <p className='textCheckout'>Tu número de seguimiento es:</p>
                <p className='textCheckout idCheckout'> {orderId}</p>
                <Link to="/" className='btnCheckout'>Aceptar</Link>
            </div>
            </>
        )
    }


    return (
        <>
        <DetailCompra/>
        <div className='contFormu'>
            <h3 className='titleForm'>Mi formulario de compra</h3>

            {
                fallo ? (
                    <span className='fallo'>{error}</span>
                ) : (
                    <span></span>
                )
            }

            <form onSubmit={handleSubmit} action="">
                <div>
                <input className="inputsForm"
                    type="text"
                    name="nombre"
                    placeholder="Nombre..."
                    onChange={handleChangeName}
                    value={name}
                />
                </div>
                <div>
                <input className="inputsForm"
                    type="text"
                    name="apellido"
                    placeholder="Apellido..."
                    onChange={handleChangeLastName}
                    value={lastName}
                />
                </div>
                <div>
                <input className="inputsForm"
                    type="number"
                    name="phone"
                    placeholder="Teléfono"
                    onChange={handleChangePhone}
                    value={phone}
                />
                </div>
                <div>
                <input className="inputsForm"
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    onChange={handleChangeMail}
                    value={mail}
                />
                <input className="inputsForm"
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    onChange={handleChangeMail1}
                    value={mail1}
                />
                </div>
                <button className='btnForm'>{loading ? "Enviando..." : "Enviar"}</button>
            </form>
        </div>
        </>
    );
};

export default Form;