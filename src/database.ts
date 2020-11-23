import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/posts-app', {
            useNewUrlParser: true
        });
        console.log('>>> Database connected');
    }
    catch {
        console.log('Error');
    }
}
