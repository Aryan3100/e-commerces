import { Minus, Plus, PlusSquare, PlusSquareIcon, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { add, removeP , min } from "../Slice/productSlice";
import toast from "react-hot-toast";



const CartPage = () => {

    const pro = useSelector((state)=>state.pro.products)
    const price = useSelector((state)=>state.pro.unit)
    const length = useSelector((state)=>state.pro.length)
    const dispatch  =  useDispatch();
   
   


const handle = (pro) => {
    dispatch(removeP(pro));
    console.log(pro)
    toast.error("Remove Cart Success");
  }

  const plus = (pro) =>{
       dispatch(add(pro))
      
  }
  const minus = (pro) => {
    dispatch(min(pro))
  }
  


    return (
            <div className="container mx-20">
                <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Cart 
                    </h1>
                
                  {pro.lenght === 0 ? <h1>aryan</h1>
                  :
                          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                          <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
                              <h2 id="cart-heading" className="sr-only">
                              </h2>
                              <ul role="list" className="divide-y divide-gray-200">
                                 {  pro.map((pro) => (
                                      <div key={pro?.id} className="">
                                          <li className="flex py-6 sm:py-6 ">
                                              <div className="flex-shrink-0">
                                                  <img
                                                      src={pro?.images}
                                                      alt={pro?.title}
                                                      className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                                                  />
                                              </div>
                                              <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                      <div>
                                                          <div className="flex justify-between">
                                                              <h3 className="text-sm">
                                                                  <a className="font-semibold text-black">
                                                                  {pro?.title}
                                                                  </a>
                                                              </h3>
                                                          </div>
                                                          <div className="mt-1 flex text-sm">
                                                              {/* <p className="text-sm text-gray-500">{product.color}</p> */}
                                                              {pro?.size ? (
                                                                  <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                                                                      {pro.size}
                                                                  </p>
                                                              ) : null}
                                                          </div>
                                                          <div className="mt-1 flex items-end">
                                                              {/* <p className="text-xs font-medium text-gray-500 line-through">
                                                                  {product.originalPrice}
                                                              </p> */}
                                                              <p className="text-sm font-medium text-gray-900">
                                                                  &nbsp;&nbsp;{pro?.price}
                                                              </p>
                                                              {/* <p className="text-sm font-medium text-green-500">{product.discount}</p> */}
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <div className="mb-2 flex">
                                              <div className="min-w-24 flex">
                                                  <button onClick={()=>plus(pro)} type="button" className="h-7 w-7 border rounded border-black">
                                                      <Plus strokeWidth='1.5px'/>
                                                  </button>
                                                  <input
                                                      type="text"
                                                      className="mx-1 h-7 w-9 rounded-md border text-center"
                                                      value={pro?.quan}
                                                  />
                                                  <button onClick={()=>minus(pro)} type="button" className="flex h-7 w-7 border rounded border-black items-center justify-center">
                                                      <Minus strokeWidth='1.5px'/>
                                                  </button>
                                              </div>
                                              <div className="ml-6 flex text-sm">
                                                  <button onClick={()=>handle(pro)} type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
                                                      <Trash size={12} className="text-red-500" />
  
                                                      <span className="text-xs font-medium text-red-500">Remove</span>
                                                  </button>
                                              </div>
                                          </div>
                                      </div>
                                  ))}
                                  
                                  
                              </ul>
                          </section>
                          {/* Order summary */}
                          <section
                              aria-labelledby="summary-heading"
                              className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
                          >
                              <h2
                                  id="summary-heading"
                                  className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
                              >
                              </h2>
                              <div>
                                  <dl className=" space-y-1 px-2 py-4">
                                      <div className="flex items-center justify-between">
                                          <dt className="text-sm text-gray-800">Price ({length})</dt>
                                          <dd className="text-sm font-medium text-gray-900">${price.toFixed(2)}</dd>
                                      </div>
                                      {/* <div className="flex items-center justify-between pt-4">
                                          <dt className="flex items-center text-sm text-gray-800">
                                              <span>Discount</span>
                                          </dt>
                                          <dd className="text-sm font-medium text-green-700">- ₹ 3,431</dd>
                                      </div> */}
                                      <div className="flex items-center justify-between py-4">
                                          <dt className="flex text-sm text-gray-800">
                                              <span>Delivery Charges</span>
                                          </dt>
                                          <dd className="text-sm font-medium text-green-700">Free</dd>
                                      </div>
                                      <div className="flex items-center justify-between border-y border-dashed py-4 ">
                                          <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                                          <dd className="text-base font-medium text-gray-900">${price.toFixed(2)}</dd>
                                      </div>
                                  </dl>
                                  <div className="px-2 pb-4 font-medium text-green-700">
                                  <div className="flex gap-4 mb-6">
                                      <button
                                          className="w-full px-4 py-3 text-center text-gray-100 bg-[#264653] border border-transparent dark:border-gray-700 hover:border-[#264653] hover:text-[#14252c] hover:bg-[#4a869e] rounded-xl"
                                      >
                                        Buy Now
                                      </button>
                                  </div>
                                  </div>
                              </div>
                          </section>
                      </form>
}
                </div>
            </div>
       
    );
}

export default CartPage;