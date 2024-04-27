import {useState} from 'react'

const OnChange = () => {

    const [name, setName] = useState('Guest')
    const [amount, setAmount] = useState(0);
    const [comment, setComment] = useState('')
    const [payment, setPayment] = useState('')
    const [shipping, setShipping] = useState('')


    const nameChange = () => {
        setName(event.target.value)
    }

    const amountChange = () => {
        setAmount(event.target.value)
    }
    const commentChange = () => {
        setComment(event.target.value)
    }
    const handelPayment =(e) => {
        setPayment(e.target.value)
    }
    const handleShipping= (e) =>{
        setShipping(e.target.value)
    }
   

  return (
    <>
        <div>
            <input value={name} type="text" onChange={nameChange} />
            <p>Name: {name}</p>

            <input type="number" value={amount} onChange={amountChange} />
            <p>Quantity: {amount}</p>

            <textarea value={comment} cols="30" rows="10" onChange={commentChange}></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handelPayment}>
                 <option value="">Select an option</option>
                 <option value="Visa">Visa</option>
                 <option value="Mastercard">Mastercard</option>
                 <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>


            <label htmlFor="">
                <input type="radio" name=""value="pickup" checked={shipping === "pickup"} onChange={handleShipping}/>
                pick up</label>
            <label htmlFor="">
            <input type="radio" name=""value="Delivery" checked={shipping === "Delivery"} onChange={handleShipping}/>
                Delivery</label>

                <p>Shipping : {shipping}</p>
        </div>
    </>
  )
}

export default OnChange