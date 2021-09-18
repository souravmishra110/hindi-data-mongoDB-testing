import mongoose from 'mongoose'
import User from './models.js';
import UserModel from './models.js'


export const pushData = async (req, res) => {
    const users = new UserModel(req.body);

    try{
        await users.save();
        res.send(users);
    }
    catch(error){
        res.status(500).send(error);
    }

}

export const getData = async (req, res) => {
    const users = await UserModel.find({});

    try{
        res.send(users);
    }
    catch(error){
        res.status(500).send(error);
    }
}

export const getDataByID = async (req, res) => {
    await UserModel.findById(req.params.id)
    .then(result => {
        res.send(result)
    })
    .catch(error => {
        res.send(error)
    })
}

export const updateDataByID = async (req, res) => {
    try{
        await UserModel.findByIdAndUpdate(req.params.id, req.body)
        res.send("Updated Successfully")
    }
    catch(error){
        res.status(500).send(error)
    }
}

export const deleteDataByID = async (req, res) => {
    try{
        const user = await UserModel.findByIdAndDelete(req.params.id);

        if(!user)   res.status(404).send("No item found");

        res.ststus(200).send("Removed Successfully");
    }
    catch(error) {
        res.status(500).send(error)
    }
}