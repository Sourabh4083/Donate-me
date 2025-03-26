"use client"
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation'

const PaymentPage = ({ username }) => {
    // const {data: session} = useSession()

    const [paymentform, setpaymentform] = useState({ name: "", message: "", amount: "" })
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {

            toast('🦄 Payment done, Thanks for your Donation!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,

            });
        }
        router.push(`/${username}`)
    }, [])



    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async (params) => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
        console.log(u, dbpayments);

    }
    console.log(payments);


    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Sell Me This Pen", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();

    }

    return (

        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


            <div className='relative w-full'>
                <img className='w-full h-[350]' src={currentUser.coverpic} alt="" />

                <div className='absolute -bottom-14 md:-bottom-16 right-[39%] md:right-[46%] rounded-full border-white border-2'>

                    <img className='rounded-full w-[90px] h-[90px] md:w-[120px] md:h-[120px]' src={currentUser.profilepic} alt="" />
                </div>
            </div>

            <div className='flex flex-col justify-center items-center my-16'>
                <div className='font-bold'>@{username}</div>
                <p className='text-gray-500'>Total {payments.length} Payments done</p>
                <p className='text-gray-500'>{currentUser.name} has raised ₹{payments.reduce((a, b) => a + b.amount, 0)}</p>
                <p className='text-gray-500'>Let's help {username} to get a chai</p>

                <div className="payment md:flex-row flex flex-col  gap-3 w-[80%] my-12">
                    <div className='bg-slate-900 w-full md:w-1/2  p-5 rounded-lg '>
                        <h2>Supporters</h2>

                        <ul className='my-4'>
                            {payments.length == 0 && <li>No payments yet</li>}
                            {payments.map((p, i) => {
                                return <li key={i} className='flex items-center gap-1 my-2' >
                                    <img width={25} src="/avatar.gif" alt="" />
                                    <span>
                                        {p.name} donate <span className='font-bold'>₹{p.amount}</span> with a message "{p.message}"
                                    </span>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className='bg-slate-900 w-full md:w-1/2  p-5 space-y-4 rounded-lg'>
                        <h2>Make a Payment</h2>
                        <div className='flex flex-col gap-2 '>
                            <input onChange={handleChange} value={paymentform.name} name='name' className='w-full p-2 bg-slate-800 rounded-lg' type="text" placeholder='Enter Name' />
                            <input onChange={handleChange} value={paymentform.message} name='message' className='w-full p-2 bg-slate-800 rounded-lg' type="text" placeholder='Enter Message' />
                            <input onChange={handleChange} value={paymentform.amount} name='amount' className='w-full p-2 bg-slate-800 rounded-lg' type="text" placeholder='Enter Amount' />
                            <button onClick={() => pay(paymentform.amount * 100)} type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 disabled:bg-slate-400 disabled:from-slate-200" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1}>Pay</button>
                        </div>
                        <div className='space-x-2'>
                            <button className='bg-slate-800 p-2 rounded-lg' onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className='bg-slate-800 p-2 rounded-lg' onClick={() => pay(2000)}>Pay ₹20</button>
                            <button className='bg-slate-800 p-2 rounded-lg' onClick={() => pay(3000)}>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}



export default PaymentPage
