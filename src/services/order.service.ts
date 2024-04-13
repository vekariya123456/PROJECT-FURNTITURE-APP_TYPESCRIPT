import orderModel from "../model/order.model";

export default class OrderService {
    // ADD ORDER
    addNewOrder = async (body: any) => {
        return await orderModel.create(body);
    }

    // GET ALL ORDER
    getAllOrder = async (body: any) => {
        return await orderModel.find(body);
    }

    // GET SPECIFIC ORDER
    getOrder = async (body: any) => {
        return await orderModel.findOne(body);
    }

    // GET SPECIFIC ORDER BY ID
    getOrderById = async (body: any) => {
        return await orderModel.findById(body);
    }

    // UPDATE ORDER
    updateOrder = async (id: string, body: any) => {
        return await orderModel.findByIdAndUpdate(id, {$set: body }, { new: true });
    }

    // DELETE ORDER
    deleteOrder = async (id: string) => {
        return await orderModel.findByIdAndDelete(id , {new: true} , { isDelete: true });
    }

    // //  UPDATE MANY 
    // updateMany = async (body:any) => {
    //     return await orderModel.updateMany(body , {$set: body}, {new: true});
    // }
}
