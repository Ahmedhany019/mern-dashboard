
import ProductSchema from "../models/product.model.js"
/**--------------------------------
 * @desc All Products
 * @router /api/product/
 * @method get
 * @access public
---------------------------------*/
const listOfProduct =async (req,res)=>{

    try {
        const products = await ProductSchema.find()
        return res.json(products)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }

}

/**--------------------------------
 * @desc Add Products
 * @router /api/product/add
 * @method post
 * @access private (for admin)
---------------------------------*/
const addProduct =async (req,res)=>{
    
    const {name,price,stock,category} = req.body;
    if (!name || !price || !stock) {
        return res.status(400).json({ message: "All fields are required!" });
    }
    let product = new ProductSchema()
    try {
        product = await ProductSchema({name,price,stock,category})
        await product.save()
        return res.status(201).json({message:"product added successfully",product})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }

}

/**--------------------------------
 * @desc delete Products
 * @router /api/product/delete
 * @method delete
 * @access private (for admin)
---------------------------------*/
const deleteProduct =async (req,res)=>{
const {id} = req.params;
console.log(req.params.id)

if(!id) return res.json({message:'product not exist'})

    try {
        await ProductSchema.findByIdAndDelete(id)
        res.json({message:"product deleted"})
    } catch (error) {
        res.json({message:error})
    }

}


export {listOfProduct,addProduct,deleteProduct}