import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    products : [
    ],unit:0,length:0
    
} 


export const product = createSlice({
    name:'product',
    initialState,
    reducers:{
          addProduct:(state , action)=>{
            const index = state.products.findIndex((item)=> item.id === action.payload.id )
            
         
            if(index >= 0){
                // const quan = {
                //      quatity : quatity+1
                // }
                // state.unit.push(quan)
            }else{
                state.products.push({...action.payload,quan:1})
                state.unit += action.payload.price
                state.length += 1;

                
            }
          },
          removeP:(state,action)=>{
             state.unit -= action.payload.price
             state.length -= 1;
               state.products =  state.products.filter((item)=> item.id !== action.payload.id )
          },
          add:(state,action) => {
           
              state.unit += action.payload.price
              state.length += 1;
              state.products = state.products.map((item)=>{if( item.id === action.payload.id){
                return {...item , quan:item.quan+1}
              }else return item;
            } )
            
              
          },
          min:(state,action) => {
            console.log(action.payload)
            state.unit -= action.payload.price
            state.length -= 1;
            state.products = state.products.map((item) => {
                if(item.id === action.payload.id){
                    return {...item, quan:item.quan-1}
                }else return item;
            } )
          }

    }
})

export const {addProduct, removeP ,add , min} = product.actions;
export default product.reducer;