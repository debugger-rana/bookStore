import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

function CheckOutPage() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalPrice = cartItems
    .reduce((acc, item) => acc + item.newPrice, 0)
    .toFixed(2);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const [isChecked, setIsChecked] = useState(false);

      const onSubmit = async (data) => {
        console.log(data) // This will now log the form data

        const newOrder = {
            name: data.name,
            email: currentUser?.email,
            address: {
                city: data.city,
                country: data.country,
                state: data.state,
                zipcode: data.zipcode
        
            },
            phone: data.phone,
            productIds: cartItems.map(item => item?._id),
            totalPrice: totalPrice,
        }
        console.log(newOrder);
      }

      const currentUser = true; // get it from auth

  return (
    <section>
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
    <div className="container max-w-screen-lg mx-auto">
        <div>   
            <div>
            <h2 className="font-semibold text-xl text-gray-600 mb-2">Cash On Delevary</h2>
            <p className="text-gray-500 mb-2">Total Price: ${totalPrice}</p>
            <p className="text-gray-500 mb-6">Items: {cartItems.length > 0 ? cartItems.length: 0}</p>
            </div>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8">
                        <div className="text-gray-600">
                            <p className="font-medium text-lg">Personal Details</p>
                            <p>Please fill out all the fields.</p>
                        </div>

                        <div className="lg:col-span-2">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                <div className="md:col-span-5">
                                    <label htmlFor="full_name">Full Name</label>
                                    <input
                                        type="text" 
                                        name="name" 
                                        id="name" 
                                        {...register('name')} 
                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                    />
                                </div>

                                <div className="md:col-span-5">
                                    <label html="email">Email Address</label>
                                    <input
                                        type="text" 
                                        name="email" 
                                        id="email" 
                                        {...register('email')} 
                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                        disabled 
                                        defaultValue={currentUser?.email} 
                                        placeholder="email@domain.com" 
                                    />
                                </div>
                                <div className="md:col-span-5">
                                    <label html="phone">Phone Number</label>
                                    <input
                                        type="number" 
                                        name="phone" 
                                        id="phone" 
                                        {...register('phone')} 
                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                        placeholder="+123 456 7890" 
                                    />
                                </div>

                                <div className="md:col-span-3">
                                    <label htmlFor="address">Address / Street</label>
                                    <input
                                        type="text" 
                                        name="address" 
                                        id="address" 
                                        {...register('address')} 
                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                        placeholder="" 
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label htmlFor="city">City</label>
                                    <input
                                        type="text" 
                                        name="city" 
                                        id="city" 
                                        {...register('city')} 
                                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                        placeholder="" 
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label htmlFor="country">Country / region</label>
                                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                        <input 
                                            type="text" 
                                            name="country" 
                                            id="country" 
                                            {...register('country')} 
                                            placeholder="Country" 
                                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" 
                                        />
                                        {/* ... (rest of the country input with buttons) */}
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <label htmlFor="state">State / province</label>
                                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                        <input 
                                            type="text" 
                                            name="state" 
                                            id="state" 
                                            {...register('state')} 
                                            placeholder="State" 
                                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" 
                                        />
                                        {/* ... (rest of the state input with buttons) */}
                                    </div>
                                </div>

                                <div className="md:col-span-1">
                                    <label htmlFor="zipcode">Zipcode</label>
                                    <input 
                                        type="text" 
                                        name="zipcode" 
                                        id="zipcode" 
                                        {...register('zipcode')} 
                                        className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                                        placeholder="" 
                                    />
                                </div>

                                <div className="md:col-span-5 mt-3">
                                    <div className="inline-flex items-center">
                                        <input 
                                            type="checkbox" 
                                            name="billing_same" 
                                            id="billing_same" 
                                            className="form-checkbox" 
                                            checked={isChecked} 
                                            onChange={() => setIsChecked(!isChecked)} 
                                        />
                                        <label htmlFor="billing_same" className="ml-2 ">I am aggree to the 
                                            <Link className='underline underline-offset-2 text-blue-600'>
                                                Terms & Conditions</Link> and 
                                            <Link className='underline underline-offset-2 text-blue-600'>Shoping Policy.
                                            </Link></label>
                                    </div>
                                </div>

                                <div className="md:col-span-5 text-right">
                                    <div className="inline-flex items-end">
                                        <button 
                                            disabled={!isChecked}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Place an Order
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>

            {/* ... rest of the component */}

        </div>

        
    </div>
</div>
    </section>
  )
}

export default CheckOutPage