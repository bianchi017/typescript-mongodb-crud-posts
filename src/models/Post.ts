import { Schema, model } from 'mongoose';

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
        lowercase: true
    },
    content: {
        type: String,
        required: true,
        lowercase: true
    },

    category: {
            type: String,
            enum: ['Programming', 'Technology', 'Games', 'Juegos', 'Others'],
            required : true 
    },

    comment: {
        type: String,
        required: false,
        lowercase: true
    }
});

export default model('Post', PostSchema);