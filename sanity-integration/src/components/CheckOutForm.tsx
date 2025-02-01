export default function CheckOutForm (){
    return (
        <div className=" mt-32 bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4"> Customer Information</h2>
            <div className=" mb-4">
                <label className=" block text-sm font-medium text-gray-700">Name</label>
                <input 
                type ="text"
                name = "name"
                value=""//{customerinfo.name}
                // onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
            </div>
            <div className=" mb-4">
                <label className=" block text-sm font-medium text-gray-700">Email</label>
                <input 
                type ="email"
                name = "email"
                value=""//{customerinfo.name}
                // onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
            </div>
            <div className=" mb-4">
                <label className=" block text-sm font-medium text-gray-700">Email</label>
                <input 
                type ="phone"
                name = "phone"
                value=""//{customerinfo.name}
                // onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
            </div>
            <button //onClick={handleCheckout} 
            className="w-full py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition"
            >Submit Order</button>
            


        </div>
    )
}